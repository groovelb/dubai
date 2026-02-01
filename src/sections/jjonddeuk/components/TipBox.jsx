import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
import WarningAmberRounded from '@mui/icons-material/WarningAmberRounded';

/**
 * TipBox 컴포넌트
 *
 * 레시피 단계 내 팁 또는 경고를 표시하는 박스입니다.
 *
 * Props:
 * @param {string} content - 텍스트 내용 [Required]
 * @param {string} variant - 타입 ('tip' | 'warning') [Optional, 기본값: 'tip']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TipBox content="에어프라이어 사용 시 160°C에서 8~10분" />
 * <TipBox content="덜 구우면 눅눅해집니다" variant="warning" />
 */
function TipBox({ content, variant = 'tip', sx }) {
  const isTip = variant === 'tip';
  const accentColor = isTip ? 'primary.main' : 'custom.caramel';
  const bgColor = isTip ? 'rgba(168, 213, 162, 0.1)' : 'rgba(212, 165, 116, 0.1)';
  const Icon = isTip ? LightbulbOutlined : WarningAmberRounded;
  const label = isTip ? 'TIP' : '주의';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
        borderLeft: '3px solid',
        borderColor: accentColor,
        backgroundColor: bgColor,
        borderRadius: '0 8px 8px 0',
        px: 2,
        py: 1.5,
        ...sx,
      }}
    >
      <Icon sx={{ fontSize: 18, color: accentColor, mt: 0.25, flexShrink: 0 }} />
      <Box>
        <Typography
          variant="caption"
          sx={{ fontWeight: 700, color: accentColor, display: 'block', mb: 0.25 }}
        >
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
}

export { TipBox };
