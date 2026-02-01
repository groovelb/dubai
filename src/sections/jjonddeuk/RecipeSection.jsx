import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SectionContainer } from '../../components/container/SectionContainer';
import { PageContainer } from '../../components/container/PageContainer';
import { CharacterComment, RecipeOverview, IngredientChecklist, StepList, StorageInfo } from './components';

/**
 * RecipeSection 컴포넌트
 *
 * 쫀득연구소 레시피 전체 섹션입니다.
 * 섹션 헤더 → 개요 → 재료 체크리스트 → 단계별 가이드 → 보관법 순으로 구성합니다.
 *
 * Props:
 * @param {object} sectionData - landingData.recipe 객체 [Required]
 *   @param {string} sectionData.label - 섹션 라벨
 *   @param {string} sectionData.headline - 섹션 헤드라인
 *   @param {string} sectionData.subhead - 서브 헤드라인
 *   @param {object} sectionData.character - 캐릭터 정보 { comment }
 * @param {object} recipeData - recipeData 전체 객체 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <RecipeSection sectionData={landingData.recipe} recipeData={recipeData} />
 */
function RecipeSection({ sectionData, recipeData, sx }) {
  return (
    <SectionContainer
      id="recipe-section"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 6, md: 10 },
        ...sx,
      }}
    >
      <PageContainer maxWidth="sm">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 5, md: 7 } }}>
          {/* 섹션 헤더 */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{ color: 'custom.caramel', display: 'block', mb: 1 }}
            >
              {sectionData.label}
            </Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
              {sectionData.headline}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: 'text.secondary', fontWeight: 400, mb: 3 }}
            >
              {sectionData.subhead}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CharacterComment comment={sectionData.character.comment} />
            </Box>
          </Box>

          {/* 레시피 개요 */}
          <RecipeOverview overview={recipeData.overview} />

          {/* 재료 체크리스트 */}
          <Box>
            <Typography variant="h5" sx={{ mb: 2.5 }}>
              실험 준비물
            </Typography>
            <IngredientChecklist ingredients={recipeData.ingredients} />
          </Box>

          {/* 단계별 가이드 */}
          <Box>
            <Typography variant="h5" sx={{ mb: 2.5 }}>
              실험 과정
            </Typography>
            <StepList steps={recipeData.steps} />
          </Box>

          {/* 보관법 */}
          <Box>
            <Typography variant="h5" sx={{ mb: 2.5 }}>
              보관법
            </Typography>
            <StorageInfo storage={recipeData.storage} />
          </Box>
        </Box>
      </PageContainer>
    </SectionContainer>
  );
}

export { RecipeSection };
