import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
position: relative;
padding-top: 0.7rem;
cursor: pointer;
display: block;

& span {
  background: #ffffff;
  display: block;
  position: relative;
  width: 3.5rem;
  height: 0.4rem;
  margin-bottom: 0.7rem;
  transition: all ease-in-out 0.2s;
}

.open span:nth-child(2){
  opacity:0
}

.open span:nth-child(3){
  transform: rotate(45deg);
  top: -11px
}

.open span:nth-child(1){
  transform: rotate(-45deg);
  top: 11px
}
`;

const Burgermenu = (props) => {
  return(

    //Burger menu on mobile
    <Wrapper onClick={props.handleNavbar}>
      <div className={props.navbarState ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Wrapper>
  )
}

export default Burgermenu;