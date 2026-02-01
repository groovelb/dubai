import { FooterSection } from './FooterSection';
import { landingData } from '../../data/landingData';

export default {
  title: 'Section/쫀득연구소/FooterSection',
  component: FooterSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '쫀득연구소 랜딩페이지의 푸터 섹션입니다.',
      },
    },
  },
  argTypes: {
    data: { control: 'object', description: 'landingData.footer 객체' },
  },
};

export const Default = {
  args: {
    data: landingData.footer,
  },
};
