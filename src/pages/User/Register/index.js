import React from 'react';
import { Card, Form, Icon, Input, Button, Checkbox, Row, Col, Message, Modal } from 'antd';
import logo from './../../../assets/logo.svg';
import './../index.scss';
import axios from 'axios';
// 引入轉址功能
import { withRouter } from 'react-router-dom';

const FormItem = Form.Item;
class Register extends React.Component {

    state = {
        iconLoading: false
    }

    render(){
        // antD固定的,一定要這樣寫才能驗證
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login register'>
            <div className='login__box'>
                <div className='logo' key="logo">
                    <img src={logo} alt="logo" />
                </div>
                <Card title="註冊帳戶" className='card-wrap'>
                    {/* <h1>登入</h1> */}
                    <Row>
                        <Col span='24'>
                            {/* 預設已經 layout='horizontal' */}
                            <Form>                                    
                                {/* <FormItem label="用戶名" {...formItemLayout}> */}
                                <Form.Item label="用戶名" hasFeedback>
                                    {
                                        getFieldDecorator('userName', {
                                            initialValue: '',   /*初始值*/
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '用戶名不能為空'
                                                },
                                                {
                                                    min: 5, max: 10,
                                                    message: '長度不在範圍內'
                                                },
                                                {
                                                    // pattern: /^\w/g,
                                                    pattern: new RegExp('^\\w+$','g'),
                                                    message: '用戶名必須為英文字母或數字'
                                                }
                                            ]
                                        })(
                                            <Input  prefix={<Icon type='user'/>} placeholder="請輸入用戶名" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item label="信箱" hasFeedback>
                                    {
                                        getFieldDecorator('userEmail', {
                                            initialValue: '',   /*初始值*/
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '信箱不能為空'
                                                },
                                                {
                                                    type: 'email',
                                                    message: '格式錯誤'
                                                },
                                                // {
                                                //     min: 5, max: 10,
                                                //     message: '長度不在範圍內'
                                                // },
                                                // {
                                                //     // pattern: /^\w/g,
                                                //     pattern: new RegExp('^\\w+$','g'),
                                                //     message: '信箱必須為英文字母或數字'
                                                // }
                                            ]
                                        })(
                                            <Input  prefix={<Icon type='mail'/>} placeholder="請輸入用信箱" />
                                        )
                                    }
                                </Form.Item>
                                <FormItem label="密碼" hasFeedback>
                                    {
                                        getFieldDecorator('userPwd', {
                                            initialValue: '',
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '密碼不能為空'
                                                },
                                                {
                                                    min: 6,
                                                    message: '密碼太短'
                                                },
                                                {
                                                    max: 11,
                                                    message: '密碼太長'
                                                }
                                            ]
                                        })(
                                            <Input  prefix={<Icon type='lock'/>} type="password" placeholder="請輸入密碼" />
                                        )
                                    }
                                </FormItem>
                                <FormItem label="密碼確認" hasFeedback>
                                    {
                                        getFieldDecorator('userPwdAgain', {
                                            initialValue: '',
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '密碼不能為空'
                                                },
                                                // {
                                                //     min: 6,
                                                //     message: '密碼太短'
                                                // },
                                                // {
                                                //     max: 11,
                                                //     message: '密碼太長'
                                                // }
                                                {
                                                    validator:(rule, value, cb)=>{
                                                        console.log('rule',rule)
                                                        console.log('value',value)
                                                        const userPwd = this.props.form.getFieldValue('userPwd');
                                                        if(userPwd === value) {
                                                            cb(); 
                                                        }else{
                                                            cb(`密碼不相符`)
                                                        }
                                                    }
                                                }
                                            ]
                                        })(
                                            <Input  prefix={<Icon type='lock'/>} type="password" placeholder="請輸入密碼" />
                                        )
                                    }
                                </FormItem>
                                {/* <FormItem {...offsetLayout}> */}
                                <FormItem hasFeedback>
                                    {
                                        getFieldDecorator('userRead', {
                                            valuePropName: 'checked',  /*一定要記得寫才會預設打勾*/
                                            // initialValue: true,        /*初始值*/
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '請閱讀'
                                                },
                                            ]
                                        })(
                                        <Checkbox>我已閱讀過<a href="https://www.google.com.tw/">協議事項</a></Checkbox>
                                        )
                                    }
                                </FormItem>
                                <FormItem>
                                    <Button 
                                    loading={this.state.iconLoading}
                                    type="primary" 
                                    className="login-form-button" 
                                    onClick={this.handleSubmit}>註冊</Button>
                                </FormItem>
                            </Form>  
                        </Col>
                    </Row>                                      
                </Card>
            </div>
        </div>            
        )
    }

    // 送出表單
    handleSubmit = () => {
        // 取得所有Form數據然後驗證
        let userInfo = this.props.form.getFieldsValue();
        console.log('userInfo', userInfo);
        this.props.form.validateFields(async (err, values)=>{
            if(!err){

                try {
                    this.setState({
                        iconLoading: true,
                    })

                    const res = await axios.post(`https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/Register`,{
                        userName : userInfo.userName ,
                        userPwd : userInfo.userPwd,
                        userEmail: userInfo.userEmail,
                   })                

                   console.log('res.data', res.data)
                   if(res.data.items[0].register === 'success'){
                        this.setState({
                            iconLoading: false,
                        })
                        Message.success(`${userInfo.userName}恭喜你已經通過驗證,密碼為${userInfo.userPwd}`);
                        
                        setTimeout(() => {                                
                            this.props.history.replace('/admin');
                        }, 1000);
                   }else {
                        this.setState({
                            iconLoading: false,
                        })
                        Modal.info({
                            title: "註冊失敗",
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

export default Form.create()(Register);