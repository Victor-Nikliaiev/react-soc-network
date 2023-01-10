import { Feed } from "../../components/feed";
import { Rightbar } from "../../components/rightbar";
import { Sidebar } from "../../components/sidebar";
import { Topbar } from "../../components/topbar";
import "./home.scss";

export const Home = () => {
    return (
        <>
            <Topbar />
            <div className='homeContainer'>
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    );
};
