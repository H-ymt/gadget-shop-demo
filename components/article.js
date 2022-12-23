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
  display: flex;
  align-items: center;
  justify-content: center;
`;
