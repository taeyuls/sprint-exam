import { vars } from "@/app/globals.css";
import { style } from "@vanilla-extract/css";

export const headerContainer = style({
  width: '100%',
  height: '60px',
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center',
  padding: "10px 360px",
  boxSizing: 'border-box',
  borderBottom: `1px solid ${vars.slate200}`,
  backgroundColor:'white',
  // 노트북 ~ 태블릿
  '@media': {
    'screen and (max-width:1366px) and (min-width:320px) ': {
      padding: "10px 24px",
      boxSizing:'border-box'
    },
  },
  
})

export const gnb = style({
  width: "1920px",
  height: 'auto',
})

export const logo = style({
  width: '151px',
  height: '40px',
  backgroundImage: 'url(/images/logo.svg)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  '@media': {
    'screen and (max-width: 520px) and (min-width:320px)': {
      backgroundImage: 'url(/images/logoS.svg)',
    },
  },
});
