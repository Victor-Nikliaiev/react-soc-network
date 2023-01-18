import * as S from "./Register.styled.js";

export const Register = () => {
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
                        <S.LoginInput placeholder='Username' />
                        <S.LoginInput type='email' placeholder='Email' />
                        <S.LoginInput type='password' placeholder='Password' />
                        <S.LoginInput
                            type='password'
                            placeholder='Password again'
                        />
                        <S.LoginButton>Sign Up</S.LoginButton>
                        <S.LoginRegisterButton>
                            Log into Account
                        </S.LoginRegisterButton>
                    </S.LoginBox>
                </S.LoginRight>
            </S.LoginWrapper>
        </S.Login>
    );
};
