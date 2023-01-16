import {
    Bookmark,
    Chat,
    Event,
    Group,
    HelpOutline,
    PlayCircleFilledOutlined,
    RssFeed,
    School,
    WorkOutline,
} from "@material-ui/icons";
import * as S from "./Sidebar.styled.js";
import { Users } from "../../dummyData.js";
import { CloseFriend } from "../close-friend";

const menuItems = [
    {
        title: "Feed",
        icon: S.getSideBarIconStyles(RssFeed),
    },

    {
        title: "Chats",
        icon: S.getSideBarIconStyles(Chat),
    },
    {
        title: "Videos",
        icon: S.getSideBarIconStyles(PlayCircleFilledOutlined),
    },
    {
        title: "Groups",
        icon: S.getSideBarIconStyles(Group),
    },
    {
        title: "Bookmarks",
        icon: S.getSideBarIconStyles(Bookmark),
    },
    {
        title: "Questions",
        icon: S.getSideBarIconStyles(HelpOutline),
    },
    {
        title: "Jobs",
        icon: S.getSideBarIconStyles(WorkOutline),
    },
    {
        title: "Events",
        icon: S.getSideBarIconStyles(Event),
    },
    {
        title: "Courses",
        icon: S.getSideBarIconStyles(School),
    },
];

export const Sidebar = () => {
    return (
        <S.Sidebar>
            <S.SidebarWrapper>
                <S.SidebarList>
                    {menuItems.map(({ title, icon: Icon }) => (
                        <S.SidebarListItem key={crypto.randomUUID()}>
                            <Icon />
                            <S.SidebarListItemText>
                                {title}
                            </S.SidebarListItemText>
                        </S.SidebarListItem>
                    ))}
                </S.SidebarList>
                <S.SidebarButton>Show More</S.SidebarButton>
                <S.SidebarHr />
                <S.SidebarFriendList>
                    {Users.map(user => (
                        <CloseFriend key={crypto.randomUUID()} {...user} />
                    ))}
                </S.SidebarFriendList>
            </S.SidebarWrapper>
        </S.Sidebar>
    );
};
