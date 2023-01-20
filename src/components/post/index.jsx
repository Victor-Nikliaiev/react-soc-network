import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import { PF } from "../../dummyData.js";
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
        console.log("Liked click!!");
        setLikeCounter(isLiked ? likeCounter - 1 : likeCounter + 1);
        setIsLiked(!isLiked);
    };

    return (
        <S.Post>
            <S.PostWrapper>
                <S.PostTop>
                    <S.PostTopLeft>
                        <S.PostProfileImage src={PF + profilePicture} alt='' />
                        <S.PostUsername>{username}</S.PostUsername>
                        <S.PostDate>{date}</S.PostDate>
                    </S.PostTopLeft>
                    <S.PostTopRight>
                        <MoreVert />
                    </S.PostTopRight>
                </S.PostTop>
                <S.PostCenter>
                    <S.PostText>{desc}</S.PostText>
                    <S.PostImg src={PF + photo} alt='' />
                </S.PostCenter>
                <S.PostBottom>
                    <S.PostBottomLeft>
                        <S.LikeIcon
                            onClick={likeHandler}
                            src={`${PF}like.png`}
                        />
                        <S.LikeIcon
                            onClick={likeHandler}
                            src={`${PF}heart.png`}
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
