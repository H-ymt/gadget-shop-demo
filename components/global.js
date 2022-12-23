import { css } from "@emotion/react";

export const global = css`
  *,
  * :before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    color: #333333;
    background-color: #ffff;
    font-size: 100%;
    text-size-adjust: 100%;
    font-feature-settings: "palt";
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    box-sizing: border-box;
  }

  input,
  button,
  textarea,
  select {
    -webkit-appearance: none;
    appearance: none;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;
