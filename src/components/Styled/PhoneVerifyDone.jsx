import styled from "styled-components";

export const Container = styled.div`
    width: 703px;
    height: 754px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 20px;
    opacity: 1;
    margin: 65px auto;
`;

export const MainText = styled.h1`
    margin: 0 0 48px 0;
    font: normal normal 600 30px/40px Segoe UI;
    color: #151617;
    opacity: 1;
    padding: 62px 227px 0 227px;
`;

export const WrapIcon = styled.div`
    margin: 0 0 45px 0;
    text-align: center;
`;

export const Text = styled.p`
    margin: 0 178px 113px 178px;
    font: normal normal 600 20px/40px Segoe UI;
    color: #707070;
    opacity: 1;
    text-align: center;
`;

export const TheButton = styled.button`
    width: 500px;
    height: 60px;
    background: #4375ff 0% 0% no-repeat padding-box;
    border-radius: 7px;
    opacity: 1;
    color: #fff;
    border: none;
    font-size: 25px;
    cursor: pointer;
    margin: 0 101px 227px 101px;
`;

const PhoneVerifyDone = () => {
    return <div>PhoneVerifyDone</div>;
};

export default PhoneVerifyDone;
