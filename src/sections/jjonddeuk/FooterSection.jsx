import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SectionContainer } from '../../components/container/SectionContainer';
import { PageContainer } from '../../components/container/PageContainer';

/**
 * FooterSection 컴포넌트
 *
 * 쫀득연구소 랜딩페이지의 푸터 섹션입니다.
 *
 * Props:
 * @param {object} data - landingData.footer 객체 [Required]
 *   @param {string} data.tagline - 태그라인
 *   @param {string} data.copyright - 저작권 표시
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <FooterSection data={landingData.footer} />
 */
function FooterSection({ data, sx }) {
  return (
    <SectionContainer
      component="footer"
      sx={{
        backgroundColor: 'secondary.main',
        py: { xs: 4, md: 5 },
        ...sx,
      }}
    >
      <PageContainer>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              mb: 1,
            }}
          >
            {data.tagline}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            {data.copyright}
          </Typography>
        </Box>
      </PageContainer>
    </SectionContainer>
  );
}

export { FooterSection };
