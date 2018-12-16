import React from 'react';
import { Card, Tooltip, Icon, Table, Spin, Divider, Modal, Popconfirm } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../LayoutComponents/store';
import { Link/*, NavLink*/ } from 'react-router-dom';
// import PropTypes from 'prop-types';

class BorrowList extends React.Component{

    // static propTypes = {
    //     children: PropTypes.node.isRequired,
    // }

    state = {
        // dataSource: [],
        // dataBorrow: [
        //     {
        //         key: '1',
        //         id: '1',
        //         name: 'John Brown',
        //         borrowNum: '201801011231-1234',
        //         status: '1',
        //         borrowPeriods: '12',
        //         borrowInterest: '1',
        //         borrowPayDate: '2018-10-13',
        //         borrowAmount: '1000000',
        //         borrowRate: '2%'
        //         // borrowPay: '990000'
        //     },
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
        // ]
    }

    render(){
        // console.log('-----(BorrowList讀取)inputValue', this.props.inputValue)
        // console.log('-----(BorrowList讀取)data', this.props.data)
        // 設定表檔頭欄位 
        // console.log('(BorrowList讀取)dataBorrow', this.props.dataBorrow);
        // console.log('(BorrowList讀取)loading', this.props.loading);
        const columns = [
            {
                title: '客戶名稱',
                dataIndex: 'name',
                key: 'name',
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
                title: '貸款編號',
                dataIndex: 'borrowNum',
                key: 'borrowNum',
                // render: text => <a href="/" className='typeTableBorrowNum'><span>BD</span>{text}</a>,
                sorter: (a, b) => a.borrowNum - b.borrowNum, 
                render: (text, record) => (
                    <span>
                        <Link       
                            to='/borrow/list/detail' 
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
                title: '核貸金額',
                dataIndex: 'borrowAmount',
                key: 'borrowAmount',
                sorter: (a, b) => a.borrowAmount - b.borrowAmount, 
            },            
            // {
            //     title: '實撥金額',
            //     dataIndex: 'borrowPay',
            //     key: 'borrowPay',
            //     sorter: (a, b) => a.borrowPay - b.borrowPay, 
            // },
            {
                title: '核貸利率',
                dataIndex: 'borrowRate',
                key: 'borrowRate',
                sorter: (a, b) => a.borrowRate - b.borrowRate, 
            },  
            {
                title: '期數',
                dataIndex: 'borrowPeriods',
                key: 'borrowPeriods',
                sorter: (a, b) => a.borrowPeriods - b.borrowPeriods, 
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
                sorter: (a, b) => a.borrowInterest - b.borrowInterest,        
            },
            {
                title: '撥款日期',
                dataIndex: 'borrowPayDate',
                key: 'borrowPayDate',
                sorter: (a, b) => a.borrowPayDate - b.borrowPayDate, 
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        {/* <Link 
                            // onClick={(e)=> this.props.handleEdit(e, record.id)}                            
                            // href='/member/list/profile' 
                            to={`/member/list/profile/${record.id}`}
                            className='btn'><Icon type="file-text" theme="outlined" /> 詳細資料
                        </Link> */}
                        <Link 
                            // onClick={(e)=> this.props.handleEditQuick(e, record.id)}
                            // href='/' className='btn'
                            to='/borrow/list/detail' 
                            className='btn'
                        >
                            <Icon type="file-text" theme="outlined" /> 
                            借款查詢
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
                            // onClick={this.props.handleDelete}
                            // onClick={(e)=> this.props.handleDelete(e, record.id)}
                            // onClick={(e)=>this.handlePopConfirm(e, record.id)}
                            className='btn'><Icon type="delete" theme="outlined" 
                            
                        /> 刪除</span> */}
                        <Popconfirm
                            title="確定刪除嗎?"
                            onConfirm={()=> this.props.handleDelete(record.id)}
                            cancelText="取消"
                        >
                            {/* <span href='/'
                                // onClick={(e) => this.handleDelete(e, record.id)}
                                className='btn'
                            >刪除</span> */}
                            <span className='btn'>
                                <Icon type="delete" theme="outlined" />刪除
                            </span>
                        </Popconfirm>
                    </span>
                )
            }
        ];
        // // 設定資料
        // const data = [
        //     {
        //         key: '1',
        //         name: 'John Brown',
        //         borrowNum: '201801011231-1234',
        //         status: '1',
        //         borrowPeriods: '12',
        //         borrowInterest: '1',
        //         // category: '1',
        //         borrowPayDate: '2018-10-13',
        //         borrowAmount: '1000000',
        //         borrowRate: '2%'
        //         // borrowPay: '990000'
        //     },
        //     {
        //         key: '2',
        //         name: 'Math Chang',
        //         borrowNum: '201801011231-0000',
        //         status: '3',
        //         borrowPeriods: '24',
        //         borrowInterest: '1',
        //         // category: '3',
        //         borrowPayDate: '2018-12-31',
        //         borrowAmount: '2000000',
        //         borrowRate: '1.92%'
        //         // borrowPay: '1590000'
        //     }
        // ]; 
        return(            
            <div>
                <Spin spinning={this.props.loading} size="large">
                    <Card 
                        title='借款管理'
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
                            // dataSource={dataBorrow} 
                            // dataSource={this.state.dataBorrow} 
                            dataSource={this.props.dataBorrow} 
                            // pagination={false}              
                            scroll={{ x: 650 }}              
                        />
                    </Card>
                </Spin>                
            </div>
        )
    }

    async componentDidMount(){        
        this.props.handleloading();        

        await this.props.handleListBorrow();
        setTimeout(() => {
            this.props.handleloading(false);       
        }, 400);
    }

    handleModal=()=>{
        Modal.info({
            title: '借款管理',
            content: '借款管理說明',
            okText: '知道了'
            // cancelText: false
            // onOk: ()=>{  
            //     this.props.history.push('/member/list')
            // }
        });
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.getIn(['admin','loading']),
        focused: state.getIn(['dashboard','focused']),
        data: state.getIn(['dashboard','data']),
        dataBorrow: state.getIn(['borrow','dataBorrow'])
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
        handleListBorrow(){    
            const action = actionCreators.getListBorrow();
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

export default connect(mapStateToProps, mapDispathToProps)(BorrowList);
// export default BorrowList