import styled from 'styled-components';

export const ShowCase = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const ListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;

    padding: 0;
    list-style: none;
`;

export const ItemCard = styled.li`
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;

    margin: 2em;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 410;
    width: 250px;
    padding: 5px;
`;

export const Image = styled.img`
    width: 50px;
    height: 100px;
`;

export const Product = styled.h2`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

export const AddButton = styled.button`
    margin: 2em 0 1em 0;
    padding: 0.5em 1.5em;

    letter-spacing: 2px;
    font-size: 10px;
    color: grey;

    border: 1px solid grey;
    border-radius: 5px;
    background-color: transparent;

    :hover {
        cursor: pointer;
        color: black;
        border: 1px solid black;

        transition: all 0.4s;
    }
`;
