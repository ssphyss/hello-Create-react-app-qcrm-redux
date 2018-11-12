import React from 'react';
// import { Fragment } from 'react';
import { Card, Tooltip, Icon, Spin } from 'antd';
import { Button, Form, Input, Radio, Select, InputNumber, DatePicker, Upload, message } from 'antd';

// 引入
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../layout/store';

// 引入Router
import { Link/*, NavLink*/ } from 'react-router-dom';


import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

// 上傳前驗證
function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
      message.error('只能上傳 JPG 或 png 檔案');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('圖檔需小於 2MB');
    }
    return isJPG && isLt2M;
}

// img = info.file.originFileObj
function getBase64(img, callback) {
    // 讀取一張圖片,下面三行必寫
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

// const addressData = ['TW', ]
const cityData = {
    TW: ['Taipei', '新北市', '桃園市','台中市']
}
const distData = {
    Taipei: ['中正區', '信義區', '大同區','台中市']
}




// // 頭像組件，方便以後獨立，增加裁剪等功能
// const AvatarView = ({avatar}) => (
//     <Fragment>
//       <div className='avatarTitle'>Avatar</div>
//       <div className='vatar'>
//         <img alt="avatar" />
//       </div>
//       <Upload fileList={[]}>
//         <div className='button_view'>
//           <Button icon="upload">
//             上傳照片
//           </Button>
//         </div>
//       </Upload>
//     </Fragment>
// );

class MemberProfile extends React.Component{
    state = {
        imageUrl: '',
        loadingPhoto: false,
    }

    render(){
        // console.log('-----(MemberProfile讀取)dataMember', this.props.dataMember)
        console.log('-----(MemberProfile讀取)dataProfile', this.props.dataProfile)
        // antD固定的,一定要這樣寫
        const { getFieldDecorator } = this.props.form;

        const imageUrl = this.state.imageUrl;
        const uploadButton = (
            <div>
                <Icon type={this.state.loadingPhoto ? 'loading' : 'plus'} />
                <div className="ant-upload-text">上傳照片</div>
            </div>
        );   
        
        return(
            <div>
                <Spin spinning={this.props.loading} size="large">
                    <Card 
                        title='客戶 MemberProfile'
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
                            <FormItem label="聯絡地址">
                                {
                                    getFieldDecorator('memberCity', {
                                        initialValue: this.props.dataProfile.memberCity,
                                        rules: [
                                            
                                        ]           
                                    })(
                                        <Select 
                                            value={this.props.dataProfile.memberCity}
                                            style={{ maxWidth: 220 }}
                                        >
                                            <Option value="台北市">台北市</Option>
                                            <Option value="新北市">新北市</Option>
                                            <Option value="桃園市">桃園市</Option>
                                            <Option value="新竹市">新竹市</Option>
                                        </Select>
                                    )
                                }
                                {
                                    getFieldDecorator('memberDist', {
                                        initialValue: this.props.dataProfile.memberDist,
                                        rules: [
                                            
                                        ]           
                                    })(
                                        <Select 
                                            value={this.props.dataProfile.memberDist}
                                            style={{ maxWidth: 220 }}
                                        >
                                            <Option value="中正區">中正區</Option>
                                            <Option value="新北市">大同區</Option>
                                            <Option value="桃園市">信義區</Option>
                                            <Option value="新竹市">中山區</Option>
                                        </Select>
                                    )
                                }
                                {
                                    getFieldDecorator('memberAddress', {
                                        initialValue: this.props.dataProfile.memberAddress,
                                        rules: [
                                            
                                        ]           
                                    })(
                                        <Input value={this.props.dataProfile.memberAddress}/>
                                    )
                                }
                                
                            </FormItem> 
                            <FormItem label="更換頭像">
                                {/* {AvatarView()} */}
                                {/* <AvatarView avatar={this.getAvatarURL()} /> */}
                                {/* <Upload
                                    listType="picture-card"
                                    showUploadList={false}
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    // onChange={this.handleChange}
                                >
                                {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                                </Upload> */}
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    // action="//jsonplaceholder.typicode.com/posts/"
                                    action='https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/upload/99'
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChange}
                                    // onChange={()=>this.handleChange()}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                                </Upload>
                            </FormItem>
                            <FormItem label="帳號">
                            {
                                getFieldDecorator('memberAccount', {
                                    initialValue: this.props.dataProfile.memberAccount,
                                    rules: [
                                        
                                    ]           
                                })(
                                    <Input
                                        placeholder="用戶帳號" 
                                    />
                                )
                            }                                
                            </FormItem>                            
                            <FormItem label="用戶名">
                            {
                                getFieldDecorator('memberName', {
                                    initialValue: this.props.dataProfile.memberName,
                                    rules: [
                                        
                                    ]           
                                })(
                                    <Input placeholder="用戶名" />
                                )
                            } 
                                
                            </FormItem>
                            <FormItem label="密碼">
                            {
                                getFieldDecorator('memberPassword', {
                                    initialValue: this.props.dataProfile.memberPassword,
                                    rules: [
                                        
                                    ]           
                                })(
                                    <Input type="password" placeholder="用戶密碼" />
                                )
                            }                                
                            </FormItem>
                            <FormItem label="信箱">
                            {
                                getFieldDecorator('memberEmail', {
                                    initialValue: this.props.dataProfile.memberEmail,
                                    rules: [
                                        
                                    ]           
                                })(
                                    <Input placeholder="用戶信箱" />
                                )
                            }                                 
                            </FormItem>                          
                            <FormItem label="連絡電話">
                            {/* {
                                getFieldDecorator('memberPhone', {
                                    initialValue: this.props.dataProfile.memberPhone,
                                    rules: [
                                        
                                    ]           
                                })(
                                    <Input placeholder="區域電話" />
                                )
                            }  */}
                            {
                                getFieldDecorator('memberPhone', {
                                    initialValue: this.props.dataProfile.memberPhone,
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
                                    initialValue: this.props.dataProfile.memberMobile,
                                    rules: [
                                        
                                    ]           
                                })(
                                    // <Input placeholder="0000" />
                                    <Input placeholder="用戶手機" />
                                )
                            }
                                
                            </FormItem>   
                            <FormItem label="性别">
                            {
                                getFieldDecorator('memberSex', {
                                    initialValue: this.props.dataProfile.memberSex,
                                    rules: [
                                        
                                    ]           
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }                                
                            </FormItem>
                            <FormItem label="生日">
                            {
                                getFieldDecorator('memberBirthday', {
                                    initialValue: moment(this.props.dataProfile.memberBirthday, 'YYYY-MM-DD'),
                                    rules: [
                                        
                                    ]           
                                })(
                                    <DatePicker
                                        showTime
                                        // format="YYYY-MM-DD HH:mm:ss"
                                        format="YYYY-MM-DD"
                                        placeholder='請選擇日期'
                                    />
                                )
                            }              
                            </FormItem>
                            <FormItem label="年齡">
                                {
                                    getFieldDecorator('memberAge', {
                                        initialValue: this.props.dataProfile.memberAge,
                                        rules: [
                                            
                                        ]           
                                    })(
                                        <InputNumber  />
                                    )
                                }                                 
                            </FormItem>
                            <FormItem label="當前狀態">
                                {
                                    getFieldDecorator('memberStatus', {
                                        initialValue: this.props.dataProfile.memberStatus,
                                        rules: [
                                            
                                        ]           
                                    })(
                                        <RadioGroup>
                                            <Radio value="1">開通中</Radio>
                                            <Radio value="2">禁止</Radio>
                                        </RadioGroup>
                                    )
                                }                                    
                            </FormItem>
                            <FormItem label="用戶級別">
                                {
                                    getFieldDecorator('memberPermission', {
                                        initialValue: this.props.dataProfile.memberPermission,
                                        rules: [
                                            
                                        ]           
                                    })(
                                        <RadioGroup>
                                            <Radio value="1">一班</Radio>
                                            <Radio value="2">VIP</Radio>
                                            <Radio value="3">員工</Radio>
                                            <Radio value="4">管理職</Radio>
                                        </RadioGroup>
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
                </Spin>                
            </div>
        )
    }

    async componentDidMount(){    
        console.log('this.props.location.pathname', this.props.location.pathname);
        // 打印 this.props.location.pathname /member/list/profile/5B
        const arr =  this.props.location.pathname.split('/');
        const id = arr[arr.length-1]
        console.log(arr) 
        console.log(id) 
        // console.log('arr.length', arr.length) 
        // this.props.handleProfile(id);       

        this.props.handleloading();        

        await this.props.handleProfile(id);
        setTimeout(() => {
            this.props.handleloading(false);       
        }, 500);
        
    }

    handleChange = (info) => {
        console.log('info', info);
        if (info.file.status === 'uploading'){
            this.setState({
                loadingPhoto: true,
                imageUrl: ''
            })
        }
        if (info.file.status === 'done'){
            // this.setState({
            //     loadingPhoto: false
            // })

            
            console.log('info.file.originFileObj', info.file.originFileObj);
            // 打印得到本機上傳照片的資訊
            // name: "2018-10-19_123120.png"
            // size: 52790
            // type: "image/png"
            // uid: "rc-upload-1542008381728-2"


            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }
}

// 引入
const mapStateToProps = (state) => {
    return {
        // focused: state.dashboard.focused,
        loading: state.getIn(['admin','loading']),
        focused: state.getIn(['dashboard','focused']),
        // loading: state.getIn(['dashboard','loading']),
        data: state.getIn(['dashboard','data']),
        dataBorrow: state.getIn(['borrow','dataBorrow']),        
        dataMember: state.getIn(['member','dataMember']), 
        dataProfile: state.getIn(['member','dataProfile']), 
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {

        // Loading加載
        handleloading(loadingStatus = true){
            // console.log('有嗎')
            const action = actionCreatorsAdmin.getLoading(loadingStatus);
            dispatch(action);      
        },       

        // // Ajax資料載入
        // handleListMember(){    
        //     const action = actionCreators.getListMember();
        //     dispatch(action);
        // }
        
        handleProfile(id){
            // console.log('有嗎')
            const action = actionCreators.getProfileMember(id);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Form.create()(MemberProfile));
// export default connect(mapStateToProps, mapDispathToProps)(MemberProfile);
// export default MemberProfile