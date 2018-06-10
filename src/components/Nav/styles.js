import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-height: ${props => props.isCollapsed ? '60px' : '120px' };
  padding: 5px 8px;
  box-sizing: border-box;
  transition: max-height 0.2s ease-out;
`;

export const StyledNavList = styled.ul`
  display: ${props => props.isCollapsed ? 'none' : 'flex' }
  flex-direction: column;
  width: 100%;
`;

export const Hamburger = styled.button`
  padding: 0.50rem 0.75rem;
  background-color: transparent;
  border: none;
`
