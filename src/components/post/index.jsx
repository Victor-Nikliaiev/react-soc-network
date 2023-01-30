import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { PF } from "../../dummyData.js";
import * as S from "./Post.styled.js";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export const Post = ({ createdAt, desc, likes, comment, photo, userId }) => {
    const [likeCounter, setLikeCounter] = useState(likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users/${userId}`);
            setUser(res.data);
        };

        fetchUser();
    }, [userId]);

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
                        <Link to={`profile/${user.username}`}>
                            <S.PostProfileImage
                                src={
                                    user.profilePicture
                                        ? PF + user.profilePicture
                                        : PF + "person/noAvatar.jpg"
                                }
                                alt=''
                            />
                        </Link>

                        <S.PostUsername>{user.username}</S.PostUsername>
                        <S.PostDate>{format(createdAt)}</S.PostDate>
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
