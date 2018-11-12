import React from 'react';
import { Card, Form, Icon, Input, Button, Checkbox, Row, Col, Message, Modal } from 'antd';

import logo from './../../../assets/logo.svg';
import './../index.scss';
// 引入Router
import { Link/*, NavLink*/ } from 'react-router-dom';
// 引入轉址功能
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// const FormItem = Form.Item;
class Login extends React.Component {

    state = {
        iconLoading: false
    }
    
    render(){
        // antD固定的,一定要這樣寫才能驗證
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>                
                <div className='login__box'>
                    <div className='logo' key="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <Card title="登入帳戶" className='card-wrap'>
                        <Row>
                            <Col span='24'>
                                <Form>
                                    <Form.Item 
                                        label="用戶名"
                                        hasFeedback
                                    >
                                        {
                                            getFieldDecorator('userName',{
                                                initialValue: '',     /*初始值*/
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '用戶名不能為空'
                                                    },
                                                    // {
                                                    //     pattern: new RegExp('^\\w+$','g'),
                                                    //     message: '用戶名必須為英文字母或數字'
                                                    // }
                                                ]
                                            })(
                                                <Input prefix={<Icon type='user'/>} placeholder='請輸入用戶名'/>
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item 
                                        label="輸入密碼"
                                        hasFeedback
                                    >
                                        {
                                            getFieldDecorator('userPwd',{
                                                initialValue: '',  /*初始值*/
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '密碼不能為空'
                                                    },
                                                    // {
                                                    //     pattern: new RegExp('^\\w+$','g'),
                                                    //     message: '用戶名必須為英文字母或數字'
                                                    // }                                               
                                                ]
                                            })(
                                                <Input prefix={<Icon type='lock'/>} type='password' placeholder='請輸入密碼'/>
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item>
                                        {
                                            getFieldDecorator('remember',{
                                                valuePropName: 'checked',  /*一定要記得寫才會預設打勾*/
                                                initialValue: true,       /*初始值*/
                                                rules: []
                                            })(
                                                <Checkbox> 記住密碼</Checkbox>
                                            )
                                        }
                                        {/* <a href='https://www.google.com.tw/' style={{float: 'right'}}>忘記密碼</a>       */}
                                    </Form.Item>
                                    <Form.Item>
                                        <Button 
                                            loading={this.state.iconLoading}
                                            type='primary' 
                                            className="login-form-button" 
                                            onClick={this.handleSubmit}
                                        >登錄</Button>
                                        或 
                                        {/* <a href="https://www.google.com.tw/">立即註冊 now!</a> */}
                                        <Link to={'/User/Register'}>立即註冊 now!</Link>
                                        
                                    </Form.Item>
                                </Form>  
                            </Col>
                        </Row>                                      
                    </Card>
                </div>
            </div>            
        )
    }

    handleSubmit = () => {
        // 取得所有Form數據
        let userInfo = this.props.form.getFieldsValue();
        // console.log('userInfo', userInfo);

        // 驗證
        this.props.form.validateFields(async (err, values)=>{
            // console.log('err-values', err, values);
            // 如果沒有出現err
            // if(!err){
            //      Message.success(`${userInfo.userName}恭喜你已經通過驗證,密碼為${userInfo.userPwd}`)
            //  }
            if (!err){
               try {
                   this.setState({
                       iconLoading: true,
                   })
                    const res = await axios.post(`https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/login`,{
                        userName : userInfo.userName ,
                        userPwd : userInfo.userPwd
                   })
                    console.log('res.data',res.data);
                    
                    // 這裡的200是http狀態的請求碼的200
                    // 200是指後端有收到,無論正確與否就會給200
                    if(res.data.items[0].login === 'success'){
                        this.setState({
                            iconLoading: false,
                        })
                        Message.success(`${userInfo.userName}恭喜你已經通過驗證，正幫您轉入系統中心`);
                        // Modal.info({
                        //     title: "登入成功",
                        //     content: `恭喜你已經通過驗證，正幫您轉入系統中心`
                        // })
                        // 成功就作轉址功能
                        setTimeout(() => {
                            this.props.history.replace('/admin');
                        },500);
                    }else {
                        this.setState({
                            iconLoading: false,
                        })
                        Modal.info({
                            title: "登入失敗",
                            content: res.data.message
                        })
                    }
               } catch (error) {
                    Message.error(`伺服器錯誤`);
                    this.setState({
                        iconLoading: false,
                    })
               }  
            }
        })
    }
}

export default Form.create()(Login);