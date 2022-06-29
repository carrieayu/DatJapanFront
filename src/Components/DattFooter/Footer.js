import React from 'react';
import styled from 'styled-components';
import {FaTwitter, FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'
import {BOX, CONTAINER, CONTAINERX, CONTAINERY, ROW, COLUMN, TITLE, UL, LI, FOOTLINK, SOCIALLINK} from '../../assets/styles';
import Label from '../DattLabel/Label';
import TextInput from '../DattTextInput/TextInput';
import Button from '../DattButton/Button';


const Footer = () => {
    return (
        <BOX>
            <CONTAINER>
                <CONTAINERX>
                <Label sizeFont='lbl-fontLarge'>練習</Label>
                <CONTAINERY>
                <TextInput></TextInput>
                <Button buttonStyle='btn--success--solid' buttonSize='btn--small' buttonBorder='btn-semiCircle'>入力</Button>
                </CONTAINERY>
                </CONTAINERX>
                <ROW>
                    <COLUMN>
                    <TITLE>会社</TITLE>
                    <UL>
                        <LI><FOOTLINK href="#">我ら</FOOTLINK></LI>
                        <LI><FOOTLINK href="#">サービス</FOOTLINK></LI>
                        <LI><FOOTLINK href="#">ポリシー</FOOTLINK></LI>
                        <LI><FOOTLINK href="#">プログラム</FOOTLINK></LI>
                    </UL>
                    </COLUMN>
                    <COLUMN>
                    <TITLE>救い</TITLE>
                    <UL>
                        <LI><FOOTLINK href="#">質問</FOOTLINK></LI>
                        <LI><FOOTLINK href="#">運送</FOOTLINK></LI>
                        <LI><FOOTLINK href="#">戻る</FOOTLINK></LI>
                        <LI><FOOTLINK href="#">注文の状況</FOOTLINK></LI>
                        <LI><FOOTLINK href="#">支払い</FOOTLINK></LI>
                    </UL>
                    </COLUMN>
                    <COLUMN>
                    <TITLE>店</TITLE>
                    <UL>
                        <LI><FOOTLINK href="#">見る</FOOTLINK></LI>
                        <LI><FOOTLINK href="#">かばん</FOOTLINK></LI>
                        <LI><FOOTLINK href="#">ポ靴</FOOTLINK></LI>
                        <LI><FOOTLINK href="#">着物</FOOTLINK></LI>
                    </UL>
                    </COLUMN>
                    <COLUMN>
                    <TITLE>従う</TITLE>
                        <SOCIALLINK><FaFacebook/></SOCIALLINK>
                        <SOCIALLINK><FaInstagram/></SOCIALLINK>
                        <SOCIALLINK><FaTwitter/></SOCIALLINK>
                        <SOCIALLINK><FaGithub/></SOCIALLINK>

                    </COLUMN>
                </ROW>
            </CONTAINER>

        </BOX>
    )
}

export default Footer;