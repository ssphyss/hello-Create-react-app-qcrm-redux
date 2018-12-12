import React, { Component } from 'react';
import SiderBar from './SiderBar'
import { Layout, Icon } from 'antd';	
import { Drawer } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import './../less/common.less'
import './../sass/all.scss'
// 引入
import { connect } from 'react-redux';

const { Header, Content } = Layout;

let isMobile = false;

class Admin extends Component {

	// state = {		
	// 	// collapsed: false,   // 選單		
	// 	// visible: false,     // 抽屜
	// 	isMobile,     // 是手機嗎?不是   
	// 	visible: isMobile ? true :  false,     // 是手機抽屜有：不是手機抽屜無
	// 	collapsed: isMobile ? false :  false,  // 是手機選單展開：不是手機選單展開		
	// };

	// 選單
	toggle = () => {
		this.setState({
			// 選單
			// collapsed: !this.state.collapsed,
			// collapsed: this.state.visible,
			// collapsed: isMobile ? false :  !this.state.collapsed,    // 是手機收合：不是手機切換
			// collapsed: this.state.visible,
			collapsed: this.props.visible,

			// 抽屜
			// visible: true,
			// visible: isMobile ? true :  false,    // 是手機抽屜收合：不是手機收合
			// visible: !this.state.visible,
			visible: !this.props.visible,
		});
	}
	
	// 抽屜點空白處收合
	onClose = () => {
		// this.setState({
		// 	visible: false,
		// });
	};

	// 套件固定寫法
	componentDidMount() {
		this.enquireHandler = enquireScreen(mobile => {
			console.log('---mobile狀態出現', mobile)
			if (mobile === true){
				isMobile = true
			}
			if (typeof mobile === 'undefined'){
				isMobile = false
			}
		});
		// this.props.isMobile(isMobile);
	}

	// 套件固定寫法
	componentWillUnmount() {
		// cancelAnimationFrame(this.renderRef);
		unenquireScreen(this.enquireHandler);
	}

	render() {		
		// console.log(this.state.collapsed)
		// 測試有無連接store得到數據
		console.log('-----focused', this.props.focused)
		console.log('-----isMobile', this.props.isMobile)
		console.log('-----visible', this.props.visible)
		console.log('-----collapsed', this.props.collapsed)
		console.log('render判斷 isMobile：',isMobile)
		return (
			isMobile? (
				<Layout>
					<Drawer
						// title="Basic Drawer"
						placement="left"
						closable={false}
						onClose={this.onClose}
						visible={this.props.visible}
						style={{
							padding: 0,
							height: '100vh',
							background: '#04403e'
						}}
						>					
						<SiderBar 
							collapsed={this.props.collapsed}
						/>
					</Drawer>
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }}>
							<Icon
								className="trigger"
								type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
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
						collapsed={this.props.collapsed}
					/>				
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }}>
							<Icon
								className="trigger"
								type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
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

// 引入
const mapStateToProps = (state) => {
    return {
		focused: state.adminList.focused,
		isMobile: state.adminList.isMobile,
		visible: state.adminList.visible,
		collapsed: state.adminList.collapsed,  
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {
		// isMobile(isMobile){
		// 	const action = actionCreators.getIsMobile(isMobile);
        //     dispatch(action);
		// }
    }
}
// export default Admin;
export default connect(mapStateToProps, mapDispathToProps)(Admin);