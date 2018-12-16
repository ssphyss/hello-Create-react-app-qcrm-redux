import React from 'react';
import { Card, Tooltip, Icon, Table, Spin, Divider, Popconfirm } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../LayoutComponents/store';
import { Link/*, NavLink*/ } from 'react-router-dom';
// import PropTypes from 'prop-types'

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
                // render: text => <span href="/">{text}</span>,
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
                title: '投資編號',
                dataIndex: 'lendNum',
                key: 'lendNum',
                // render: text => <span href="/" className='typeTablelendNum'><span>INV</span>{text}</span>,
                sorter: (a, b) => a.lendNum - b.lendNum, 
                render: (text, record) => (
                    <span>
                        <Link       
                            to='/lend/list/detail' 
                        >
                            {text}
                        </Link>                        
                    </span>
                ) 
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
                        <Link 
                            // onClick={(e)=> this.props.handleEditQuick(e, record.id)}
                            // href='/' className='btn'
                            to='/lend/list/detail' 
                            className='btn'
                        >
                            <Icon type="file-text" theme="outlined" /> 
                            投資查詢
                        </Link>
                        <Divider type="vertical" />
                        {/* <a href=""><Icon type="file-text" theme="outlined" /> 修改 {record.name}</a> */}
                        <Link 
                            // onClick={(e)=> this.props.handleEdit(e, record.id)}
                            to='/member/list/profile' 
                            className='btn'>
                            <Icon type="file-text" theme="outlined" /> 客戶資料
                        </Link>
                        <Divider type="vertical" />
                        {/* <span 
                            href='/' className='btn'><Icon type="delete" theme="outlined" /> 刪除</span> */}
                        <Popconfirm
                            title="確定刪除嗎?"
                            onConfirm={()=> this.props.handleDelete(record.id)}
                            cancelText="取消"
                        >
                            <span className='btn'>
                                <Icon type="delete" theme="outlined" />刪除
                            </span>
                        </Popconfirm>
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
                            scroll={{ x: 650 }}            
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

const mapStateToProps = (state) => {
    return {
        loading: state.getIn(['admin','loading']),
        focused: state.getIn(['dashboard','focused']),
        // loading: state.getIn(['dashboard','loading']),
        data: state.getIn(['dashboard','data']),
        dataBorrow: state.getIn(['borrow','dataBorrow']),  
        dataLend: state.getIn(['lend','dataLend']),        
    }
}

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
        },
        // 刪除
        handleDelete(id){
            // console.log('id',id);
            const action = actionCreators.getDeleteItemAction(id);
            dispatch(action);
        }          
    }
}

export default connect(mapStateToProps, mapDispathToProps)(LendList);
// export default LendList