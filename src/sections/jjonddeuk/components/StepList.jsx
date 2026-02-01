import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { StepCard } from './StepCard';

/**
 * StepList 컴포넌트
 *
 * 레시피 단계 카드 목록입니다.
 * 스크롤 진입 시 각 카드가 페이드 인됩니다.
 *
 * Props:
 * @param {Array} steps - recipeData.steps 배열 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <StepList steps={recipeData.steps} />
 */
function StepList({ steps, sx }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, ...sx }}>
      {steps.map((step) => (
        <FadeInWrapper key={step.id}>
          <StepCard
            order={step.order}
            title={step.title}
            description={step.description}
            tip={step.tip}
            warning={step.warning}
          />
        </FadeInWrapper>
      ))}
    </Box>
  );
}

/**
 * FadeInWrapper
 *
 * Intersection Observer를 사용해 스크롤 진입 시 페이드 인 효과를 적용합니다.
 */
function FadeInWrapper({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      {children}
    </Box>
  );
}

export { StepList };
