import { style } from "@vanilla-extract/css";

export const homeContainer = style({
  width: "100%",
  display: 'flex',
  justifyContent: "center",
  alignItems:"center",
  flexDirection: "column",
  padding: '0 360px',
  marginTop:'24px',
  boxSizing: "border-box",
  // 노트북 ~ 태블릿
  '@media': {
    'screen and (max-width:1366px) and (min-width:376px) ': {
      padding: "0px 24px",
      boxSizing: 'border-box'
    },
  }
})

export const todoList = style({
  width: "100%",
  marginTop: '36px',
  display: 'flex',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width:1366px) and (min-width:376px) ': {
      justifyContent: 'normal',
      alignItems: 'center',
      flexDirection:'column'
    },
  }
})