import styled, { css } from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  touch-action: pan-y;
  background-color: aliceblue;
`;

export const InnerSlider = styled.ul`
  width: 150%;
  display: flex;
  gap: 10px;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  height: 300px;
  max-width: 400px;
  border-radius: 5px;
  background-color: pink;
  position: relative;

  .card-body {
    padding-top: 10px 0;
    display: flex;
    flex-direction: column;
    background-color: purple;
  }

  .card-footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: red;
    width: 100%;
    bottom: 0;
    position: absolute;
  }
`;

export const Button = styled.a<{ $primary?: boolean }>`
  background: transparent;
  color: var(--accent-color);
  display: inline-block;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props) =>
    props.$primary &&
    css`
      background: var(--accent-color);
      color: black;
    `}
`;
