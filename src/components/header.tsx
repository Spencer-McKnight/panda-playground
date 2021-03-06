import React from 'react';
import styled from 'styled-components';
import DonateButton from './donate-button';
import Logo from './logo';

const LogoContainer = styled.div`
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;


const Header = () => (
  <NavBar className='navbar navbar-dark bg-dark'>
    <LogoContainer>
      <Logo text={"Panda Rescue ™"} />
    </LogoContainer>
    <DonateButton button={{ link: "https://www.givenow.com.au/", class: "btn btn-info", rel: "noopener noreferrer", target: "_blank" }} text="Donate Now!" />
  </NavBar>
);

export default Header;
