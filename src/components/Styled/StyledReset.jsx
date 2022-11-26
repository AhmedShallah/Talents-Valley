import styled from "styled-components";

export const Container = styled.div`
    width: 703px;
    height: 821px;
    margin: 109px auto;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 20px;
`;

export const MainDivs = styled.div`
    text-align: center;
`;

export const TheImg = styled.img`
    width: 123px;
    height: 93px;
    margin-top: 16px;
    margin-bottom: -55px;
`;

export const MainText = styled.h2`
    font: normal normal 600 30px/40px Segoe UI;
    letter-spacing: 1.5px;
    color: #000000;
    text-transform: capitalize;
    margin-bottom: 64px;
`;

export const SecondText = styled.h3`
    margin-top: 0px;
    font: normal normal 600 25px/33px Segoe UI;
    letter-spacing: 0.5px;
    color: #000000;
    text-transform: capitalize;
    margin-bottom: 40px;
`;

export const Pargragh = styled.p`
    text-align: center;
    font: normal normal 600 20px/27px Segoe UI;
    letter-spacing: 0.4px;
    color: #707070;
    text-transform: capitalize;
    margin: 40px 148px 100px 148px;
`;

export const TheButton = styled.button`
    width: 500px;
    height: 60px;
    background: #4375ff 0% 0% no-repeat padding-box;
    border-radius: 7px;
    font-size: 25px;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-left: 101px;
    margin-bottom: 230px;
`;

const StyledReset = (props, children) => {
    return;
};

export default StyledReset;
