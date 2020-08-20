import React from 'react';
import styled from 'styled-components';

import docker from '../assets/logos/docker.png';
import javascript from '../assets/logos/javascript.png';
import mongodb from '../assets/logos/mongodb.png';
import nodejs from '../assets/logos/nodejs.png';
import postgres from '../assets/logos/postgres.png';
import python from '../assets/logos/python.png';
import react from '../assets/logos/react.png';
import vscode from '../assets/logos/vscode.png';
import rpi from '../assets/logos/rpi.png';

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 50px 10px;
    p {
        margin: 5px !important;
    }
`;

const LogoDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0px;
    img {
        height: 50px;
        padding: 5px 10px;
        transition: all .2s ease-in-out;
        :hover {
            transform: scale(1.1);
        }
    }
`;

export default function About() {
    return (
        <MainDiv>
            <p style={{ fontSize: "25px" }}>
                Full Stack Engineer always looking for new and better ways to do things.
            </p>
            <p style={{ fontStyle: "italic" }}>
                I spend my spare time on video games, budget audiophilery and youtube.
            </p>
            <p style={{ fontSize: "20px" }}>
                Current stack includes NodeJS, React, Postgres and Docker.
            </p>
            <p style={{ fontStyle: "italic" }}>
                Other things that i know my way around Python, Angular, SBCs and Microcontrollers (RaspberryPi, Arduino, ESP)
            </p>            
            <p style={{ fontSize: "9px", fontStyle: "italic" }}>
                **this is just a place for my shenanigans
                <br />
                ***arigato for coming
            </p>
            <LogoDiv>
                <img src={vscode} alt="vscode"></img>
                <img src={javascript} alt="javascript"></img>
                <img src={nodejs} alt="nodejs"></img>
                <img src={postgres} alt="postgres"></img>
                <img src={react} alt="react"></img>
                <img src={docker} alt="docker"></img>
                <img src={mongodb} alt="mongodb"></img>
                <img src={python} alt="python"></img>
                <img src={rpi} alt="raspberrypi"></img>
            </LogoDiv>
        </MainDiv>
    );
}