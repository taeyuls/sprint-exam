import { globalFontFace, globalStyle, style } from '@vanilla-extract/css';

const nanumSquareFont = {
  src: `local('NanumSquareR'), url('/fonts/NanumSquareR.otf') format('opentype')`,
  fontWeight: 'normal',
  fontStyle: 'normal',
};

globalFontFace('NanumSquare', nanumSquareFont);


export const vars = {
  slate900: '#0F172A',
  slate800: '#1E293B',
  slate500: '#64748B',
  slate400: '#94A3B8',
  slate300: '#CBD5E1',
  slate200: '#E2E8F0',
  slate100: '#F1F5F9',
  slate50:'#F8FAFC',
  violet600: '#7C3AED',
  violet100: '#EDE9FE',
  rose500: '#F43F5E',
  lime300: '#BEF264',
  amber800: '#92400E',
  amber200:'#FDE68A',
  gray50: '#F9FAFB'
};

export const buttonStyles = style({
  width: '164px',
  height:'56px',
  padding: '17px 24px',
  boxSizing:'border-box',
  borderRadius: '24px',
  border: `2px solid ${vars.slate900}`,
  backgroundColor: `${vars.slate200}`,
  boxShadow: `4px 3.65px 0 ${vars.slate900}`,
  color: `${vars.slate900}`,
  fontSize: '16px',
  fontWeight: '700',
  fontFamily: 'NanumSquareB',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  // ':hover': {
  //   backgroundColor: `${vars.violet600}`,
  //   color:"white"
  // },
  // ':active': {
  //   backgroundColor: `${vars.slate300}`,
  // },
  // ':disabled': {
  //   backgroundColor: `${vars.slate50}`,
  //   color: `${vars.slate400}`,
  //   cursor: 'not-allowed',
  // },
});



globalStyle('html, body,ul,li', {
  margin: 0,
  fontFamily: 'NanumSquare, Arial, sans-serif', // 나눔스퀘어 폰트 적용
  backgroundColor: vars.gray50,
  fontSize: "16px",
  listStyle:'none'
});

globalStyle('p', {
  margin: 0,
});

