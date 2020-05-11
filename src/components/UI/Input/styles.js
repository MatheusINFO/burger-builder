import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;

export const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
`;

export const InputText = styled.input`
    outline: none;
    background-color: #fff;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;

    &:focus{
        border: ${props => props.invalid ? "1px solid #f00" : "1px solid #ccc"};
        color: ${props => props.invalid ? "#red" : "#000"};
        background-color: #eee;
        
        ::placeholder{
            color: ${props => props.invalid ? "#f00" : "#000"};
        }
    }
`;

export const SelectText = styled.select`
    outline: none;
    border: 1px solid #ccc;
    color: grey;
    background-color: #fff;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;

    &:focus{
        background-color: #ccc;
    }
`;