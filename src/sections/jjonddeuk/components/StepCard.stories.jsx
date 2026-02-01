import Box from '@mui/material/Box';
import { StepCard } from './StepCard';

export default {
  title: 'Custom Component/쫀득연구소/StepCard',
  component: StepCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '레시피의 개별 단계를 카드 형태로 표시하는 컴포넌트입니다. 팁과 경고 메시지를 선택적으로 포함할 수 있습니다.',
      },
    },
  },
  argTypes: {
    order: { control: { type: 'number', min: 1, max: 10 }, description: '단계 번호' },
    title: { control: 'text', description: '단계 제목' },
    description: { control: 'text', description: '단계 설명' },
    tip: { control: 'text', description: '팁 텍스트' },
    warning: { control: 'text', description: '경고 텍스트' },
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
    order: 1,
    title: '카다이프 굽기',
    description: '카다이프면을 손으로 잘게 부숴 오븐 팬에 펼칩니다. 170°C 오븐에서 10~15분간 황금빛이 될 때까지 굽습니다.',
    tip: '에어프라이어 사용 시 160°C에서 8~10분',
    warning: '덜 구우면 눅눅해지고, 너무 구우면 씁니다',
  },
};

export const TipOnly = {
  args: {
    order: 2,
    title: '피스타치오 속 만들기',
    description: '화이트 커버춰 초콜릿을 중탕 또는 전자레인지(30초씩 저어가며)로 녹입니다. 피스타치오 스프레드를 넣고 섞은 뒤, 구운 카다이프면을 넣고 골고루 버무립니다.',
    tip: '피스타치오 스프레드와 카다이프 비율 1:1이 황금 비율',
    warning: null,
  },
};

export const NoExtras = {
  args: {
    order: 3,
    title: '속 성형 및 냉동',
    description: '손으로 동그랗게 뭉쳐 지름 3cm 정도 볼을 만듭니다.',
    tip: null,
    warning: null,
  },
};
