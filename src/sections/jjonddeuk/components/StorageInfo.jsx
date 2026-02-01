import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StorageMethod } from './StorageMethod';

/**
 * StorageInfo 컴포넌트
 *
 * 보관 방법 목록과 권장 사항을 표시합니다.
 *
 * Props:
 * @param {object} storage - recipeData.storage 객체 [Required]
 *   @param {Array} storage.methods - 보관 방법 배열
 *   @param {string} storage.recommendation - 권장 사항
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <StorageInfo storage={recipeData.storage} />
 */
function StorageInfo({ storage, sx }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, ...sx }}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
        }}
      >
        {storage.methods.map((method) => (
          <StorageMethod
            key={method.type}
            type={method.type}
            duration={method.duration}
            note={method.note}
          />
        ))}
      </Box>
      {storage.recommendation && (
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontStyle: 'italic',
          }}
        >
          {storage.recommendation}
        </Typography>
      )}
    </Box>
  );
}

export { StorageInfo };
