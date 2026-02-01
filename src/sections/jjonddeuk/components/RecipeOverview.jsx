import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { RecipeBadge } from './RecipeBadge';

/**
 * RecipeOverview 컴포넌트
 *
 * 레시피 개요(난이도, 소요시간, 결과물)를 배지 3개로 표시합니다.
 *
 * Props:
 * @param {object} overview - recipeData.overview 객체 [Required]
 *   @param {number} overview.difficulty - 난이도 (1-5)
 *   @param {number} overview.time - 소요시간 (분)
 *   @param {number} overview.yield - 결과물 (개수)
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <RecipeOverview overview={recipeData.overview} />
 */
function RecipeOverview({ overview, sx }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <RecipeBadge type="difficulty" value={overview.difficulty} sx={{ flex: 1 }} />
      <Divider orientation="vertical" flexItem />
      <RecipeBadge type="time" value={overview.time} sx={{ flex: 1 }} />
      <Divider orientation="vertical" flexItem />
      <RecipeBadge type="yield" value={overview.yield} sx={{ flex: 1 }} />
    </Box>
  );
}

export { RecipeOverview };
