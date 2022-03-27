import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    padding: 15px;
    border: 1.7px solid #888888;
    border-radius: 8px;
    overflow-x: hidden;
`;

const Box = (props) => (
    <Container>
        {props.children}
    </Container>
);
export default Box;