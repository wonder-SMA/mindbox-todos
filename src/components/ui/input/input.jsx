import { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 75%;
  border: 1px solid darkgray;
  border-radius: 8px;
  margin: 10px;
  padding: 10px 15px;
  font-size: 24px;
  color: #545454;
  outline: none;
  box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
  user-select: text;
  transition: all 0.2s;

  @media only screen and (hover: hover) {
    &:hover {
      box-shadow: 0 0 8px 4px rgb(0 0 0 / 15%);
      transition: all 0.2s;
    }
  }

  &:focus {
    border: 1px solid gray;
    box-shadow: 0 0 8px 4px rgb(0 0 0 / 20%);
    transition: all 0.2s;
  }

  ::placeholder {
    color: #d3d3d3;
  }
`;

const Input = memo(function Input({ name, value, placeholder, onChange }) {
  // Внутренний стейт по умолчанию с переданным value
  const [inputValue, setInputValue] = useState(value || '');

  // Обновление стейта, если передан новый value
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Обработчик изменений в поле
  const changeHandler = useCallback(event => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  }, [onChange]);

  return (
    <StyledInput
      type="text"
      name={name || ''}
      value={inputValue || ''}
      placeholder={placeholder || ''}
      onChange={changeHandler}
    />
  );
});

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
