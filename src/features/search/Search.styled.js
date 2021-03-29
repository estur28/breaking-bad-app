import styled from 'styled-components'

export const SearchBox = styled.section`
    height: 100px;
`

export const SearchInput = styled.input`
    display: block;
    padding: 10px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    width: 60%;
    margin: auto;
    outline: none;
    position: relative;
`

export const ClearButton = styled.button`
    display: inline-block;
    background-color: #fff;
    position: absolute;
    padding: 10px;
    top: 215px;
    right: 21%;
    outline: none;
    border-radius: 5px;
    border: 0;
    @media (max-width: 553px) {
        top: 238px;
    };
    @media (max-width: 420px) {
        top: 232px;
    };
    @media (max-width: 350px) {
        top: 224px;
    };
    @media (max-width: 317px) {
        top: 247px;
    };
`