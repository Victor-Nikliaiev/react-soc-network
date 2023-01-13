import styled from "styled-components";

export const Post = styled.div`
    width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 0px 1px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 1px 16px -8px rgba(0, 0, 0, 0.68);
    margin: 30px 0;
`;

export const PostWrapper = styled.div`
    padding: 10px;
`;

export const PostTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PostCenter = styled.div`
    margin: 20px 0;
`;

export const PostBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PostTopLeft = styled.div`
    display: flex;
    align-items: center;
`;
export const PostTopRight = styled.div``;

export const PostProfileImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`;

export const PostUsername = styled.div`
    font-size: 15px;
    font-weight: 500;
    margin: 0 10px;
`;
export const PostDate = styled.div`
    font-size: 12px;
`;

export const PostText = styled.span``;

export const PostImg = styled.img`
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: cover;
`;

export const PostBottomLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const PostBottomRight = styled.div``;

export const LikeIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    cursor: pointer;
`;

export const PostLikeCounter = styled.span`
    font-size: 15px;
`;

export const PostCommentText = styled.span`
    cursor: pointer;
    border-bottom: 1px dashed gray;
    font-size: 15px;
`;
