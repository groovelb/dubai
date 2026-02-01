import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { StorageMethod } from './StorageMethod';

export default {
  title: 'Custom Component/쫀득연구소/StorageMethod',
  component: StorageMethod,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '보관 방법 한 가지를 표시하는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['냉장', '냉동', '실온'],
      description: '보관 방법',
    },
    duration: { control: 'text', description: '보관 기간' },
    note: { control: 'text', description: '추가 메모' },
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
    type: '냉장',
    duration: '2~3일',
    note: '쫀득함 유지',
  },
};

export const AllMethods = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <StorageMethod type="냉장" duration="2~3일" note="쫀득함 유지" />
      <StorageMethod type="냉동" duration="2주" note="먹기 전 상온에서 10분 해동" />
      <StorageMethod type="실온" duration="비추천" note="마시멜로우가 녹고 카다이프가 눅눅해짐" />
    </Stack>
  ),
};
