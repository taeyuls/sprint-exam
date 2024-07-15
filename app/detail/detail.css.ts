import { style } from "@vanilla-extract/css";
import { buttonStyles, vars } from "../globals.css";

export const detailContainer = style({
  width: "100%",
  display: 'flex',
  justifyContent: "center",
  alignItems:"center",
  padding: '0 360px',
  boxSizing: "border-box",
  '@media': {
    'screen and (max-width:1366px) and (min-width:376px) ': {
      padding: '0',
      boxSizing: 'border-box'
    },
  }
})

export const detailListContainer = style({
  width: '100%',
  height:"100vh",
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 102px',
  boxSizing: "border-box",
  '@media': {
    'screen and (max-width:1366px) and (min-width:376px) ': {
      padding: "0px 24px",
      boxSizing: 'border-box'
    },
  }
})

export const imageMemoContainer = style({
  width: '100%',
  display: 'flex',
  marginTop: "24px",
  '@media': {
    'screen and (max-width:1366px) and (min-width:376px) ': {
     flexDirection:'column'
    },
  }
})

export const detailBtnWrap = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'end',
  marginTop: '24px',
  '@media': {
    'screen and (max-width:1366px) and (min-width:376px) ': {
      justifyContent: 'center',
    },
  }
})

export const modifyBtn = style([
  buttonStyles,
  {
    marginRight: '16px',
    backgroundColor: vars.slate200,
    color: vars.slate900,
    '@media': {
      'screen and (max-width: 500px) and (min-width:320px)': {
        justifyContent: 'center',
      },
    },
    ':hover': {
      backgroundColor: `${vars.lime300}`,
    },
  },
  
]);

export const modifyBtnSuccess = style([
  buttonStyles,
  {
    marginRight: '16px',
    backgroundColor: vars.lime300, // 호버 색상으로 변경
    color: vars.slate900,
    '@media': {
      'screen and (max-width: 500px) and (min-width:320px)': {
        justifyContent: 'center',
      },
    },
  },
]);

export const deleteBtn = style([
  buttonStyles,
  {
    backgroundColor: vars.rose500,
    color: 'white',
    '@media': {
      'screen and (max-width: 500px) and (min-width:320px)': {
        justifyContent: 'center',
      },
    },
  },
  
]);