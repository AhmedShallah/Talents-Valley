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

export const WrapImage = styled.div`
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

export const MainText = styled.h2`
    font: normal normal 600 30px/40px Segoe UI;
    font-size: 30px;
    margin-bottom: 64px;
`;

export const SecondText = styled.h3`
    margin-top: 0;
    margin-left: 101px;
    font: normal normal 600 25px/33px Segoe UI;
    letter-spacing: 0.5px;
    color: #000000;
    text-transform: capitalize;
    margin-bottom: 35px;
`;

export const TheForm = styled.form`
    margin-left: 101px;
`;

export const MainDivs = styled.div`
    margin-bottom: 35px;
    position: relative;
`;

export const TheLabel = styled.h5`
    margin-top: 0;
    margin-bottom: 6px;
    font: normal normal 600 20px/27px Segoe UI;
    letter-spacing: 0.4px;
    color: #707070;
    text-transform: capitalize;
`;

export const TheInput = styled.input`
    width: 500px;
    height: 60px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #bec2c6;
    border-radius: 7px;
    padding: 25px;
    font-size: 20px;
`;

export const TheButton = styled.button`
    width: 500px;
    height: 60px;
    background: #4375ff 0% 0% no-repeat padding-box;
    border-radius: 7px;
    border: none;
    font-size: 25px;
    cursor: pointer;
    margin-bottom: 229px;
    color: #fff;
`;

const StyledCreateNewPassword = () => {
    return;
};

export default StyledCreateNewPassword;
