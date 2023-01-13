import { MoreVert } from "@material-ui/icons";
import * as S from "./Post.styled.js";

export const Post = () => {
    return (
        <S.Post>
            <S.PostWrapper>
                <S.PostTop>
                    <S.PostTopLeft>
                        <S.PostProfileImage
                            src='./assets/person/0.jpg'
                            alt=''
                        />
                        <S.PostUsername>Arhis Alight</S.PostUsername>
                        <S.PostDate>5 mins ago</S.PostDate>
                    </S.PostTopLeft>
                    <S.PostTopRight>
                        <MoreVert />
                    </S.PostTopRight>
                </S.PostTop>
                <S.PostCenter>
                    <S.PostText>Hey! It's my first post :D</S.PostText>
                    <S.PostImg src='./assets/post/1.jpeg' alt='' />
                </S.PostCenter>
                <S.PostBottom>
                    <S.PostBottomLeft>
                        <S.LikeIcon src='./assets/like.png' />
                        <S.LikeIcon src='./assets/heart.png' />
                        <S.PostLikeCounter>32 people like it</S.PostLikeCounter>
                    </S.PostBottomLeft>
                    <S.PostBottomRight>
                        <S.PostCommentText>9 comments</S.PostCommentText>
                    </S.PostBottomRight>
                </S.PostBottom>
            </S.PostWrapper>
        </S.Post>
    );
};
