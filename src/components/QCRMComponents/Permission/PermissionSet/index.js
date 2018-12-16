import React from 'react';
import { Card, /*Tooltip,*/ message, Spin, Tree } from 'antd';
import { Form, Input, Modal, Radio, /*Select*/ } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../LayoutComponents/store';
import { /*Link, NavLink*/ } from 'react-router-dom';
import menuConfig from './../../../../config/menuConfig';
import { /**/ toJS, fromJS, Map} from 'immutable';
import Immutable from 'immutable';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
// const Option = Select.Option;
const TreeNode = Tree.TreeNode;

class PermissionSet extends React.Component{
    state = {
        
    }
    // 把數據傳遞回去
    onCheck = (checkedKeys) => {
        this.props.patchMenuInfo(checkedKeys, this.props.roleSet.id)
    }
    renderTreeNodes = (menuConfig)=>{
        // console.log('menuConfig',menuConfig);

        return menuConfig.map((item)=>{
            // console.log('item數',item);
            if(item.children){
                return (
                    // <TreeNode title={item.title} key={Math.floor(Math.random()*10000)}>
                        <TreeNode title={item.title} key={item.path}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                )
                
            }else{
                // return <TreeNode {...item} key={Math.floor(Math.random()*10000)}/>
                // return <TreeNode title={item.title} key={Math.floor(Math.random()*10000)}></TreeNode>
                return <TreeNode title={item.title} key={item.path}></TreeNode>
            }
        })
    }
    
    render(){
        // console.log('lll', this.props.roleSet);
        // antD固定的,一定要這樣寫
        const { getFieldDecorator } = this.props.form;      
        // const newname = Map(this.props.dataPermission[0]).get('role_name')
        // const newdata = Map(this.props.dataPermission[0]).get('menus')

        // console.log('new渲染menu',newname, newdata)
        // console.log('this.props.roleSet.menus',this.props.roleSet.menus);
        console.log(this.props.dataPermission, this.props.roleSet.id);
        // const newList = this.props.list.toJS();  
        // 把 list的Iimmutable數組轉成普通 JS 數組 newList = 47筆 

        return(
            <div>
                <Modal
                    title='設置權限'
                    visible={this.props.visible}  
                    onOk={this.handleSubmit}
                    onCancel={()=>{
                        // this.PermissionSet.props.form.resetFields();
                        this.props.handleModalCanclePerm()
                    }}
                >
                    {/* <PermissionSet wrappedComponentRef={(inst)=>this.PermissionSet=inst}></PermissionSet> */}
                        <Spin spinning={this.props.loading} size="large">
                        <Card 
                        >
                            <Form>                           
                                <FormItem label="角色名稱">
                                {
                                    getFieldDecorator('permissionName',{
                                        initialValue: this.props.roleSet.name
                                    })(
                                        <Input  disabled placeholder="請輸入角色名稱" style={{cursor:'no-drop'}}/>
                                    )
                                }                                 
                                </FormItem>                           
                                <FormItem label="當前狀態">
                                    {
                                        getFieldDecorator('permissionStatus',{
                                            initialValue: this.props.roleSet.status
                                        })(
                                            <RadioGroup>
                                                <Radio value={'1'}>開啟</Radio>
                                                <Radio value={'2'}>禁止</Radio>
                                            </RadioGroup>
                                        )
                                    }                                    
                                </FormItem>                                                     
                                <FormItem label="平台權限" styele={{marginTop: '50px'}}>
                                    <Tree
                                        checkable          // 節點前添加Checkbox 複選框
                                        defaultExpandAll   // 預設展開
                                        autoExpandParent   // 是否自動展開父節點

                                        checkedKeys={this.props.roleSetMenus} // 默認選中復選框的樹節點
                                        // selectedKeys={this.props.roleSet.menus} // 默認選中復選框的樹節點

                                        // defaultCheckedKeys={["/", "/dashboard/analysis", "/dashboard/loginRecord", "/dashboard/config", "/dashboard/adminMembers", "/member/list", "/member/list/detail"]} // 默認選中復選框的樹節點
                                        onCheck={(checkedKeys, e)=>{
                                            console.log('check,e', checkedKeys, e);//e.node.props.eventKey
                                            this.onCheck(checkedKeys)
                                        }}

                                        // 預設顯示
                                        // checkedKeys={this.props.dataPermission.menus}
                                        // checkedKeys={menuInfo}
                                        // key={Math.floor(Math.random()*10000)}
                                    >
                                        <TreeNode title="所有權限" >
                                            {this.renderTreeNodes(menuConfig)}
                                        </TreeNode>
                                    </Tree>
                                </FormItem>
                            </Form>
                        </Card>
                    </Spin>
                </Modal>                                
            </div>
        )
    }

    handleSubmit = () => {
        let permInfo = this.props.form.getFieldsValue();
        console.log('permInfo',permInfo);
        this.props.saveRoleSet();
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.getIn(['admin','loading']),
        focused: state.getIn(['dashboard','focused']),
        data: state.getIn(['dashboard','data']),
        dataBorrow: state.getIn(['borrow','dataBorrow']),
        dataPermission: state.getIn(['permission','dataPermission']),
        isRoleVisible: state.getIn(['permission','isRoleVisible']),
        roleSet: state.getIn(['permission','roleSet']),
        roleSetMenus: state.getIn(['permission', 'roleSetMenus'])
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
            console.log('aa');
            const action = actionCreators.getListPermission();
            dispatch(action);
        } ,
        // 送出資料
        handleSubmitRole(permInfo){
            const action = actionCreators.getSubmitRole(permInfo);
            dispatch(action);
        },
        // 關閉視窗
        handleModalCanclePerm(){
            const action = actionCreators.getModalCanclePerm();
            dispatch(action);
        },  
        patchMenuInfo(checkedKeys, id){
            const action = actionCreators.patchMenuInfo(checkedKeys, id);
            dispatch(action);
        },
        saveRoleSet(){
            const action = actionCreators.saveRoleSet();
            dispatch(action);
        }
    }
}
// export default PermissionSet
// export default Form.create({})(PermissionSet);
export default connect(mapStateToProps, mapDispathToProps)(Form.create({})(PermissionSet));
