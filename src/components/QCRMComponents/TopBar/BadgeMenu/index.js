import React from 'react';
import { Menu, /*Dropdown,*/ Badge, Icon, Button } from 'antd'
// 引入store
import { connect } from 'react-redux';
// import { actionCreators } from './../store';
// import { actionCreators as actionCreatorsAdmin } from './../../../layout/store';
import './../index.scss';

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

class BadgeMenu extends React.Component{
    state = {
        count: 7,
    }
    render(){
        const { count } = this.state
        const { /*userState,*/ logout } = this.props;
        const menu = (
            <Menu>
                <Menu.Item>
                    <span>Hello, userState.role</span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item> 
                    <a href="/">
                        <i className="topbar__dropdownMenuIcon icon-user" /> 
                        設定
                    </a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <a
                        href="https://www.google.com.tw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="toFront mr-4 d-none d-sm-inline"
                    >
                        <Button type="primary">前台</Button>
                    </a>
                </Menu.Item>
                <Menu.Item>
                <a href="/" onClick={logout}>
                    <i className="topbar__dropdownMenuIcon icmn-exit" /> Logout
                </a>
                </Menu.Item>
            </Menu>
        )
        return(
            <div className='topbar__dropdown topbar__dropdown--badge'>
                <div 
                    overlay={menu} 
                    trigger={['click']}
                >
                    <a className="ant-dropdown-link" href="/">
                        通知
                        {/* <Badge count={count}>
                            <Avatar className="topbar__avatar" shape="square" icon="notification" />
                        </Badge>     */}
                        
                        <Badge count={count}>
                            <Icon type="notification" />
                        </Badge>                    
                    </a>
                </div>               
            </div>
        )
    }
}

// export default BadgeMenu
// @connect(mapStateToProps, mapDispathToProps)
export default connect(mapStateToProps, mapDispathToProps)(BadgeMenu);