import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TipBox } from './TipBox';

/**
 * StepCard 컴포넌트
 *
 * 레시피의 개별 단계를 카드 형태로 표시합니다.
 *
 * Props:
 * @param {number} order - 단계 번호 [Required]
 * @param {string} title - 단계 제목 [Required]
 * @param {string} description - 단계 설명 [Required]
 * @param {string|null} tip - 팁 텍스트 [Optional]
 * @param {string|null} warning - 경고 텍스트 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <StepCard order={1} title="카다이프 굽기" description="..." tip="에어프라이어도 가능" />
 */
function StepCard({ order, title, description, tip, warning, sx }) {
  return (
    <Box
      sx={{
        backgroundColor: 'custom.butterCream',
        borderRadius: 3,
        p: { xs: 2.5, md: 3.5 },
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        ...sx,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            backgroundColor: 'primary.main',
            color: 'secondary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '0.9375rem',
            flexShrink: 0,
          }}
        >
          {order}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.8 }}>
        {description}
      </Typography>

      {tip && <TipBox content={tip} variant="tip" />}
      {warning && <TipBox content={warning} variant="warning" />}
    </Box>
  );
}

export { StepCard };
