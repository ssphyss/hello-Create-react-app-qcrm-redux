import React from 'react';
import { Card, Tooltip, Icon } from 'antd';
import { Button, Form, Input, Select } from 'antd';
// import moment from 'moment';

const FormItem = Form.Item;
// const RadioGroup = Radio.Group;
const Option = Select.Option;
// const TextArea = Input.TextArea;


// // 上傳前驗證
// function beforeUpload(file) {
//     const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJPG) {
//       message.error('只能上傳 JPG 或 png 檔案');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       message.error('圖檔需小於 2MB');
//     }
//     return isJPG && isLt2M;
// }


// // img = info.file.originFileObj
// function getBase64(img, callback) {
//     // 讀取一張圖片,下面三行必寫
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
// }

class TabApplication extends React.Component{
    state = {
        imageUrl: '',
        loadingPhoto: false,
        loading: false
    }
    render(){
        // antD固定的,一定要這樣寫
        const { getFieldDecorator } = this.props.form;

        // const imageUrl = this.state.imageUrl;
        // const uploadButton = (
        //     <div>
        //         <Icon type={this.state.loadingPhoto ? 'loading' : 'plus'} />
        //         <div className="ant-upload-text">上傳照片</div>
        //     </div>
        // );   
        return(
            <div>
                {/* TabApplication 申請資料修改 */}
                
                    <Card 
                        // title='客戶 MemberProfile'
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
                        <Form>                                                                                  
                            <FormItem label="用戶名">
                            {
                                getFieldDecorator('memberName', {
                                    rules: [
                                        
                                    ]           
                                })(
                                    <Input placeholder="用戶名" />
                                )
                            } 
                                
                            </FormItem>                            
                            <FormItem label="信箱">
                            {
                                getFieldDecorator('memberEmail', {
                                    rules: [
                                        
                                    ]           
                                })(
                                    <Input placeholder="用戶信箱" />
                                )
                            }                                 
                            </FormItem>                          
                            <FormItem label="連絡電話">
                            {
                                getFieldDecorator('memberPhone', {
                                    rules: [
                                        
                                    ]           
                                })(
                                    <Input placeholder="區域電話" />
                                )
                            } 
                            </FormItem>                          
                            <FormItem>
                            {
                                getFieldDecorator('memberMobile', {
                                    rules: [
                                        
                                    ]           
                                })(
                                    <Input placeholder="用戶連絡電話" />
                                )
                            }   
                            </FormItem>   
                            <FormItem label="手機">
                            {
                                getFieldDecorator('memberMobile', {      
                                    rules: [
                                        
                                    ]           
                                })(                                    
                                    <Input placeholder="用戶手機" />
                                )
                            }                                
                            </FormItem>  
                            <FormItem label="聯絡地址">
                                {
                                    getFieldDecorator('memberCity', {        
                                        rules: [
                                            
                                        ]           
                                    })(
                                        <Select                                             
                                            style={{ maxWidth: 220 }}
                                        >
                                            <Option value="台北市">台北市</Option>
                                            <Option value="新北市">新北市</Option>
                                            <Option value="桃園市">桃園市</Option>
                                            <Option value="新竹市">新竹市</Option>
                                        </Select>
                                    )
                                }
                            </FormItem>                          
                            <FormItem>
                                {
                                    getFieldDecorator('memberDist', {                                        
                                        rules: [                                            
                                        ]           
                                    })(
                                        <Select                                             
                                            style={{ maxWidth: 220 }}
                                        >
                                            <Option value="中正區">中正區</Option>
                                            <Option value="新北市">大同區</Option>
                                            <Option value="桃園市">信義區</Option>
                                            <Option value="新竹市">中山區</Option>
                                        </Select>
                                    )
                                }
                            </FormItem>                          
                            <FormItem>
                                {
                                    getFieldDecorator('memberAddress', {                                        
                                        rules: [
                                            
                                        ]           
                                    })(
                                        <Input />
                                    )
                                }                                
                            </FormItem>
                            <FormItem>
                                <Button 
                                type="primary" 
                                // onClick={this.handleSubmit}
                                >
                                送出修改
                                </Button>
                            </FormItem>                          
                        </Form>
                    </Card>                
            </div>
        )
    }
}

// export default TabApplication;
export default (Form.create()(TabApplication));


    