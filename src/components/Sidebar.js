import React from 'react';
import './Sidebar.css';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { SidebarRow } from './SidebarRow';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/appSlice';


export const Sidebar = () => {

   const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            <SidebarRow 
                src={user.profilePic}
                title={user.username}
             />
            <SidebarRow
                Icon={EmojiFlagsIcon}
                title="Paginas"
             />
             <SidebarRow
                Icon={PeopleIcon}
                title="Amigos"
             />
             <SidebarRow
                Icon={ChatIcon}
                title="Messenger"
             />
             <SidebarRow
                Icon={StorefrontIcon}
                title="Marketplace"
             />
             <SidebarRow
                Icon={VideoLibraryIcon}
                title="Videos"
             />
        </div>
    )
}
