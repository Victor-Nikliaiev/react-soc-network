import styled from "styled-components";

export const Sidebar = styled.div`
    flex: 3;
    height: calc(100vh - 50px);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background-color: gray;
    }
`;

export const SidebarWrapper = styled.div`
    padding: 20px;
`;

export const SidebarList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const SidebarListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const SidebarListItemText = styled.span``;

export const getSideBarIconStyles = icon => styled(icon)`
    margin-right: 15px;
`;

export const SidebarButton = styled.button`
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
`;

export const SidebarHr = styled.hr`
    margin: 20px 0;
`;

export const SidebarFriendList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const SidebarFriend = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const SidebarFriendImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

export const SidebarFriendName = styled.span``;
