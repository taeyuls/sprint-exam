import { vars } from "@/app/globals.css";
import { style } from "@vanilla-extract/css";

export const imageContainer = style({
  width: '40%',
  height: "311px",
  borderRadius: '24px',
  border: `2px dashed ${vars.slate300}`,
  backgroundColor: vars.slate50,
  display: 'flex',
  flexGrow:1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  marginRight: '24px',
  '@media': {
    'screen and (max-width:1366px) and (min-width:376px) ': {
      width: "100%",
    },
  }
})

export const images = style({
  width: '40%',
  height: "311px",
  borderRadius: '24px',
  display: 'flex',
  flexGrow:1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  marginRight: '24px',
  '@media': {
    'screen and (max-width:1366px) and (min-width:376px) ': {
      width: "100%",
    },
  }
})

export const addImageBtn = style({
  width: '64px',
  height: '64px',
  backgroundColor: vars.slate200,
  border: 'none',
  borderRadius:'100%',
  position: 'absolute',
  bottom: '16px',
  right:'16px',
  cursor:'pointer'
})


export const modifyImageBtn = style({
  width: '64px',
  height: '64px',
  backgroundColor: 'rgba(15, 23, 42, 0.5)',
  border: `2px solid${vars.slate900}`,
  borderRadius:'100%',
  position: 'absolute',
  bottom: '16px',
  right:'16px',
  cursor:'pointer'
})