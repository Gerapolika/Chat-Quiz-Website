import React from "react";
import { Outlet } from "react-router-dom";
import logoQ from "../images/logoQ.png"
import styled from 'styled-components';
import { signOut } from "../firebase";

const LogOutButton = styled.button`
  background: none;
  width: 6em;
  margin: 1.5em 2% 0 0;
  height: 1.9em;
  border: 2px solid #56bab7;
  border-radius: 2px;
  color: #56bab7;
  font-family: Roboto;
  font-weight: 400
`


function Header() {

    const handleClick = () => {
        signOut();
      }
    

    return (
        <>
        <header >
            <div>
                <img src={logoQ} alt="logoQ" className="logoQ" />
            </div>
            <LogOutButton onClick={handleClick}>
                Logout
            </LogOutButton>
        </header>
        <Outlet />
        </>
    )
}

export {Header}