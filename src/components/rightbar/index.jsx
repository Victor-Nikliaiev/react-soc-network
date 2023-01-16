import * as S from "./Rightbar.styled.js";
import { Users } from "../../dummyData.js";
import { Online } from "../online/index.jsx";

export const Rightbar = () => {
    return (
        <S.Rightbar>
            <S.RightbarWrapper>
                <S.BirthdayContainer>
                    <S.BirthdayImg src='./assets/gift.png' alt='' />
                    <S.BirthdayText>
                        <strong>Pola Foster</strong> and{" "}
                        <strong>3 other friends</strong> have a birthday today.
                    </S.BirthdayText>
                </S.BirthdayContainer>
                <S.RightbarAd src='./assets/ad.png' alt='' />
                <S.RightbarTitle>Online Friends</S.RightbarTitle>
                <S.RightbarFriendList>
                    {Users.map(user => (
                        <Online key={crypto.randomUUID()} {...user} />
                    ))}
                </S.RightbarFriendList>
            </S.RightbarWrapper>
        </S.Rightbar>
    );
};
