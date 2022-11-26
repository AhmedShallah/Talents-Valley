import React, { useState } from "react";
import "./ForgotPassword.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
    ContainerForgot,
    BackDiv,
    MainImage,
    TheImage,
    Text,
    MainDivs,
    Title,
    Pargragh,
    Feild,
    TextFeild,
    TheInput,
    ErrMsg,
    TheButton,
} from "../Styled/StyledForgot";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
        };

        let forgot = await fetch(
            "https://talents-valley.herokuapp.com/api/user/password/forgot",
            {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(data.email);

        const result = await forgot.json();

        console.log(result);

        if (result.status === "success" && result.statusCode === 200) {
            navigate("/codeForgot", {
                idData: result.data._id,
                theToken: result.data.recoverToken,
            });
            localStorage.setItem("userId", result.data._id);
        } else if (result.status === "failed" && result.statusCode === 400) {
            setErrMsg("not found user");
        } else if (result.status === "failed" && result.statusCode === 422) {
            setErrMsg("Required");
        }
    };

    return (
        <ContainerForgot>
            <BackDiv>
                <MdOutlineArrowBackIosNew
                    className="arrow"
                    onClick={() => navigate(-1)}
                />
            </BackDiv>
            <MainImage>
                <TheImage
                    src={process.env.PUBLIC_URL + "Image/talents-logo.png"}
                    alt=""
                />
                <Text>Talents Valley</Text>
            </MainImage>
            <MainDivs>
                <Title>Forgot Password?</Title>
                <Pargragh>
                    We'll send a code to your email to reset your password
                </Pargragh>
            </MainDivs>
            <MainDivs>
                <form onSubmit={handleSubmit}>
                    <Feild>
                        <TextFeild>Email</TextFeild>
                        <TheInput
                            type="text"
                            placeholder="email@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errMsg && (
                            <ErrMsg className="err-msg">{errMsg}</ErrMsg>
                        )}
                    </Feild>
                    <TheButton type="submit">Send Code</TheButton>
                </form>
            </MainDivs>
        </ContainerForgot>
    );
};

export default ForgotPassword;
