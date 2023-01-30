import * as S from "./Rightbar.styled.js";
import { PF, Users } from "../../dummyData.js";
import { Online } from "../online/index.jsx";

const HomeRightbar = () => (
    <>
        <S.BirthdayContainer>
            <S.BirthdayImg src='./assets/gift.png' alt='' />
            <S.BirthdayText>
                <strong>Pola Foster</strong> and{" "}
                <strong>3 other friends</strong> have a birthday today.
            </S.BirthdayText>
        </S.BirthdayContainer>
        <S.RightbarAd src={`${PF}ad.png`} alt='' />
        <S.RightbarTitle>Online Friends</S.RightbarTitle>
        <S.RightbarFriendList>
            {Users.map(user => (
                <Online key={crypto.randomUUID()} {...user} />
            ))}
        </S.RightbarFriendList>
    </>
);

const ProfileRightbar = () => (
    <>
        <S.RightbarTitle>User information</S.RightbarTitle>
        <S.RightbarInfo>
            <S.RightbarInfoItem>
                <S.RightbarInfoKey>City:</S.RightbarInfoKey>
                <S.RightbarInfoValue>Bern</S.RightbarInfoValue>
            </S.RightbarInfoItem>
            <S.RightbarInfoItem>
                <S.RightbarInfoKey>From:</S.RightbarInfoKey>
                <S.RightbarInfoValue>Yelizovo</S.RightbarInfoValue>
            </S.RightbarInfoItem>
            <S.RightbarInfoItem>
                <S.RightbarInfoKey>Relationship:</S.RightbarInfoKey>
                <S.RightbarInfoValue>Married with the job</S.RightbarInfoValue>
            </S.RightbarInfoItem>
        </S.RightbarInfo>
        <S.RightbarTitle>User friends</S.RightbarTitle>
        <S.RightbarFollowings>
            <S.RightbarFollowing>
                <S.RightbarFollowingImg src={`${PF}person/1.jpeg`} />
                <S.RightbarFollowingName>John Carter</S.RightbarFollowingName>
            </S.RightbarFollowing>
            <S.RightbarFollowing>
                <S.RightbarFollowingImg src={`${PF}person/2.jpeg`} />
                <S.RightbarFollowingName>John Carter</S.RightbarFollowingName>
            </S.RightbarFollowing>
            <S.RightbarFollowing>
                <S.RightbarFollowingImg src={`${PF}person/3.jpeg`} />
                <S.RightbarFollowingName>John Carter</S.RightbarFollowingName>
            </S.RightbarFollowing>
            <S.RightbarFollowing>
                <S.RightbarFollowingImg src={`${PF}person/4.jpeg`} />
                <S.RightbarFollowingName>John Carter</S.RightbarFollowingName>
            </S.RightbarFollowing>
            <S.RightbarFollowing>
                <S.RightbarFollowingImg src={`${PF}person/5.jpeg`} />
                <S.RightbarFollowingName>John Carter</S.RightbarFollowingName>
            </S.RightbarFollowing>
            <S.RightbarFollowing>
                <S.RightbarFollowingImg src={`${PF}person/6.jpeg`} />
                <S.RightbarFollowingName>John Carter</S.RightbarFollowingName>
            </S.RightbarFollowing>
        </S.RightbarFollowings>
    </>
);

export const Rightbar = ({ profile }) => {
    return (
        <S.Rightbar>
            <S.RightbarWrapper>
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </S.RightbarWrapper>
        </S.Rightbar>
    );
};
