import { css } from 'styled-components';

export const overflowX = () => css`
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 0;
  }
`;

export const Item = () => css`
  margin-bottom: 1px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 8px 2px;

  p {
    color: #545454;
  }
`;

export const Layer = ({ width, bottom, left }) => css`
  position: absolute;
  bottom: ${bottom};
  left: ${left};
  width: ${width};
  height: 6px;
  content: '';
  background-color: white;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
`;
