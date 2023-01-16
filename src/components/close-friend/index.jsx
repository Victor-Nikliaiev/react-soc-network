import * as S from "./closeFriend.styled.js";

export const CloseFriend = ({ profilePicture, username }) => {
    return (
        <S.SidebarFriend>
            <S.SidebarFriendImage src={profilePicture} alt='' />
            <S.SidebarFriendName>{username}</S.SidebarFriendName>
        </S.SidebarFriend>
    );
};
