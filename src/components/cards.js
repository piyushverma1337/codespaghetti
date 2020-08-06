import React from 'react';
import styled from 'styled-components';
import { tales } from '../tales';

import { IoIosArrowForward } from 'react-icons/io';

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 60%;
    height: calc(100vh - 20px);
    overflow: auto;
    /* background-color: pink; */
`;

const TalesDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    margin: 5px 0px;
    border: 1px solid black;
    border-radius: 5px;
`;

const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        margin: 0px;
    }
    .expand-arrow {
        height: 2em;
        width: 2em;
        margin-right:20px;
        color: #209cee;
        -moz-transition: all 0.4s ease;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
    }
    .down{
        -moz-transform:rotate(90deg);
        -webkit-transform:rotate(90deg);
        transform:rotate(90deg);
    }
`;

const DetailDiv = styled.div`
    display: flex;
    align-items: center;
    .tag {
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
    }
    .date {
        background-color: grey;
        color: #ffffff;
    }
    .type {
    }
`;

const tagColors = { JavaScript: '#f0db4f', React: '#5fd9fb' };

export default function Cards() {
    const [collapsed, setCollapsed] = React.useState(tales.map((tale, i) => i === 0 ? false : true));

    const collapse = (i, ogCollapsed) => {
        let collapsed = [...ogCollapsed];
        collapsed[i] = !collapsed[i];
        setCollapsed(collapsed);
    };

    return (
        <MainDiv>
            {tales.map((tale, i) => (
                <TalesDiv key={i}>
                    <HeaderDiv>
                        <h1>{tale.title}</h1>
                        <IoIosArrowForward className={`expand-arrow ${!collapsed[i] ? 'down' : ''}`} onClick={() => collapse(i, collapsed)} />
                    </HeaderDiv>
                    <DetailDiv>
                        <div className="tag date">{tale.date}</div>
                        <div className="tag type" style={{ backgroundColor: tagColors[tale.type] }}>{tale.type}</div>
                    </DetailDiv>
                    <p>{tale.content[0].value}</p>
                    <div>
                        {!collapsed[i] &&
                            tale.content.map(({ type, value }, i) => {
                                if (/^text/.test(type)) return <p key={i}>{value}</p>;
                                else if (/^code/.test(type)) return <code key={i}>{value}</code>;
                                else return null;
                            })
                        }
                    </div>
                </TalesDiv>
            ))}
        </MainDiv>
    )
}