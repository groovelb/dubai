import { HeroSection } from './HeroSection';
import { landingData } from '../../data/landingData';

export default {
  title: 'Section/쫀득연구소/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '쫀득연구소 랜딩페이지의 히어로 섹션입니다. eyebrow → headline → subhead → body → CTA → 쫀득이 코멘트 순으로 표시합니다.',
      },
    },
  },
  argTypes: {
    data: { control: 'object', description: 'landingData.hero 객체' },
    onCtaClick: { action: 'ctaClicked', description: 'CTA 버튼 클릭 핸들러' },
  },
};

export const Default = {
  args: {
    data: landingData.hero,
  },
};
