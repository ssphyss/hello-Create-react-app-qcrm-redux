import React from 'react';
import { Card, Tooltip, Icon, Table, Spin, Divider } from 'antd';


// 引入
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../layout/store';

// 引入Router
import { Link/*, NavLink*/ } from 'react-router-dom';
// 引入轉址功能
import { withRouter } from 'react-router-dom';

class MemberList extends React.Component{
    
    render(){
        // console.log('-----(MemberList讀取)dataMember', this.props.dataMember)
        
        const columns = [
            {
                title: '客戶名稱',
                dataIndex: 'memberName',
                key: 'memberName',
                render: text => <a href="/">{text}</a>,
            }, 
            {
                title: '客戶帳號',
                dataIndex: 'memberAccount',
                key: 'memberAccount',
                render: text => <a href="/" className='typeTableBorrowNum'><span>@</span>{text}</a>,
                sorter: (a, b) => a.memberAccount - b.memberAccount, 
            },
            {
                title: '身分狀態',
                key: 'memberStatus',
                dataIndex: 'memberStatus',    
                // render: text => <a href="javascript:;">{text}</a>,     
                render: (memberStatus, record) => {   
                    // console.log('類別相關',category, record);
                    switch (memberStatus) {
                        case '1':
                            return <span key={1}>一般</span>        
                            // break;               
                        case '2':
                            return <span key={2}>員工</span>    
                            // break;                    
                        case '3':
                            return <span key={3}>員工管理層</span> 
                            // break;               
                        default:
                            break;
                    }                
                },
                sorter: (a, b) => a.memberStatus - b.memberStatus,                  
            }, 
            {
                title: '密碼',
                dataIndex: 'memberPassword',
                key: 'memberPassword',
                sorter: (a, b) => a.memberPassword - b.memberPassword, 
            }, 
            {
                title: '信箱',
                dataIndex: 'memberEmail',
                key: 'memberEmail',
                sorter: (a, b) => a.memberEmail - b.memberEmail, 
            },
            {
                title: '註冊日期',
                dataIndex: 'memberRegister',
                key: 'memberRegister',
                sorter: (a, b) => a.memberRegister- b.memberRegister 
            },
            {
                title: '操作',
                key: 'memberAction',
                dataIndex: 'memberAction',
                render: (text, record) => (
                    <span>
                        <a 
                            // onClick={(e)=> this.props.handleEditQuick(e, record.id)}
                            href='/' className='btn'><Icon type="file-text" theme="outlined" /> 借款</a>
                        <Divider type="vertical" />
                        <a 
                            // onClick={(e)=> this.props.handleEditQuick(e, record.id)}
                            href='/' className='btn'><Icon type="file-text" theme="outlined" /> 投資</a>
                        <Divider type="vertical" />
                        {/* <a href=""><Icon type="file-text" theme="outlined" /> 修改 {record.name}</a> */}
                        <Link 
                            // onClick={(e)=> this.props.handleEdit(e, record.id)}                            
                            // href='/member/list/profile' 
                            to={`/member/list/profile/${record.id}`}
                            className='btn'><Icon type="file-text" theme="outlined" /> 詳細資料
                        </Link>
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
                        title='客戶管理'
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
                            // dataSource={dataBorrow} 
                            // dataSource={this.state.dataBorrow} 
                            dataSource={this.props.dataMember} 
                            // rowKey={`${Math.floor(Math.random( )*1000)}`}                            
                            rowKey={(r,i)=>(i)}
                        />
                    </Card>
                </Spin>                
            </div>
        )
    }

    async componentDidMount(){         
        
        // 讀取資料
        this.props.handleloading();        

        await this.props.handleListMember();
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
        dataMember: state.getIn(['member','dataMember']), 

    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {

        // Loading加載
        handleloading(loadingStatus = true){
            // console.log('有嗎')
            const action = actionCreatorsAdmin.getLoading(loadingStatus);
            dispatch(action);      
        },       

        // Ajax資料載入
        handleListMember(){    
            const action = actionCreators.getListMember();
            dispatch(action);
        }        
    }
}

export default connect(mapStateToProps, mapDispathToProps)(MemberList);
// export default MemberList