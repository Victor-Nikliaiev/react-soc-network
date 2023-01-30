import { Post } from "../post";
import { Share } from "../share";
import * as S from "./Feed.styled.js";
import { instance, Posts, Users } from "../../dummyData.js";
import { useEffect, useState } from "react";
import axios from "axios";

export const Feed = ({ username }) => {
    const [posts, setPosts] = useState([]);
    console.log(username);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get("/posts/profile/" + username)
                : await axios.get("posts/timeline/63ca6825d015437c7d8a288c");
            setPosts(res.data);
        };

        fetchPosts();
    }, [username]);

    return (
        <S.Feed>
            <S.FeedWrapper>
                <Share />
                {posts.map(post => {
                    return <Post key={crypto.randomUUID()} {...post} />;
                })}
            </S.FeedWrapper>
        </S.Feed>
    );
};
