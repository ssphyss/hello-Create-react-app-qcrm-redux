import React from 'react';
import { Menu, Dropdown, Badge, Icon } from 'antd'
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
        // const { /*userState,*/ logout } = this.props;
        const menu = (
            <Menu style={{padding:'10px 18px', width: '300px', border: '1px solid #c9e0e0'}}>
                <Menu.Item>
                   <h6>通知訊息</h6>
                </Menu.Item>
                <Menu.Item>                  
                    <Icon type="notification" />
                    <span>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>       
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                   <Icon type="notification" />
                   <span>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                   <Icon type="notification" />
                   <span>lorem10dfjkdjflkdhfl</span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                   <Icon type="notification" />
                   <span>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item> 
                    <span>
                        <i className="topbar__dropdownMenuIcon icon-user" /> 
                        更多
                    </span>
                </Menu.Item>                
            </Menu>
        )
        return(
            <div className='topbar__dropdown topbar__dropdown--badge'>
            <Dropdown 
                    overlay={menu} 
                    trigger={['click']}
                    placement="bottomRight"
                >                
                <div 
                    overlay={menu} 
                    trigger={['click']}
                >
                    <span className="ant-dropdown-link" href="/">
                        通知
                        {/* <Badge count={count}>
                            <Avatar className="topbar__avatar" shape="square" icon="notification" />
                        </Badge>     */}
                        
                        <Badge count={count}>
                            <Icon type="notification" />
                        </Badge>                    
                    </span>
                </div>
                </Dropdown>                 
            </div>
        )
    }
}

// export default BadgeMenu
// @connect(mapStateToProps, mapDispathToProps)
export default connect(mapStateToProps, mapDispathToProps)(BadgeMenu);