import Box from '@mui/material/Box';
import { CharacterComment } from './CharacterComment';

export default {
  title: 'Custom Component/쫀득연구소/CharacterComment',
  component: CharacterComment,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '쫀득이 캐릭터의 말풍선 코멘트를 표시하는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    comment: {
      control: 'text',
      description: '코멘트 텍스트',
    },
    variant: {
      control: 'select',
      options: ['bubble', 'inline'],
      description: '스타일 변형 (bubble: 말풍선, inline: 인라인 텍스트)',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, backgroundColor: 'background.default', minWidth: 300 }}>
        <Story />
      </Box>
    ),
  ],
};

export const Default = {
  args: {
    comment: '처음이어도 괜찮아요',
    variant: 'bubble',
  },
};

export const Inline = {
  args: {
    comment: '오븐 없어도 돼요',
    variant: 'inline',
  },
};
