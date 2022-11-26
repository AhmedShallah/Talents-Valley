import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignIn.css";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";
import {
    ContainerSignIn,
    WrapImg,
    ImageLogo,
    TextMain,
    OtherText,
    WrapForm,
    WrapLabels,
    TheLabel,
    TheInput,
    TheWarn,
    MsgError,
    ForgotPass,
    TheBtn,
    ThePargrph,
} from "../Styled/StyledSignIn";

const SignIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    // const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handlSubmit = async (event) => {
        event.preventDefault();
        let login = await fetch(
            "https://talents-valley.herokuapp.com/api/user/login",
            {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (!login.ok) {
            setErrorMsg("Incorrect email or password");
        }

        const log = await login.json();
        console.log(log);
        if (log.status === "success" && log.statusCode === 200) {
            navigate("/home");
        }
        localStorage.setItem("theToken", log.data.accessToken);
        localStorage.setItem("infoUser", JSON.stringify(log.data.user));
        localStorage.setItem("dataEmail", JSON.stringify(email));
        localStorage.setItem("dataPassword", JSON.stringify(password));
        console.log(log.data.accessToken);
    };

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <ContainerSignIn>
            <WrapImg>
                <ImageLogo
                    src={process.env.PUBLIC_URL + "Image/talents-logo.png"}
                    alt=""
                />
                <TextMain>Talents Valley</TextMain>
            </WrapImg>
            <OtherText>Login to Your Account</OtherText>
            <WrapForm>
                <WrapLabels>
                    <TheLabel>Email</TheLabel>
                    <TheInput
                        type="text"
                        value={email || ""}
                        // className={`email ${!email ? "style-error" : ""}`}
                        className="email"
                        placeholder="email@gmail.com"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        isValid={true}
                    />
                </WrapLabels>
                <WrapLabels className="pass">
                    <TheLabel>Password</TheLabel>
                    <TheInput
                        type={passwordShown ? "text" : "password"}
                        value={password || ""}
                        // className={`password ${!password ? "style-error" : ""}`}
                        className="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        isValid={true}
                    />
                    <AiOutlineEyeInvisible
                        className="i"
                        onClick={togglePassword}
                    />
                    <TheWarn className="warn">
                        <div className="msg">
                            {errorMsg && (
                                <MsgError>
                                    <AiFillWarning className="a" />
                                    Incorrect email or password
                                </MsgError>
                            )}
                        </div>
                        <ForgotPass>
                            <NavLink to="/forgotPassword">
                                Forgot Password?
                            </NavLink>
                        </ForgotPass>
                    </TheWarn>
                </WrapLabels>

                <TheBtn type="submit" onClick={handlSubmit}>
                    Sign In
                </TheBtn>
            </WrapForm>
            <div className="text">
                <ThePargrph>
                    Don't have an account?{" "}
                    <NavLink className="nav" to="/signUp">
                        Sign up
                    </NavLink>
                </ThePargrph>
            </div>
        </ContainerSignIn>
    );
};

export default SignIn;
