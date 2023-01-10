import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import "./topbar.scss";

export const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>Arhis GGN v 1.0</span>
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <Search className='searchIcon' />
                    <input
                        placeholder='Search for friends, post or any video...'
                        className='searchInput'
                    />
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <Person />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Chat />
                        <span className='topbarIconBadge'>2</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Notifications />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <img
                    src='/assets/person/1.jpeg'
                    alt='profile picture'
                    className='topbarImg'
                />
            </div>
        </div>
    );
};
