import React from 'react';
import { Layout, Menu, Icon } from 'antd';	
import logo from './../../../assets/logo.svg';
// 1.改用Ajax
// import menuConfig from './../config/menuConfig.js';

// 引入Store
import { connect } from 'react-redux';
import { actionCreators } from './../store';

// 引入Router
import { Link, NavLink } from 'react-router-dom';
// import { Link, NavLink, withRouter } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderBar extends React.Component{    

    render(){
        // console.log('------ ▉▉▉▉▉▉▉▉ Siderbar ▉▉▉▉▉▉▉▉ ------')
        // console.log('this.props.collapsed---',this.props.collapsed)
        // console.log('menuConfig', menuConfig)        
        return(
            <Sider
                trigger={null}
                // collapsible
                collapsed={this.props.collapsed}
                breakpoint="lg"
                width={256}
                className='sider'							
            >
                {/* <div className="logo" /> */}
                <Link to="/">
                    <div className='logo' key="logo">
                        <img src={logo} alt="logo" />                  
                        {/* <h1>Money SQ</h1> */}
                    </div>
                </Link>
                {/* <div className='logo' key="logo">	
                    <a href='./'><img src={logo} alt="logo" /></a>                    					
                </div> */}
                <Menu
                    defaultSelectedKeys={['1']}
                    // selectedKeys={[this.props.selectedKeys]}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.props.collapsed}
                    style={{ padding: '16px 0', width: '100%' }}
                >
                    {/* {this.props.menuTreeNode} */}
                    {/* 6. */}
                    {this.renderMenu(this.props.menuAjax)}
                    {/* <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu> */}
                </Menu>
            </Sider>
        )
    }

        // 2.進到axios從reducer拉取json資料
        async componentDidMount(){   
            this.props.handleMenuAjax();
        }
    
        // 5.
        renderMenu = (menuList)=>{
            // console.log('menuList', menuList)
            return menuList.map((item)=>{
                let hasType = ''
                if (item.icon){
                    // console.log('item.icon',item.icon)
                    hasType = item.icon
                }
                if (item.children){
                    return(                    
                        <SubMenu key={item.path} title={<span>
                            {/* <Icon type={item.icon} /> */}
                            {hasType ? <Icon type={hasType} /> : null}
                            <span>{item.title}</span>
                            </span>}>
                            {/* <Menu.Item key="5">Option 5</Menu.Item> */}
                            {this.renderMenu(item.children)}
                        </SubMenu>
                    )                
                }else {
                    return(
                        <Menu.Item key={item.path}>
                            {/* <Icon type="inbox" /> */}
                            {/* <span>{item.title}</span> */}
                            <NavLink 
                                to={item.path} 
                                // exact
                                // activeClassName={'hdjshjk'}
                            >
                                {/* <Icon type={item.icon} /> */}
                                {/* <Icon type='user' /> */}
                                {hasType ? <Icon type={hasType} /> : null}
                                <span>{item.title}</span>   
                            </NavLink>
                        </Menu.Item>
                    )            
                }
            })
        }        
}

// 引入
const mapStateToProps = (state) => {
    return {
		isMobile: state.getIn(['admin','isMobile']),
		visible: state.getIn(['admin','visible']),
        collapsed: state.getIn(['admin','collapsed']),
        // menuTreeNode: state.getIn(['admin','menuTreeNode']),
        // 4.
        menuAjax: state.getIn(['admin','menuAjax']),
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {
        // 3.
        handleMenuAjax(){
            // console.log('讀取MenuAjax 組件')
            const action = actionCreators.getMenuAjax();
            dispatch(action);
        }
    }
}
// export default Admin;
export default connect(mapStateToProps, mapDispathToProps)(SiderBar);
// export default connect(mapStateToProps, mapDispathToProps)(withRouter(SiderBar));