import React, { Component } from 'react';
import SiderBar from './SiderBar'
import { Layout, Icon } from 'antd';	
import { Drawer } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import './../less/common.less'
import './../sass/all.scss'
// 引入
import { connect } from 'react-redux';
import { actionCreators } from './store';

const { Header, Content } = Layout;
let isMobile = false;
let visible = false;
let collapsed = false;

enquireScreen(b => {
	// console.log('b', b);
	if (typeof b === 'undefined'){
		isMobile = false;
		visible = false;
		collapsed = false;
	}else {
		isMobile = true;
		visible = true;
		collapsed = false;
	}
});

class Admin extends Component {

	state = {		
		// isMobile,     // 是手機嗎?不是   
		// visible: isMobile ? true :  false,     // 是手機抽屜有：不是手機抽屜無
		// collapsed: isMobile ? false :  false,  // 是手機選單展開：不是手機選單展開		
	};

	// 選單
	toggle = () => {
		// this.setState({
		// 	// 選單
		// 	collapsed: this.props.visible,

		// 	// 抽屜
		// 	visible: !this.props.visible,
		// });
		this.props.isMobile(isMobile, !this.props.visible, this.props.visible);
	}
	
	// 抽屜點空白處收合
	onClose = () => {
		// this.setState({
		// 	visible: false,
		// });
		this.props.isMobile(isMobile, false, this.props.collapsed);
	};

	// 套件固定寫法
	componentWillMount() {
		unenquireScreen(this.enquireHandler);
		unenquireScreen(this.enquireHandler);
		// console.log('---mobile狀態出現WillUnmount')
	}

	// 套件固定寫法
	componentDidMount() {
		// console.log('---mobile狀態出現DidMount')
		this.props.isMobile(isMobile, visible, collapsed);
		this.enquireHandler = enquireScreen(mobile => {
			// const { isMobile } = this.state;
            // if (isMobile !== mobile) {
            //     this.setState({
            //         isMobile: mobile,
            //     });
            // }
			// console.log('---mobile狀態出現', mobile)
			// console.log('---visible', visible)
			// console.log('---collapsed', collapsed)

			if (mobile === true){
				console.log('---mobile狀true', mobile)
				isMobile = true;				
				visible = true;
				collapsed = false;
				this.props.isMobile(isMobile, visible, collapsed);
				// console.log('---visible', visible)
				// console.log('---collapsed', collapsed)
			};
			if (typeof mobile === 'undefined'){
				console.log('---mobile狀態undefined', mobile)
				isMobile = false;
				this.props.isMobile(isMobile);
				// visible = false;
				// collapsed = false;
				// console.log('---visible', visible)
				// console.log('---collapsed', collapsed)
			}
		});
		
	}





	render() {		
		console.log('------ ▉▉▉▉▉▉▉▉ Admin ▉▉▉▉▉▉▉▉ ------')
		// console.log(this.state.collapsed)
		// 測試有無連接store得到數據
		// console.log('-----(Admin)focused', this.props.focused)
		// console.log('-----(Admin)isMobile', this.props.isMobile)
		// console.log('-----(Admin)visible', this.props.visible)
		// console.log('-----(Admin)collapsed', this.props.collapsed)
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
		// focused: state.admin.focused,
		// isMobile: state.admin.isMobile,
		// visible: state.admin.visible,
		// collapsed: state.admin.collapsed,  
		
		// focused: state.admin.get('focused'),
		// isMobile: state.focused.get('isMobile'),
		// visible: state.admin.get('visible'),
		// collapsed: state.admin.get('collapsed'),

		// focused: state.getIn(['admin','focused']),
		isMobile: state.getIn(['admin','isMobile']),
		visible: state.getIn(['admin','visible']),
		collapsed: state.getIn(['admin','collapsed']),
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {
		isMobile(isMobile, visible, collapsed){
			console.log('判斷是手機嗎? 組件')
			const action = actionCreators.getIsMobile(isMobile, visible, collapsed);
            dispatch(action);
		}
    }
}
// export default Admin;
export default connect(mapStateToProps, mapDispathToProps)(Admin);