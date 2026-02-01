import Box from '@mui/material/Box';
import { StorageInfo } from './StorageInfo';
import { recipeData } from '../../../data/recipeData';

export default {
  title: 'Custom Component/쫀득연구소/StorageInfo',
  component: StorageInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '보관 방법 목록과 권장 사항을 표시하는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    storage: { control: 'object', description: 'recipeData.storage 객체' },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, backgroundColor: 'background.default', maxWidth: 520 }}>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    storage: recipeData.storage,
  },
};
