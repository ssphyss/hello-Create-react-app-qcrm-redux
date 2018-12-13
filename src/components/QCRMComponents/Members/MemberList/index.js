import React from 'react';
import { Card, Tooltip, Icon, Table, Spin, Divider } from 'antd';

// 引入
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../LayoutComponents/store';

// 引入Router
import { Link /*, NavLink*/ } from 'react-router-dom';


// 引入轉址功能
// import { withRouter } from 'react-router-dom';

class MemberList extends React.Component{
    state = {
        dataMember: [ {
            "key": "Fg2",
            "id": "5B",
            "memberName": "11孟平",
            "memberAccount": "Susan Clark",
            "memberStatus": "3",
            "memberPassword": "★★★★★★★★★",
            "memberEmail": "d.yrimnvlc@wlhe.gt",
            "memberRegister": "1990-06-24"
          },
          {
            "key": "*e",
            "id": "E#$",
            "memberName": "蒋超",
            "memberAccount": "Mary Moore",
            "memberStatus": "1",
            "memberPassword": "★★★★★★★★★",
            "memberEmail": "e.xvix@rxrl.nz",
            "memberRegister": "1997-03-06"
          },
          {
            "key": "KZ[x",
            "id": "Yb",
            "memberName": "锺超",
            "memberAccount": "Ronald Wilson",
            "memberStatus": "2",
            "memberPassword": "★★★★★★★★★",
            "memberEmail": "q.ukyneh@kdyxxyu.ph",
            "memberRegister": "2011-05-31"
          },
          {
            "key": "8tz",
            "id": "(",
            "memberName": "韩强",
            "memberAccount": "Patricia Thomas",
            "memberStatus": "2",
            "memberPassword": "★★★★★★★★★",
            "memberEmail": "i.kipu@nkdnfww.bn",
            "memberRegister": "1981-04-27"
          },
          {
            "key": "f!D#",
            "id": "yue",
            "memberName": "程明",
            "memberAccount": "Daniel Williams",
            "memberStatus": "2",
            "memberPassword": "★★★★★★★★★",
            "memberEmail": "x.ggprzsl@sihv.ms",
            "memberRegister": "1994-11-23"
          },
          {
            "key": "m",
            "id": "ukx",
            "memberName": "常敏",
            "memberAccount": "Thomas Walker",
            "memberStatus": "2",
            "memberPassword": "★★★★★★★★★",
            "memberEmail": "v.ilwwjeytq@trdelemyt.asia",
            "memberRegister": "1994-10-19"
          },
          {
            "key": "gKu",
            "id": "m$",
            "memberName": "梁杰",
            "memberAccount": "David Lee",
            "memberStatus": "3",
            "memberPassword": "★★★★★★★★★",
            "memberEmail": "m.iwt@hlvgjwn.ke",
            "memberRegister": "1996-03-09"     
          },
          {
            "key": "bxPd",
            "id": "&6",
            "memberName": "邱霞",
            "memberAccount": "Timothy Hernandez",
            "memberStatus": "1",
            "memberPassword": "★★★★★★★★★",
            "memberEmail": "a.dajeveuh@exoil.aero",
            "memberRegister": "1982-05-30"
          },
          {
            "key": "v2f",
            "id": "pkWA",
            "memberName": "于娜",
            "memberAccount": "Sarah Harris",
            "memberStatus": "2",
            "memberPassword": "★★★★★★★★★",
            "memberEmail": "u.ddvmyy@mfsy.ci",
            "memberRegister": "1980-03-30"
          },
          {
            "key": "(P0C",
            "id": "ym",
            "memberName": "邓超",
            "memberAccount": "Michelle Young",
            "memberStatus": "2",
            "memberPassword": "★★★★★★★★★",
            "memberEmail": "w.uttnh@anjft.ad",
            "memberRegister": "2006-08-02"   
          }]
    }
    
    render(){
        // console.log('-----(MemberList讀取)dataMember', this.props.dataMember)
        
        const columns = [
            {
                title: '客戶名稱',
                dataIndex: 'memberName',
                key: 'memberName',
                // render: text => <span href="/">{text}</span>,
                render: (text, record) => (
                    <span>
                        <Link       
                            to='/member/list/profile' 
                        >
                            {text}
                        </Link>                        
                    </span>
                )
            }, 
            {
                title: '客戶帳號',
                dataIndex: 'memberAccount',
                key: 'memberAccount',
                render: text => <span href="/" className='typeTableBorrowNum'><span>@</span>{text}</span>,
                sorter: (a, b) => a.memberAccount - b.memberAccount, 
            },
            {
                title: '身分狀態',
                key: 'memberStatus',
                dataIndex: 'memberStatus',    
                // render: text => <a href="javascript:;">{text}</a>,     
                // render: (memberStatus, record) => {   
                //     // console.log('類別相關',category, record);
                //     switch (memberStatus) {
                //         case '1':
                //             return <span key={1}>一般</span>        
                //             // break;               
                //         case '2':
                //             return <span key={2}>員工</span>    
                //             // break;                    
                //         case '3':
                //             return <span key={3}>員工管理層</span> 
                //             // break;               
                //         default:
                //             break;
                //     }                
                // },
                // sorter: (a, b) => a.memberStatus - b.memberStatus,                  
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
                // render: () => { return <span>一般11</span>  } 
                render: (text, record) => (
                    <span>
                        <span 
                            // onClick={(e)=> this.props.handleEditQuick(e, record.id)}        
                            className='btn btn--borrow'><Icon type="file-text" theme="outlined" /> 借款</span>
                        <Divider type="vertical" />
                        <span 
                            // onClick={(e)=> this.props.handleEditQuick(e, record.id)}
                            className='btn btn--lend'><Icon type="file-text" theme="outlined" /> 投資</span>
                        <Divider type="vertical" />
                        {/* <a href=""><Icon type="file-text" theme="outlined" /> 修改 {record.name}</a> */}
                        <Link 
                            // onClick={(e)=> this.props.handleEdit(e, record.id)}                            
                            // href='/member/list/profile' 
                            // to={`/member/list/profile/${record.id}`}
                            to={`/member/list/profile/${record.id}`}
                            className='btn'><Icon type="file-text" theme="outlined" /> 詳細資料
                        </Link>
                        <Divider type="vertical" />
                        <span 
                            // onClick={this.props.handleDelete}
                            // onClick={(e)=> this.props.handleDelete(e, record.id)}
                            // onClick={(e)=>this.handlePopConfirm(e, record.id)}
                            href='/' className='btn'><Icon type="delete" theme="outlined" /> 刪除</span>
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
                            // dataSource={this.state.dataMember} 
                            dataSource={this.props.dataMember} 
                            // rowKey={`${Math.floor(Math.random( )*1000)}`}                            
                            rowKey={(r,i)=>(i)}
                            scroll={{ x: 1000 }}
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