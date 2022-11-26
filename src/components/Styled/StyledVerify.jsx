import styled from "styled-components";

export const Cotainer = styled.div`
    width: 703px;
    height: 834px;
    background: #ffffff 0% 0%;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 20px;
    opacity: 1;
    margin: 65px auto;
`;

export const MainText = styled.h2`
    font: normal normal 600 30px/40px Segoe UI;
    letter-spacing: 0px;
    color: #151617;
    text-align: center;
    margin: 0;
    padding-top: 32px;
    margin-bottom: 37px;
`;

export const SecondText = styled.h4`
    font: normal normal 600 20px/27px Segoe UI;
    color: #151617;
    padding-left: 113px;
    margin: 0 0 32px 0;
`;

export const WrapBoxes = styled.div`
    display: grid;
    gap: 16px;
`;

export const TheBox = styled.div`
    padding: 0;
    background: #f3f4f6 0% 0% no-repeat padding-box;
    border: 1px solid #e2e2e2;
    border-radius: 7px;
    width: 476px;
    height: 88px;
    margin-left: 118px;
    display: flex;
    justify-content: space-between;
`;

export const BoxContent = styled.div`
    display: grid;
`;

export const TheDisc = styled.h5`
    font: normal normal normal 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: #151617;
    margin: 20px 130px 0px 24px;
`;

export const TheInfo = styled.p`
    font: normal normal normal 14px/19px Segoe UI;
    letter-spacing: 0px;
    color: #151617;
    margin-top: 0px;
    margin-left: 24px;
`;

export const TheChoice = styled.p`
    margin: 0px 100px 0px 122px;
    font: normal normal normal 14px/19px Segoe UI;
    letter-spacing: 0px;
    color: #151617;
`;

export const WrapButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
`;

export const ButtonVerify = styled.button`
    background: #4375ff 0% 0% no-repeat padding-box;
    border: 1px solid #e2e2e2;
    border-radius: 7px;
    width: 114px;
    height: 31px;
    color: #fff;
    font: normal normal normal 14px/19px Segoe UI;
    cursor: pointer;
`;

export const ButtonContinue = styled.button`
    margin-left: 118px;
    width: 478px;
    height: 60px;
    background-color: #4375ff;
    margin-top: 60px;
    color: #fff;
    border: none;
    font-size: 25px;
    border-radius: 7px;
    cursor: pointer;
    margin-bottom: 111px;
`;

const StyledVerify = () => {
    return;
};

export default StyledVerify;
