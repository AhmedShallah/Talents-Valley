import React from "react";
import styled from "styled-components";
export const SignUpContainer = styled.div`
    margin-bottom: 0;
`;

export const WrapImage = styled.div`
    text-align: center;
    margin-bottom: 0;
`;

export const Image = styled.img`
    width: 123px;
    height: 93px;
    padding-top: 8px;
    margin-bottom: -60px;
`;

export const MainText = styled.h3`
    font: normal normal 600 30px/40px Segoe UI;
    letter-spacing: 1.5px;
    color: #000000;
    text-transform: capitalize;
    margin-bootom: 38px;
`;

export const OtherText = styled.h4`
    font: normal normal 600 25px/33px Segoe UI;
    letter-spacing: 0.5px;
    color: #000000;
    text-transform: capitalize;
    margin: 22px 350px 34px 101px;
`;

export const WarpInputs = styled.div`
    display: flex;
    margin-left: 101px;
    margin-bottom: 35px;
`;

export const InputsLeft = styled.div`
    margin-right: 32px;
`;

export const Pargrph = styled.p`
    font: normal normal 600 18px/24px Segoe UI;
    letter-spacing: 0.36px;
    color: #707070;
    text-transform: capitalize;
    margin-top: 0;
    margin-bottom: 10px;
`;

export const AllInput = styled.input`
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #bec2c6;
    border-radius: 7px;
    width: 234px;
    height: 60px;
    padding: 20px 75px 19px 16px;
    font-size: 16px;
    color: #000;
`;

export const WrapMain = styled.div`
    margin-left: 101px;
    position: relative;
`;

export const InputsOther = styled.input`
    width: 500px;
    height: 60px;
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    border: 1px solid #bec2c6;
    color: #000;
    border-radius: 7px;
    padding: 20px 200px 19px 16px;
`;

export const TheSelect = styled.select`
    width: 500px;
    height: 60px;
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    border: 1px solid #bec2c6;
    color: #000;
    border-radius: 7px;
    padding: 20px 200px 19px 16px;
    appearance: none;
`;

export const TheButton = styled.button`
    width: 500px;
    height: 60px;
    background-color: #4375ff;
    color: #fff;
    font-size: 25px;
    cursor: pointer;
    padding: 13px 196px 14px 208px;
    margin: 0;
    border: none;
    border-radius: 7px;
`;

export const SecondText = styled.p`
    margin-left: 135px;
    font: normal normal normal 16px/27px Segoe UI;
    margin-bottom: 47px;
    margin-top: 50px;
`;

export const TheLink = styled.a`
    text-decoration: none;
    color: #4375ff;
`;

const Header = (props) => {
    return <InputsOther as={props.as}>{props.children}</InputsOther>;
};

export default Header;
