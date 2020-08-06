import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 50px 10px;
`;

export default function About() {
    return (
        <MainDiv>
            <p>
                Full Stack Engineer bla bla bla. With a bla bla bla. Lorem ipsum, foo bar baz. loves to bla bla bla.... starwars!
            </p>
        </MainDiv>
    );
}