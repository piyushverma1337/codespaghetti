import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 50px 10px;
`;

export default function Links() {
    return (
        <MainDiv>
            <p>Links</p>
            <p>Links will be here!</p>
            <p>Very soon</p>
            <p>ish...</p>
        </MainDiv>
    );
}