import Card from "../CardUi/Card";
import Header from "../Styled/Header";
import styled from "styled-components";
import Input from "../Input/Input";
import TheForm from "./TheForm";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { NavLink } from "react-router-dom";
import { Pargraph } from "../Styled/Header";
// import Test from "../Styled/Header";

const Text = styled.h3`
    font: normal normal 600 30px/40px Segoe UI;
    letter-spacing: 1.5px;
    color: #000000;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 38px;
`;

const Text2 = styled.h4`
    font: normal normal 600 25px/33px Segoe UI;
    letter-spacing: 0.5px;
    color: #000000;
    text-transform: capitalize;
    padding: 0;
    margin-top: 0;
    margin-left: 101px;
`;

const SignUp = () => {
    return (
        <Card
            style={{
                width: "703px",
                height: "1057px",
                background: "#fff",
                borderRadius: "20px",
                margin: "66px auto",
            }}
        >
            <Header
                src={process.env.PUBLIC_URL + "Image/talents-logo.png"}
                alt=""
            ></Header>
            <Text>Talents Valley</Text>
            <Text2>Create Your Account</Text2>
            <TheForm>
                <div style={{ display: "flex", gap: "32px" }}>
                    <div>
                        <Pargraph>First Name</Pargraph>
                        <Input
                            placeholder="Enter first name"
                            style={{
                                width: "234px",
                                height: "60px",
                                border: "1px solid #BEC2C6",
                                borderRadius: "7px",
                                padding: "20px 80px 19px 16px",
                                fontSize: "16px",
                            }}
                        />
                    </div>
                    <div>
                        <Pargraph>Last Name</Pargraph>
                        <Input
                            placeholder="Enter Last name"
                            style={{
                                width: "234px",
                                height: "60px",
                                border: "1px solid #BEC2C6",
                                borderRadius: "7px",
                                padding: "20px 80px 19px 16px",
                                fontSize: "16px",
                            }}
                        />
                    </div>
                </div>
                <div style={{ display: "grid", margin: "35px 102px 35px 0" }}>
                    <Pargraph>Email</Pargraph>
                    <Input
                        placeholder="email@gmail.com"
                        style={{
                            width: "500px",
                            height: "60px",
                            border: "1px solid #BEC2C6",
                            borderRadius: "7px",
                            padding: "20px 80px 19px 16px",
                            fontSize: "16px",
                        }}
                    />
                    <Pargraph style={{ marginTop: "35px" }}>Password</Pargraph>
                    <Input
                        placeholder="email@gmail.com"
                        style={{
                            width: "500px",
                            height: "60px",
                            border: "1px solid #BEC2C6",
                            borderRadius: "7px",
                            padding: "20px 80px 19px 16px",
                            fontSize: "16px",
                        }}
                    />
                    <Pargraph style={{ marginTop: "35px" }}>
                        Phone Number
                    </Pargraph>
                    <PhoneInput
                        placeholder="+972"
                        // value={mobile}
                        // onChange={setMobile}
                        required
                    />
                    <Pargraph style={{ marginTop: "35px" }}>Country</Pargraph>
                    <select
                        style={{
                            width: "500px",
                            height: "60px",
                            border: "1px solid #BEC2C6",
                            borderRadius: "7px",
                            padding: "20px 80px 19px 16px",
                            fontSize: "16px",
                        }}
                    >
                        <option value="Palestine">Palestine</option>
                        <option value="united emarat arabic">UEA</option>
                        <option value="egypt">EGY</option>
                    </select>
                    <NavLink
                        style={{
                            width: "500px",
                            height: "60px",
                            border: "none",
                            backgroundColor: "#4375FF",
                            borderRadius: "7px",
                            marginTop: "60px",
                            fontSize: "25px",
                            color: "#fff",
                            textDecoration: "none",
                            padding: "13px 205px",
                        }}
                    >
                        Sign Up
                    </NavLink>
                    <p
                        style={{
                            margin: "50px 110px 44px 110px",
                            textAlign: "center",
                            fontSize: "16px",
                        }}
                    >
                        Already have an account?{" "}
                        <NavLink
                            style={{ color: "#4375FF", textDecoration: "none" }}
                        >
                            Sign in
                        </NavLink>
                    </p>
                </div>
            </TheForm>
        </Card>
    );
};

export default SignUp;
