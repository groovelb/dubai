import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * CharacterComment 컴포넌트
 *
 * 쫀득이 캐릭터의 말풍선 코멘트를 표시합니다.
 *
 * Props:
 * @param {string} comment - 코멘트 텍스트 [Required]
 * @param {string} variant - 스타일 변형 ('bubble' | 'inline') [Optional, 기본값: 'bubble']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CharacterComment comment="처음이어도 괜찮아요" />
 * <CharacterComment comment="오븐 없어도 돼요" variant="inline" />
 */
function CharacterComment({ comment, variant = 'bubble', sx }) {
  if (variant === 'inline') {
    return (
      <Typography
        variant="body2"
        sx={{
          fontStyle: 'italic',
          color: 'custom.caramel',
          ...sx,
        }}
      >
        {comment}
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        position: 'relative',
        backgroundColor: 'custom.butterCream',
        borderRadius: 3,
        px: 2.5,
        py: 1.5,
        maxWidth: 'fit-content',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: -8,
          left: 24,
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: (theme) => `8px solid ${theme.palette.custom.butterCream}`,
        },
        ...sx,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: 'secondary.main',
          fontWeight: 500,
        }}
      >
        &ldquo;{comment}&rdquo;
      </Typography>
    </Box>
  );
}

export { CharacterComment };
