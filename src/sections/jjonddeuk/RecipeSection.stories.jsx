import { RecipeSection } from './RecipeSection';
import { landingData } from '../../data/landingData';
import { recipeData } from '../../data/recipeData';

export default {
  title: 'Section/쫀득연구소/RecipeSection',
  component: RecipeSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '쫀득연구소 레시피 전체 섹션입니다. 개요 → 재료 체크리스트 → 단계별 가이드 → 보관법 순으로 구성합니다.',
      },
    },
  },
  argTypes: {
    sectionData: { control: 'object', description: 'landingData.recipe 객체' },
    recipeData: { control: 'object', description: 'recipeData 전체 객체' },
  },
};

export const Default = {
  args: {
    sectionData: landingData.recipe,
    recipeData: recipeData,
  },
};
