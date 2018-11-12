import React from 'react';
import { Card, Tooltip, Table, Spin, /*Row, Col,*/ Icon, Select, Input } from 'antd';
import { Popconfirm } from 'antd';

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
        data: [
            {
                key: '1',
                id: '1',
                name: 'John Brown',
                password: '****',
                email: 'www@gmail.com',
                permission: '1',
                login_start: '2018-10-13',
                operating_time: '36mins',
                ip_address: '192.168.1.1'
            },
            {
                key: '2',
                id: '2',
                name: 'MAthajsdd Brown',
                password: '****',
                email: 'www@gmail.com',
                permission: '2',
                login_start: '2018-10-13',
                operating_time: '36mins',
                ip_address: '192.168.1.1'
            }
        ]
    }
    
    // 資料的id會自動帶入Colums的當筆資料
    handleEdit(e, id) {
        e.preventDefault();
        console.log('id', id)
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
    handleSave = (e) => {
        e.preventDefault();

        let [...data] = this.state.data;
        data.map((item, i)=>{
            if(item.id === this.state.id){
                if(this.state.inputName != ''){
                    item.name = this.state.inputName
                }
                if(this.state.inputEmail != ''){
                    item.email = this.state.inputEmail
                }
                if(this.state.permission != ''){
                    item.permission = this.state.permission
                }
                                
            }
            return item
        })

        this.setState({
            data: data,
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


    handleDelete = (id) => {
        let [...data] = this.state.data;
        data = data.filter((item) => {
            if(item.id === id){
                return false  // 不要的就是return false (那筆就不要的意思)
            }else {
                return true
            }
        })         
        this.setState({
            data: data
        })
    }

    render(){
        console.log('id', this.state.id)
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
            {
                title: '密碼',
                dataIndex: 'password',
                key: 'password',
                editable: true,
            }, 
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
                                return <span key={1}>一般權限</span>        
                                // break;               
                            case '2':
                                return <span key={2}>系統權限</span>    
                                // break;                    
                            case '3':
                                return <span key={3}>主管權限</span> 
                                // break;                
                            case '4':
                                return <span key={4}>行政權限</span>    
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
                    console.log('record', record)
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
                                    title="確定刪除?"
                                    onConfirm={()=> this.handleDelete(record.id)}
                                >
                                    <a href='/'
                                        // onClick={(e) => this.handleDelete(e, record.id)}
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
                <Spin spinning={this.state.loading} delay={500} size="large">
                    <Card 
                        title='管理者帳號'
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
                            dataSource={this.state.data} 
                        />
                    </Card>
                </Spin>
            </div>
        )
    }
}

export default AdminMembers