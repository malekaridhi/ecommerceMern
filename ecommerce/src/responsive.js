import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
      ${props}
    }
  `;
};