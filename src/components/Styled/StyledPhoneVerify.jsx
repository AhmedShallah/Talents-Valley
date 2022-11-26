import styled from "styled-components";

export const Container = styled.div`
    width: 703px;
    height: 754px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 20px;
    opacity: 1;
    margin: 65px auto;
    padding: 0;
`;

export const MainText = styled.h1`
    font: normal normal 600 30px/40px Segoe UI;
    letter-spacing: 0px;
    color: #151617;
    opacity: 1;
    margin: 0 0 28px 0;
    padding: 32px 227px 0 227px;
`;

export const WrapImg = styled.div`
    margin: 0 0 50px 0;
    text-align: center;
`;

export const TheImg = styled.img`
    width: 100px;
    height: 100px;
`;

export const Pargraph = styled.p`
    font: normal normal 600 20px/40px Segoe UI;
    color: #707070;
    opacity: 1;
    margin: 0 118px 60px 118px;
`;

export const TheForm = styled.form`
    margin-top: 60px;
`;

export const TheButton = styled.button`
    width: 500px;
    height: 60px;
    background: #4375ff 0% 0%;
    border-radius: 7px;
    opacity: 1;
    border: none;
    font-size: 25px;
    margin: 0 101px 60px 101px;
    color: #fff;
    cursor: pointer;
`;

export const TextResend = styled.p`
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #000000;
    text-align: center;
    margin: 0 0 80px 0;
    font-weight: 600;
`;

export const Resend = styled.span`
    color: #4375FF;
    cursor: pointer;
`

const StyledPhoneVerify = () => {
    return <div>StyledPhoneVerify</div>;
};

export default StyledPhoneVerify;
