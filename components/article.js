import React from "react";
import { css } from "@emotion/react";

const Article = ({ children }) => {
  return (
    <>
      <main css={main}>{children}</main>
    </>
  );
};

export default Article;

const main = css`
  height: 100vh;
  display: flex;
  padding: 16px;
`;
