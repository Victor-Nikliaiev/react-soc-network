import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import * as S from "./Topbar.styled.js";

export const Topbar = () => {
    return (
        <S.TopbarContainer>
            <S.TopbarLeft>
                <S.Logo>Arhis GGN v 1.0</S.Logo>
            </S.TopbarLeft>
            <S.TopbarCenter>
                <S.Searchbar>
                    <S.SearchIcon />
                    <S.SearchInput placeholder='Search for friends, post or any video...' />
                </S.Searchbar>
            </S.TopbarCenter>
            <S.TopbarRight>
                <div>
                    <S.TopbarLink>Homepage</S.TopbarLink>
                    <S.TopbarLink>Timeline</S.TopbarLink>
                </div>
                <S.TopbarIcons>
                    <S.TopbarIconItem>
                        <Person />
                        <S.TopbarIconBadge>1</S.TopbarIconBadge>
                    </S.TopbarIconItem>
                    <S.TopbarIconItem>
                        <Chat />
                        <S.TopbarIconBadge>2</S.TopbarIconBadge>
                    </S.TopbarIconItem>
                    <S.TopbarIconItem>
                        <Notifications />
                        <S.TopbarIconBadge>1</S.TopbarIconBadge>
                    </S.TopbarIconItem>
                </S.TopbarIcons>
                <S.TopbarImg
                    src='/assets/person/1.jpeg'
                    alt='profile picture'
                />
            </S.TopbarRight>
        </S.TopbarContainer>
    );
};
