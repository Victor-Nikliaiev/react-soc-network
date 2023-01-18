import * as S from "./Login.styled.js";

export const Login = () => {
    return (
        <S.Login>
            <S.LoginWrapper>
                <S.LoginLeft>
                    <S.LoginLogo>Arhis GGN v1.0</S.LoginLogo>
                    <S.LoginDesc>
                        Gold Gather Network | Connect all together...
                    </S.LoginDesc>
                </S.LoginLeft>
                <S.LoginRight>
                    <S.LoginBox>
                        <S.LoginInput type='email' placeholder='Email' />
                        <S.LoginInput type='password' placeholder='Password' />
                        <S.LoginButton>Log In</S.LoginButton>
                        <S.LoginForgot>Forgot Password?</S.LoginForgot>
                        <S.LoginRegisterButton>
                            Create a New Account
                        </S.LoginRegisterButton>
                    </S.LoginBox>
                </S.LoginRight>
            </S.LoginWrapper>
        </S.Login>
    );
};
