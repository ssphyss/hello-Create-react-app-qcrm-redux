import React from 'react';
import { Card, Tooltip, Table, Spin, /*Row, Col,*/ Icon, Select, Input, Tag, Modal } from 'antd';
import { Popconfirm } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../LayoutComponents/store';
import axios from 'axios'

const Option = Select.Option;
const EditableContext = React.createContext();
class AdminMembers extends React.Component{

    state = {
    }  

    render(){
        const columns = [
            {
                title: '管理者帳號',
                dataIndex: 'name',
                width: '25%',
                editable: true,
                render: (text, record) => {
                    if(this.props.editStatus && this.props.id=== record.id ){
                        return (
                            <Input 
                                value={this.props.inputName || text}                                 
                                // onChange={(e)=>this.handleChange(e, 'inputName')} 
                                onChange={(e)=>this.props.handleInputChange(e, 'inputName')}                               
                            />
                        )
                    }
                    return (
                        <span>{text}</span>
                    )
                }
            },   
            {
                title: 'email',
                dataIndex: 'email',
                width: '40%',
                editable: true,
                render: (text, record) => {
                    if(this.props.editStatus && this.props.id=== record.id ){
                        return (
                            <Input 
                                value={this.props.inputEmail || text}                                 
                                // onChange={(e)=>this.handleChange(e, 'inputEmail')}
                                onChange={(e)=>this.props.handleInputChange(e, 'inputEmail')}  
                            />
                        )
                    }
                    return (
                        <span>{text}</span>
                    )
                }
            },
            {
                title: '權限',
                dataIndex: 'permission',
                key: 'permission',
                editable: true,
                render: (text, record) => {
                    if(this.props.editStatus && this.props.id=== record.id ){
                        return (
                            <Select 
                                defaultValue={text} style={{ width: 120 }}
                                onChange={this.props.handleChangeSelect}

                            >
                                <Option value="1">一般權限</Option>
                                <Option value="2">系統權限</Option>
                                <Option value="3">主管權限</Option>
                                <Option value="4">行政權限</Option>
                            </Select>  
                        )
                    }else{                       
                        switch (text) {
                            case '1':
                                return <Tag color="blue" key={1}>一般權限</Tag>        
                                // break;               
                            case '2':
                                return <Tag color="blue" key={2}>系統權限</Tag>   
                                // break;                    
                            case '3':
                                return <Tag color="blue" key={3}>主管權限</Tag>   
                                // break;                
                            case '4':
                                return <Tag color="blue" key={4}>行政權限</Tag>   
                                // break;     
                            default:
                                break;
                        }                                      
                    }                    
                } 
            },
            {
                title: '操作',
                dataIndex: '操作',
                render: (text, record) => {
                    // console.log('record', record)
                    // const editable = this.isEditing(record);
                    if(record.id === this.props.id){  // 表示編輯中
                        return (
                            <span>
                                <EditableContext.Consumer>
                                    {form => (
                                        <a
                                            href="/"
                                            onClick={(e) => this.handleSave(e)}
                                            style={{ marginRight: 8 }}
                                        >
                                        儲存
                                        </a>
                                    )}
                                </EditableContext.Consumer>

                                <span href='/' 
                                    // onClick={(e) => this.props.handleCancle(e)}
                                    onClick={this.props.handleCancle}
                                >取消</span>
                            </span>
                        )
                    }else{
                        return(
                            <div>
                                <a 
                                    href='/' 
                                    className='btn'
                                    // onClick={(e) => this.handleEdit(e, record.id)}
                                    onClick={(e) => this.props.handleEdit(e, record.id)}
                                >編輯</a>

                                {/* <Popconfirm
                                    title="確定刪除?"
                                    onConfirm={this.handleDelete(record.id)}
                                    // onCancel={this.handleCancel}
                                >
                                    <a href='/'
                                        // onClick={(e) => this.handleDelete(e, record.id)}
                                    >刪除</a>
                                </Popconfirm> */}
                                <Popconfirm
                                    title="確定刪除嗎?"
                                    onConfirm={()=> this.props.handleDelete(record.id)}
                                    cancelText="取消"
                                >
                                    <a href='/'
                                        // onClick={(e) => this.handleDelete(e, record.id)}
                                        className='btn'
                                    >刪除</a>
                                </Popconfirm>
                            </div>                            
                        )                        
                    }
                },
            },
         ];
        return(
            <div>
                <Spin spinning={this.props.loading} delay={0} size="large">
                    <Card 
                        title='管理者帳號'
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
                    >
                        <Table 
                            columns={columns}
                            // dataSource={this.state.dataAdminMembers}
                            // 2.
                            dataSource={this.props.dataAdminMembers}
                            scroll={{ x: 650 }}
                        />
                    </Card>
                </Spin>
            </div>
        )
    }
    // 1.
    async componentDidMount(){        
        this.props.handleloading();   

        await this.props.handlegetList();
        setTimeout(() => {
            this.props.handleloading(false);       
        }, 400);
    }

    handleModal=()=>{
        Modal.info({
            title: '管理者帳號設定',
            content: '管理者帳號設定說明，連結API',
            okText: '知道了'
            // cancelText: false
            // onOk: ()=>{  
            //     this.props.history.push('/member/list')
            // }
        });
    }
    handlegetList = async () => {
        this.setState({
            loading: true
        })
        console.log('AA'); 
        // const res = await axios.get('https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/dashboard/adminMembers')
        const res = await axios.get(`${process.env.PUBLIC_URL}/api/dashboard/adminMembers.json`)
        // console.log('res.data',res.data); 
        const data = res.data.result.data;      
        // console.log('data',data); 
        this.setState({
            dataAdminMembers: data,
            loading: false
        })
    }
    // 資料編輯儲存
    handleSave = (e) => {
        e.preventDefault();
        this.props.handleloading();   
        setTimeout(() => {
            this.props.handleloading(false);       
        }, 400);
        this.props.handleSave();
        
    }
}

// 引入
const mapStateToProps = (state) => {
    return {
        loading: state.getIn(['admin','loading']),
        dataAdminMembers: state.getIn(['dashboard','dataAdminMembers']),
        editStatus: state.getIn(['dashboard','editStatus']),
        id: state.getIn(['dashboard','id']),
        inputName: state.getIn(['dashboard','inputName']),
        inputEmail: state.getIn(['dashboard','inputEmail']),        
    }
}


const mapDispathToProps = (dispatch) => {
    return {      
        // Loading加載
        handleloading(loadingStatus = true){
            console.log('有嗎')
            const action = actionCreatorsAdmin.getLoading(loadingStatus);
            dispatch(action);      
        }, 
        // Ajax資料載入
        handlegetList(){    
            const action = actionCreators.getListAdminMembers();
            dispatch(action);
        },    
        // 輸入框可編輯
        handleEdit(e, id, bool=true){
            e.preventDefault();
            const action = actionCreators.getEditAction(id, bool);
            dispatch(action);
        },
        // 輸入框改變
        handleInputChange(e, type){
            const action = actionCreators.getInputChangeAction(e.target.value, type);
            dispatch(action);
        },
        // 儲存
        handleSave(){
            const action = actionCreators.getSaveAction();
            dispatch(action);
        },
        // 改變Select
        handleChangeSelect(value){
            console.log('aaa',value)
            const action = actionCreators.getSelectAction(value);
            dispatch(action);            
        },
        // 刪除
        handleDelete(id){
            const action = actionCreators.getDeleteItemAction(id);
            dispatch(action);
        },
        // 編輯取消
        handleCancle(){
            const action = actionCreators.getEditCancleAction();
            dispatch(action);
        }

        // // 資料的id會自動帶入Colums的當筆資料
        // handleEdit(e, id) {
        //     e.preventDefault();
        //     // this.setState({ 
        //     //     editStatus: true,
        //     //     id: id
        //     // });
        //     // const action = actionCreators.getAdminMembersEdit(id);
        //     // dispatch(action);
        // }
    }
}
// export default AdminMembers
export default connect(mapStateToProps, mapDispathToProps)(AdminMembers);
