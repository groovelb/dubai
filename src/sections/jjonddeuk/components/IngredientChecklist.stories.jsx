import Box from '@mui/material/Box';
import { IngredientChecklist } from './IngredientChecklist';
import { recipeData } from '../../../data/recipeData';

export default {
  title: 'Custom Component/쫀득연구소/IngredientChecklist',
  component: IngredientChecklist,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '카테고리별로 그룹핑된 재료 체크리스트 컴포넌트입니다. 체크 시 취소선과 연한 색상이 적용됩니다.',
      },
    },
  },
  argTypes: {
    ingredients: { control: 'object', description: 'recipeData.ingredients 배열' },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, backgroundColor: 'background.default', maxWidth: 500 }}>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    ingredients: recipeData.ingredients,
  },
};
