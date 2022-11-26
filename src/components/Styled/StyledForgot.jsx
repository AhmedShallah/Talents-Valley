import React from "react";
import styled from "styled-components";

export const ContainerForgot = styled.div`
    margin: 66px auto;
    width: 703px;
    height: 821px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 20px;
    opacity: 1;
    position: relative;
`;

export const BackDiv = styled.div`
    z-index: 3;
    position: absolute;
    left: 255px;
    top: 50px;
`;

export const MainImage = styled.div`
    text-align: center;
`;

export const TheImage = styled.img`
    width: 123px;
    height: 93px;
    margin-top: 16px;
    margin-bottom: -45px;
`;

export const Text = styled.h2`
    font: normal normal 600 30px/40px Segoe UI;
    font-size: 30px;
    margin-bottom: 64px;
`;

export const MainDivs = styled.div`
    margin-left: 101px;
`;

export const Title = styled.h1`
    font-size: 25px;
    font: normal normal 600 25px/33px Segoe UI;
    letter-spacing: 0.5px;
    color: #000000;
    text-transform: capitalize;
    margin-bottom: 24px;
`;

export const Pargragh = styled.p`
    font: normal normal normal 20px/27px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    margin-bottom: 48px;
`;

export const Feild = styled.div`
    margin-bottom: 96px;
`;

export const TextFeild = styled.h5`
    font: normal normal 600 20px/27px Segoe UI;
    letter-spacing: 0.4px;
    color: #707070;
    text-transform: capitalize;
    margin-bottom: 9px;
`;

export const TheInput = styled.input`
    width: 500px;
    height: 60px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #bec2c6;
    border-radius: 7px;
    padding: 16px;
    font: normal normal normal 20px/27px Segoe UI;
    letter-spacing: 0px;
    outline: none;
`;

export const ErrMsg = styled.p`
    margin: 0;
    height: 0;
    padding: 0;
`;

export const TheButton = styled.button`
    width: 500px;
    height: 60px;
    background: #4375ff 0% 0% no-repeat padding-box;
    border-radius: 7px;
    font: normal normal 600 25px/33px Segoe UI;
    letter-spacing: 0px;
    color: #ffffff;
    border: none;
    cursor: pointer;
    margin: 0;
    margin: 0 0 247px 0;
`;

const StyledForgot = () => {
    return;
};

export default StyledForgot;
