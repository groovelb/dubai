import Box from '@mui/material/Box';
import { HeroSection, RecipeSection, FooterSection } from '../sections/jjonddeuk';
import { landingData } from '../data/landingData';
import { recipeData } from '../data/recipeData';

/**
 * JjonddeukLandingPage 컴포넌트
 *
 * 쫀득연구소 랜딩페이지 전체를 구성하는 페이지 컴포넌트입니다.
 * Hero → Recipe → Footer 순서로 섹션을 배치합니다.
 *
 * Props:
 * @param {object} heroData - landingData.hero 객체 [Optional, 기본값: landingData.hero]
 * @param {object} recipeSectionData - landingData.recipe 객체 [Optional, 기본값: landingData.recipe]
 * @param {object} recipeDetailData - recipeData 전체 객체 [Optional, 기본값: recipeData]
 * @param {object} footerData - landingData.footer 객체 [Optional, 기본값: landingData.footer]
 *
 * Example usage:
 * <JjonddeukLandingPage />
 */
function JjonddeukLandingPage({
  heroData = landingData.hero,
  recipeSectionData = landingData.recipe,
  recipeDetailData = recipeData,
  footerData = landingData.footer,
}) {
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <HeroSection data={heroData} />
      <RecipeSection sectionData={recipeSectionData} recipeData={recipeDetailData} />
      <FooterSection data={footerData} />
    </Box>
  );
}

export { JjonddeukLandingPage };
