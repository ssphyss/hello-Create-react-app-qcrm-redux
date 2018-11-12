import React from 'react';
import { Spin } from 'antd';
import { Card, Tooltip /*Row, Col,*/ } from 'antd';
import { Tabs } from 'antd';
import { Form, Icon, Button, Input, Switch, Upload } from 'antd';
// import { TextArea } from 'antd';

// const TabPane = Tabs.TabPane;
const FormItem = Form.Item
const InputTextArea = Input.TextArea;
const styleRow = {
    minRows: 4, maxRows: 6
}

class Config extends React.Component{

    state = {
        loading: true,
    }

    render(){
        return(
            <div>
               <Card 
                    title='系統參數設定'
                    // extra={<a href="/">More</a>}
                    extra={
                        <div>
                            <a href="/">More</a>
                            <Tooltip title="提示字">
                                <span><Icon type="info-circle" theme="outlined" /> </span>                                
                            </Tooltip>
                        </div>
                    }
                    // style={{ width: 500 }}
                >
                    
                        <Tabs defaultActiveKey="1"
                            onChange={this.handleloading}
                        >
                            
                            <Tabs.TabPane tab={<span><Icon type="facebook" />Facebook設定 </span>} key="1">
                                <Spin spinning={this.state.loading} delay={0} >
                                    {this.FormFacebook()}
                                </Spin>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab={<span><Icon type="google" />Google+設定 </span>} key="2">
                                <Spin spinning={this.state.loading} delay={0} >
                                    {this.FormGoogle()}
                                </Spin>
                            </Tabs.TabPane>      
                        </Tabs>                    
                </Card>
            </div>
        )
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loading: false
            })   
        }, 500);
    }

    // Loading加載
    handleloading = () => {
        this.setState({
            loading: true
        })   
        setTimeout(() => {
            this.setState({
                loading: false
            })   
        }, 500);
    }

    FormFacebook(){
        // antD固定的,一定要這樣寫才能驗證
        // const { getFieldDecorator } = this.props.form;
        // const FormItem = Form.Item
        // const TextArea = Input.TextArea;
        // const styleRow = {
        //     minRows: 4, maxRows: 6
        // }
        return (
            <Form>
                <FormItem label="FaceBook-粉絲頁面網址">
                    <Input placeholder="請輸入用戶名" />
                </FormItem>
                <FormItem label="FaceBook-帳號ID/ACCOUNTID">
                    <Input type='password' placeholder="請輸入密碼" />
                </FormItem>
                <FormItem label="FaceBook-API">
                    <Input placeholder="API" />
                </FormItem>
                <FormItem label="FaceBook-SECRET">
                    <Input type='password' placeholder="SECRET" />
                </FormItem>
                <FormItem label="FaceBook-是否開啟">
                    <Switch/>
                </FormItem>
                <FormItem label="FaceBook-備註">
                    <InputTextArea

                        // 拿出來寫在外面
                        // autosize={
                        //     {
                        //         minRows: 4,
                        //         maxRows: 10
                        //     }
                        // }
                        autosize={styleRow}
                    />
                </FormItem>                
                <FormItem label="FaceBook-臉書大頭貼">
                    <Upload 
                        listType="picture-card"
                        showUploadList={false}
                        action="//jsonplaceholder.typicode.com/posts/"
                        // onChange={this.handleChange}
                    >
                        <img alt=''/>
                        <Icon type="plus"/>
                    </Upload>
                </FormItem>
                <FormItem>
                    <Button 
                        type="primary" 
                        className="login-form-button" 
                        // onClick={this.handleSubmit}
                    >
                        儲存
                    </Button>
                </FormItem>
            </Form>
        )
    }
    FormGoogle(){        
        // const FormItem = Form.Item
        // const TextArea = Input.TextArea;
        // const styleRow = {
        //     minRows: 4, maxRows: 6
        // }
        return (
            <Form>
                {/* <FormItem label="Google-頁面網址">
                    <Input placeholder="請輸入用戶名" />
                </FormItem> */}
                <FormItem label="Google-帳號ID/ACCOUNTID">
                    <Input type='password' placeholder="請輸入密碼" />
                </FormItem>
                <FormItem label="Google-API">
                    <Input placeholder="API" />
                </FormItem>
                <FormItem label="Google-SECRET">
                    <Input type='password' placeholder="SECRET" />
                </FormItem>
                <FormItem label="Google-是否開啟">
                    <Switch/>
                </FormItem>
                <FormItem label="Google-備註">
                    <InputTextArea
                        // 拿出來寫在外面
                        // autosize={
                        //     {
                        //         minRows: 4,
                        //         maxRows: 10
                        //     }
                        // }
                        autosize={styleRow}
                    />
                </FormItem>
                {/* <FormItem label="Google-大頭貼">
                    <Upload 
                        listType="picture-card"
                        showUploadList={false}
                        action="//jsonplaceholder.typicode.com/posts/"
                        // onChange={this.handleChange}
                    >
                        <img alt=''/>
                        <Icon type="plus"/>
                    </Upload>
                </FormItem> */}
                <FormItem>
                    <Button 
                        type="primary" 
                        className="login-form-button" 
                        // onClick={this.handleSubmit}
                    >
                        儲存
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default Config