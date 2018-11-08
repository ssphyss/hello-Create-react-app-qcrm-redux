import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';	
import { Drawer } from 'antd';
import logo from './assets/logo.svg';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import './less/common.less'
import './sass/all.scss'

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
let isMobile;

class Admin extends Component {

	state = {		
		// collapsed: false,   // 選單		
		// visible: false,     // 抽屜
		isMobile,     // 是手機嗎?不是   
		visible: isMobile ? true :  false,     // 是手機抽屜有：不是手機抽屜無
		collapsed: isMobile ? false :  false,  // 是手機選單展開：不是手機選單展開
		
	};

	// 選單
	toggle = () => {
		this.setState({
			// 選單
			// collapsed: !this.state.collapsed,
			// collapsed: this.state.visible,
			// collapsed: isMobile ? false :  !this.state.collapsed,    // 是手機收合：不是手機切換
			collapsed: this.state.visible,

			// 抽屜
			// visible: true,
			// visible: isMobile ? true :  false,    // 是手機抽屜收合：不是手機收合
			visible: !this.state.visible,
		});
	}
	
	// 抽屜點空白處收合
	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	// 套件固定寫法
	componentDidMount() {
		this.enquireHandler = enquireScreen(mobile => {
			const { isMobile } = this.state;
			if (isMobile !== mobile) {
				this.setState({
					isMobile: mobile,
				});
			}
		});
	}

	// 套件固定寫法
	componentWillUnmount() {
		// cancelAnimationFrame(this.renderRef);
		unenquireScreen(this.enquireHandler);
	}

	render() {
		const isMobile = this.state.isMobile
    	console.log('判斷 isMobile：',isMobile)
		return (
			isMobile? (
				<Layout>
					<Drawer
						// title="Basic Drawer"
						placement="left"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
						style={{
							padding: 0,
							height: '100vh',
							background: '#04403e'
						}}
						>
					
						<Sider
							trigger={null}
							// collapsible
							collapsed={this.state.collapsed}
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
								inlineCollapsed={this.state.collapsed}
								style={{ padding: '16px 0', width: '100%' }}
							>
								<Menu.Item key="1">
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
								</SubMenu>
							</Menu>
						</Sider>
					</Drawer>
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }}>
							<Icon
								className="trigger"
								type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={this.toggle}
							/>
						</Header>
						<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
							Content
						</Content>
					</Layout>
				</Layout>
			):(
				<Layout>						
					<Sider
						trigger={null}
						collapsible
						collapsed={this.state.collapsed}
						breakpoint="lg"
						width={256}
						// className={styles.sider}
						className='sider'
						// isMobile={isMobile}
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
							inlineCollapsed={this.state.collapsed}
							style={{ padding: '16px 0', width: '100%' }}
						>
							<Menu.Item key="1">
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
							</SubMenu>
						</Menu>
					</Sider>				
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }}>
							<Icon
								className="trigger"
								type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={this.toggle}
							/>
						</Header>
						<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
							Content
						</Content>
					</Layout>
				</Layout>
			)
		);
	}
}

export default Admin;
