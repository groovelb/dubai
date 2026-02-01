/**
 * Theme System
 *
 * 테마를 관리하는 유틸리티를 제공합니다.
 * 각 테마는 MUI createTheme 규격을 따릅니다.
 */

import jjonddeukTheme from './jjonddeuk.js';

/** 기본 테마 (쫀득연구소) */
const defaultTheme = jjonddeukTheme;

/** 사용 가능한 테마 목록 */
export const themes = {
  default: defaultTheme,
};

/** 테마 메타데이터 */
export const themeMeta = {
  default: {
    name: '쫀득연구소',
    description: '쫀득연구소 브랜드 테마',
    mode: 'light',
  },
};

/**
 * 테마 이름으로 테마 객체 가져오기
 *
 * @param {string} themeName - 테마 이름
 * @returns {object} MUI 테마 객체
 */
export const getTheme = (themeName) => {
  return themes[themeName] || themes.default;
};

/**
 * 테마 이름 목록 가져오기
 *
 * @returns {string[]} 테마 이름 배열
 */
export const getThemeNames = () => Object.keys(themes);

export { defaultTheme };
export default themes;
