import{jsx as o}from"react/jsx-runtime";import{useModalOverlay as r,Overlay as t}from"react-aria";import{useRef as e}from"react";import{Underlay as i,Container as l}from"./modalStyle.js";import n from"./Dialog.js";const s=s=>{const{state:a,children:c,zIndex:d,isDismissable:m,width:h,height:f,fontColor:p,contentFontSize:C,titleFontSize:b,backColor:z,borderColor:u}=s,S=e(null),{modalProps:x,underlayProps:F}=r(s,a,S);return o(t,{children:o(i,{zIndex:d,...F,children:o(l,{...x,ref:S,width:h,height:f,backColor:z,borderColor:u,children:o(n,{onClose:a.close,isDismissable:m,fontColor:p,contentFontSize:C,titleFontSize:b,children:c})})})})};export{s as default};