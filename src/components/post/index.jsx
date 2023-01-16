import { MoreVert } from "@material-ui/icons";
import * as S from "./Post.styled.js";

export const Post = ({
    date,
    desc,
    like,
    comment,
    photo,
    profilePicture,
    username,
}) => {
    return (
        <S.Post>
            <S.PostWrapper>
                <S.PostTop>
                    <S.PostTopLeft>
                        <S.PostProfileImage src={profilePicture} alt='' />
                        <S.PostUsername>{username}</S.PostUsername>
                        <S.PostDate>{date}</S.PostDate>
                    </S.PostTopLeft>
                    <S.PostTopRight>
                        <MoreVert />
                    </S.PostTopRight>
                </S.PostTop>
                <S.PostCenter>
                    <S.PostText>{desc}</S.PostText>
                    <S.PostImg src={photo} alt='' />
                </S.PostCenter>
                <S.PostBottom>
                    <S.PostBottomLeft>
                        <S.LikeIcon src='./assets/like.png' />
                        <S.LikeIcon src='./assets/heart.png' />
                        <S.PostLikeCounter>
                            {like} people like it
                        </S.PostLikeCounter>
                    </S.PostBottomLeft>
                    <S.PostBottomRight>
                        <S.PostCommentText>
                            {comment} comments
                        </S.PostCommentText>
                    </S.PostBottomRight>
                </S.PostBottom>
            </S.PostWrapper>
        </S.Post>
    );
};
