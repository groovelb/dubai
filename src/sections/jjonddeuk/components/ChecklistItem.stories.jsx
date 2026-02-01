import Box from '@mui/material/Box';
import { ChecklistItem } from './ChecklistItem';

export default {
  title: 'Custom Component/쫀득연구소/ChecklistItem',
  component: ChecklistItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '재료 체크리스트의 개별 아이템 컴포넌트입니다. 체크 시 취소선과 연한 색상이 적용됩니다.',
      },
    },
  },
  argTypes: {
    name: { control: 'text', description: '재료 이름' },
    amount: { control: { type: 'number' }, description: '분량' },
    unit: { control: 'text', description: '단위' },
    note: { control: 'text', description: '추가 메모' },
    isChecked: { control: 'boolean', description: '체크 상태' },
    onToggle: { action: 'toggled', description: '체크 토글 핸들러' },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, backgroundColor: 'background.default', minWidth: 400 }}>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    name: '카다이프면',
    amount: 100,
    unit: 'g',
    note: '130g까지 가능',
    isChecked: false,
  },
};

export const Checked = {
  args: {
    name: '피스타치오 스프레드',
    amount: 100,
    unit: 'g',
    note: '120g까지 가능',
    isChecked: true,
  },
};

export const NoAmount = {
  args: {
    name: '코코아파우더',
    amount: null,
    unit: '적당량',
    note: '겉바르기용',
    isChecked: false,
  },
};
