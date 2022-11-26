import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsUpload } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
    Container,
    MainText,
    WrapIcons,
    TextDiscreption,
    MainDivs,
    TheLabel,
    TheSelect,
    WrapAddress,
    InputAddress,
    WrapInputs,
    SelectCountry,
    TextUpload,
    MainButton,
    NoteFile,
} from "../Styled/StyledAddressVerify";

const AddresVerifcation = () => {
    const navigate = useNavigate();
    const [addressDocumentType, setAddressDocumentType] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [file, setFile] = useState("");
    // const [otherDocumentType, setOtherDocumentType] = useState("");
    const uploadFile = () => {
        document.getElementById("selectFile").click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("addressDocumentType", addressDocumentType);
        formData.append("address1", address1);
        formData.append("address2", address2);
        formData.append("city", city);
        formData.append("country", country);
        formData.append("file", file);
        let result = await fetch(
            "https://talents-valley.herokuapp.com/api/user/verify/address",
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
        }
    };

    return (
        <Container>
            <MainText>Address Verification</MainText>
            <WrapIcons>
                <IoHomeOutline
                    style={{ width: "91px", height: "91px", color: "#4F80FF" }}
                />
            </WrapIcons>
            <TextDiscreption>
                Upload Document That Proof Your Address Such As: Bill (Phone,
                Electricity, Water, Bank Statement
            </TextDiscreption>
            <form onSubmit={handleSubmit}>
                <MainDivs>
                    <TheLabel>Document Type</TheLabel>
                    <TheSelect
                        value={addressDocumentType}
                        onChange={(e) => setAddressDocumentType(e.target.value)}
                    >
                        <option defaultValue value="" disabled>
                            select Document
                        </option>
                        <option value="water_bill"> Water Bill</option>
                        <option value="phone_bill">Phone Bill</option>
                        <option value="bank_statement">Bank Statement</option>
                        <option value="electricity_bill">
                            Electricity Bill
                        </option>
                        <option value="other">Other</option>
                    </TheSelect>
                    <MdKeyboardArrowDown className="arrow" />
                </MainDivs>
                <WrapAddress>
                    <WrapInputs>
                        <TheLabel>Address 1</TheLabel>
                        <InputAddress
                            value={address1}
                            type="text"
                            placeholder="Neighborhood"
                            onChange={(e) => setAddress1(e.target.value)}
                        />
                    </WrapInputs>
                    <div>
                        <div>
                            <TheLabel>Address 2</TheLabel>
                            <InputAddress
                                value={address2}
                                type="text"
                                placeholder="Street"
                                onChange={(e) => setAddress2(e.target.value)}
                            />
                        </div>
                    </div>
                </WrapAddress>
                <WrapAddress style={{ marginBottom: "40px" }}>
                    <WrapInputs>
                        <TheLabel>City</TheLabel>
                        <InputAddress
                            value={city}
                            type="text"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </WrapInputs>
                    <div>
                        <div>
                            <TheLabel>Country</TheLabel>
                            <SelectCountry
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option defaultValue value="" disabled>
                                    select Country
                                </option>
                                <option value="palestine">Palestine</option>
                                <option value="united-states-of-america">
                                    USA
                                </option>
                                <option value="united-arab-emirates">
                                    UAE
                                </option>
                                <option value="egypt">Egypt</option>
                                <option value="germany">Germany</option>
                            </SelectCountry>
                            <MdKeyboardArrowDown className="arrow" />
                        </div>
                    </div>
                </WrapAddress>
                <MainDivs>
                    <div
                        onClick={uploadFile}
                        style={{
                            width: "500px",
                            height: "60px",
                            background: "#fff",
                            border: "1px solid #bec2c6",
                            borderRadius: "7px",
                            cursor: "pointer",
                            marginBottom: "5px",
                        }}
                    >
                        <div
                            style={{ textAlign: "center", paddingTop: "16px" }}
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

                    <input
                        onChange={(e) => setFile(e.target.files[0])}
                        id="selectFile"
                        style={{ display: "none" }}
                        type="file"
                    />
                    <NoteFile>
                        Your document shouldn't be three months old
                    </NoteFile>
                    <MainButton type="submit">Continue</MainButton>
                </MainDivs>
            </form>
        </Container>
    );
};

export default AddresVerifcation;
