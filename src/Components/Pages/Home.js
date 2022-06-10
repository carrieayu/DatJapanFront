import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Label from '../Label';
import {FaHeart} from 'react-icons/fa';
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
// import './assets/main.scss'
import Card from '../Card';
// import './App.css';
import Navbar from '../Navbar';

const Home = (props) => {

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
      <div>
        <Navbar></Navbar>

      <div className="App">
        
        <header className="App-header">
          <Label sizeFont="lbl-fontMedium" fontWeight="lbl-bold"><FaHeart/>Ferjohn Amistad</Label>
          <div>
          <Button buttonStyle="btn--danger--solid" buttonSize="btn--exlarge" buttonBorder="btn-semiCircle" > Login </Button>
          </div>
        </header>
           <StyledContainer>
            <Card
              title="オーバー・ザ・ウィントリー"
              date={date}
              description="私はちょうどセックスをした
              そして、とても気持ち良かった
              ある女性が私のペニスを彼女の中に入れさせてくれた 
              私はちょうどセックスをした
              もう二度と戻らないわ
              昔のようにセックスをしないことには"
              actions={buttons}
              cardColor="card-white"
            />
            
           </StyledContainer>
           
      </div>
      </div>
    );
  }
  
  export default Home;
  