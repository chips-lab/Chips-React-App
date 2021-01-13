import  React  from  "react";
import ReactDOM from 'react-dom'
import styled , {css} from 'styled-components';

const  DefaultButton = styled.button`
    color: #fff;
    background-color:  ${ props => props.theme.HackBlack};
    font-size: 16px;
    padding:  14px 27px;
    border: none;
    font-weight: 700;
    font-family:  'Poppins', sans-serif;
    letter-spacing:  1.3px;
    transition: 0.8s;
    width:270px;
    margin:10px 0px;

    ${props => {
        switch  (props.size){
            case  "small":
                return "font-size: 12px;";
             case  "large":
                return "font-size: 20px;";
        }

        return "font-size: 16px;";
    }}

    &:hover {
         background-color:  #fff;
         color: ${ props => props.theme.HackBlack};
         letter-spacing: 2px;
         border:1px solid ${ props => props.theme.HackBlack};
    }
`;


export  default   DefaultButton;