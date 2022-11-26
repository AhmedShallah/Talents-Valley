import React, { useState } from "react";
import "./EmailVerifaction.css";
import { useNavigate } from "react-router-dom";
import OtpInput from "react18-input-otp";
import {
    Container,
    MainText,
    WrapImg,
    MainImg,
    Pargragh,
    TheButton,
    TextResend,
    Resend,
    ErrMsg
} from "../Styled/StyledEmailVaerifcation";

const EmailVerifaction = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(otp);
        let result = await fetch(
            "https://talents-valley.herokuapp.com/api/user/verify/email",
            {
                method: "POST",
                body: JSON.stringify({
                    verificationCode: otp,
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("theToken")}`,
                },
            }
        );
        const res = await result.json();
        console.log(res);
        if (res.status === "success" && res.statusCode === 200) {
            navigate("/email-is-verify");
        } else if (res.status === "failed" && res.statusCode === 400) {
            setErrMsg("invalid code");
        } else if (res.status === "failed" && res.statusCode === 422) {
            setErrMsg("Required");
        }
    };
    return (
        <Container>
            <MainText>Email Verification</MainText>
            <WrapImg>
                <MainImg
                    src={process.env.PUBLIC_URL + "Image/email_(2).png"}
                    alt=""
                />
            </WrapImg>
            <Pargragh>
                We have sent you a verification code to your email
                ****78@gmail.com
            </Pargragh>
            <form onSubmit={handleSubmit}>
                <div className="verify-input">
                    <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={6}
                        separateAfter={3}
                        separator={
                            <span style={{ marginRight: "41px" }}></span>
                        }
                    />
                    {errMsg && <ErrMsg>{errMsg}</ErrMsg>}
                </div>
                <TheButton type="submit">Continue</TheButton>
            </form>
            <TextResend>
                Didn't get the code?
                <Resend> Resend</Resend>
            </TextResend>
        </Container>
    );
};

export default EmailVerifaction;
