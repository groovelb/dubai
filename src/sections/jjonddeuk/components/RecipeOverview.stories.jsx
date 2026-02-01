import Box from '@mui/material/Box';
import { RecipeOverview } from './RecipeOverview';
import { recipeData } from '../../../data/recipeData';

export default {
  title: 'Custom Component/쫀득연구소/RecipeOverview',
  component: RecipeOverview,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '레시피 개요(난이도, 소요시간, 결과물)를 배지 3개로 표시하는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    overview: { control: 'object', description: 'recipeData.overview 객체' },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, backgroundColor: 'background.default', maxWidth: 480 }}>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    overview: recipeData.overview,
  },
};
