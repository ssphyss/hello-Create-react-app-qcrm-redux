import React from 'react';
import TabDetails from './TabDetails'
import TabApplication from './TabApplication'
import TabAttachment from './TabAttachment'
import { Card, Tooltip, Icon, Table, Spin, Divider, Tabs, Modal, Progress } from 'antd';
// 引入
import { connect } from 'react-redux';
import { Link/*, NavLink*/ } from 'react-router-dom';
// import { actionCreators } from './../store';
// import { actionCreators as actionCreatorsAdmin } from './../../../layout/store';
// import PropTypes from 'prop-types'
import './index.scss';


class LendDetail extends React.Component{

    state = {
        // dataSource: [],
        dataBorrow: [
            {
                key: '1',
                id: '1',
                name: 'John Brown',
                borrowNum: '201801011231-1234',
                status: '1',
                borrowPeriods: '12',
                borrowInterest: '1',
                borrowPayDate: '2018-10-13',
                borrowAmount: '1000000',
                borrowRate: '2%'
                // borrowPay: '990000'
            },
        //     {
        //         key: '2',
        //         id: '2',
        //         name: 'Math Chang',
        //         borrowNum: '201801011231-0000',
        //         status: '3',
        //         borrowPeriods: '24',
        //         borrowInterest: '1',
        //         borrowPayDate: '2018-12-31',
        //         borrowAmount: '2000000',
        //         borrowRate: '1.92%'
        //         // borrowPay: '1590000'
        //     }
        ]
    }

    render(){
        // console.log('-----(LendDetail讀取)inputValue', this.props.inputValue)
        // console.log('-----(LendDetail讀取)data', this.props.data)
        // console.log('(LendDetail讀取)dataBorrow', this.props.dataBorrow);
        // console.log('(LendDetail讀取)loading', this.props.loading);
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
                dataIndex: 'borrowNum',
                key: 'borrowNum',
                render: text => <span href="/" className='typeTableBorrowNum'><span>BD</span>{text}</span>,
                // sorter: (a, b) => a.borrowNum - b.borrowNum, 
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
                            return <span key={3}>審核中</span> 
                            // break;                
                        case '4':
                            return <span key={4}>撥款完成</span>    
                            // break;     
                        default:
                            break;
                    }                
                },
                // sorter: (a, b) => a.status - b.status,                  
            }, 
            {
                title: '審核金額',
                dataIndex: 'borrowAmount',
                key: 'borrowAmount',
                sorter: (a, b) => a.borrowAmount - b.borrowAmount, 
                // font-size: 24px;
            },       
            {
                title: '審核利率',
                dataIndex: 'borrowRate',
                key: 'borrowRate',
                // sorter: (a, b) => a.borrowRate - b.borrowRate, 
            },  
            {
                title: '期數',
                dataIndex: 'borrowPeriods',
                key: 'borrowPeriods',
                // sorter: (a, b) => a.borrowPeriods - b.borrowPeriods, 
            },
            {
                title: '方式',
                dataIndex: 'borrowInterest',
                key: 'borrowInterest',                
                render: (borrowInterest, record) => {   
                    // console.log('類別相關',borrowInterest, record);
                    switch (borrowInterest) {
                        case '1':
                            return <span key={1}>本利攤</span>        
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
                // sorter: (a, b) => a.borrowInterest - b.borrowInterest,        
            },
            {
                title: '撥款日期',
                dataIndex: 'borrowPayDate',
                key: 'borrowPayDate',
                // sorter: (a, b) => a.borrowPayDate - b.borrowPayDate, 
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>                       
                        {/* <a href=""><Icon type="file-text" theme="outlined" /> 修改 {record.name}</a> */}
                        <span 
                            // onClick={(e)=> this.props.handleEdit(e, record.id)}
                            
                            href='/' className='btn'><Icon type="file-text" theme="outlined" /> 客戶資料</span>
                        <Divider type="vertical" />
                        <span 
                            // onClick={this.props.handleDelete}
                            // onClick={(e)=> this.props.handleDelete(e, record.id)}
                            // onClick={(e)=>this.handlePopConfirm(e, record.id)}
                            href='/' className='btn'><Icon type="delete" theme="outlined" /> 操作</span>
                    </span>
                )
            }
        ];
        const TabPane = Tabs.TabPane;

        function callback(key) {
            // console.log(key);
        }

        return(            
            <div>
                <Spin spinning={this.props.loading} size="large">
                    <Card 
                        title='客戶投資明細表'
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
                        style={{ padding: 0 }}
                    >
                        <Table 
                            columns={columns} 
                            // dataSource={dataBorrow} 
                            dataSource={this.state.dataBorrow} 
                            // dataSource={this.props.dataBorrow}       
                            pagination={false}      
                            scroll={{ x: 1000 }}                 
                        />

                        <Tabs defaultActiveKey="1" onChange={callback} className='tabs tabsBorrow'>
                            <TabPane tab="投資明細" key="1"><TabDetails /></TabPane>
                            <TabPane tab="申請資料修改" key="2"><TabApplication /></TabPane>
                            <TabPane tab="附件相關" key="3"><TabAttachment /></TabPane>
                            <TabPane tab="審核結果" key="4">
                                <div className='auditResult lend'>   
                                    <Progress type="circle" percent={100} strokeColor={'#fff'}/>                                     
                                    <h2>審核成功</h2>
                                    <p>審核結果 ：恭喜您已通過審核<span></span></p>
                                    <p>啟動日期 ：<span>2018.10.13</span></p>
                                </div>                            
                            </TabPane>
                        </Tabs>
                    </Card>
                </Spin>                
            </div>
        )
    }

    // async componentDidMount(){        
    //     this.props.handleloading();        

    //     await this.props.handleListBorrow();
    //     setTimeout(() => {
    //         this.props.handleloading(false);       
    //     }, 1200);
        
    // }

    handleModal=()=>{
        Modal.info({
            title: '借款明細表',
            content: '借款明細表說明',
            okText: '知道了'
            // cancelText: false
            // onOk: ()=>{  
            //     this.props.history.push('/member/list')
            // }
        });
    }   
}

// 引入
const mapStateToProps = (state) => {
    return {
        loading: state.getIn(['admin','loading']),
        data: state.getIn(['dashboard','data']),
        dataBorrow: state.getIn(['borrow','dataBorrow']),    
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {

        // // Loading加載
        // handleloading(loadingStatus = true){
        //     const action = actionCreatorsAdmin.getLoading(loadingStatus);
        //     dispatch(action);      
        // },       

        // // Ajax資料載入
        // handleListBorrow(){    
        //     const action = actionCreators.getListBorrow();
        //     dispatch(action);
        // }        
    }
}

export default connect(mapStateToProps, mapDispathToProps)(LendDetail);
// export default LendDetail