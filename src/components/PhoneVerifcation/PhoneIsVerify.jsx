import "./PhoneIsVerify.css";
import { BsCheck2Circle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
    Container,
    MainText,
    WrapIcon,
    Text,
    TheButton,
} from "../Styled/PhoneVerifyDone";

const PhoneIsVerify = () => {
    const navigate = useNavigate();

    const moveToverify = () => {
        navigate("/verify");
    };

    return (
        <Container>
            <MainText>Phone Verification</MainText>
            <WrapIcon>
                <BsCheck2Circle className="icon" />
            </WrapIcon>
            <Text>Your Phone Number has been Verified Successfully</Text>
            <TheButton onClick={moveToverify}>Continue</TheButton>
        </Container>
    );
};

export default PhoneIsVerify;
