import styled from "styled-components";

const Select = styled.select`
    background: rgba(26, 26, 64, .5);
    color: #FFF;
    width: 180px;
    height: 38px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
    option{
        background: rgba(26, 26, 64, 1);
        border: 0;
    }
    input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: none;
    outline: 0;
} 
    
`

export default Select