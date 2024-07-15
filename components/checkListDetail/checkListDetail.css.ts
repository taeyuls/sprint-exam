import { vars } from "@/app/globals.css";
import { style } from "@vanilla-extract/css";

export const checkListNameContainer = style({
  width: '100%',
  height: '64px',
  borderRadius: '24px',
  border: `2px solid ${vars.slate900}`,
  padding: '16px 0',
  marginTop:'24px',
  boxSizing:'border-box',
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center',
  backgroundColor:"white"
})

export const checkListNameContainerCompleted = style({
  backgroundColor: vars.violet100, // 원하는 색상으로 변경
});

export const checkListName = style({
  WebkitBoxSizing: 'content-box',
  MozBoxSizing: 'content-box',
  boxSizing:'border-box',
  outline: "none",
  border: "none",
  fontFamily: 'NanumSquareR',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor:'transparent'
})

export const checkIcon = style({
  marginRight: '16px',
})