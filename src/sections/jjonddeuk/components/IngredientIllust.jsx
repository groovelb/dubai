import { useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ZdogCanvas } from './ZdogCanvas';
import { ingredientBuilders } from './ingredientBuilders';

/**
 * IngredientIllust 컴포넌트
 *
 * 단일 재료 일러스트 카드.
 * 원형 배경 위에 Zdog 캔버스로 3D 일러스트를 렌더링하고,
 * 아래에 재료 이름과 설명을 표시합니다.
 *
 * Props:
 * @param {string} type - 재료 타입 키 (marshmallow|kadaif|pistachio|chocolate|butter) [Required]
 * @param {string} label - 재료 이름 [Required]
 * @param {string} description - 재료 한 줄 설명 [Optional, 기본값: '']
 * @param {number} rotateY - 외부에서 제어하는 Y축 회전값 (라디안) [Optional]
 *
 * Example usage:
 * <IngredientIllust type="marshmallow" label="마시멜로우" rotateY={0.5} />
 */
function IngredientIllust({ type, label, description = '', rotateY }) {
  const builder = ingredientBuilders[type];

  const handleBuildScene = useCallback(
    (illo) => {
      if (builder) {
        builder(illo);
      }
    },
    [builder],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
    >
      {/* 원형 배경 + Zdog 캔버스 */}
      <Box
        sx={{
          width: { xs: 100, sm: 120 },
          height: { xs: 100, sm: 120 },
          borderRadius: '50%',
          backgroundColor: 'custom.butterCream',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ZdogCanvas
          onBuildScene={handleBuildScene}
          width={120}
          height={120}
          zoom={2}
          rotateY={rotateY}
        />
      </Box>

      {/* 재료 이름 */}
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 600,
          color: 'text.primary',
          textAlign: 'center',
          mt: 0.5,
        }}
      >
        {label}
      </Typography>

      {/* 재료 설명 */}
      {description && (
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}

export { IngredientIllust };
