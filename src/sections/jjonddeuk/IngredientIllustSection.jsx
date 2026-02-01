import { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { SectionContainer } from '../../components/container/SectionContainer';
import { PageContainer } from '../../components/container/PageContainer';
import { IngredientIllust } from './components/IngredientIllust';

/** 5종 재료 데이터 */
const INGREDIENTS = [
  {
    type: 'marshmallow',
    label: '마시멜로우',
    description: '쫀득함 담당',
  },
  {
    type: 'kadaif',
    label: '카다이프',
    description: '바삭함 담당',
  },
  {
    type: 'pistachio',
    label: '피스타치오',
    description: '고소함 담당',
  },
  {
    type: 'chocolate',
    label: '화이트 초콜릿',
    description: '달콤함 담당',
  },
  {
    type: 'butter',
    label: '버터',
    description: '풍미 담당',
  },
];

/**
 * IngredientIllustSection 컴포넌트
 *
 * 두쫀쿠 핵심 재료 5종을 Zdog 일러스트로 보여주는 섹션.
 * 스크롤 진행도에 따라 일러스트가 Y축 회전합니다.
 * Hero와 Recipe 사이에 배치됩니다.
 *
 * Props: 없음 (자체 데이터 사용)
 *
 * Example usage:
 * <IngredientIllustSection />
 */
function IngredientIllustSection() {
  const sectionRef = useRef(null);
  const [rotateY, setRotateY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  useMotionValueEvent(rotation, 'change', (v) => {
    setRotateY(v);
  });

  return (
    <SectionContainer>
      <PageContainer maxWidth="md">
        <Box ref={sectionRef}>
          {/* 섹션 헤더 */}
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
            <Typography
              variant="overline"
              sx={{
                color: 'custom.caramel',
                display: 'block',
                mb: 1,
              }}
            >
              재료 탐구생활
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              두쫀쿠를 만드는 다섯 가지 재료
            </Typography>
          </Box>

          {/* 재료 그리드 */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 3, md: 4 },
            }}
          >
            {INGREDIENTS.map((item) => (
              <Box
                key={item.type}
                sx={{
                  width: { xs: 'calc(50% - 24px)', md: 'auto' },
                  flex: { md: '0 1 auto' },
                }}
              >
                <IngredientIllust
                  type={item.type}
                  label={item.label}
                  description={item.description}
                  rotateY={rotateY}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </PageContainer>
    </SectionContainer>
  );
}

export { IngredientIllustSection };
