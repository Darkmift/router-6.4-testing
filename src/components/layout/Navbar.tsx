import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
`;

const StyledLink = styled.div`
  padding: ${({ $padding }: { $padding: string }) => ($padding ? $padding : '10px 0;')};
  .link-to {
    text-decoration: none;
    color: #000;
    background-color: #fff;
    padding: 10px;
  }
  cursor: pointer;
  &:hover {
    filter: brightness(85%);
  }
`;

const LinkTab = ({ name, path }: { [key: string]: string }) => {
  return (
    <StyledLink $padding={'10px 0'}>
      <Link className="link-to" to={path}>
        {name}
      </Link>
    </StyledLink>
  );
};

type NavBarProps = {
  isLoggedIn: boolean;
  toggleLoggedIn: Dispatch<SetStateAction<boolean>>;
  routes: Array<{
    name: string;
    path: string;
    protected?: boolean;
  }>;
};

const Navbar = ({ isLoggedIn, toggleLoggedIn, routes }: NavBarProps) => {
  return (
    <StyledWrapper>
      {routes?.length
        ? routes
            .filter((r) => {
              console.log('🚀 ~ file: Navbar.tsx ~ line 72 ~ .filter ~ r', r);
              return !isLoggedIn && r.protected ? false : true;
            })
            .map(({ name, path }, i) => <LinkTab key={name + i} name={name} path={path} />)
        : ''}
      <StyledLink $padding={'0'} onClick={() => toggleLoggedIn((v) => !v)}>
        <div className="link-to">{isLoggedIn ? 'Logout' : 'Log In'}</div>
      </StyledLink>
    </StyledWrapper>
  );
};

export default Navbar;
