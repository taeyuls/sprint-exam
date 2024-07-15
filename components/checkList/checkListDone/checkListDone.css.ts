import { vars } from "@/app/globals.css";
import { style } from "@vanilla-extract/css";

export const checkListDoneContainer = style({
  width: '100%',
  height: '50px',
  border: `2px solid ${vars.slate900}`,
  borderRadius: '27px',
  backgroundColor: vars.violet100,
  padding: '9px 12px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  marginBottom: "16px",
  cursor:'pointer'
})

export const checkBoxDoneImage = style({
  width: '32px',
  height:'32px',
  backgroundImage: 'url(/icons/checkbox_done.svg)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  marginRight: '16px',
  cursor:'pointer'
})