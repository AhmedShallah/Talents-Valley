import React from "react";
import styled from "styled-components";

const StyleForm = styled.form`
    margin-left: 101px;
`;

const TheForm = (props) => {
    return <StyleForm>{props.children}</StyleForm>;
};

export default TheForm;
