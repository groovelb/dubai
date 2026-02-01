/**
 * Zdog 재료 일러스트 빌더 함수 모듈
 *
 * 각 함수는 (illo: Zdog.Illustration) => void 시그니처를 따르며,
 * 쫀득연구소 브랜드 팔레트에 맞춘 플랫 스타일 재료 일러스트를 빌드합니다.
 */

import Zdog from 'zdog';

const TAU = Zdog.TAU;

/**
 * 마시멜로우: 두꺼운 stroke로 통통하고 부드러운 캡슐 형태
 * 앵커에 X축 틸트를 줘서 Y회전 시 입체감이 보이도록 처리
 */
function buildMarshmallow(illo) {
  const anchor = new Zdog.Anchor({
    addTo: illo,
    rotate: { x: -TAU / 10 },
  });

  // 몸통 (두꺼운 stroke가 둥근 캡슐 형태를 만듦)
  new Zdog.Cylinder({
    addTo: anchor,
    diameter: 20,
    length: 16,
    stroke: 8,
    color: '#FFFFFF',
    frontFace: '#FFF8F0',
    backface: '#F5F0EA',
    rotate: { x: TAU / 4 },
  });
}

/**
 * 카다이프: 엉킨 면발 둥지 (bezier 곡선 다발)
 */
function buildKadaif(illo) {
  const anchor = new Zdog.Anchor({ addTo: illo });

  const strandColors = ['#D4A574', '#F5E6C8', '#C9965C', '#E8D4B0'];
  const strandCount = 18;

  for (let i = 0; i < strandCount; i++) {
    const angle = (i / strandCount) * TAU;
    const r = 10 + Math.random() * 6;
    const x0 = Math.cos(angle) * r;
    const z0 = Math.sin(angle) * r;
    const y0 = (Math.random() - 0.5) * 14;

    const angle2 = angle + TAU / 3 + (Math.random() - 0.5) * 0.8;
    const r2 = 8 + Math.random() * 8;
    const x1 = Math.cos(angle2) * r2;
    const z1 = Math.sin(angle2) * r2;
    const y1 = (Math.random() - 0.5) * 14;

    new Zdog.Shape({
      addTo: anchor,
      path: [
        { x: x0, y: y0, z: z0 },
        {
          bezier: [
            { x: x0 * 0.3, y: y0 + (Math.random() - 0.5) * 10, z: z0 * 0.3 },
            { x: x1 * 0.3, y: y1 + (Math.random() - 0.5) * 10, z: z1 * 0.3 },
            { x: x1, y: y1, z: z1 },
          ],
        },
      ],
      closed: false,
      stroke: 2.5,
      color: strandColors[i % strandColors.length],
    });
  }
}

/**
 * 피스타치오: 벌어진 껍데기 + 초록 알맹이
 * bezier path 기반 C-커브로 껍데기 구현
 */
function buildPistachio(illo) {
  const anchor = new Zdog.Anchor({ addTo: illo });

  // 왼쪽 껍데기 반쪽 (C-커브)
  new Zdog.Shape({
    addTo: anchor,
    path: [
      { x: 0, y: -14, z: 0 },
      {
        bezier: [
          { x: -18, y: -10, z: -4 },
          { x: -18, y: 10, z: -4 },
          { x: 0, y: 14, z: 0 },
        ],
      },
      {
        bezier: [
          { x: -4, y: 10, z: 2 },
          { x: -4, y: -10, z: 2 },
          { x: 0, y: -14, z: 0 },
        ],
      },
    ],
    closed: true,
    stroke: 1,
    fill: true,
    color: '#F5E6C8',
  });

  // 오른쪽 껍데기 반쪽 (C-커브)
  new Zdog.Shape({
    addTo: anchor,
    path: [
      { x: 0, y: -14, z: 0 },
      {
        bezier: [
          { x: 18, y: -10, z: -4 },
          { x: 18, y: 10, z: -4 },
          { x: 0, y: 14, z: 0 },
        ],
      },
      {
        bezier: [
          { x: 4, y: 10, z: 2 },
          { x: 4, y: -10, z: 2 },
          { x: 0, y: -14, z: 0 },
        ],
      },
    ],
    closed: true,
    stroke: 1,
    fill: true,
    color: '#EDD9B5',
  });

  // 초록 알맹이
  new Zdog.Ellipse({
    addTo: anchor,
    diameter: 14,
    width: 12,
    height: 16,
    stroke: 8,
    color: '#A8D5A2',
    translate: { z: 2 },
  });
}

/**
 * 화이트 초콜릿: 직사각 블록 (순백색 계열)
 */
function buildChocolate(illo) {
  const anchor = new Zdog.Anchor({
    addTo: illo,
    rotate: { x: -TAU / 14, y: TAU / 8 },
  });

  new Zdog.Box({
    addTo: anchor,
    width: 28,
    height: 8,
    depth: 20,
    stroke: false,
    color: '#FFFFFF',
    frontFace: '#FFFFFF',
    rearFace: '#F7F5F0',
    leftFace: '#F7F5F0',
    rightFace: '#FDFCFA',
    topFace: '#FFFFFF',
    bottomFace: '#F0EDE8',
  });
}

/**
 * 버터: 직사각 블록 (노란색)
 */
function buildButter(illo) {
  const anchor = new Zdog.Anchor({
    addTo: illo,
    rotate: { x: -TAU / 14, y: -TAU / 8 },
  });

  new Zdog.Box({
    addTo: anchor,
    width: 26,
    height: 10,
    depth: 18,
    stroke: false,
    color: '#FFD966',
    frontFace: '#FFD966',
    rearFace: '#F0C75E',
    leftFace: '#F0C75E',
    rightFace: '#FFE699',
    topFace: '#FFE699',
    bottomFace: '#E0B84E',
  });
}

/** 재료 타입별 빌더 매핑 */
const ingredientBuilders = {
  marshmallow: buildMarshmallow,
  kadaif: buildKadaif,
  pistachio: buildPistachio,
  chocolate: buildChocolate,
  butter: buildButter,
};

export {
  ingredientBuilders,
  buildMarshmallow,
  buildKadaif,
  buildPistachio,
  buildChocolate,
  buildButter,
};
