import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNav = () => {
  return (
    <nav style={{ display: 'flex' }}>
      <Link to="/login" style={{ marginRight: 20, textDecoration: 'none' }}>
        Login
      </Link>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        Registation
      </Link>
    </nav>
  );
};
const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: #f59256;
    border-radius: 4px;
  }
  @media screen and (min-width: 1280px) {
    &&:nth-last-child(2) {
      margin-left: 352px;
    }
  }
`;