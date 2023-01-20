import { PF } from "../../dummyData.js";
import * as S from "./Online.styled.js";

export const Online = ({ profilePicture, username }) => {
    return (
        <S.RightbarFriend>
            <S.RightbarProfileImgContainer>
                <S.RightbarProfileImg src={PF + profilePicture} alt='' />
                <S.RightbarOnline></S.RightbarOnline>
            </S.RightbarProfileImgContainer>
            <S.RightbarUsername>{username}</S.RightbarUsername>
        </S.RightbarFriend>
    );
};
