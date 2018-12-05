import React from 'react';
import { Card, Tooltip, Icon, Table, Spin } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../LayoutComponents/store';

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
                render: text => <a href="/">{text}</a>,
                sorter: (a, b) => a.name.length - b.name.length,
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
                                <a href="/">More</a>
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
                        />
                    </Card>
                </Spin>                
            </div>
        )        
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
        }, 1200);
        
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