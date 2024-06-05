import { keyframes } from "@emotion/react";
export const TooltipShowUp = (position: string) => {
  switch (position) {
    case "bottom":
      return keyframes`
                    from {
                    opacity: 0;
                    transform: translate(50%,-70%) scale(0);
                    }
                    to {
                    opacity: 1;
                    transform: translate(50%,0) scale(1);
                    }
                `;
    case "top":
      return keyframes`
            from {
            opacity: 0;
            transform: translate(50%,70%) scale(0);
            }
            to {
            opacity: 1;
            transform: translate(50%,0) scale(1);
            }
        `;
    case "left":
      return keyframes`
            from {
                opacity: 0;
                transform: translate(50%,-50%) scale(0);
            }
            to {
                opacity: 1;
                transform: translate(0,-50%) scale(1);
            }
            `;
    case "right":
      return keyframes`
            from {
                opacity: 0;
                transform: translate(-50%,-50%) scale(0);
            }
            to {
                opacity: 1;
                transform: translate(0,-50%) scale(1);
            }
            `;
    default:
      break;
  }
};
