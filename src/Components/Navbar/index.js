import React from 'react'
import {Nav,NavLink, Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements.js'
import Button from '../Button'
const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to='/'>
                <h1>SmartHR</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to='/Screen1' activeStyle>
                SmartHRとは
                </NavLink>
                <NavLink to='/Screen2' activeStyle>
                機能
                </NavLink>
                <NavLink to='/Screen3' activeStyle>
                料金
                </NavLink>
                <NavLink to='/Screen4' activeStyle>
                導入事例
                </NavLink>
                <NavLink to='/Screen5' activeStyle>
                お知らせ・イベント
                </NavLink>              
            </NavMenu>
            <NavBtn>
                <Button buttonStyle="btn--success--outline" buttonSize="btn--small" buttonBorder="btn-box">
                ログイン
                </Button>
                <Button buttonStyle="btn--primary--white" buttonSize="btn--small" buttonBorder="btn-semiCircle">
                お問い合わせ
                </Button>
                <Button buttonStyle="btn--secondary--solid" buttonSize="btn--small" buttonBorder="btn-semiCircle">
                お役立ち資料
                </Button>   
                {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                <NavBtnLink to='/signup'>Sign up</NavBtnLink> */}

            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar