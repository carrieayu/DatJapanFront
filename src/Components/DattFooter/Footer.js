import React from 'react';
import styled from 'styled-components';
import TextInput from '../DattTextInput/TextInput';
import Button from '../DattButton/Button';
import {FaTwitter, FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'

const BOX = styled.div`
    margin-top: 1rem;
    background-color: #12abb1;
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    color: #FDFDFD;
    

    @media (max-width: 1000px) {
        padding: 70px 30px;
      }
`
const CONTAINER = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;

`
const COLUMN = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: left; 
`
const HEADING = styled.a`
    font-size: 18px;
    color: #FDFDFD;
    margin-bottom: 10px;
    text-decoration: none;
    margin-left: 50px;
`
const CONTAIN = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left: 60px;
margin-right: 60px;
`

const FOOTBOTTOM = styled.div`
    border-color: #DDDDDD;
    border-top-style: solid;
    border-width: 3px;
    margin-top: 10px;
    margin-left: 60px;
    margin-right: 60px;
` 

const FOOTCONT = styled.div`
   display: inline-table;
   width: 50%;
   overflow: hidden;
   margin-top: 10px;
   
`
const FOOTLINK = styled.a`
    font-size: 20px;
    color: #FDFDFD;
    font-weight: 300;
    margin-right: 50px;
    text-decoration: none;
    :hover {
        background-color: #ffffff;
        opacity: 0.6;
        color: #000000;
    }
`
const ICONCONT = styled.div`
    display: flex;
    justify-items: center;
    gap: 30px;
`

const BOTTOM = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 60px;
    margin-right: 60px;
`

const Footer = () => {
    return (
        <BOX>
            <h1 style={{fontSize: 40, paddingTop: -10, marginLeft: 60,}}>フッター</h1>
            <CONTAINER>
                <CONTAINER>
                    <COLUMN>
                        <FOOTLINK>約</FOOTLINK>
                        <FOOTLINK>押す</FOOTLINK>
                        <FOOTLINK>食品サービス</FOOTLINK>
                    </COLUMN>
                    <COLUMN>
                        <FOOTLINK>キャリア</FOOTLINK>
                        <FOOTLINK>カスタマーケア</FOOTLINK>
                        <FOOTLINK>麦わら帽子</FOOTLINK>
                    </COLUMN>
            </CONTAINER>
            <CONTAINER>
                    <COLUMN>
                    <h1 style={{fontsize: 18, textAlign: 'center',}}>新鮮な麦わら帽子のニュースを入手</h1>
                    <CONTAIN>
                    <TextInput textsize="txt-large"/>
                    <Button buttonSize="btn--small" buttonStyle="btn--success--outline">入力</Button>
                    </CONTAIN>
                    </COLUMN>
                </CONTAINER>
            </CONTAINER>
            <FOOTBOTTOM>
            <FOOTCONT>
                <FOOTLINK href='#'>利用規約</FOOTLINK>
                <FOOTLINK href='#'>プライバシー</FOOTLINK>
                <FOOTLINK href='#'>アクセシビリティステートメント  </FOOTLINK>
                <FOOTLINK href='#'>大人へのマーケティング  </FOOTLINK>
                <FOOTLINK href='#'>死神</FOOTLINK>
                <FOOTLINK href='#'>アンダーワールド</FOOTLINK>
                <FOOTLINK href='#'>ドラゴン</FOOTLINK>
                <FOOTLINK href='#'>武士</FOOTLINK>
                <FOOTLINK href='#'>射手</FOOTLINK>
                <FOOTLINK href='#'>海洋</FOOTLINK>
            </FOOTCONT>
            </FOOTBOTTOM>
            <BOTTOM>
                <FOOTLINK>ⓒ2022 一つなぎ. ALL Rights Reserved.</FOOTLINK>
                <ICONCONT>
                <FaFacebook size={30} />
                <FaInstagram size={30} />
                <FaTwitter size={30} />
                <FaGithub size={30} />
                </ICONCONT>
            </BOTTOM>

        </BOX>

    )
}

export default Footer;