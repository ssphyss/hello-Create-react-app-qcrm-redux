import React from 'react';
import { Card, Tooltip, Table, Spin, /*Row, Col,*/ Icon, Select, Input, Tag, Modal } from 'antd';
import { Popconfirm } from 'antd';
// 引入
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import axios from 'axios'

const Option = Select.Option;
const EditableContext = React.createContext();
class AdminMembers extends React.Component{
    state = {
        loading: false,
        editStatus: false,
        id: '',
        inputName: '',
        inputEmail: '',
        permission: '',
        dataAdminMembers: []
        // data: [
        //     {
        //         key: '1',
        //         id: '1',
        //         name: 'John Brown',
        //         password: '****',
        //         email: 'www@gmail.com',
        //         permission: '1',
        //         login_start: '2018-10-13',
        //         operating_time: '36mins',
        //         ip_address: '192.168.1.1'
        //     },
        //     {
        //         key: '2',
        //         id: '2',
        //         name: 'MAthajsdd Brown',
        //         password: '****',
        //         email: 'www@gmail.com',
        //         permission: '2',
        //         login_start: '2018-10-13',
        //         operating_time: '36mins',
        //         ip_address: '192.168.1.1'
        //     }
        // ]
    }
    
    // 資料的id會自動帶入Colums的當筆資料
    handleEdit(e, id) {
        e.preventDefault();
        // console.log('id', id)
        this.setState({ 
            editStatus: true,
            id: id
        });
    }

    // 偵測變更Input
    handleChange = (e, type) =>{
        this.setState({ 
            [type]: e.target.value
        });
    }

    // 偵測變更Select
    handleChangeSelect = (value) =>{
        this.setState({ 
            permission : value
        });
    }

    // 資料編輯儲存
    handleSave = async (e) => {
        e.preventDefault();
        
        // ============給後端=============
        this.setState({
            loading: true
        })
        // const res = await axios.post('https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/dashboard/adminMembers',{
        //     inputName: this.state.inputName,
        //     email : this.state.inputEmail,
        //     permission : this.state.permission
        // })

        // this.setState({
        //     loading: false,
        //     data: res.data.result.data  //後端回傳的
        // })
        

        // ============給使用者看(假存)=============
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 300);

        let [...data] = this.state.dataAdminMembers;
        data.map((item, i)=>{
            if(item.id === this.state.id){
                if(this.state.inputName !== ''){
                    item.name = this.state.inputName
                }
                if(this.state.inputEmail !== ''){
                    item.email = this.state.inputEmail
                }
                if(this.state.permission !== ''){
                    item.permission = this.state.permission
                }
                                
            }
            return item
        })

        this.setState({
            // data: data,
            dataAdminMembers: data,
            editStatus: false,
            id: '',
            inputName: '',
            inputEmail: '',
            permission: ''
        })
    }

    // 刪除取消
    handleCancle = (e) =>{
        e.preventDefault();
        this.setState({
            editStatus: false,
            id: '',
            inputName: '',
            inputEmail: '',
            permission: ''
        })
    }

    // 刪除
    handleDelete = (id) => {
        let [...data] = this.state.dataAdminMembers;
        data = data.filter((item) => {
            if(item.id === id){
                return false  // 不要的就是return false (那筆就不要的意思)
            }else {
                return true
            }
        })         
        this.setState({
            dataAdminMembers: data
        })
    }

    render(){
        // console.log('id', this.state.id)
        const columns = [
            {
                title: '管理者帳號',
                dataIndex: 'name',
                width: '25%',
                editable: true,
                render: (text, record) => {
                    if(this.state.editStatus && this.state.id=== record.id ){
                        return (
                            <Input 
                                value={this.state.inputName || text} 
                                // onChange={(e)=>{
                                //     this.setState({
                                //         inputName: e.target.value 
                                //     })
                                // }}
                                onChange={(e)=>this.handleChange(e, 'inputName')}
                                // onFocus=
                            />
                        )
                    }
                    return (
                        <span>{text}</span>
                    )
                }
            },
            // {
            //     title: '密碼',
            //     dataIndex: 'password',
            //     key: 'password',
            //     editable: true,
            // }, 
            {
                title: 'email',
                dataIndex: 'email',
                width: '40%',
                editable: true,
                render: (text, record) => {
                    if(this.state.editStatus && this.state.id=== record.id ){
                        return (
                            <Input 
                                value={this.state.inputEmail || text} 
                                // onChange={(e)=>{
                                //     this.setState({
                                //         inputEmail: e.target.value 
                                //     })
                                // }}
                                onChange={(e)=>this.handleChange(e, 'inputEmail')}
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
                    if(this.state.editStatus && this.state.id=== record.id ){
                        return (
                            <Select 
                                defaultValue={text} style={{ width: 120 }}
                                onChange={this.handleChangeSelect}
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
                // render: () => {
                //     return (
                //         <Select defaultValue="一般權限" style={{ width: 120 }}>
                //             <Option value="一般權限">一般權限</Option>
                //             <Option value="系統權限">系統權限</Option>
                //             <Option value="主管權限">主管權限</Option>
                //             <Option value="行政權限">行政權限</Option>
                //         </Select>  
                //     )                   
                // }
            },
            {
                title: '操作',
                dataIndex: '操作',
                render: (text, record) => {
                    // console.log('record', record)
                    // const editable = this.isEditing(record);
                    if(record.id === this.state.id){  // 表示編輯中
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

                                <a href='/' 
                                    onClick={(e) => this.handleCancle(e)}
                                >取消</a>
                            </span>
                        )
                    }else{
                        return(
                            <div>
                                <a 
                                    href='/' 
                                    className='btn'
                                    onClick={(e) => this.handleEdit(e, record.id)}
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
                                    onConfirm={()=> this.handleDelete(record.id)}
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

                    // return (
                    //     <div>
                    //         {/* {editable ? ( */}
                    //         <span>
                    //             <EditableContext.Consumer>
                    //                 {form => (
                    //                     <a
                    //                         href="/"
                    //                         // onClick={() => this.save(form, record.key)}
                    //                         style={{ marginRight: 8 }}
                    //                     >
                    //                     儲存
                    //                     </a>
                    //                 )}
                    //             </EditableContext.Consumer>
                    //             <Popconfirm
                    //                 title="確定刪除?"
                    //                 // onConfirm={() => this.cancel(record.key)}
                    //             >
                    //                 <a href='/'>刪除</a>
                    //             </Popconfirm>
                    //         </span>
                    //         {/* ) :  */}
                    //         (
                    //         <a 
                    //             href='/' 
                    //             onClick={(e) => this.handleEdit(e, record.id)}
                    //         >編輯</a>
                    //         )
                    //         {/* }  */}
                    //     </div>
                    // );
                },
            },
         ];

        // // 設定資料
        // const data = [];
        //     for (let i = 0; i < 100; i++) {
        //     data.push({
        //         key: i.toString(),
        //         name: `Edrward ${i}`,
        //         age: 32,
        //         address: `London Park no. ${i}`,
        //         email: `www@123.gmail.com`
        //     });
        // }

        // // 設定資料
        // const data = [
        //     {
        //         key: '1',
        //         id: '1',
        //         name: 'John Brown',
        //         password: '****',
        //         email: 'www@gmail.com',
        //         login_start: '2018-10-13',
        //         operating_time: '36mins',
        //         ip_address: '192.168.1.1'
        //     },
        //     {
        //         key: '2',
        //         id: '2',
        //         name: 'MAthajsdd Brown',
        //         password: '****',
        //         email: 'www@gmail.com',
        //         login_start: '2018-10-13',
        //         operating_time: '36mins',
        //         ip_address: '192.168.1.1'
        //     }
        // ]; 
        return(
            <div>
                <Spin spinning={this.state.loading} delay={0} size="large">
                    <Card 
                        title='管理者帳號'
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
                            dataSource={this.state.dataAdminMembers}
                            // dataSource={this.props.dataAdminMembers}
                            scroll={{ x: 650 }}
                        />
                    </Card>
                </Spin>
            </div>
        )
    }

    componentDidMount(){        
        // this.props.handleloading();
        // this.props.handlegetList();

        this.handlegetList();
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

        const res = await axios.get('https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/dashboard/adminMembers') 
        const data = res.data.result.data;      

        this.setState({
            dataAdminMembers: data,
            loading: false
        })
    }
}

// 引入
const mapStateToProps = (state) => {
    return {
        // focused: state.dashboard.focused,
        // focused: state.getIn(['dashboard','focused']),
        // loading: state.getIn(['dashboard','loading']),
        // data: state.getIn(['dashboard','data']),
        // dataAdminMembers: state.getIn(['dashboard','dataAdminMembers']),
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {
        // Loading加載
        handleloading(){
            const action = actionCreators.getLoading();
            dispatch(action);
        },       

        // // Ajax資料載入
        // handlegetList(){
        //     const action = actionCreators.getListAdminMembers();
        //     dispatch(action);
        // },

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
