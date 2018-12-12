import React from 'react';
import { Layout, Menu, Icon } from 'antd';	
import logo from './../assets/logo.svg';
// 1.
import menuConfig from './../config/menuConfig.js';
import axios from 'axios';
// 引入
import { connect } from 'react-redux';
import { actionCreators } from './store';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderBar extends React.Component{    

    render(){
        console.log('------ ▉▉▉▉▉▉▉▉ Siderbar ▉▉▉▉▉▉▉▉ ------')
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
                <div className='logo' key="logo">						
                    <img src={logo} alt="logo" />
                    {/* <h1>Money SQ</h1> */}						
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.props.collapsed}
                    style={{ padding: '16px 0', width: '100%' }}
                >
                    {this.props.menuTreeNode}
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

        // 2.進到axios
        async componentDidMount(){ 
            // axios  
            let res = await axios.get('./api/layout/finLists.json')  
            console.log('res', res.data)       

            const menuConfig = res.data.result.data
            console.log('menuConfig', menuConfig)    

            const menuTreeNode = this.renderMenu(menuConfig);
            console.log('menuTreeNode', menuTreeNode)

            // 4. 把資料交給reducer      
            this.props.handleMenu(menuTreeNode);
        }
    
        // 3.
        renderMenu = (menuList)=>{
            console.log('menuList', menuList)
            return menuList.map((item)=>{
                if (item.children){
                    return(                    
                        <SubMenu key={item.path} title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            {/* <Menu.Item key="5">Option 5</Menu.Item> */}
                            {this.renderMenu(item.children)}
                        </SubMenu>
                    )                
                }else {
                    return(
                        <Menu.Item key={item.path}>
                            <Icon type="inbox" />
                            <span>Option 3</span>
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
        menuTreeNode: state.getIn(['admin','menuTreeNode']),
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {
		handleMenu(menuTreeNode){
			console.log('讀取MenuConfig 組件')
			const action = actionCreators.getMenu(menuTreeNode);
            dispatch(action);
        }
        
    }
}
// export default Admin;
export default connect(mapStateToProps, mapDispathToProps)(SiderBar);