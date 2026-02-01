import Box from '@mui/material/Box';
import { StepList } from './StepList';
import { recipeData } from '../../../data/recipeData';

export default {
  title: 'Custom Component/쫀득연구소/StepList',
  component: StepList,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '레시피 단계 카드 목록 컴포넌트입니다. 스크롤 진입 시 각 카드가 페이드 인됩니다.',
      },
    },
  },
  argTypes: {
    steps: { control: 'object', description: 'recipeData.steps 배열' },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, backgroundColor: 'background.default', maxWidth: 560 }}>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    steps: recipeData.steps,
  },
};
