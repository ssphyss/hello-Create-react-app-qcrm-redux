import React from 'react';
import { Card, Tooltip, Icon, Table, Spin, Divider } from 'antd';
// 引入
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../layout/store';
import PropTypes from 'prop-types'

class LendList extends React.Component{

    state = {
    }

    render(){
        // console.log('-----(LendList讀取)inputValue', this.props.inputValue)
        // console.log('-----(LendList讀取)data', this.props.data)
        // 設定表檔頭欄位 
        // console.log('(LendList讀取)dataLend', this.props.dataLend);
        // console.log('(LendList讀取)loading', this.props.loading);
        const columns = [
            {
                title: '客戶名稱',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="/">{text}</a>,
            }, 
            {
                title: '投資編號',
                dataIndex: 'lendNum',
                key: 'lendNum',
                render: text => <a href="/" className='typeTablelendNum'><span>INV</span>{text}</a>,
                sorter: (a, b) => a.lendNum - b.lendNum, 
            },
            {
                title: '狀態',
                key: 'status',
                dataIndex: 'status',    
                // render: text => <a href="javascript:;">{text}</a>,     
                render: (status, record) => {   
                    // console.log('類別相關',category, record);
                    switch (status) {
                        case '1':
                            return <span key={1}>申請中</span>        
                            // break;               
                        case '2':
                            return <span key={2}>進件處理中</span>    
                            // break;                    
                        case '3':
                            return <span key={3}>核貸中</span> 
                            // break;                
                        case '4':
                            return <span key={4}>撥款完成</span>    
                            // break;     
                        default:
                            break;
                    }                
                },
                sorter: (a, b) => a.status - b.status,                  
            }, 
            {
                title: '核準金額',
                dataIndex: 'lendAmount',
                key: 'lendAmount',
                sorter: (a, b) => a.lendAmount - b.lendAmount, 
            },            
            // {
            //     title: '實撥金額',
            //     dataIndex: 'lendPay',
            //     key: 'lendPay',
            //     sorter: (a, b) => a.lendPay - b.lendPay, 
            // },
            {
                title: '投資報酬率',
                dataIndex: 'lendRate',
                key: 'lendRate',
                sorter: (a, b) => a.lendRate - b.lendRate, 
            },  
            {
                title: '期數',
                dataIndex: 'lendPeriods',
                key: 'lendPeriods',
                sorter: (a, b) => a.lendPeriods - b.lendPeriods, 
            },
            {
                title: '方式',
                dataIndex: 'lendInterest',
                key: 'lendInterest',                
                render: (lendInterest, record) => {   
                    // console.log('類別相關',lendInterest, record);
                    switch (lendInterest) {
                        case '1':
                            return <span key={1}>本利</span>        
                            // break;               
                        // case '2':
                        //     return <span key={2}></span>    
                        //     // break;                    
                        // case '3':
                        //     return <span key={3}></span> 
                        //     // break;                
                        // case '4':
                        //     return <span key={4}></span>    
                        //     // break;     
                        default:
                            break;
                    }                
                },
                sorter: (a, b) => a.lendInterest - b.lendInterest,        
            },
            {
                title: '撥款日期',
                dataIndex: 'lendPayDate',
                key: 'lendPayDate',
                sorter: (a, b) => a.lendPayDate - b.lendPayDate, 
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a 
                            // onClick={(e)=> this.props.handleEditQuick(e, record.id)}
                            href='/' className='btn'><Icon type="file-text" theme="outlined" /> 投資查詢</a>
                        <Divider type="vertical" />
                        {/* <a href=""><Icon type="file-text" theme="outlined" /> 修改 {record.name}</a> */}
                        <a 
                            // onClick={(e)=> this.props.handleEdit(e, record.id)}
                            
                            href='/' className='btn'><Icon type="file-text" theme="outlined" /> 客戶資料</a>
                        <Divider type="vertical" />
                        <a 
                            // onClick={this.props.handleDelete}
                            // onClick={(e)=> this.props.handleDelete(e, record.id)}
                            onClick={(e)=>this.handlePopConfirm(e, record.id)}
                            href='/' className='btn'><Icon type="delete" theme="outlined" /> 刪除</a>
                    </span>
                )
            }
        ];        
        return(            
            <div>
                <Spin spinning={this.props.loading} size="large">
                    <Card 
                        title='投資管理'
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
                            // dataSource={dataLend} 
                            // dataSource={this.state.dataLend} 
                            dataSource={this.props.dataLend}                             
                        />
                    </Card>
                </Spin>                
            </div>
        )
    }

    async componentDidMount(){        
        this.props.handleloading();        

        await this.props.handleListLend();
        setTimeout(() => {
            this.props.handleloading(false);       
        }, 1200);
        
    }
}

// 引入
const mapStateToProps = (state) => {
    return {
        // focused: state.dashboard.focused,
        loading: state.getIn(['admin','loading']),
        focused: state.getIn(['dashboard','focused']),
        // loading: state.getIn(['dashboard','loading']),
        data: state.getIn(['dashboard','data']),
        dataBorrow: state.getIn(['borrow','dataBorrow']),  
        dataLend: state.getIn(['lend','dataLend']),        
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {

        // Loading加載
        handleloading(loadingStatus = true){
            const action = actionCreatorsAdmin.getLoading(loadingStatus);
            dispatch(action);      
        },       

        // Ajax資料載入
        handleListLend(){    
            const action = actionCreators.getListLend();
            dispatch(action);
        }        
    }
}

export default connect(mapStateToProps, mapDispathToProps)(LendList);
// export default LendList