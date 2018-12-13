import React from 'react';
// import { Fragment } from 'react';
import { Card, Tooltip, Icon, Spin, Notification, Modal } from 'antd';
import { Button, Form, Input, Radio, Select, InputNumber, DatePicker, Upload, Message } from 'antd';

// 引入
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../LayoutComponents/store';

// 引入Router
import { withRouter, Link, NavLink } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
// const TextArea = Input.TextArea;


// 上傳前驗證
function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJPG) {
      Message.error('只能上傳 JPG 或 png 檔案');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      Message.error('圖檔需小於 2MB');
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

class MemberProfile extends React.Component{
    state = {
        imageUrl: '',
        loadingPhoto: false,
        city: ['台北市', '新北市', '桃園市','台中市'],
        dist: [],
        selectCity: '',
        selectDist: ''
    }

    render(){
        // console.log('-----(MemberProfile讀取)dataMember', this.props.dataMember)
        // console.log('-----(MemberProfile讀取)dataProfile', this.props.dataProfile)

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
                        title='客戶檔案'
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


                            <FormItem label="聯絡地址" /*style={{display: 'inline-block'}}*/>
                                {
                                    getFieldDecorator('memberCity', {
                                        initialValue: this.props.dataProfile.memberCity,
                                        rules: [
                                            
                                        ]           
                                    })(
                                        // <Select 
                                        //     value={this.props.dataProfile.memberCity}
                                        //     style={{ maxWidth: 220 }}
                                        // >
                                        //     <Option value="台北市">台北市</Option>
                                        //     <Option value="新北市">新北市</Option>
                                        //     <Option value="桃園市">桃園市</Option>
                                        //     <Option value="新竹市">新竹市</Option>
                                        // </Select>
                                        this.cityRender()
                                    )
                                }     
                                </FormItem>    
                                <FormItem /*style={{display: 'inline-block'}}*/>                 
                                {
                                    getFieldDecorator('memberDist', {
                                        initialValue: this.props.dataProfile.memberDist,
                                        rules: [
                                            
                                        ]           
                                    })(
                                        // <Select 
                                        //     value={this.props.dataProfile.memberDist}
                                        //     style={{ maxWidth: 220 }}
                                        // >
                                        //     <Option value="中正區">中正區</Option>
                                        //     <Option value="新北市">大同區</Option>
                                        //     <Option value="桃園市">信義區</Option>
                                        //     <Option value="新竹市">中山區</Option>
                                        // </Select>
                                        this.distRender()
                                    )
                                }    
                                </FormItem>    
                                <FormItem /*style={{display: 'inline-block'}}*/>       
                                {
                                    getFieldDecorator('memberAddress', {
                                        initialValue: this.props.dataProfile.memberAddress,
                                        rules: [
                                            
                                        ]           
                                    })(
                                        <Input/>
                                    )
                                }
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
                                onClick={this.handleSubmit}
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

    handleSubmit =()=>{
        this.props.handleloading();
        setTimeout(() => {
            this.props.handleloading(false);     
            // Message.error('圖檔需小於 2MB');  
            // Notification.open({
            //     message: '成功了',
            //     description: '您已更新資料',
            //     icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            //     centered: true
            // });
            Modal.success({
                title: '更新成功',
                content: '您的資料已經被覆蓋',
                okText: '確認',
                onOk: ()=>{
                    // console.log('AA',this.props.location);
                    this.props.history.push('/member/list')
                }
            });
        }, 500);        
    }

    // 確認後端資料的地址 城市 已經得到後觸發， 再進行區域初始資料
    componentWillReceiveProps(nextProps){
        if(typeof nextProps.dataProfile.memberCity !== 'undefined' && this.state.selectCity === ''){
            this.handleDistIninRender(nextProps.dataProfile.memberCity);
            this.setState({
                selectCity: nextProps.dataProfile.memberCity
            })
        }
    }

    async componentDidMount(){    
        //初始化city資料
        this.handleCityIninRender();

        // console.log('this.props.location.pathname', this.props.location.pathname);
        // 打印 this.props.location.pathname /member/list/profile/5B
        const arr =  this.props.location.pathname.split('/');
        const id = arr[arr.length-1]
        // console.log(arr) 
        // console.log(id) 
        // console.log('arr.length', arr.length) 
        // this.props.handleProfile(id);       

        this.props.handleloading();        

        await this.props.handleProfile(id);
        setTimeout(() => {
            this.props.handleloading(false);       
        }, 500);
        
    }

    handleChange = (info) => {
        // console.log('info', info);
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

            
            // console.log('info.file.originFileObj', info.file.originFileObj);
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

    handleCityIninRender = async () => {
        const res = await axios.get('/api/address/address.json');
        this.addressJson = res.data.taiwan;
        let city = res.data.taiwan;
        city = city.map((item) => {
            return item.city
        })
        this.setState({
            city
        })
    }

    handleDistIninRender = (selectCity) => {
        let dist = [];
        if (this.addressJson){
            for (let i = 0; i < this.addressJson.length; i++) {
                const item = this.addressJson[i];
                if(item.city === selectCity){
                    dist = item.area;
                    break;
                }
            }
        }
        
        if(this.state.selectCity !== ''){
            this.props.form.setFieldsValue({
                memberDist: dist[0]['#text']
            })
        }
        // console.log('dist',dist);
        this.setState({
            dist
        })
    }

    cityRender = () => {
        let option = this.state.city.map((item)=>{
            return <Option key={item} value={item}>{item}</Option>
        })

        return (
            <Select 
                style={{ maxWidth: 220 }}
                onChange={this.handleChangeCity}
            >
                {option}
            </Select>
        )
    }

    distRender = () => {
        let option = this.state.dist.map((item)=>{
            return <Option key={item['#text']} value={item['#text']}>{item['#text']}</Option>
        })

        return (
            <Select 
                style={{ maxWidth: 220 }}
            >
                {option}
            </Select>
        )
    }

    handleChangeCity = (val) => {
        this.handleDistIninRender(val);
        this.setState({
            selectCity: val
        })
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
        // // 送出顯示loading
        // handleloading(loadingStatus = true){            
        //     const action = actionCreatorsAdmin.getLoading(loadingStatus);
        //     dispatch(action);
        // },
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