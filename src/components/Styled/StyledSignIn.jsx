import styled from "styled-components";

export const ContainerSignIn = styled.div`
    width: 703px;
    height: 821px;
    margin: 109px auto;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 20px;
`;

export const WrapImg = styled.div`
    text-align: center;
`;

export const ImageLogo = styled.img`
    width: 123px;
    height: 93px;
    margin-top: 16px;
    margin-bottom: -60px;
`;

export const TextMain = styled.h2`
    font: normal normal 600 30px/40px Segoe UI;
    font-size: 30px;
    margin-bottom: 59px;
`;

export const OtherText = styled.h3`
    font-size: 20px;
    font: normal normal 600 20px/27px Segoe UI;
    letter-spacing: 0.4px;
    color: #000000;
    text-transform: capitalize;
    margin-left: 101px;
    margin-bottom: 42px;
`;

export const WrapForm = styled.form`
    display: grid;
    margin-left: 101px;
    gap: 35px;
`;

export const WrapLabels = styled.div`
    display: grid;
    position: relative;
`;

export const TheLabel = styled.label`
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
    border: 1px solid
        ${(props) => {
            return props.isValid ? "#bec2c6" : "red";
        }};
    border-radius: 7px;
    font-size: 20px;
    padding: 16px;
`;

export const TheWarn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
`;

export const MsgError = styled.p`
    margin: 0;
    display: flex;
    align-items: center;
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #ee404c;
`;

export const ForgotPass = styled.div`
    width: 38%;
`;

export const TheBtn = styled.button`
    width: 500px;
    height: 60px;
    background: #4375ff 0% 0% no-repeat padding-box;
    border-radius: 7px;
    cursor: pointer;
    border: none;
    margin-top: 32px;
    font-size: 25px;
    color: #fff;
    margin-bottom: 0;
`;

export const ThePargrph = styled.p`
    margin-top: 60px;
    text-align: center;
    font: normal normal normal 16px/27px Segoe UI;
    margin-bottom: 0;
`;

const StyledSignIn = (props) => {
    return <TheInput {...props} />;
};

export default StyledSignIn;
