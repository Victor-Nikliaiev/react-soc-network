import styled from "styled-components";

export const Login = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginWrapper = styled.div`
    width: 70%;
    height: 70%;
    display: flex;
`;

const LOGIN_FLEX = `
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LoginLeft = styled.div`
    ${LOGIN_FLEX};
`;

export const LoginRight = styled.div`
    ${LOGIN_FLEX};
`;

export const LoginLogo = styled.h3`
    font-size: 50px;
    font-weight: 800;
    color: #1775ee;
    margin-bottom: 10px;
`;

export const LoginDesc = styled.span`
    font-size: 24px;
`;

export const LoginBox = styled.div`
    height: 400px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const LoginInput = styled.input`
    height: 50px;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: 18px;
    padding-left: 20px;

    &:focus {
        outline: none;
    }
`;

const buttonStyles = `
    height: 50px;
    border-radius: none;
    border: none;
    background-color: #1775ee;
    color: white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: all 400ms ease-in-out;

    &:hover {
        transform: scale(1.035);
    }
`;

export const LoginButton = styled.button`
    ${buttonStyles}
`;

export const LoginForgot = styled.span`
    text-align: center;
    color: #1775ee;
`;

export const LoginRegisterButton = styled.button`
    ${buttonStyles}

    width: 70%;
    align-self: center;
    background-color: #42b72a;
`;
