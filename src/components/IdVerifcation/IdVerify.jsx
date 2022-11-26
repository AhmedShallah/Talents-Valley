import React, { useState } from "react";
import "./IdVerify.css";
import { BsUpload } from "react-icons/bs";
import { IoWarning } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
    Container,
    MainText,
    WrapImg,
    TheImg,
    Pargraph,
    MainDivs,
    Label,
    TheSelect,
    TheInput,
    TextUpload,
    MainButton,
} from "../Styled/StyledIdVerify";

const IdVerify = () => {
    const navigate = useNavigate();
    const [idDocumentType, setidDocumentType] = useState("");
    const [idNumber, setidNumber] = useState("");
    const [file, setFile] = useState("");
    const [ErrMsg, setErrMsg] = useState("");
    const uploadFile = () => {
        document.getElementById("selectFile").click();
    };

    const validateSelectedFile = () => {
        const maxFileSize = 2100;

        if (file.size > maxFileSize) setErrMsg("Your file is too big");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("idDocumentType", idDocumentType);
        formData.append("idNumber", idNumber);
        formData.append("file", file);
        let result = await fetch(
            "https://talents-valley.herokuapp.com/api/user/verify/id",
            {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("theToken")}`,
                },
            }
        );
        const res = await result.json();
        console.log(res);

        if (res.status === "success" && res.statusCode === 200) {
            navigate("/verify");
        } else if (res.status === "failed" && res.statusCode === 400) {
            setErrMsg("Required");
        } else if (res.status === "failed" && res.statusCode === 422) {
            setErrMsg("Required");
        }
    };
    return (
        <Container>
            <MainText>ID Verification</MainText>
            <WrapImg>
                <TheImg
                    src={process.env.PUBLIC_URL + "Image/id-card1.png"}
                    alt=""
                />
            </WrapImg>
            <Pargraph>
                Upload Document that Proof your Identity such as: Identity Card,
                Passport, Driver License
            </Pargraph>
            <form onSubmit={handleSubmit}>
                <MainDivs>
                    <Label>Document Type</Label>
                    <TheSelect
                        onChange={(e) => setidDocumentType(e.target.value)}
                        value={idDocumentType}
                        placeholder="Choose your document type"
                    >
                        <option defaultValue value="" disabled>
                            select type
                        </option>
                        <option value="national_id">Identity Card</option>
                        <option value="passport">Passport</option>
                        <option value="driving_license">Driver License</option>
                    </TheSelect>
                    <MdKeyboardArrowDown className="arrow1" />
                </MainDivs>
                <MainDivs style={{ marginBottom: "0" }}>
                    <Label>ID Number</Label>
                    <TheInput
                        value={idNumber}
                        onChange={(e) => setidNumber(e.target.value)}
                        placeholder="Enter your ID number"
                    />
                </MainDivs>
                <MainDivs>
                    {file.name ? (
                        <div
                            onClick={uploadFile}
                            style={{
                                width: "500px",
                                height: "60px",
                                background: "#fff",
                                border: "1px solid #bec2c6",
                                borderRadius: "7px",
                                cursor: "pointer",
                                marginBottom: "80px",
                            }}
                        >
                            <BsUpload
                                style={{
                                    width: "18px",
                                    height: "18px",
                                    position: "absolute",
                                    left: "17px",
                                    top: "18px",
                                }}
                            />
                            <span
                                style={{
                                    position: "absolute",
                                    top: "8px",
                                    left: "52px",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                }}
                            >
                                {file.name}
                            </span>
                            <span
                                style={{
                                    position: "absolute",
                                    left: "52px",
                                    top: "32px",
                                    fontSize: "12px",
                                    color: "#151617",
                                }}
                            >
                                {" "}
                                {Math.floor(Math.log(file.size / 1024))} Mb size
                            </span>
                        </div>
                    ) : (
                        <div
                            onClick={uploadFile}
                            style={{
                                width: "500px",
                                height: "60px",
                                background: "#fff",
                                border: "1px solid #bec2c6",
                                borderRadius: "7px",
                                cursor: "pointer",
                                marginBottom: "80px",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    textAlign: "center",
                                    paddingTop: "16px",
                                }}
                            >
                                <BsUpload
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                    }}
                                />
                                <TextUpload className="text-upload">
                                    Upload a File
                                </TextUpload>
                            </div>
                        </div>
                    )}
                    {ErrMsg && (
                        <p
                            style={{
                                padding: "0",
                                margin: "0",
                                position: "absolute",
                                top: "60px",
                                color: "#F50000",
                            }}
                        >
                            <IoWarning />
                            {ErrMsg}
                            {/* Your file is too big */}
                        </p>
                    )}

                    <input
                        onChange={(e) => setFile(e.target.files[0])}
                        name="file"
                        id="selectFile"
                        style={{ display: "none" }}
                        type="file"
                    />
                    <MainButton onClick={validateSelectedFile} type="submit">
                        Continue
                    </MainButton>
                </MainDivs>
            </form>
        </Container>
    );
};

export default IdVerify;
