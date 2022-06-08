import React from 'react';
import styled from 'styled-components';
import Button from './Components/Button';
import Label from './Components/Label';
import {FaHeart} from 'react-icons/fa';
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import './assets/main.scss'
import Card from './Components/Card';


const App = (props) => {

  const date = new Date().toLocaleDateString()

  const StyledContainer = styled.div`
    max-width: 500px;
    width: 100%;
    margin: auto;
  `

  const onCommentClick = () => alert('You clicked comments')
  const onLikesClick = () => alert('You clicked comments')
  const onViewsClick = () => alert('You clicked comments')

  const buttons = [
    {
      label: (
        <>
          <FaCommentAlt /> 1.5k Comments
        </>
      ),
      onClick: onCommentClick,
    },
    {
      label: (
        <>
          <FaThumbsUp /> 5.6k Likes
        </>
      ),
      onClick: onLikesClick,
    },
    {
      label: (
        <>
          <FaRegEye /> 18.3k Views
        </>
      ),
      onClick: onViewsClick,
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Label sizeFont="lbl-fontExLarge" fontWeight="lbl-bold"><FaHeart/>FontStyle</Label>
        <div>
        <Button buttonStyle="btn--danger--solid" buttonSize="btn--exlarge" buttonBorder="btn-box" > Login </Button>
        </div>
      </header>
         <StyledContainer>
          <Card
            title="The Benefits of Them Apples"
            date={date}
            description="Green apples have a high fiber content which helps in increasing the
            body's metabolism. While consuming an apple, make sure that you're not
            tossing the peel in the trash. Consuming apple with its peel improves
            the overall health. Due to its high fiber content, apple helps in
            detoxification process. It keeps the liver and digestive system away
            from harmful elements."
            actions={buttons}
            cardColor="card-white"
          />
         </StyledContainer>
    </div>
  );
}

export default App;
