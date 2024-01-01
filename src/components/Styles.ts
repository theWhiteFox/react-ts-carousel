import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  touch-action: pan-y;
  background-color: aliceblue;
  min-width: 1250px;
  margin: 0 auto;
`;

export const CarouselTrack = styled.ul`
  display: flex;
  gap: 10px;
  position: absolute;
  min-width: 100%;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 1rem;
  transition: transform 0.3s ease-out;
  width: 100%;

  .is-swiping {
    transition: none;
  }
`;

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

export const Card = styled.li`
  flex: 0 0 auto;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 300px;
  /* max-width: 400px; */
  border-radius: 5px;
  background-color: pink;
  position: relative;
  flex-shrink: 0;

  .card-body {
    padding-top: 10px 0;
    display: flex;
    flex-direction: column;
    background-color: purple;
    align-items: center;
    height: auto;
    user-select: none;
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

const COLOR = {
  primary: css`
    color: #fff;
    background: linear-gradient(#3f3cfe, #e943d5);
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

export const StyledButton = styled.button<ButtonProps>`
  margin: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`;

// export const StyledButton = styled.button<{ $primary?: boolean }>`
//   display: inline-block;
//   color: #bf4f74;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;
//   display: block;
//   transition: all 200ms ease-in-out;

//   &:hover {
//     filter: brightness(0.85);
//   }

//   &:active {
//     filter: brightness(1);
//   }

//   /* The GitHub button is a primary button
//    * edit this to target it specifically! */
//   ${(props) =>
//     props.$primary &&
//     css`
//       background: var(--accent-color);
//       color: black;
//     `}
// `;
