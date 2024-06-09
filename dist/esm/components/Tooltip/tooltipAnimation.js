import{keyframes as t}from"@emotion/react";const a=a=>{switch(a){case"bottom":return t`
                    from {
                    opacity: 0;
                    transform: translate(50%,-70%) scale(0);
                    }
                    to {
                    opacity: 1;
                    transform: translate(50%,0) scale(1);
                    }
                `;case"top":return t`
            from {
            opacity: 0;
            transform: translate(50%,70%) scale(0);
            }
            to {
            opacity: 1;
            transform: translate(50%,0) scale(1);
            }
        `;case"left":return t`
            from {
                opacity: 0;
                transform: translate(50%,-50%) scale(0);
            }
            to {
                opacity: 1;
                transform: translate(0,-50%) scale(1);
            }
            `;case"right":return t`
            from {
                opacity: 0;
                transform: translate(-50%,-50%) scale(0);
            }
            to {
                opacity: 1;
                transform: translate(0,-50%) scale(1);
            }
            `}};export{a as TooltipShowUp};
