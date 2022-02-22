import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  color: white;
  font-size: 20px;
  margin-left: 10px;
`;

const Logo = () => (
  <Container>
    <svg width="130px" height="45px">
      <path
        fill="#FFF"
        d="M29 10.4c-2.5 0-5.4 1.1-6.7 3.4V11h-7v24h7.3V21.4c0-2.4 1.5-4.2 3.9-4.2 2.6 0 3.9 1.8 3.9 4.1v13.9h7.3V20c0-5.3-2.7-9.6-8.7-9.6zm45 17.3c-2.9 0-5-2-5-5.4a5 5 0 0 1 5-5.3c2.8 0 5.2 2 5.2 5.3S77 27.7 74 27.7zm5.4-14.1c-.7-1.3-2.8-3-6.7-3-6.5 0-11 5.4-11 11.7 0 6.7 4.7 11.7 11 11.7 3.5 0 5.6-1.4 6.4-2.7v1.2c0 4.3-2.2 6-5.9 6a5 5 0 0 1-5.1-4l-6.5 2c.7 4.2 5 8.5 12 8.5 8.9 0 12.7-6 12.7-13V11h-7v2.6zM89.5 0h7.3v12.6a9 9 0 0 1 6.2-2.2c6.2 0 9 4.3 9 9.6v15h-7.3V21.3c0-2.3-1.3-4.1-4-4.1-2.2 0-3.7 1.6-3.9 3.8v14.2h-7.3V0zM51.4 35h7.3V11h-7.3zm-3.2 0V.2H41v35h7.3zM4.7 35H12V11H4.7zM130 1.5h-8.4l-3 7h6.1zM0 1.5h8.4l3 7h-6zM113.6 11v6.5h4.3v10.3c0 4.7 3 7.7 8 7.7 2.3 0 3.5-.5 3.8-.7v-6a9 9 0 0 1-2 .2c-1.6 0-2.6-.6-2.6-2.5v-9h4.7V11h-16.2zM55 .9a3.8 3.8 0 0 0 0 7.5A3.8 3.8 0 1 0 55 1"
      />
    </svg>,
    <Text>Panda Rescue &trade;</Text>
  </Container>
);

export default Logo;
