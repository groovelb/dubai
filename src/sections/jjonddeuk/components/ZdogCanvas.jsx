import { useRef, useEffect } from 'react';
import Zdog from 'zdog';

/**
 * ZdogCanvas 컴포넌트
 *
 * vanilla Zdog을 React 19에서 안전하게 사용하기 위한 canvas 래퍼.
 * canvas DOM + Zdog Illustration 인스턴스를 useRef로 관리하고,
 * useEffect에서 씬을 빌드한 뒤 requestAnimationFrame 루프를 실행합니다.
 *
 * Props:
 * @param {function} onBuildScene - Zdog Illustration 인스턴스를 받아 씬을 구성하는 콜백 [Required]
 * @param {number} width - 캔버스 너비 [Optional, 기본값: 120]
 * @param {number} height - 캔버스 너비 [Optional, 기본값: 120]
 * @param {number} zoom - Zdog zoom 레벨 [Optional, 기본값: 2]
 * @param {boolean} isSpinning - 자동 Y축 회전 여부 [Optional, 기본값: true]
 * @param {boolean} isDragRotate - 드래그 회전 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <ZdogCanvas onBuildScene={(illo) => new Zdog.Box({ addTo: illo })} />
 */
function ZdogCanvas({
  onBuildScene,
  width = 120,
  height = 120,
  zoom = 2,
  isSpinning = true,
  isDragRotate = false,
}) {
  const canvasRef = useRef(null);
  const illoRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const illo = new Zdog.Illustration({
      element: canvasRef.current,
      zoom,
      dragRotate: isDragRotate,
    });

    illoRef.current = illo;

    if (onBuildScene) {
      onBuildScene(illo);
    }

    const animate = () => {
      if (isSpinning) {
        illo.rotate.y += 0.01;
      }
      illo.updateRenderGraph();
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [onBuildScene, zoom, isSpinning, isDragRotate]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ display: 'block' }}
    />
  );
}

export { ZdogCanvas };
