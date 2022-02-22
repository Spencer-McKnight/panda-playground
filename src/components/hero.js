import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/hero.jpg';

const Image = styled.img`
  width: 100%;
`;

const Hero = () => (
  <div>
    <Image src={heroImage}  alt="Giant Panda 🐼" />
  </div>
);

export default Hero;
