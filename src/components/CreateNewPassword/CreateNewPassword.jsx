import { useState } from "react";
import "./CreateNewPassword.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";

import {
    Container,
    WrapImage,
    Back,
    TheImage,
    MainText,
    SecondText,
    TheForm,
    MainDivs,
    TheLabel,
    TheInput,
    TheButton,
} from "../Styled/StyledCreateNewPassword";

const CreateNewPassword = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
        mode: "onTouched",
    });
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const myRecoverToken = JSON.parse(localStorage.getItem("recoverToken"));

    const onSubmit = async (values) => {
        console.log(myRecoverToken);
        let create = await fetch(
            "https://talents-valley.herokuapp.com/api/user/password/recover",
            {
                method: "POST",
                body: JSON.stringify({
                    password: values.password,
                    recoverToken: myRecoverToken,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        create = await create.json();
        console.log(create);
        if (create.status === "success" && create.statusCode === 200) {
            navigate("/passwordReset");
        }
    };

    const password = watch("password");

    return (
        <Container>
            <WrapImage>
                <Back>
                    <MdOutlineArrowBackIosNew onClick={() => navigate(-1)} />
                </Back>
                <TheImage
                    src={process.env.PUBLIC_URL + "Image/talents-logo.png"}
                    alt=""
                />
                <MainText>Talents Valley</MainText>
            </WrapImage>
            <SecondText>Create New Password</SecondText>
            <TheForm onSubmit={handleSubmit(onSubmit)}>
                <MainDivs>
                    <TheLabel>New Password</TheLabel>
                    <TheInput
                        type={passwordShown ? "text" : "password"}
                        {...register("password", {
                            required: true,
                            pattern:
                                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                        })}
                        name="password"
                    />
                    <AiOutlineEyeInvisible
                        className="i"
                        onClick={togglePassword}
                    />
                    {errors.password && <p>Reqired</p>}
                </MainDivs>
                <MainDivs style={{ marginBottom: "60px" }}>
                    <TheLabel>Re-Enter Password</TheLabel>
                    <TheInput
                        type={passwordShown ? "text" : "password"}
                        {...register("confirmPassword", {
                            required: "confirm password is required",
                            validate: (value) =>
                                value === password ||
                                "The Password do not match",
                        })}
                        name="confirmPassword"
                    />
                    <AiOutlineEyeInvisible
                        className="i"
                        onClick={togglePassword}
                    />
                    {/* {errors.confirmPassword && <p>Reqired</p>} */}
                </MainDivs>
                <TheButton>Continue</TheButton>
            </TheForm>
        </Container>
    );
};

export default CreateNewPassword;
