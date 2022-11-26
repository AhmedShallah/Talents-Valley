import React from "react";
import Card from "../CardUi/Card";
// import PhoneInput from "react-phone-input-2";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
    WrapImage,
    Image,
    MainText,
    OtherText,
    WarpInputs,
    InputsLeft,
    Pargrph,
    AllInput,
    WrapMain,
    InputsOther,
    TheSelect,
    TheButton,
    SecondText,
} from "../Styled/Header";
const TheForm = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            password: "",
            country: "",
        },
    });

    const onSubmit = async (values) => {
        console.log(values);
        let result = await fetch(
            "https://talents-valley.herokuapp.com/api/user/signup",
            {
                method: "POST",
                body: JSON.stringify({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    mobile: "+" + values.mobile,
                    country: values.country,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        result = await result.json();
        console.log(result);

        if (result.status === "success" && result.statusCode === 200) {
            navigate("signIn");
        }
    };

    return (
        <div className="form">
            <Card
                style={{
                    width: "703px",
                    height: "1064px",
                    background: "#fff",
                    borderRadius: "20px",
                    margin: "66px auto",
                }}
            >
                <WrapImage>
                    <Image
                        src={process.env.PUBLIC_URL + "Image/talents-logo.png"}
                        alt=""
                    />
                    <MainText>Talents Valley</MainText>
                </WrapImage>
                <OtherText>Create Your Account</OtherText>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <WarpInputs>
                        <InputsLeft>
                            <Pargrph>First Name</Pargrph>
                            <AllInput
                                {...register("firstName", {
                                    required: "Required",
                                    // maxLength: 10,
                                })}
                                name="firstName"
                                className="input"
                                type="text"
                                placeholder="Enter first name"
                            />
                            {errors.firstName && (
                                <p className="err-msg">
                                    {errors.firstName.message}
                                </p>
                            )}
                        </InputsLeft>
                        <div>
                            <Pargrph>Last Name</Pargrph>
                            <AllInput
                                {...register("lastName", {
                                    required: true,
                                    // maxLength: 10,
                                })}
                                name="lastName"
                                type="text"
                                placeholder="Enter last name"
                                className="input"
                            />
                            {errors.lastName && (
                                <p className="err-msg">Required</p>
                            )}
                        </div>
                    </WarpInputs>
                    <WrapMain>
                        <Pargrph>Email</Pargrph>
                        <InputsOther
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                            name="email"
                            style={{ marginBottom: "35px" }}
                            type="email"
                            placeholder="email@gmail.com"
                        />
                        {errors.email && (
                            <p className="err-msg">wrong email format</p>
                        )}
                    </WrapMain>
                    <WrapMain>
                        <Pargrph>Password</Pargrph>
                        <InputsOther
                            {...register("password", {
                                required: true,
                                pattern:
                                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                            })}
                            name="password"
                            type="password"
                        />
                        {errors.password && (
                            <p className="err-msg">password is weak</p>
                        )}
                    </WrapMain>
                    <WrapMain>
                        <Pargrph style={{ marginTop: "35px" }}>
                            Phone Number
                        </Pargrph>
                        <Controller
                            control={control}
                            name="mobile"
                            rules={{ required: true }}
                            render={({ field: { ref, ...field } }) => (
                                <ReactPhoneInput
                                    {...register("mobile")}
                                    {...field}
                                    inputExtraProps={{
                                        ref,
                                        required: true,
                                    }}
                                    country={"ps"}
                                    countryCodeEditable={true}
                                />
                            )}
                        />

                        {errors.mobile && (
                            <p className="err-msg">wrong mobile format</p>
                        )}
                    </WrapMain>
                    <WrapMain style={{ marginTop: "35px" }}>
                        <Pargrph>Country</Pargrph>
                        <TheSelect
                            {...register("country", {
                                required: true,
                            })}
                            name="country"
                            style={{ appearance: "none", marginBottom: "60px" }}
                        >
                            <option value="Palestine">Palestine</option>
                            <option value="united emarat arabic">UEA</option>
                            <option value="egypt">EGY</option>
                        </TheSelect>

                        <MdKeyboardArrowDown className="arrow" />
                        {errors.country && (
                            <p className="err-msg">
                                Invalid value, must be string
                            </p>
                        )}
                    </WrapMain>
                    <WrapMain>
                        <TheButton type="submit">Sign Up</TheButton>
                        <SecondText>
                            Already have an account?
                            <NavLink className="link" to="/signIn">
                                Sign in
                            </NavLink>
                        </SecondText>
                    </WrapMain>
                </form>
            </Card>
        </div>
    );
};

export default TheForm;
