import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
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
    const [likeCounter, setLikeCounter] = useState(like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLikeCounter(isLiked ? likeCounter - 1 : likeCounter + 1);
        setIsLiked(value => !value);
    };

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
                        <S.LikeIcon
                            onClick={likeHandler}
                            src='./assets/like.png'
                        />
                        <S.LikeIcon
                            onClick={likeHandler}
                            src='./assets/heart.png'
                        />
                        <S.PostLikeCounter>
                            {likeCounter} people like it
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
