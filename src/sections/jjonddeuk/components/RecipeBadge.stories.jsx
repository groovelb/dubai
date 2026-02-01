import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { RecipeBadge } from './RecipeBadge';

export default {
  title: 'Custom Component/쫀득연구소/RecipeBadge',
  component: RecipeBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '레시피 메타 정보(난이도, 소요시간, 결과물)를 아이콘과 함께 표시하는 배지 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['difficulty', 'time', 'yield'],
      description: '배지 타입',
    },
    value: {
      control: { type: 'number', min: 1, max: 100 },
      description: '표시할 값',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, backgroundColor: 'background.default' }}>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    type: 'difficulty',
    value: 2,
  },
};

export const AllTypes = {
  render: () => (
    <Stack direction="row" spacing={3} divider={<Box sx={{ width: 1, bgcolor: 'divider' }} />}>
      <RecipeBadge type="difficulty" value={2} />
      <RecipeBadge type="time" value={60} />
      <RecipeBadge type="yield" value={10} />
    </Stack>
  ),
};
