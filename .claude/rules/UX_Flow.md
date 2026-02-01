# 쫀득연구소 UX Flow

---

## 1. 유저 시나리오

### A. 첫 방문자

```
SNS에서 "두쫀쿠" 봄 → 검색 → 사이트 도착
                ↓
        히어로에서 "아 이런 거구나" 파악
                ↓
        스크롤 → 바로 레시피 확인
```

**목표**: 히어로 → 레시피까지 1스크롤


### B. 만들기로 결심함 (조리 중)

```
사이트 접속
    ↓
재료 체크하면서 준비
    ↓
단계별 스크롤하며 진행
    ↓
팁/주의사항 확인
```

**목표**: 조리 중 한 손으로 쉽게 참고

---

## 2. 정보 구조 (IA)

```
쫀득연구소 (/)
├── Hero
├── Recipe
│   ├── 개요 (난이도, 시간, 개수)
│   ├── 재료 체크리스트
│   ├── 단계별 가이드
│   └── 보관법
└── Footer
```

---

## 3. 섹션 > 컴포넌트

### 3-1. Hero

| UX 패턴 | 목적 |
|---------|------|
| Full-width Hero | 첫인상, 핵심 메시지 |

```
Hero
├── Eyebrow
├── Headline
├── Subhead
├── Body
├── CTAButton
└── CharacterIllust (쫀득이)
```

---

### 3-2. Recipe

| UX 패턴 | 적용 | 이유 |
|---------|------|------|
| Checklist | 재료 목록 | 준비 상태 체크 |
| Step Cards | 단계별 가이드 | 순서대로 진행 |
| Scroll Spy | 단계 하이라이트 | 현재 위치 인지 |

```
RecipeSection
├── SectionHeader
│   ├── Label
│   ├── Headline
│   ├── Subhead
│   └── CharacterComment
│
├── RecipeOverview
│   ├── DifficultyBadge
│   ├── TimeBadge
│   └── YieldBadge
│
├── IngredientChecklist
│   ├── CategoryTitle ("속재료" | "겉재료" | "마무리")
│   └── ChecklistItem (반복)
│       ├── Checkbox
│       ├── Name
│       ├── Amount
│       └── Note
│
├── StepList
│   └── StepCard (반복)
│       ├── StepNumber
│       ├── StepTitle
│       ├── StepDescription
│       ├── TipBox (선택)
│       └── WarningBox (선택)
│
└── StorageInfo
    └── StorageMethod (반복)
        ├── Type
        ├── Duration
        └── Note
```

---

### 3-3. Footer

```
Footer
├── Tagline
└── Copyright
```

---

## 4. 공통 컴포넌트

```
[Layout]
├── Header (Logo만)
└── Footer

[UI]
├── Button
├── Badge
├── Checkbox (체크 시 취소선)
└── Card

[Illustration]
├── 쫀득이 캐릭터
│   └── Default
└── 아이콘
    ├── clock
    ├── difficulty
    └── yield
```

---

## 5. 인터랙션

| 요소 | 트리거 | 효과 |
|------|--------|------|
| 체크박스 | 체크 | 취소선 + 연한 색상 |
| CTA 버튼 | 클릭 | 레시피로 스크롤 |
| 스텝 카드 | 스크롤 진입 | 페이드 인 |

---

## 6. 데이터 모델

### 모델 목록

| 모델 | 용도 | 파일 |
|------|------|------|
| `landingData` | 히어로 + 레시피 섹션 카피 | landingData.js |
| `recipeData` | 레시피 상세 (재료, 단계, 보관) | recipeData.js |

### 모델 스키마

**landingData**
```
landingData
├── hero
│   ├── eyebrow
│   ├── headline
│   ├── subhead
│   ├── body
│   ├── cta
│   └── character.comment
├── recipe
│   ├── label
│   ├── headline
│   ├── subhead
│   └── character.comment
└── footer
    ├── tagline
    └── copyright
```

**recipeData**
```
recipeData
├── overview
│   ├── title
│   ├── description
│   ├── difficulty (1-5)
│   ├── time (분)
│   └── yield (개수)
├── ingredients[]
│   ├── id
│   ├── category
│   ├── name
│   ├── amount
│   ├── unit
│   └── note
├── steps[]
│   ├── id
│   ├── order
│   ├── title
│   ├── description
│   ├── tip
│   └── warning
└── storage
    ├── methods[]
    │   ├── type
    │   ├── duration
    │   └── note
    └── recommendation
```

---

*작성일: 2026.02.01*
