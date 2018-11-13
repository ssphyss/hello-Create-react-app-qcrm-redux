import React from 'react';
import ProfileMenu from './ProfileMenu';
import BadgeMenu from './BadgeMenu';

// import { Button } from 'antd'
import './index.scss';

class TopBar extends React.Component{
    render(){
        return(
            <div className="topbar">
                <div className="topbar__left">
                    左邊
                </div>
                <div className="topbar__right">
                    {/* 右邊 */}
                    {/* <a
                        href="https://www.google.com.tw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="toFront mr-4 d-none d-sm-inline"
                    >
                        <Button type="primary">前台</Button>
                    </a> */}
                    <BadgeMenu />
                    <ProfileMenu />
                </div>
            </div>
        )
    }
}

export default TopBar