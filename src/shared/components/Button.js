import styled from 'styled-components'

const Button = styled.button`
    flex-grow: 1;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    color: #e01010;
    font-size: 16px;
    background: #ffffff;
    padding: 10px 20px 10px 20px;
    border: solid #e01010 1px;
    text-decoration: none;
    &:hover {
        background-color: rgba(224, 16, 16, 0.2)
    }
`;

export default Button;