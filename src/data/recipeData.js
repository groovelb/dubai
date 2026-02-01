export const recipeData = {
  overview: {
    title: "두쫀쿠 만들기",
    description: "마시멜로우의 쫀득함, 피스타치오의 고소함, 카다이프의 바삭함이 한입에",
    difficulty: 2,
    time: 60,
    yield: 10,
  },

  ingredients: [
    // 속재료
    {
      id: "ing-1",
      category: "속재료",
      name: "카다이프면",
      amount: 100,
      unit: "g",
      note: "130g까지 가능",
    },
    {
      id: "ing-2",
      category: "속재료",
      name: "피스타치오 스프레드",
      amount: 100,
      unit: "g",
      note: "120g까지 가능",
    },
    {
      id: "ing-3",
      category: "속재료",
      name: "화이트 커버춰 초콜릿",
      amount: 30,
      unit: "g",
      note: null,
    },
    {
      id: "ing-4",
      category: "속재료",
      name: "버터",
      amount: 10,
      unit: "g",
      note: "선택",
    },

    // 겉재료
    {
      id: "ing-5",
      category: "겉재료",
      name: "마시멜로우",
      amount: 130,
      unit: "g",
      note: "150g까지 가능",
    },
    {
      id: "ing-6",
      category: "겉재료",
      name: "버터",
      amount: 50,
      unit: "g",
      note: "60g까지 가능",
    },
    {
      id: "ing-7",
      category: "겉재료",
      name: "탈지분유",
      amount: 10,
      unit: "g",
      note: "12g까지 가능",
    },
    {
      id: "ing-8",
      category: "겉재료",
      name: "코코아파우더",
      amount: 15,
      unit: "g",
      note: "18g까지 가능",
    },

    // 마무리
    {
      id: "ing-9",
      category: "마무리",
      name: "코코아파우더",
      amount: null,
      unit: "적당량",
      note: "겉바르기용",
    },
  ],

  steps: [
    {
      id: "step-1",
      order: 1,
      title: "카다이프 굽기",
      description:
        "카다이프면을 손으로 잘게 부숴 오븐 팬에 펼칩니다. 170°C 오븐에서 10~15분간 황금빛이 될 때까지 굽습니다. 중간에 한 번 뒤적여 고르게 굽고, 완전히 식힙니다.",
      tip: "에어프라이어 사용 시 160°C에서 8~10분",
      warning: "덜 구우면 눅눅해지고, 너무 구우면 씁니다",
      image: "step-1-baking",
    },
    {
      id: "step-2",
      order: 2,
      title: "피스타치오 속 만들기",
      description:
        "화이트 커버춰 초콜릿을 중탕 또는 전자레인지(30초씩 저어가며)로 녹입니다. 피스타치오 스프레드를 넣고 섞은 뒤, 구운 카다이프면을 넣고 골고루 버무립니다.",
      tip: "피스타치오 스프레드와 카다이프 비율 1:1이 황금 비율",
      warning: null,
      image: "step-2-filling",
    },
    {
      id: "step-3",
      order: 3,
      title: "속 성형 및 냉동",
      description:
        "손으로 동그랗게 뭉쳐 지름 3cm 정도 볼을 만듭니다. 냉동실에서 30분 이상 굳힙니다.",
      tip: "단단하게 얼어야 마시멜로우로 감쌀 때 모양이 예쁘게 잡힘",
      warning: "충분히 얼리지 않으면 감쌀 때 터집니다",
      image: null,
    },
    {
      id: "step-4",
      order: 4,
      title: "마시멜로우 반죽 만들기",
      description:
        "냄비에 버터를 약불에서 녹입니다. 마시멜로우를 넣고 계속 저으면서 완전히 녹입니다. 탈지분유와 코코아파우더를 넣고 빠르게 섞습니다. 불을 끄고 살짝 식힙니다.",
      tip: null,
      warning: "마시멜로우 반죽은 빨리 굳습니다. 서두르세요.",
      image: "step-3-dough",
    },
    {
      id: "step-5",
      order: 5,
      title: "성형 및 마무리",
      description:
        "손에 코코아파우더를 묻혀 반죽이 달라붙지 않게 합니다. 반죽을 얇게 펴서 냉동해둔 피스타치오 볼을 감쌉니다. 동그랗게 모양을 잡고, 코코아파우더를 골고루 굴려 마무리합니다.",
      tip: "반죽이 굳으면 전자레인지에 5초씩 돌려 다시 부드럽게",
      warning: null,
      image: "step-4-shaping",
    },
  ],

  storage: {
    methods: [
      {
        type: "냉장",
        duration: "2~3일",
        note: "쫀득함 유지",
      },
      {
        type: "냉동",
        duration: "2주",
        note: "먹기 전 상온에서 10분 해동",
      },
      {
        type: "실온",
        duration: "비추천",
        note: "마시멜로우가 녹고 카다이프가 눅눅해짐",
      },
    ],
    recommendation: "냉장 보관 후 2~3일 내 섭취 권장",
  },
};
