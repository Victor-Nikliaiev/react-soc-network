import * as S from "./Share.styled.js";

export const Share = () => {
    return (
        <S.Share>
            <S.ShareWrapper>
                <S.ShareTop>
                    <S.ShareProfilePicture src='/assets/person/0.jpg' alt='' />
                    <S.ShareInput placeholder="What's in your mind Arhis?" />
                </S.ShareTop>
                <S.ShareHr />
                <S.ShareBottom>
                    <S.ShareOptions>
                        <S.ShareOption>
                            <S.icons.PermMedia htmlColor='tomato' />
                            <S.ShareOptionText>Text or Video</S.ShareOptionText>
                        </S.ShareOption>
                        <S.ShareOption>
                            <S.icons.Label htmlColor='blue' />
                            <S.ShareOptionText>Tag</S.ShareOptionText>
                        </S.ShareOption>
                        <S.ShareOption>
                            <S.icons.Room htmlColor='green' />
                            <S.ShareOptionText>Location</S.ShareOptionText>
                        </S.ShareOption>
                        <S.ShareOption>
                            <S.icons.EmojiEmotions htmlColor='goldenrod' />
                            <S.ShareOptionText>Feelings</S.ShareOptionText>
                        </S.ShareOption>
                    </S.ShareOptions>
                    <S.ShareButton>Share</S.ShareButton>
                </S.ShareBottom>
            </S.ShareWrapper>
        </S.Share>
    );
};
