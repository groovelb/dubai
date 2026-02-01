import { JjonddeukLandingPage } from './JjonddeukLandingPage';
import { landingData } from '../data/landingData';
import { recipeData } from '../data/recipeData';

export default {
  title: 'Page/쫀득연구소/LandingPage',
  component: JjonddeukLandingPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '쫀득연구소 랜딩페이지 전체입니다. Hero → Recipe → Footer 순서로 섹션을 배치합니다.',
      },
    },
  },
  argTypes: {
    heroData: { control: 'object', description: 'landingData.hero 객체' },
    recipeSectionData: { control: 'object', description: 'landingData.recipe 객체' },
    recipeDetailData: { control: 'object', description: 'recipeData 전체 객체' },
    footerData: { control: 'object', description: 'landingData.footer 객체' },
  },
};

export const Default = {
  args: {
    heroData: landingData.hero,
    recipeSectionData: landingData.recipe,
    recipeDetailData: recipeData,
    footerData: landingData.footer,
  },
};
