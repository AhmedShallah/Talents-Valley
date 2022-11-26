import React from "react";
import styled from "styled-components";

export const Container = styled.div`
    width: 703px;
    height: 821px;
    margin: 109px auto;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 20px;
    position: relative;
`;

export const WrapImg = styled.div`
    text-align: center;
`;

export const Back = styled.div`
    position: absolute;
    left: 101px;
    top: 84px;
    font-size: 26px;
    cursor: pointer;
`;

export const TheImage = styled.img`
    width: 123px;
    height: 93px;
    margin-top: 16px;
    margin-bottom: -60px;
`;
export const Title = styled.h2`
    font: normal normal 600 30px/40px Segoe UI;
    letter-spacing: 1.5px;
    color: #000000;
    text-transform: capitalize;
    margin-bottom: 64px;
`;

export const MainDiv = styled.div`
    margin-left: 101px;
`;

export const MainText = styled.h3`
    margin-top: 0;
    font: normal normal 600 25px/33px Segoe UI;
    letter-spacing: 0.5px;
    color: #000000;
    text-transform: capitalize;
    margin-bottom: 37px;
`;

export const Pargragh = styled.p`
    font: normal normal normal 20px/33px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    margin-bottom: 48px;
    margin-right: 96px;
`;

export const TheForm = styled.form`
    margin: 0 101px 96px 101px;
`;

export const WrapBtn = styled.div`
    margin-top: 96px;
`;

export const TheBtn = styled.button`
    width: 500px;
    height: 60px;
    background: #4375ff 0% 0% no-repeat padding-box;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    font-size: 25px;
    color: #fff;
    margin-bottom: 60px;
`;

export const TextResend = styled.p`
    margin: 0 130px 154px 130px;
    color: #000;
    font: normal normal normal 16px/27px Segoe UI;
`;

export const ResendBtn = styled.span`
    text-decoration: none;
    color: #4375ff;
    cursor: pointer;
`;

export const ErrMsg = styled.p`
    margin: 0;
    padding: 0;
    height: 0
`

const StyledCodeForgot = () => {
    return;
};

export default StyledCodeForgot;
