import { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 104px;

  h1 {
    font-family: 'Archivo', sans-serif;
    font-size: 128px;
    font-weight: 100;
    line-height: 0.8;
    text-align: center;
    color: #eadcdc;
  }
`;

const Header = memo(function Header({ heading }) {

  return (
    <StyledHeader><h1>{heading}</h1></StyledHeader>
  );
});

export default Header;

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};
