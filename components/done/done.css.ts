import { vars } from "@/app/globals.css";
import { style } from "@vanilla-extract/css";

export const doneContainer = style({
  width:'50%',
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    'screen and (max-width:1366px) and (min-width:376px) ': {
      width: '100%',
      marginTop:'46px'
    },
  }
})

export const doneIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  marginBottom:"16px"
})

export const doneImageContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '26px',
  '@media': {
    'screen and (max-width: 500px) and (min-width:320px)': {
      marginTop: '0px',
    },
  },
})

export const doneTextContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '36px',
  color: vars.slate400,
  '@media': {
    'screen and (max-width: 500px) and (min-width:320px)': {
      marginTop: '12px',
    },
  },
})

export const emptyDone = style({
  width: '240px',
  height: '240px',
  backgroundImage: 'url(/images/doneL.svg)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  '@media': {
    'screen and (max-width: 500px) and (min-width:320px)': {
      width: '120px',
      height:'120px',
      backgroundImage: 'url(/images/doneS.svg)',
    },
  },
})