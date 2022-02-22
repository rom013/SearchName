import styled from "styled-components"

const TiltePrimary = styled.h1`
    {background: linear-gradient(90.91deg, #FA58B6 1.57%, #7A0BC0 83.13%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: 2rem;
    max-width: 500px;
    position: relative;
    margin-left: 95px;
    top: 100px;
    user-select: none;
}
    &:after{
        content: "";
        background-size: contain;
        background-image: url(https://cdn.discordapp.com/attachments/691421631700271114/943712684384333855/background-removebg-preview.png);
        position: absolute;
        height: 300px;
        width: 300px;
        opacity: .2;
        left: -29px;
        top: 170px;
        background-repeat: no-repeat;
        animation: move 40s infinite alternate linear;
        z-index: -1;
    }
    &:before{
        content: "";
        background-size: contain;
        background-image: url(https://cdn.discordapp.com/attachments/691421631700271114/943712684384333855/background-removebg-preview.png);
        position: absolute;
        height: 300px;
        width: 300px;
        opacity: .1;
        right: -75%;
        background-repeat: no-repeat;
        animation: move 40s infinite alternate linear;
        z-index: -1;
    }

    @keyframes move{
        0%{
            transform: translateY(-70%)
        }
        100%{
            transform: translateY(70%)
        }
    }
`

function Title(props){
    return(
        <TiltePrimary>{props.props}</TiltePrimary>
    )
}

export default Title