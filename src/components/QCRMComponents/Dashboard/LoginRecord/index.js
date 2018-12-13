import React from 'react';
import { Card, Tooltip, Icon, Table, Spin, Modal } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../LayoutComponents/store';
// 引入Router
import { Link/*, NavLink*/ } from 'react-router-dom';
class LoginRecord extends React.Component{

    state = {
        dataSource: []
    }

    render(){
        // console.log('-----(LoginRecord讀取)inputValue', this.props.inputValue)
        // console.log('-----(LoginRecord讀取)data', this.props.data)
        // console.log('-----(LoginRecord讀取)focused', this.props.focused)
        
        // 設定表檔頭欄位 
        const columns = [
            {
                title: '登入帳號',
                dataIndex: 'name',
                key: 'name',
                // render: text => <a href="/">{text}</a>,
                sorter: (a, b) => a.name.length - b.name.length,
                render: (text, record) => (
                    <span>
                        <Link       
                            to='/member/list/profile' 
                            // className='btn'
                        >
                            {/* <Icon type="file-text" theme="outlined" />  */}
                            {text}
                        </Link>                        
                    </span>
                )  
            }, 
            {
                title: '登入時間',
                dataIndex: 'login_start',
                key: 'login_start',
                // sorter: (a, b) => a.login_start - b.login_start, 
            },
            {
                title: '操作時間',
                dataIndex: 'operating_time',
                key: 'operating_time',
                // sorter: (a, b) => a.operating_time - b.operating_time, 
            },
            {
                title: 'IP 位置',
                dataIndex: 'ip_address',
                key: 'ip_address',
                // sorter: (a, b) => a.ip_address - b.ip_address, 
            }
        ];

        // // 設定資料
        // const data = [
        //     {
        //         key: '1',
        //         name: 'John Brown',
        //         login_start: '2018-10-13',
        //         operating_time: '36mins',
        //         ip_address: '192.168.1.1'
        //     }
        // ]; 
    
        return(
            <div>
                <Spin spinning={this.props.loading} size="large">
                    <Card 
                        title='登入者記錄'
                        // extra={<a href="/">More</a>}
                        extra={
                            <div>     
                                <span 
                                    className='more'
                                    onClick={this.handleModal}
                                >More</span>
                                <Tooltip title="提示字">
                                    <span><Icon type="info-circle" theme="outlined" /> </span>                                
                                </Tooltip>
                            </div>
                        }
                        // style={{ width: 300 }}
                    >
                        <Table 
                            columns={columns} 
                            dataSource={this.props.dataLoginRecord} 
                            scroll={{ x: 650 }}
                        />
                    </Card>
                </Spin>                
            </div>
        )        
    }
    handleModal=()=>{
        Modal.info({
            title: '使用者紀錄',
            content: '使用者紀錄說明，紀錄當天最新',
            okText: '知道了'
            // cancelText: false
            // onOk: ()=>{  
            //     this.props.history.push('/member/list')
            // }
        });
    }
    // componentDidMount(){        
    //     this.props.handleloading();
    //     this.props.handlegetList();
    // }

    async componentDidMount(){        
        this.props.handleloading();        

        await this.props.handlegetList();
        setTimeout(() => {
            this.props.handleloading(false);       
        }, 600);
        
    }

}

// 引入
const mapStateToProps = (state) => {
    return {
        loading: state.getIn(['admin','loading']),
        dataLoginRecord: state.getIn(['dashboard','dataLoginRecord']),
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {

        // Loading加載
        handleloading(loadingStatus = true){
            // const action = actionCreators.getLoading();
            const action = actionCreatorsAdmin.getLoading(loadingStatus);
            dispatch(action);
        },       

        // Ajax資料載入 - 登入者記錄
        handlegetList(){
            // console.log('獲取Ajax')
            const action = actionCreators.getListLoginRecord();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(LoginRecord);
// export default LoginRecord