import styled from "styled-components";
import HomePage from "../../../pages";

const DivSearch = styled.form`
    display: flex;
    flex-direction: row;

    
    .inputSearch{
        background: #1A1A40;
        width: 359px;
        height: 45px;
        border: none;
        color: #FFF;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px 0 0 5px;
        padding: 0 15px;
        
    }
    .btn{
        background: #FA58B6;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
        border-radius: 0px 5px 5px 0px;
        border: none;
        width: 45px;
        height: 45px;
        color: #FFF;
        cursor: pointer;
    }
    .inputSearch:focus {
        border: none;
        outline: 0;
    }
    span{
        top: 136px;
        position: absolute;
        left: 100px;
        color: #FFF;
        transition: 1s;
    }

    .btn:hover{
        background: #a8196c;
        transition: .6s;
    }
    span:hover,
    .inputSearch:focus ~ span,
    .inputSearch:valid ~ span{
        transition: 1.1s;
        color: #fff;
        transform: translateY(-33px);
    }
`

export default DivSearch

// export default function InputSearch() {

//     return (
//         <>

//         </>
//     )
// }