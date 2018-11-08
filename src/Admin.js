import React, { Component } from 'react';
import SiderBar from './layout/SiderBar'
import { Layout, Icon } from 'antd';	
import { Drawer } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import './less/common.less'
import './sass/all.scss'

const { Header, Content } = Layout;

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
		console.log(this.state.collapsed)
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
						<SiderBar 
							collapsed={this.state.collapsed}
						/>
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
					<SiderBar 
						collapsed={this.state.collapsed}
					/>				
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
