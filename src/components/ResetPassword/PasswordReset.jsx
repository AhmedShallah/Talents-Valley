import "./PasswordReset.css";
import { BsCheck2Circle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {
    Container,
    MainDivs,
    TheImg,
    MainText,
    SecondText,
    Pargragh,
    TheButton,
} from "../Styled/StyledReset";

const PasswordReset = () => {
    return (
        <Container>
            <MainDivs>
                <TheImg
                    src={process.env.PUBLIC_URL + "Image/talents-logo.png"}
                    alt=""
                />
                <MainText>Talents Valley</MainText>
            </MainDivs>
            <MainDivs>
                <BsCheck2Circle className="icon" />
                <SecondText>Password Reset</SecondText>
            </MainDivs>
            <Pargragh>
                Your Password has been Successfully Reset. Click Below To Login
            </Pargragh>
            <NavLink to="/">
                <TheButton>Sign In</TheButton>
            </NavLink>
        </Container>
    );
};

export default PasswordReset;
