import React, { Component } from 'react';
import SiderBar from './SiderBar';
import Topbar from './../components/TopBar';
import { Layout, Icon } from 'antd';	
import { Drawer } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import './../less/common.less'
import './../sass/all.scss'
import './index.scss'
import { connect } from 'react-redux';
import { actionCreators } from './store';

const { Header, Content } = Layout;
let isMobile = false;
let visible = false;
let collapsed = false;

enquireScreen( mobile => {
	// console.log('mobile', mobile);
	if (typeof mobile === 'undefined'){
		isMobile = false;
		visible = false;
		collapsed = false;
	}
	if (mobile === true){
		isMobile = true;
		visible = true;
		collapsed = false;
	}
});

class Admin extends Component {

	// 選單
	toggle = () => {
		// this.setState({
		// 		collapsed: this.props.visible, // 選單
		// 		visible: !this.props.visible, // 抽屜
		// });
		this.props.isMobile(isMobile, !this.props.visible, this.props.visible);
	}
	
	// 抽屜點空白處收合
	onClose = () => {
		// this.setState({isible: false });
		this.props.isMobile(isMobile, false, this.props.collapsed);
	};

	// 套件固定寫法
	componentWillMount() {
		unenquireScreen(this.enquireHandler);
		unenquireScreen(this.enquireHandler);
	}

	// 套件固定寫法
	componentDidMount() {
		this.props.isMobile(isMobile, visible, collapsed);
		this.enquireHandler = enquireScreen(mobile => {
			// console.log('---mobile狀態出現', mobile)
			// 非手機
			if (typeof mobile === 'undefined'){
				// console.log('---mobile狀態undefined', mobile);
				isMobile = false;
				this.props.isMobile(isMobile);
			}
			// 手機
			if (mobile === true){
				// console.log('---mobile狀true', mobile);
				isMobile = true;				
				visible = true;
				collapsed = false;
				this.props.isMobile(isMobile, visible, collapsed);

			};			
		});		
	}

	render() {		
		// console.log('------ ▉▉▉▉▉▉▉▉ Admin ▉▉▉▉▉▉▉▉ ------')
		// console.log(this.state.collapsed)
		// 測試有無連接store得到數據
		// console.log('-----(Admin)focused', this.props.focused)
		// console.log('-----(Admin)isMobile', this.props.isMobile)
		// console.log('-----(Admin)visible', this.props.visible)
		// console.log('-----(Admin)collapsed', this.props.collapsed)
		// console.log('render判斷 isMobile：',isMobile)
		return (
			isMobile? (
				<Layout>
					<Drawer
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
						<Header style={{ background: '#fff', padding: 0 }} className='header'>
							<Topbar />
							<Icon
								className="trigger"
								type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={this.toggle}
							/>							
						</Header>
						<Content style={{ margin: '24px 16px', padding: 24, background: '#fff'/*, minHeight: 280*/ }}>
							{/* 加載子組件進來 */}
							{this.props.children}
						</Content>
					</Layout>
				</Layout>
			):(
				<Layout>						
					<SiderBar 
						collapsed={this.props.collapsed}
					/>				
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }} className='header'>							
							<Topbar />
							<Icon
								className="trigger"
								type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={this.toggle}
							/>
						</Header>
						<Content style={{ margin: '24px 16px', padding: 24, background: '#fff'/*, minHeight: 280*/ }}>
							{/* 加載子組件進來 */}
							{this.props.children}
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
		isMobile: state.getIn(['admin','isMobile']),
		visible: state.getIn(['admin','visible']),
		collapsed: state.getIn(['admin','collapsed']),
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {
		isMobile(isMobile, visible, collapsed){
			// console.log('判斷是手機嗎? 組件')
			const action = actionCreators.getIsMobile(isMobile, visible, collapsed);
            dispatch(action);
		}
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Admin);