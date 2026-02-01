import Zdog from 'zdog';
import { ZdogCanvas } from './ZdogCanvas';

export default {
  title: 'Custom Component/쫀득연구소/ZdogCanvas',
  component: ZdogCanvas,
  tags: ['autodocs'],
  argTypes: {
    onBuildScene: { action: 'buildScene', description: 'Zdog Illustration 인스턴스를 받아 씬을 구성하는 콜백' },
    width: { control: { type: 'number', min: 60, max: 400 }, description: '캔버스 너비 (px)' },
    height: { control: { type: 'number', min: 60, max: 400 }, description: '캔버스 높이 (px)' },
    zoom: { control: { type: 'number', min: 0.5, max: 8 }, description: 'Zdog zoom 레벨' },
    isSpinning: { control: 'boolean', description: '자동 Y축 회전 여부' },
    isDragRotate: { control: 'boolean', description: '드래그 회전 여부' },
  },
};

/** 간단한 Box 씬으로 래퍼 동작 확인 */
export const Default = {
  args: {
    width: 200,
    height: 200,
    zoom: 3,
    isSpinning: true,
    isDragRotate: false,
    onBuildScene: (illo) => {
      new Zdog.Box({
        addTo: illo,
        width: 20,
        height: 20,
        depth: 20,
        stroke: false,
        color: '#A8D5A2',
        frontFace: '#A8D5A2',
        rearFace: '#8BC083',
        leftFace: '#8BC083',
        rightFace: '#C4E4BF',
        topFace: '#C4E4BF',
        bottomFace: '#6DAF65',
      });
    },
  },
};
