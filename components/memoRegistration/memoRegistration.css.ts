import { vars } from "@/app/globals.css";
import { style } from "@vanilla-extract/css";

export const memoContainer = style({
  width: "60%",
  height: "311px",
  borderRadius: '24px',
  padding: '24px 16px',
  boxSizing:'border-box',
  backgroundImage: 'url(/images/memo.svg)',
  backgroundSize: 'contain',
  backgroundRepeat: 'repeat',
  '@media': {
    'screen and (max-width:1366px) and (min-width:376px) ': {
      marginTop:'24px',
      width: "100%",
    },
  }
})

export const memoText = style({
  fontFamily: 'NanumSquareB',
  color: vars.amber800,
  display: 'flex',
  justifyContent: 'center',
})



export const textArea = style({
  width: "100%",
  height: '231px',
  marginTop: '16px',
  border: 'none',
  resize: 'none',
  backgroundColor: 'transparent',
  textAlign: 'center', 
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center', 
  padding: '0', 
  fontFamily: 'NanumSquareR',
  fontSize: '16px',
  outline: 'none', // 포커스 시 기본 아웃라인 제거
  ':focus': {
    outline: 'none', // 포커스 시 아웃라인 제거
  },
  '::-webkit-scrollbar': {
    width: '4px', // 스크롤바의 너비
    height: '4px', // 가로 스크롤바의 높이
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: vars.amber200, // 스크롤바 색상
    borderRadius: '4px', 
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent', // 스크롤바 트랙 색상
  }
})
