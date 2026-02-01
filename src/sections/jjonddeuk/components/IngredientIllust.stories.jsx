import { IngredientIllust } from './IngredientIllust';

export default {
  title: 'Custom Component/쫀득연구소/IngredientIllust',
  component: IngredientIllust,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['marshmallow', 'kadaif', 'pistachio', 'chocolate', 'butter'],
      description: '재료 타입 키',
    },
    label: { control: 'text', description: '재료 이름' },
    description: { control: 'text', description: '재료 한 줄 설명' },
  },
};

export const Default = {
  args: {
    type: 'marshmallow',
    label: '마시멜로우',
    description: '쫀득함 담당',
  },
};

export const AllIngredients = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
      <IngredientIllust type="marshmallow" label="마시멜로우" description="쫀득함 담당" />
      <IngredientIllust type="kadaif" label="카다이프" description="바삭함 담당" />
      <IngredientIllust type="pistachio" label="피스타치오" description="고소함 담당" />
      <IngredientIllust type="chocolate" label="화이트 초콜릿" description="달콤함 담당" />
      <IngredientIllust type="butter" label="버터" description="풍미 담당" />
    </div>
  ),
};
