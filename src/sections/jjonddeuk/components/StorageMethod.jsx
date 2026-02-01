import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KitchenOutlined from '@mui/icons-material/KitchenOutlined';
import AcUnitRounded from '@mui/icons-material/AcUnitRounded';
import WbSunnyOutlined from '@mui/icons-material/WbSunnyOutlined';

/**
 * StorageMethod 컴포넌트
 *
 * 보관 방법 한 가지를 표시합니다.
 *
 * Props:
 * @param {string} type - 보관 방법 ("냉장" | "냉동" | "실온") [Required]
 * @param {string} duration - 보관 기간 [Required]
 * @param {string} note - 추가 메모 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <StorageMethod type="냉장" duration="2~3일" note="쫀득함 유지" />
 */
function StorageMethod({ type, duration, note, sx }) {
  const iconMap = {
    '냉장': <KitchenOutlined sx={{ fontSize: 28, color: 'primary.main' }} />,
    '냉동': <AcUnitRounded sx={{ fontSize: 28, color: 'primary.main' }} />,
    '실온': <WbSunnyOutlined sx={{ fontSize: 28, color: 'custom.caramel' }} />,
  };

  const isNotRecommended = duration === '비추천';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        p: 2.5,
        borderRadius: 3,
        backgroundColor: isNotRecommended ? 'rgba(93, 64, 55, 0.04)' : 'custom.butterCream',
        opacity: isNotRecommended ? 0.6 : 1,
        flex: 1,
        minWidth: 140,
        textAlign: 'center',
        ...sx,
      }}
    >
      {iconMap[type] || iconMap['실온']}
      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'secondary.main' }}>
        {type}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          color: isNotRecommended ? 'text.secondary' : 'secondary.main',
        }}
      >
        {duration}
      </Typography>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {note}
      </Typography>
    </Box>
  );
}

export { StorageMethod };
