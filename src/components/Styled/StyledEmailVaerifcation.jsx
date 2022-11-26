import styled from "styled-components";

export const Container = styled.div`
    width: 703px;
    height: 754px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 20px;
    margin: 65px auto;
`;

export const MainText = styled.h1`
    margin: 0;
    font: normal normal 600 30px/40px Segoe UI;
    letter-spacing: 0px;
    color: #151617;
    padding-top: 32px;
    text-align: center;
    padding-bottom: 32px;
`;

export const WrapImg = styled.div`
    text-align: center;
    margin: 0px 0 50px 0;
`;

export const MainImg = styled.img`
    width: 89px;
    height: 89px;
`;

export const Pargragh = styled.p`
    font: normal normal 600 20px/40px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    padding: 0 113px 0 131px;
    margin: 0 0 60px 0;
`;

export const TheButton = styled.button`
    background: #4375ff 0% 0% no-repeat padding-box;
    border-radius: 7px;
    width: 500px;
    height: 60px;
    border: none;
    margin: 0 102px 60px 101px;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
`;

export const TextResend = styled.p`
    font: normal normal normal 16px/21px Segoe UI;
    color: #151617;
    text-align: center;
    margin: 0 0 70px 0;
    font-weight: 600;
`;

export const Resend = styled.span`
    color: #4375ff;
    cursor: pointer;
`;

export const ErrMsg = styled.p`
    width: fit-content;
    height: 0;
    margin: 0;
    color: red;
`;

const StyledEmailVaerifcation = () => {
    return <div>StyledEmailVaerifcation</div>;
};

export default StyledEmailVaerifcation;
