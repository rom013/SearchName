import styled from "styled-components";

const Box = styled.div`
    background: linear-gradient(45deg, rgba(260,260,260,.1),rgba(260,260,260,.2));
    backdrop-filter: blur(3px);
    padding: 80px;
    display: inline-block;
    border-radius: 15px;

    position: absolute;
    top: 30%;
    transform: translate(-50%);

    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);

    p,li{
        color: #FFF;
        margin-bottom: 25px;
        font-weight: 700;
    }
    ul{
        margin-top: 20px;
    }
`

export default Box