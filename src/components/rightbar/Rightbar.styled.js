import styled from "styled-components";

export const Rightbar = styled.div`
    flex: 3.5;
`;

export const RightbarWrapper = styled.div`
    padding: 20px 20px 0 0;
`;

export const BirthdayContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const BirthdayImg = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

export const BirthdayText = styled.span`
    font-weight: 300;
    font-size: 15px;
`;

export const RightbarAd = styled.img`
    width: 100%;
    border-radius: 10px;
    margin: 30px 0;
`;

export const RightbarTitle = styled.h4`
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 500;
`;

export const RightbarFriendList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const RightbarFriend = styled.li`
    display: flex;
    margin-bottom: 15px;
`;

export const RightbarProfileImgContainer = styled.div`
    margin-right: 10px;
    position: relative;
`;

export const RightbarProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

export const RightbarOnline = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: limegreen;
    position: absolute;
    top: -2px;
    right: 0;
    border: 2px solid white;
`;

export const RightbarUsername = styled.span`
    font-weight: 500;
`;

export const RightbarInfo = styled.div`
    margin-bottom: 30px;
`;

export const RightbarInfoItem = styled.div`
    margin-bottom: 10px;
`;

export const RightbarInfoKey = styled.span`
    font-weight: 500;
    margin-right: 15px;
    color: #555;
`;

export const RightbarInfoValue = styled.span`
    font-weight: 300;
`;

export const RightbarFollowings = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const RightbarFollowing = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const RightbarFollowingImg = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`;

export const RightbarFollowingName = styled.span``;
