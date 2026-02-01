import Box from '@mui/material/Box';
import { TipBox } from './TipBox';

export default {
  title: 'Custom Component/쫀득연구소/TipBox',
  component: TipBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '레시피 단계 내 팁 또는 경고를 표시하는 박스 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    content: { control: 'text', description: '텍스트 내용' },
    variant: {
      control: 'select',
      options: ['tip', 'warning'],
      description: '타입 (tip: 팁, warning: 경고)',
    },
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
    content: '에어프라이어 사용 시 160°C에서 8~10분',
    variant: 'tip',
  },
};

export const Warning = {
  args: {
    content: '덜 구우면 눅눅해지고, 너무 구우면 씁니다',
    variant: 'warning',
  },
};
