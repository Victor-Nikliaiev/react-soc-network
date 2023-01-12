import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import styled from "styled-components";

export const Share = styled.div`
    width: 100%;
    height: 170px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 1px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 1px 16px -8px rgba(0, 0, 0, 0.68);
`;

export const ShareWrapper = styled.div`
    padding: 10px;
`;

export const ShareTop = styled.div`
    display: flex;
    align-items: center;
`;

export const ShareBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ShareProfilePicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

export const ShareInput = styled.input`
    border: none;
    width: 80%;

    &:focus {
        outline: none;
    }
`;

export const ShareHr = styled.hr`
    margin: 20px;
`;

export const ShareOptions = styled.div`
    display: flex;
    margin-left: 20px;
`;

export const ShareOption = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
`;

export const ShareOptionText = styled.span`
    font-size: 14px;
    font-weight: 500;
`;

export const icons = new StyleIcons();
function StyleIcons() {
    function getStyledShareIcon(icon) {
        return styled(icon)`
            font-size: 18px;
            margin-right: 10px;
        `;
    }

    this.PermMedia = getStyledShareIcon(PermMedia);
    this.Label = getStyledShareIcon(Label);
    this.Room = getStyledShareIcon(Room);
    this.EmojiEmotions = getStyledShareIcon(EmojiEmotions);
}

export const ShareButton = styled.button`
    border: none;
    padding: 7px;
    border-radius: 5px;
    background-color: green;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    color: white;
`;
