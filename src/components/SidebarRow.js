import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';

export const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}
