import { Post } from "../post";
import { Share } from "../share";
import * as S from "./Feed.styled.js";

export const Feed = () => {
    return (
        <S.Feed>
            <S.FeedWrapper>
                <Share />
                <Post />
                <Post />
                <Post />
            </S.FeedWrapper>
        </S.Feed>
    );
};
