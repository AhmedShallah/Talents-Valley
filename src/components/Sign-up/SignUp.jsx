import React, { useState } from "react";
import Card from "../CardUi/Card";
import "./SignUp.css";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AiOutlineEyeInvisible } from "react-icons/ai";
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
const SignUp = () => {
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
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
        mode: "onTouched",
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
        if (result.status === "success" && result.statusCode === 200) {
            navigate("/");
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
                    <WrapMain style={{ marginBottom: "35px" }}>
                        <Pargrph>Email</Pargrph>
                        <InputsOther
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                            name="email"
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
                                message:
                                    "8 Character 1 Capital letter 1 Number Special Character",
                            })}
                            name="password"
                            type={passwordShown ? "text" : "password"}
                        />
                        <AiOutlineEyeInvisible
                            className="eye"
                            onClick={togglePassword}
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
                                    enableSearch={true}
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
                    <WrapMain
                        style={{ marginTop: "35px", marginBottom: "60px" }}
                    >
                        <Pargrph>Country</Pargrph>
                        <TheSelect
                            {...register("country", {
                                required: true,
                            })}
                            name="country"
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
                            <NavLink
                                style={{ paddingLeft: "3px" }}
                                className="link"
                                to="/"
                            >
                                Sign in
                            </NavLink>
                        </SecondText>
                    </WrapMain>
                </form>
            </Card>
        </div>
    );
};

export default SignUp;

// import React, { useState, useEffect } from "react";
// import "./SignUp.css";
// import { AiOutlineEyeInvisible } from "react-icons/ai";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import Card from "../CardUi/Card";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { useNavigate } from "react-router-dom";
// import {
//     SignUpContainer,
//     WrapImage,
//     Image,
//     MainText,
//     OtherText,
//     WarpInputs,
//     InputsLeft,
//     Pargrph,
//     AllInput,
//     WrapMain,
//     InputsOther,
//     TheSelect,
//     TheButton,
//     SecondText,
// } from "../Styled/Header";

// const SignUp = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [country, setCountry] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [passwordShown, setPasswordShown] = useState(false);
//     const [errorMessage, setErrorMessage] = useState();
//     const navigate = useNavigate();

// const togglePassword = () => {
//     setPasswordShown(!passwordShown);
// };

//     const validateForm = () => {
//         if (firstName.length === 0) {
//             setErrorMessage("Required");
//         }
//         if (lastName.length === 0) {
//             setErrorMessage("Required");
//         }
//         if (
//             !new RegExp(
//                 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//             ).test(email)
//         ) {
//             setErrorMessage("wrong email format");
//         }
//         if (
//             !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(
//                 password
//             )
//         ) {
//             setErrorMessage("password is weak");
//         }
//         if (mobile.length <= 9) {
//             setErrorMessage("wrong mobile format");
//         }
//         if (typeof country !== "string") {
//             setErrorMessage("Invalid value, must be string");
//         }
//     };

//     const handelSubmit = (e) => {
//         console.log(firstName, lastName, email, password, country, mobile);
//         e.preventDefault();
//         localStorage.setItem("fName", JSON.stringify(firstName));
//         localStorage.setItem("lName", JSON.stringify(lastName));
//         localStorage.setItem("email", JSON.stringify(email));
//         localStorage.setItem("password", JSON.stringify(password));
//         localStorage.setItem("country", JSON.stringify(country));
//         localStorage.setItem("mobile", JSON.stringify(mobile));

//         const handleFetchData = async () => {
//             let result = await fetch(
//                 "https://talents-valley.herokuapp.com/api/user/signup",
//                 {
//                     method: "POST",
//                     body: JSON.stringify({
//                         firstName,
//                         lastName,
//                         email,
//                         password,
//                         country,
//                         mobile: "+" + mobile,
//                     }),
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );
//             result = await result.json();
//             console.log(result);
//             console.log(result.status);
//             if (result.status === "success" && result.statusCode === 200) {
//                 navigate("signIn");
//             }
//         };
//         handleFetchData();

//         validateForm();
//     };

//     return (
//         <SignUpContainer>
//             <Card
//                 style={{
//                     width: "703px",
//                     height: "1064px",
//                     background: "#fff",
//                     borderRadius: "20px",
//                     margin: "66px auto",
//                 }}
//             >
//                 <WrapImage>
//                     <Image
//                         src={process.env.PUBLIC_URL + "Image/talents-logo.png"}
//                         alt=""
//                     />
//                     <MainText>Talents Valley</MainText>
//                 </WrapImage>
//                 <OtherText>Create Your Account</OtherText>
//                 <form onSubmit={handelSubmit}>
//                     <WarpInputs>
//                         <InputsLeft>
//                             <Pargrph>First Name</Pargrph>
//                             <AllInput
//                                 name="firstname"
//                                 className="input"
//                                 type="text"
//                                 placeholder="Enter first name"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                                 // required
//                             />
//                             {errorMessage && <p>{errorMessage.firstName}</p>}
//                         </InputsLeft>
//                         <div>
//                             <Pargrph>Last Name</Pargrph>
//                             <AllInput
//                                 name="lastname"
//                                 type="text"
//                                 placeholder="Enter last name"
//                                 className="input"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                             />
//                             {errorMessage && <p>{errorMessage}</p>}
//                             {/* {errorMessage} */}
//                         </div>
//                     </WarpInputs>
//                     <WrapMain>
//                         <Pargrph>Email</Pargrph>
//                         <InputsOther
//                             name="email"
//                             style={{ marginBottom: "35px" }}
//                             type="email"
//                             placeholder="email@gmail.com"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         {/* {errorMessage && <p>{errorMessage}</p>} */}
//                         {errorMessage}
//                     </WrapMain>
//                     <WrapMain>
//                         <Pargrph>Password</Pargrph>
//                         <InputsOther
//                             name="password"
//                             type={passwordShown ? "text" : "password"}
//                             value={password || ""}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <AiOutlineEyeInvisible
//                             className="eye"
//                             onClick={togglePassword}
//                         />
//                         {/* {errorMessage && <p>{errorMessage}</p>} */}
//                         {errorMessage}
//                         {/* <p
//                             style={{
//                                 display: "hidden",
//                                 margin: "0px",
//                                 marginBottom: "60px",
//                                 color: "#EE404C",
//                                 fontSize: "16px",
//                             }}
//                             className="msg-error"
//                         >
//                             {errorMessage}
//                         </p> */}
//                     </WrapMain>
//                     <WrapMain>
//                         <Pargrph style={{ marginTop: "35px" }}>
//                             Phone Number
//                         </Pargrph>
//                         <PhoneInput
//                             name="mobile"
//                             placeholder="+972"
//                             value={mobile}
//                             onChange={setMobile}
//                             // country="ps"
//                         />
//                         {/* {errorMessage && <p>{errorMessage}</p>} */}
//                         {errorMessage}
//                     </WrapMain>
//                     <WrapMain style={{ marginTop: "35px" }}>
//                         <Pargrph>Country</Pargrph>
//                         <TheSelect
//                             name="country"
//                             style={{ appearance: "none", marginBottom: "60px" }}
//                             onChange={(e) => setCountry(e.target.value)}
//                             value={country}
//                             // required
//                         >
//                             <option value="Palestine">Palestine</option>
//                             <option value="united emarat arabic">UEA</option>
//                             <option value="egypt">EGY</option>
//                         </TheSelect>
//                         <MdKeyboardArrowDown className="arrow" />
//                         {/* {errorMessage && <p>{errorMessage}</p>} */}
//                         {errorMessage}
//                     </WrapMain>
//                     <WrapMain>
//                         <TheButton type="submit">Sign Up</TheButton>
//                         <SecondText>
//                             Already have an account?
//                             <NavLink className="link" to="/signIn">
//                                 Sign in
//                             </NavLink>
//                         </SecondText>
//                     </WrapMain>
//                 </form>
//             </Card>
//         </SignUpContainer>
//     );
// };

// export default SignUp;
