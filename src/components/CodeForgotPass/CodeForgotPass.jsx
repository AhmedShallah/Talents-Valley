import React, { useState } from "react";
import "./CodeForgotPass.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import OtpInput from "react18-input-otp";
import {
    Container,
    WrapImg,
    Back,
    TheImage,
    Title,
    MainDiv,
    MainText,
    Pargragh,
    TheForm,
    WrapBtn,
    TheBtn,
    TextResend,
    ResendBtn,
    ErrMsg,
} from "../Styled/StyledCodeForgot";

const CodeForgotPass = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(otp);
        localStorage.getItem("userId");
        let verify = await fetch(
            "https://talents-valley.herokuapp.com/api/user/password/verify-code",
            {
                method: "POST",
                body: JSON.stringify({
                    _id: localStorage.getItem("userId"),
                    verificationCode: otp,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const res = await verify.json();
        // console.log(res.data._id);

        console.log(res);

        if (res.status === "success" && res.statusCode === 200) {
            localStorage.setItem(
                "recoverToken",
                JSON.stringify(res.data.recoverToken)
            );
            console.log("hi", res.data.recoverToken);
            navigate("/createNewPassword");
        } else if (res.status === "failed" && res.statusCode === 422) {
            setErrMsg("Required");
        } else if (res.status === "failed" && res.statusCode === 400) {
            setErrMsg("invalid code");
        }
    };

    // const handleResend = async () => {
    //     const myToken = location.theToken;
    //     const theId = location.idData;
    //     let resend = await fetch(
    //         "https://talents-valley.herokuapp.com/api/user/password/verify-code",
    //         {
    //             method: "POST",
    //             body: JSON.stringify({ id: theId, myToken }),
    //         }
    //     );
    //     console.log(resend);
    // };

    return (
        <Container>
            <WrapImg>
                <Back>
                    <MdOutlineArrowBackIosNew onClick={() => navigate(-1)} />
                </Back>
                <TheImage
                    src={process.env.PUBLIC_URL + "Image/talents-logo.png"}
                    alt=""
                />
                <Title>Talents Valley</Title>
            </WrapImg>
            <MainDiv>
                <MainText>Check Your Email</MainText>
                <Pargragh>
                    We have sent you an email that contains a code to reset your
                    password
                </Pargragh>
            </MainDiv>
            <TheForm onSubmit={handleSubmit}>
                <div className="main-input ">
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
                <WrapBtn>
                    <TheBtn type="submit">Continue</TheBtn>
                </WrapBtn>
                <TextResend>
                    Didn't get the code? <ResendBtn>Resend</ResendBtn>
                </TextResend>
            </TheForm>
        </Container>
    );
};

export default CodeForgotPass;
