import { buttonStyles, vars } from "@/app/globals.css";
import { style } from "@vanilla-extract/css";

export const searchBar = style({
  width: '100%',
  height: '56px',
  border: `2px solid ${vars.slate900}`,
  WebkitAppearance: "none",
  MozAppearance: 'none',
  appearance: 'none',
  WebkitBoxSizing: 'content-box',
  MozBoxSizing: 'content-box',
  boxSizing:'border-box',
  outline: "none",
  marginRight:"24px",
  borderRadius: '24px',
  padding: '17px 24px',
  backgroundColor: `${vars.slate100}`,
  color: `${vars.slate900}`,
  fontSize:'16px',
  fontFamily: 'NanumSquareR',
  '::placeholder': {
    color: `${vars.slate500}`,
  },
  boxShadow: `3.5px 4.06px 0 ${vars.slate900}`,
})

export const searchBtn = style([
  buttonStyles,
  {
    backgroundColor: vars.slate200,
    color: vars.slate900,
    '@media': {
      'screen and (max-width: 520px) and (min-width:320px)': {
        width: '56px',
        height: '56px',
        justifyContent: 'center',
      },
    },
    ':hover': {
      backgroundColor: `${vars.violet600}`,
      color:"white"
    },
  },
  
]);

export const searchBtnText = style({
  marginLeft: '4px',
  '@media': {
    'screen and (max-width: 520px)': {
      display: 'none',
    },
  },
});

export const searchContainer = style({
  width: '100%',
  display: 'flex',
  justifyContent:'space-between'
})