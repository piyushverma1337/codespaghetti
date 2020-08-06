import React from 'react';
import styled from 'styled-components';

import About from './components/about';
import Cards from './components/cards';
import Links from './components/links';

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 10px 0px 10px;
`;

export default function App() {
  return (
    <MainDiv>
      <About />
      <Cards />
      <Links />
    </MainDiv>
  );
}