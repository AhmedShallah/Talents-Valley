import "./Verify.css";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {
    Cotainer,
    MainText,
    SecondText,
    WrapBoxes,
    TheBox,
    BoxContent,
    TheDisc,
    TheInfo,
    TheChoice,
    WrapButton,
    ButtonVerify,
    ButtonContinue,
} from "../Styled/StyledVerify";

const Verify = () => {
    const ThePending = {
        width: "114px",
        height: "31px",
        background: "#D4D4D4",
        border: "1px solid #E2E2E2",
        borderRadius: "7px",
        color: "#fff",
        fontSize: "14px",
    };

    const TheRejected = {
        width: "114px",
        height: "31px",
        background: "#FFFFFF",
        color: "#4375FF",
        border: "1px solid #E2E2E2",
        borderRadius: "7px",
        cursor: "pointer",
    };

    const navigate = useNavigate();
    const handleVerifyEmail = async (e) => {
        e.preventDefault();
        const verifyEmail = await fetch(
            "https://talents-valley.herokuapp.com/api/user/send-code-email",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("theToken")}`,
                },
            }
        );
        let res = await verifyEmail.json();
        console.log(res);
        if (res.status === "success" && res.statusCode === 200) {
            navigate("/email-verifcation");
        }
    };

    const handleVerifyMobile = async (e) => {
        e.preventDefault();
        const verifyPhone = await fetch(
            "https://talents-valley.herokuapp.com/api/user/send-code-mobile",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("theToken")}`,
                },
            }
        );
        const vMobile = await verifyPhone.json();
        console.log(vMobile);
        if (vMobile.status === "success" && vMobile.statusCode === 200) {
            navigate("/phone-verifcation");
        }
    };
    return (
        <Cotainer>
            <MainText>Verification</MainText>
            <SecondText>
                To use our services, We need to verify your account
            </SecondText>
            <WrapBoxes>
                <TheBox>
                    <BoxContent>
                        <TheDisc>Email Address</TheDisc>
                        <TheInfo>
                            mail@email.com
                            {JSON.parse(localStorage.getItem("infoUser"))
                                .verifiedEmail ? (
                                <span style={{ color: "#128807" }}>
                                    (Verified)
                                </span>
                            ) : (
                                <span style={{ color: "#E80707" }}>
                                    (not verified)
                                </span>
                            )}
                        </TheInfo>
                    </BoxContent>
                    <WrapButton>
                        {JSON.parse(localStorage.getItem("infoUser"))
                            .verifiedEmail ? (
                            <img
                                style={{ width: "41px", height: "41px" }}
                                src={
                                    process.env.PUBLIC_URL +
                                    "Image/check-mark.png"
                                }
                                alt=""
                            />
                        ) : (
                            <ButtonVerify onClick={handleVerifyEmail}>
                                Verify
                            </ButtonVerify>
                        )}
                    </WrapButton>
                </TheBox>
                <TheBox>
                    <BoxContent>
                        <TheDisc>Phone Number</TheDisc>
                        <TheInfo>
                            +972 ******966
                            {JSON.parse(localStorage.getItem("infoUser"))
                                .verifiedMobile ? (
                                <span style={{ color: "#128807" }}>
                                    (Verified)
                                </span>
                            ) : (
                                <span style={{ color: "#E80707" }}>
                                    (not verified)
                                </span>
                            )}
                        </TheInfo>
                    </BoxContent>
                    <WrapButton>
                        {JSON.parse(localStorage.getItem("infoUser"))
                            .verifiedMobile ? (
                            <img
                                style={{ width: "41px", height: "41px" }}
                                src={
                                    process.env.PUBLIC_URL +
                                    "Image/check-mark.png"
                                }
                                alt=""
                            />
                        ) : (
                            <ButtonVerify onClick={handleVerifyMobile}>
                                Verify
                            </ButtonVerify>
                        )}
                    </WrapButton>
                </TheBox>
                <TheChoice>
                    You can complete the 2 following tasks later
                </TheChoice>
                <TheBox>
                    <BoxContent>
                        {JSON.parse(localStorage.getItem("infoUser")).verifiedId
                            .status === "rejected" ? (
                            <TheDisc style={{ position: "relative" }}>
                                ID Verification{" "}
                                <span
                                    style={{
                                        display: "flex",
                                        color: "#CE0A0AD3",
                                        fontSize: "14px",
                                        position: "absolute",
                                        left: "153px",
                                        top: "0",
                                        alignItems: "center",
                                    }}
                                >
                                    Rejected{" "}
                                    <IoMdInformationCircleOutline
                                        style={{
                                            color: "#000",
                                            width: "14px",
                                            height: "14px",
                                        }}
                                    />
                                </span>
                            </TheDisc>
                        ) : (
                            <TheDisc>ID Verification</TheDisc>
                        )}
                        <TheInfo>
                            Identity card - Driver license - Passport
                        </TheInfo>
                    </BoxContent>
                    <WrapButton>
                        {JSON.parse(localStorage.getItem("infoUser")).verifiedId
                            .status === "pending" ? (
                            <button style={ThePending}>Pending</button>
                        ) : JSON.parse(localStorage.getItem("infoUser"))
                              .verifiedId.status === "rejected" ? (
                            <button style={TheRejected}>Try Again</button>
                        ) : JSON.parse(localStorage.getItem("infoUser"))
                              .verifiedId.status === "approved" ? (
                            <img
                                style={{ width: "41px", height: "41px" }}
                                src={
                                    process.env.PUBLIC_URL +
                                    "Image/check-mark.png"
                                }
                                alt=""
                            />
                        ) : JSON.parse(localStorage.getItem("infoUser"))
                              .verifiedId.status === "not_uploaded" ? (
                            <NavLink to="/id-verifcation">
                                <ButtonVerify>Verify</ButtonVerify>
                            </NavLink>
                        ) : (
                            ""
                        )}
                    </WrapButton>
                </TheBox>
                <TheBox>
                    <BoxContent>
                        <TheDisc>Address Verification</TheDisc>
                        <TheInfo>
                            Phone, Electricity, Water Bill - Bank statement
                        </TheInfo>
                    </BoxContent>
                    <WrapButton>
                        {JSON.parse(localStorage.getItem("infoUser"))
                            .verifiedAddress.status === "pending" ? (
                            <button style={ThePending}>Pending</button>
                        ) : JSON.parse(localStorage.getItem("infoUser"))
                              .verifiedAddress.status === "rejected" ? (
                            <button style={TheRejected}>Try Again</button>
                        ) : JSON.parse(localStorage.getItem("infoUser"))
                              .verifiedAddress.status === "approved" ? (
                            <img
                                style={{ width: "41px", height: "41px" }}
                                src={
                                    process.env.PUBLIC_URL +
                                    "Image/check-mark.png"
                                }
                                alt=""
                            />
                        ) : JSON.parse(localStorage.getItem("infoUser"))
                              .verifiedAddress.status === "not_uploaded" ? (
                            <NavLink to="/address-verifcation">
                                <ButtonVerify>Verify</ButtonVerify>
                            </NavLink>
                        ) : (
                            ""
                        )}
                    </WrapButton>
                </TheBox>
            </WrapBoxes>
            <ButtonContinue>Continue</ButtonContinue>
        </Cotainer>
    );
};

export default Verify;
