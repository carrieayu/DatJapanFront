import React from 'react';
import styled from 'styled-components';
import "../../assets/css/Card.css"

const Title = styled.h1`
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Date = styled.div`
    color: #eb3f27;
    font-weight: 500;
    font-family: monospace;
    margin: 6px 0;
    @media (max-width: 500px) {
    font-size: 0.8rem;
    }
`
const Description = styled.p`
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
  `
const ActionButton = styled.button`
    margin: 0 5px;
    padding: 8px 14px;
    color: #fff;
    background-color: #000;
    align-items: center;
    cursor: pointer;
    svg {
        transform: translateY(2px);
        margin-right: 5px;
      }
    width: 100%;
    border: 1px solid #fff;
    outline: 0;
    font-weight: 300;
    :hover {
    opacity: 0.2;
    }
    @media (max-width: 500px) {
        flex-direction: column;
        & button {
          width: 100%;
          margin-bottom: 4px;
          font-size: 0.65rem;
        }
      }
`

const BACKGROUND = [
    "card-white",
    "card-black",
    "card-primary",
    "card-secondary",
    "card-red",
    "card-green"
]




const Card = ({props, title, date, description, actions, cardColor}) => {

    const checkCardColor = BACKGROUND.includes(cardColor) ? cardColor :BACKGROUND[0];

  
    return (
        <div className={`cardsimple ${checkCardColor}`}>  
            <Title>{title}</Title>
            <Date>{date}</Date>
            <Description>{description}</Description>
            <div className='cardButtons'>
            {actions.map(({ label }) => (
            <ActionButton>{label}</ActionButton>
            ))}
            </div>        
         </div>
    )
}




export default Card