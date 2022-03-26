import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #FFFFFF;
    padding: 20px;
    margin: 20px;
    border: 2px solid #888888;
    border-radius: 5px;
`;

const Box = (props) => (
    <Container>
        {props.children}
    </Container>
);
export default Box;