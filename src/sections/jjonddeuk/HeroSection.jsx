import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { SectionContainer } from '../../components/container/SectionContainer';
import { PageContainer } from '../../components/container/PageContainer';
import { CharacterComment } from './components';

/**
 * HeroSection 컴포넌트
 *
 * 쫀득연구소 랜딩페이지의 히어로 섹션입니다.
 * eyebrow → headline → subhead → body → CTA → 쫀득이 코멘트 순으로 표시합니다.
 *
 * Props:
 * @param {object} data - landingData.hero 객체 [Required]
 *   @param {string} data.eyebrow - 상단 라벨
 *   @param {string} data.headline - 메인 헤드라인
 *   @param {string} data.subhead - 서브 헤드라인
 *   @param {string} data.body - 본문 텍스트
 *   @param {string} data.cta - CTA 버튼 텍스트
 *   @param {object} data.character - 캐릭터 정보 { comment }
 * @param {function} onCtaClick - CTA 버튼 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <HeroSection data={landingData.hero} onCtaClick={handleScrollToRecipe} />
 */
function HeroSection({ data, onCtaClick, sx }) {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    const recipeSection = document.getElementById('recipe-section');
    if (recipeSection) {
      recipeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionContainer
      sx={{
        backgroundColor: 'background.default',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
    >
      <PageContainer maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 2.5,
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: 'custom.caramel', fontWeight: 500 }}
          >
            {data.eyebrow}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
            }}
          >
            {data.headline}
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: 'text.secondary', fontWeight: 500 }}
          >
            {data.subhead}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              whiteSpace: 'pre-line',
              maxWidth: 360,
              lineHeight: 1.8,
            }}
          >
            {data.body}
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={handleCtaClick}
            sx={{
              mt: 1,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              backgroundColor: 'primary.main',
              color: 'secondary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            {data.cta}
          </Button>

          <Box sx={{ mt: 2 }}>
            <CharacterComment comment={data.character.comment} />
          </Box>
        </Box>
      </PageContainer>
    </SectionContainer>
  );
}

export { HeroSection };
