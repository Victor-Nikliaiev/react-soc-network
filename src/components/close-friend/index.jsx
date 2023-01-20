import { PF } from "../../dummyData.js";
import * as S from "./closeFriend.styled.js";

export const CloseFriend = ({ profilePicture, username }) => {
    return (
        <S.SidebarFriend>
            <S.SidebarFriendImage src={PF + profilePicture} alt='' />
            <S.SidebarFriendName>{username}</S.SidebarFriendName>
        </S.SidebarFriend>
    );
};
