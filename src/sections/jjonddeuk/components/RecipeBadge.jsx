import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarRounded from '@mui/icons-material/StarRounded';
import StarOutlineRounded from '@mui/icons-material/StarOutlineRounded';
import AccessTimeRounded from '@mui/icons-material/AccessTimeRounded';
import CookieOutlined from '@mui/icons-material/CookieOutlined';

/**
 * RecipeBadge 컴포넌트
 *
 * 레시피 메타 정보(난이도, 소요시간, 결과물)를 아이콘과 함께 표시합니다.
 *
 * Props:
 * @param {string} type - 배지 타입 ('difficulty' | 'time' | 'yield') [Required]
 * @param {number} value - 표시할 값 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <RecipeBadge type="difficulty" value={2} />
 * <RecipeBadge type="time" value={60} />
 * <RecipeBadge type="yield" value={10} />
 */
function RecipeBadge({ type, value, sx }) {
  const config = {
    difficulty: {
      label: '난이도',
      renderValue: () => (
        <Box sx={{ display: 'flex', gap: 0.25 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            star <= value
              ? <StarRounded key={star} sx={{ fontSize: 18, color: 'custom.caramel' }} />
              : <StarOutlineRounded key={star} sx={{ fontSize: 18, color: 'custom.caramel', opacity: 0.3 }} />
          ))}
        </Box>
      ),
      icon: null,
    },
    time: {
      label: '소요시간',
      renderValue: () => (
        <Typography variant="body1" sx={{ fontWeight: 600, color: 'secondary.main' }}>
          {value}분
        </Typography>
      ),
      icon: <AccessTimeRounded sx={{ fontSize: 24, color: 'custom.caramel' }} />,
    },
    yield: {
      label: '결과물',
      renderValue: () => (
        <Typography variant="body1" sx={{ fontWeight: 600, color: 'secondary.main' }}>
          {value}개
        </Typography>
      ),
      icon: <CookieOutlined sx={{ fontSize: 24, color: 'custom.caramel' }} />,
    },
  };

  const { label, renderValue, icon } = config[type] || config.time;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.5,
        py: 1.5,
        px: 2,
        ...sx,
      }}
    >
      {icon}
      <Typography
        variant="caption"
        sx={{ color: 'text.secondary', fontWeight: 500 }}
      >
        {label}
      </Typography>
      {renderValue()}
    </Box>
  );
}

export { RecipeBadge };
