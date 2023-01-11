import { Feed } from "../../components/feed";
import { Rightbar } from "../../components/rightbar";
import { Sidebar } from "../../components/sidebar";
import { Topbar } from "../../components/topbar";
import * as S from "./Home.styled.js";

export const Home = () => {
    return (
        <>
            <Topbar />
            <S.HomeContainer>
                <Sidebar />
                <Feed />
                <Rightbar />
            </S.HomeContainer>
        </>
    );
};
