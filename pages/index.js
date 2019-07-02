import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "@emotion/styled";
import { keyframes, css, Global } from "@emotion/core";

const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;
const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`;
const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;

const Basic = styled.div`
  ${basicStyles};
`;

const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`;
const Animated = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${props => props.animation} 0.2s infinite ease-in-out alternate;
`;

const Foo = styled.div`
  ${basicStyles}
  color: red;
`;
const Bar = styled.div(
  basicStyles,
  css`
    color: red;
  `
);

export default () => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          html,
          body {
            padding: 3rem 1rem;
            margin: 0;
            background: papayawhip;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 24px;
          }
        `}
      />
      <Head>
        <title>With Emotion</title>
      </Head>
      <div>
        <Link href="/foo">Foo</Link>
        <Foo>Foo</Foo>
        <Bar>Bar</Bar>
        <div
          css={[
            css`
              color: blue;
            `,
            css`
              color: red;
            `
          ]}
        >
          Baz
        </div>
      </div>
    </React.Fragment>
  );
};
