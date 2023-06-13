import { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  margin: 0 4px;
  padding: 4px;
  border: 1px solid white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #545454;
  background-color: white;
  cursor: pointer;
  user-select: none;

  ${props => props?.isActive && css`
    border: 1px solid darkred;
  `}

  ${props => props?.isActive === 'active' && css`
    &:active {
      border: 1px solid darkred;
    }
  `};

  @media (min-width: 576px) {
    padding: 8px;
  }
`;

const Button = memo(function Button({ name, title, isActive, onClick }) {

  return (
    <StyledButton name={name} isActive={isActive} onClick={onClick}>
      {title}
    </StyledButton>
  );
});

export default Button;

Button.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
