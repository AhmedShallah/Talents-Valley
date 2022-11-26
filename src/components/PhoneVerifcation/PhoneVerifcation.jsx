import React, { useState } from "react";
import "./PhoneVerifcation.css";
import { NavLink, useNavigate } from "react-router-dom";
import OtpInput from "react18-input-otp";
import {
    Container,
    MainText,
    WrapImg,
    TheImg,
    Pargraph,
    TheButton,
    TextResend,
    Resend,
} from "../Styled/StyledPhoneVerify";

const PhoneVerifcation = () => {
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
            "https://talents-valley.herokuapp.com/api/user/verify/mobile",
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
            navigate("/phone-is-verify");
        } else if (res.status === "failed" && res.statusCode === 400) {
            setErrMsg("invalid code");
        } else if (res.status === "failed" && res.statusCode === 422) {
            setErrMsg("Required");
        }
    };

    return (
        <Container>
            <MainText>Phone Verification</MainText>
            <WrapImg>
                <TheImg
                    src={process.env.PUBLIC_URL + "Image/smartphone.svg"}
                    alt=""
                />
            </WrapImg>
            <Pargraph>
                We have sent you a verification code to your phone number
                ********789
            </Pargraph>
            <form onSubmit={handleSubmit}>
                <div className="verify-mobile">
                    <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={6}
                        separateAfter={3}
                        separator={
                            <span style={{ marginRight: "41px" }}></span>
                        }
                    />
                    {/* {errMsg && <ErrMsg>{errMsg}</ErrMsg>} */}
                </div>
                <TheButton type="submit">Continue</TheButton>
            </form>
            <TextResend>
                Didn't get the code?
                <Resend>Resend</Resend>
            </TextResend>
        </Container>
    );
};

export default PhoneVerifcation;
