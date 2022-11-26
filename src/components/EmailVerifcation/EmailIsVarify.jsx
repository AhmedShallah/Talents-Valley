import React from "react";
import "./EmailIsVerify.css";
import { BsCheck2Circle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
    Container,
    MainText,
    WrapIcons,
    TheText,
    TheButton,
} from "../Styled/EmailVaerifyDone";

const EmailIsVarify = () => {
    const navigate = useNavigate();

    const moveToverify = () => {
        navigate("/verify");
    };

    return (
        <Container>
            <MainText>Email Verification</MainText>
            <WrapIcons>
                <BsCheck2Circle className="icon" />
            </WrapIcons>
            <TheText>Your Email has been Verified Successfully</TheText>
                <TheButton onClick={moveToverify}>Continue</TheButton>
        </Container>
    );
};

export default EmailIsVarify;
