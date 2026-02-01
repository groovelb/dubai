/**
 * 쫀득연구소 Theme
 *
 * 쫀득연구소 브랜드 전용 디자인 토큰을 정의하는 테마입니다.
 *
 * ## 핵심 철학
 * - **Warm & Rounded**: borderRadius 12, 따뜻한 파스텔 톤
 * - **Pistachio Point**: 메인 포인트 컬러 #A8D5A2
 * - **Cocoa Text**: 텍스트 컬러 #5D4037
 * - **Butter Cream Background**: 카드 배경 #F5E6C8
 */

import { createTheme } from '@mui/material/styles';

// ============================================================
// 1. Color Tokens (색상 토큰)
// ============================================================
const palette = {
  mode: 'light',
  // 브랜드 색상
  primary: {
    light: '#C4E4BF',
    main: '#A8D5A2',   // 피스타치오
    dark: '#8BC083',
    contrastText: '#5D4037',
  },
  secondary: {
    light: '#7B5B50',
    main: '#5D4037',   // 코코아
    dark: '#3E2723',
    contrastText: '#FFFFFF',
  },

  // 텍스트 색상
  text: {
    primary: '#5D4037',     // 코코아
    secondary: '#7B5B50',   // 코코아 라이트
    disabled: 'rgba(93, 64, 55, 0.38)',
  },

  // 배경 색상
  background: {
    default: '#FFF8F0',  // 쫀득 화이트
    paper: '#FFFFFF',
  },

  // 구분선
  divider: 'rgba(93, 64, 55, 0.12)',

  // 커스텀 색상
  custom: {
    butterCream: '#F5E6C8',
    caramel: '#D4A574',
    white: '#FFF8F0',
    pistachio: '#A8D5A2',
    cocoa: '#5D4037',
  },
};

// ============================================================
// 2. Typography Tokens (타이포그래피 토큰)
// ============================================================
const typography = {
  fontFamily: [
    '"Pretendard Variable"',
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    '"Apple SD Gothic Neo"',
    '"Noto Sans KR"',
    'sans-serif',
  ].join(','),

  fontSize: 14,
  htmlFontSize: 16,

  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  h1: {
    fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 800,
    fontSize: '2.5rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: '#5D4037',
  },
  h2: {
    fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 800,
    fontSize: '2rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: '#5D4037',
  },
  h3: {
    fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    color: '#5D4037',
  },
  h4: {
    fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    color: '#5D4037',
  },
  h5: {
    fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: 1.4,
    color: '#5D4037',
  },
  h6: {
    fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: 1.4,
    color: '#5D4037',
  },

  body1: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#5D4037',
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.7,
    color: '#7B5B50',
  },

  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#5D4037',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#7B5B50',
  },

  button: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    lineHeight: 1.75,
    textTransform: 'none',
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.5,
    color: '#7B5B50',
  },
  overline: {
    fontSize: '0.8125rem',
    fontWeight: 500,
    lineHeight: 2,
    letterSpacing: '0.05em',
    textTransform: 'none',
    color: '#D4A574',
  },
};

// ============================================================
// 3. Shape Token (모양 토큰)
// ============================================================
const shape = {
  borderRadius: 12,
};

// ============================================================
// 4. Component Overrides (컴포넌트 오버라이드)
// ============================================================
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: '#FFF8F0',
        scrollbarWidth: 'thin',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 24,
        textTransform: 'none',
        fontWeight: 600,
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: '#D4A574',
        '&.Mui-checked': {
          color: '#A8D5A2',
        },
      },
    },
  },
};

// ============================================================
// Theme 생성
// ============================================================
const jjonddeukTheme = createTheme({
  palette,
  typography,
  spacing: 8,
  shape,
  components,
});

export default jjonddeukTheme;

export {
  palette,
  typography,
  shape,
  components,
};
