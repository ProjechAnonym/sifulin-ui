import{jsxs as o,jsx as r}from"react/jsx-runtime";import{usePopover as e,Overlay as t,DismissButton as i}from"react-aria";import{useRef as l}from"react";import{Underlay as n,PopoverContainer as s,ArrowSvg as c,ArrowPath as a}from"./popoverStyle.js";import p from"./Dialog.js";const d=d=>{const f=l(null),{children:h,state:m,offset:C=8,isNonModal:b=!1,placement:u,width:w,height:S,backColor:g,borderColor:v,title:z,fontColor:F,contentFontSize:j,titleFontSize:k}=d,{popoverProps:x,underlayProps:D,arrowProps:M}=e({...d,offset:C,popoverRef:f},m);return o(t,{children:[!b&&r(n,{...D}),o(s,{...x,ref:f,width:w,height:S,backColor:g,borderColor:v,children:[r(c,{...M,position:u,viewBox:"0 0 12 12",backColor:g,children:r(a,{d:"M0 0 L6 6 L12 0",borderColor:v})}),r(i,{onDismiss:m.close}),r(p,{width:w,height:S,title:z,fontColor:F,titleFontSize:k,contentFontSize:j,onClose:()=>m.close(),isNonModal:b,children:h}),r(i,{onDismiss:m.close})]})]})};export{d as default};
