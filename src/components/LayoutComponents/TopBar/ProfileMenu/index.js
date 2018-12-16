import React from 'react';
import { Menu, Dropdown, Avatar, Button } from 'antd'
// 引入store
import { connect } from 'react-redux';
// import { actionCreators } from './../store';
// import { actionCreators as actionCreatorsAdmin } from './../../../layout/store';
import './../index.scss';
import { Link /* , NavLink*/ } from 'react-router-dom';
// 引入store
const mapStateToProps = (state, props) => {
    return {    
    }
}

// 引入store
const mapDispathToProps = (dispatch) => {
    return {
        // // Loading加載
        // handleloading(loadingStatus = true){
        //     const action = actionCreatorsAdmin.getLoading(loadingStatus);
        //     dispatch(action);      
        // },       

        // // Ajax資料載入
        // handleListBorrow(){    
        //     const action = actionCreators.getListBorrow();
        //     dispatch(action);
        // }        
    }
}

class ProfileMenu extends React.Component{
    state = {
        count: 7,
    }
    render(){
        // const { count } = this.state;         
        const { /*userState,*/ logout } = this.props;
        const menu = (
            <Menu style={{padding:'10px 18px', marginTop: '18px', border: '1px solid #c9e0e0'}}>
                {/* <Menu.Item>
                    <span>基本資料</span>
                </Menu.Item> */}
                {/* <Menu.Divider /> */}
                <Menu.Item>
                   <h6>基本資料</h6>
                </Menu.Item>
                <Menu.Item>
                    <span>
                        <i className="topbar__dropdownMenuIcon icon-user" /> 
                        設定
                    </span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <a
                        href="http://physwork.pro/msq2018/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="toFront mr-4 d-none d-sm-inline"
                    >
                        前台                        
                    </a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                <Link to="/user/login" onClick={logout}>
                    <i className="topbar__dropdownMenuIcon icmn-exit" />                     
                    <Button type="primary">登出</Button>
                </Link>
                </Menu.Item>
            </Menu>
        )
        return(
            <div className='topbar__dropdown'>
                {/* 使用者 */}
                {/* <Dropdown
                    // overlay={menu}
                    // trigger={['click']}
                    // placement="bottomRight"
                    // onVisibleChange={this.addCount}
                >
                </Dropdown> */}
                <Dropdown 
                    overlay={menu} 
                    trigger={['click']}
                >
                    <span className="ant-dropdown-link">
                        Hello, Admin
                        <Avatar className="topbar__avatar" /* shape="square" size="large"*/ icon="user" />
                    </span>
                </Dropdown>                
            </div>
        )
    }
}


// export default ProfileMenu
// @connect(mapStateToProps, mapDispathToProps)
export default connect(mapStateToProps, mapDispathToProps)(ProfileMenu);