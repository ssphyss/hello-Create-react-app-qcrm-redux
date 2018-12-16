import React from 'react';
import PermissionRole from './../PermissionRole';
import PermissionSet from './../PermissionSet';
import { Button, Card, Modal, Tooltip, Icon, Table, Spin } from 'antd';
// import { Form, Input, Modal, Radio, Select } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../LayoutComponents/store';
import { Link/*, NavLink*/ } from 'react-router-dom';
// import { Utils } from 'handlebars';
// import axios from 'axios'

// const FormItem = Form.Item;
// const RadioGroup = Radio.Group;
// const Option = Select.Option;

class PermissionList extends React.Component{
    state={
        // isRoleVisible: false
        selectedRowKeys: [],
        selectedItem: ''
    }

    componentWillMount(){

    }    

    render(){
        const columns = [
            {
                title: '角色ID',
                dataIndex: 'id',
                key: 'id',
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
                title: '角色名稱',
                dataIndex: 'role_name',
                key: 'role_name',
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
                title: '創建時間',
                dataIndex: 'create_time',
                key: 'create_time',
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
                title: '使用狀態',
                dataIndex: 'status',
                key: 'status',
                render: (status) => (
                    status === '1' ? '啟用': '停用'
                )                
            }, 
            {
                title: '授權時間',
                dataIndex: 'authorize_time',
                key: 'authorize_time',
                // render: Utils.formateDate,             
            }, 
            {
                title: '授權人',
                dataIndex: 'authorize_user',
                key: 'authorize_user',           
            },
        ]
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedItem: selectedRows
                })
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
            type: 'radio'
        };
        return(
            
            <div>                
                <Spin spinning={this.props.loading} size="large">
                    <Card 
                        title='權限設置'
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
                        <div style={{marginBottom: '40px'}}>
                            <Button type='primary' onClick={this.handleRole} style={{marginRight: '10px'}}>創建角色</Button>
                            <Button type='primary' onClick={this.handlePermission} style={{marginRight: '10px'}}>權限設置</Button>
                            <Button type='primary' >用戶授權</Button>
                        </div>
                        
                        <Table 
                            // updataeSelectedItem={Utils.updateSelectedItem.bind(this)}
                            selectedRowKeys={this.state.selectedRowKeys}
                            rowSelection={rowSelection}                            
                            columns={columns} 
                            // dataSource={dataBorrow} 
                            dataSource={this.props.dataPermission}                                           
                            scroll={{ x: 650 }} 
                            // onSelect={(record, selected, selectedRows, nativeEvent)=>{
                            //     // console.log('--------aaaaa------',record, selected, selectedRows, nativeEvent)
                            // }}             
                        />
                    </Card>
                </Spin> 
                {/* ////////////////////1.創建角色//////////////////// */}
                <PermissionRole 
                    visible={this.props.isRoleVisible}
                    // 獲取表單元素的值,把對象保存到inst裡
                    wrappedComponentRef={(inst)=>this.roleForm=inst}>
                </PermissionRole> 
                {/* <Modal
                    title='創建角色'
                    visible={this.state.isRoleVisible}
                    // onOk={this.handleRoleSubmit}
                    onOk={this.props.handleSubmitRole}
                    onCancel={()=>{
                        this.roleForm.props.form.resetFields();
                        this.setState({
                            isRoleVisible: false
                        })
                    }}
                >
                    <RoleForm wrappedComponentRef={(inst)=>this.roleForm=inst}></RoleForm>        
                </Modal> */}
                
                {/* ////////////////////2.設置權限//////////////////// */}
                <PermissionSet 
                    visible={this.props.isPermVisible}
                    // 獲取表單元素的值,把對象保存到inst裡
                    wrappedComponentRef={(inst) => this.permForm = inst}      

                    detailInfo={this.state.detailInfo} 
                    menuInfo={this.state.menuInfo}
                    patchMenuInfo={(checkedKeys)=>{
                        this.setState({
                            menuInfo: checkedKeys
                        })
                    }}              
                >
                </PermissionSet> 
                {/* <Modal
                    title='設置權限'
                    visible={this.state.isRoleVisible}
                    width={600}
                    onOk={this.handlePermEditSubmit}
                    onCancel={()=>{
                        this.setState({
                            isPermVisible: false
                        })
                    }}
                >
                    <PermEditForm detailInfo={this.state.detailInfo} />
                </Modal> */}
            </div>
            
        )
    }
    

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.submitOk==true){
    //         this.setState({
    //             isRoleVisible: false
    //         })            
    //     };
    // }

    async componentDidMount(){        
        this.props.handleloading();       

        await this.props.handleListPermission();
        setTimeout(() => {
            this.props.handleloading(false);       
        }, 400);
    }
    //////////////// 角色創建彈框 ///////////////
    handleRole = ()=>{
        this.props.handleloading(false);
        this.props.handleRoleVisible(true);
        // this.setState({
        //     isRoleVisible: true
        // })
    }
    //////////////// 權限設置 //////////////////
    handlePermission = ()=>{
        this.props.handleloading(false);
        
        let item = this.state.selectedItem;
        if (!item){
            Modal.info({
                title:'請選擇一個角色'
            })
            return;
        }
        console.log('item',item);
        // item.role_name
        // item.status
        // console.log('字字字',item[0].role_name);
        this.props.handleSelectItem(item[0].role_name, item[0].status, item[0].menus, item[0].id )
        console.log('選中的資訊',item[0].role_name, item[0].status, item[0].menus)

        this.props.handlePermVisible(true);
        
        
    }
    //////////////// 權限設置
    // handlePermission = ()=>{
    //     let item = this.state.selectedItem;
    //     if (!item){
    //         Modal.info({
    //             text: '請選擇一個角色'
    //         })
    //         return false
    //     }
    //     this.setState({
    //         isPermVisible: true,
    //         detailInfo: item

    //     })
    // }
}

const mapStateToProps = (state) => {
    return {
        loading: state.getIn(['admin','loading']),
        focused: state.getIn(['dashboard','focused']),
        data: state.getIn(['dashboard','data']),
        dataBorrow: state.getIn(['borrow','dataBorrow']),
        dataPermission: state.getIn(['permission','dataPermission']),
        isRoleVisible: state.getIn(['permission','isRoleVisible']),
        submitOk: state.getIn(['permission','submitOk']),
        isPermVisible: state.getIn(['permission','isPermVisible']),
        // submitOk: state.getIn(['permission','submitOk']),
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
        handleListPermission(){    
            const action = actionCreators.getListPermission();
            dispatch(action);
        },
        // 彈框打開(角色)
        handleRoleVisible(){
            const action = actionCreators.getRoleVisible();
            dispatch(action);
        },
        //傳送選的值
        handleSelectItem(name, status, menus, id){
            console.log('字',name, status);
            const action = actionCreators.getSelectItem(name, status, menus, id);
            dispatch(action);
        },
        // 彈框打開(權限)
        handlePermVisible(){
            console.log('hdkjs')
            const action = actionCreators.getPermVisible();
            dispatch(action);
        },
        
    }
}
export default connect(mapStateToProps, mapDispathToProps)(PermissionList);
// export default PermissionList




// PermEditForm = Form.create({}(PermEditForm));
// class PermEditForm extends React.Component{
//     render(){
//         // antD固定的,一定要這樣寫
//         const { getFieldDecorator } = this.props.form;       
//         const formItemLayout = {
//             labelCol: { span: 5},
//             wrapperCol: {sapn: 19}
//         }
//         const detail_Info = this.props.detailInfo
//         return(
//             <Form layout='horizontal'>
//                 <FormItem label='角色名稱' {...formItemLayout}>
//                     <Input 
//                         disabled  placeholder={detail_Info.role_name}
//                     />
//                 </FormItem>
//                 <FormItem label='狀態' {...formItemLayout}>
//                     {
//                         getFieldDecorator('status',{
//                             initialValue: '1'
//                         })(
//                             <Select>
//                                 <Option value='1'>啟用</Option>
//                                 <Option value='2'>停用</Option>
//                             </Select>  
//                         )
//                     }                                            
//                 </FormItem>

//             </Form>
//         )        
//     }
// }