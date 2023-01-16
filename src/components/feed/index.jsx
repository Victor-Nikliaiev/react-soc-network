import { Post } from "../post";
import { Share } from "../share";
import * as S from "./Feed.styled.js";
import { Posts, Users } from "../../dummyData.js";

export const Feed = () => {
    return (
        <S.Feed>
            <S.FeedWrapper>
                <Share />
                {Posts.map(post => {
                    const user = Users.filter(user => user.id === post.userId);
                    const { id, ...userData } = user[0];

                    return (
                        <Post
                            key={crypto.randomUUID()}
                            {...post}
                            {...userData}
                        />
                    );
                })}
            </S.FeedWrapper>
        </S.Feed>
    );
};
