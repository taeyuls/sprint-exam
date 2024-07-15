import { vars } from "@/app/globals.css";
import { style } from "@vanilla-extract/css";

export const todoContainer = style({
  width:'50%',
  display: 'flex',
  flexDirection: 'column',
  marginRight:'24px',
  '@media': {
    'screen and (max-width:1366px) and (min-width:376px) ': {
      width: '100%',
      marginRight:'0'
    },
    
  },
  
})

export const todoIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  marginBottom:"16px"
})

export const todoImageContainer = style({
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

export const todoTextContainer = style({
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

export const emptyTodo = style({
  width: '240px',
  height: '240px',
  backgroundImage: 'url(/images/todoL.svg)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  '@media': {
    'screen and (max-width: 500px)': {
      width: '120px',
      height:'120px',
      backgroundImage: 'url(/images/todoS.svg)',
    },
  },
})