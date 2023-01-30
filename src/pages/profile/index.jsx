import { Feed } from "../../components/feed";
import { Rightbar } from "../../components/rightbar";
import { Sidebar } from "../../components/sidebar";
import { Topbar } from "../../components/topbar";
import { PF } from "../../dummyData.js";
import * as S from "../profile/Profile.styled.js";

export const Profile = () => {
    return (
        <>
            <Topbar />
            <S.Profile>
                <Sidebar />
                <S.ProfileRight>
                    <S.ProfileRightTop>
                        <S.ProfileCover>
                            <S.ProfileCoverImg
                                src={`${PF}post/3.jpeg`}
                                alt=''
                            />
                            <S.ProfileUserImg
                                src={`${PF}person/0.jpg`}
                                alt=''
                            />
                        </S.ProfileCover>
                        <S.ProfileInfo>
                            <S.ProfileInfoName>Arhis Alight</S.ProfileInfoName>
                            <S.ProfileInfoDesc>
                                Beyond the perception
                            </S.ProfileInfoDesc>
                        </S.ProfileInfo>
                    </S.ProfileRightTop>

                    <S.ProfileRightBottom>
                        <Feed username='Arhis' />
                        <Rightbar profile />
                    </S.ProfileRightBottom>
                </S.ProfileRight>
            </S.Profile>
        </>
    );
};
