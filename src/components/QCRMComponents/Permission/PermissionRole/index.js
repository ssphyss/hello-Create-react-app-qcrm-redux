import React from 'react';
import { Card, /*Tooltip,*/ message, Spin } from 'antd';
import { Form, Input, Modal, Radio, /*Select*/ } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../LayoutComponents/store';
import { /*Link, NavLink*/ } from 'react-router-dom';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
// const Option = Select.Option;

class PermissionRole extends React.Component{
    state = {
        
    }

    render(){
        // antD固定的,一定要這樣寫
        const { getFieldDecorator } = this.props.form;        
        return(
            <div>
                <Modal
                    title='創建角色'
                    visible={this.props.visible}
                    // onOk={this.handleRoleSubmit}
                    onOk={this.handleSubmit}
                    // onOk={this.props.handleSubmitRole}
                    onCancel={()=>{
                        // this.PermissionRole.props.form.resetFields();
                        this.props.handleModalCancle()
                        // this.setState({
                        //     isRoleVisible: false
                        // })
                    }}
                >
                    {/* <PermissionRole wrappedComponentRef={(inst)=>this.PermissionRole=inst}></PermissionRole> */}
                        <Spin spinning={this.props.loading} size="large">
                        <Card 
                            // title='角色定義'
                            // extra={
                            //     <div>
                            //         <a href="/">More</a>
                            //         <Tooltip title="提示字">
                            //             <span><Icon type="info-circle" theme="outlined" /> </span>                                
                            //         </Tooltip>
                            //     </div>
                            // }
                            // style={{ width: 300 }}
                        >
                            <Form>                           
                                <FormItem label="角色名稱">
                                {
                                    getFieldDecorator('permissionName')(
                                        <Input  placeholder="請輸入角色名稱" />
                                    )
                                }                                 
                                </FormItem>                           
                                <FormItem label="當前狀態">
                                    {
                                        getFieldDecorator('permissionStatus',{
                                            initialValue: 2, //預設
                                        })(
                                            <RadioGroup>
                                                <Radio value={1}>開啟</Radio>
                                                <Radio value={2}>禁止</Radio>
                                            </RadioGroup>
                                        )
                                    }                                    
                                </FormItem>                                                     
                                {/* <FormItem>
                                    <Button 
                                    type="primary" 
                                    onClick={this.handleSubmit}
                                    >
                                    送出修改
                                    </Button>
                                </FormItem> */}
                            </Form>
                        </Card>
                    </Spin>
                </Modal>                                
            </div>
        )
    }

    // async componentDidMount(){        
    //     this.props.handleloading();       

    //     await this.props.handleListPermission();
    //     setTimeout(() => {
    //         this.props.handleloading(false);       
    //     }, 800);
    // }

    handleSubmit = () => {
        // 取得所有Form數據
        let permInfo = this.props.form.getFieldsValue();
        // console.log('permInfo',permInfo);
        // console.log('permInfo.permssionName',permInfo.permissionName);
        // 皆有值
        if (permInfo.permissionName && permInfo.permissionStatus){            
            this.props.handleSubmitRole(permInfo);
            this.props.form.resetFields();
            message.success('資料送出成功');
            
        }else {
            message.error('請填寫正確欄位');
        }
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
        handleModalCancle(){
            const action = actionCreators.getModalCancle();
            dispatch(action);
        },  
    }
}
// export default PermissionRole
// export default Form.create({})(PermissionRole);
export default connect(mapStateToProps, mapDispathToProps)(Form.create({})(PermissionRole));
