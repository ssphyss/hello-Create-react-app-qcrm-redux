import React from 'react';
import { Spin, Message, Modal } from 'antd';
import { Card, Tooltip /*Row, Col,*/ } from 'antd';
import { Tabs } from 'antd';
import { Form, Icon, Button, Input, Switch, Upload } from 'antd';
// import { TextArea } from 'antd';
// 引入
import { connect } from 'react-redux';
import { actionCreators } from './../store';
import { actionCreators as actionCreatorsAdmin } from './../../../LayoutComponents/store';

// const TabPane = Tabs.TabPane;
const FormItem = Form.Item
const InputTextArea = Input.TextArea;
const styleRow = {
    minRows: 4, maxRows: 6
}

// ========================圖片(上傳前驗證)=========================
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
// ========================圖片(上傳前驗證)End=========================


class Config extends React.Component{
    state = {
        loading: true,
        imageUrl: '',
        loadingPhoto: false,
    }
    render(){
          
        return(            
            <div>
               <Card 
                    title='系統參數設定'
                    // extra={<a href="/">More</a>}
                    extra={
                        <div>
                            <span className='more'
                                onClick={this.handleModal}
                            >More</span>
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

    handleModal=()=>{
        Modal.info({
            title: '系統參數設定',
            content: '系統參數設定說明，連結API',
            okText: '知道了'
            // cancelText: false
            // onOk: ()=>{  
            //     this.props.history.push('/member/list')
            // }
        });
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

    // ========================圖片(上傳前驗證)=========================
    handleChange = (info) => {
        if (info.file.status === 'uploading'){
            this.setState({
                loadingPhoto: true,
                imageUrl: ''
            })
        }
        if (info.file.status === 'done'){
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }
    // ========================圖片(上傳前驗證)End=========================



    FormFacebook(){
        // antD固定的,一定要這樣寫才能驗證
        // const { getFieldDecorator } = this.props.form;
        // const FormItem = Form.Item
        // const TextArea = Input.TextArea;
        // const styleRow = {
        //     minRows: 4, maxRows: 6
        // }
        const imageUrl = this.state.imageUrl;
        const uploadButton = (
            <div>
                <Icon type={this.state.loadingPhoto ? 'loading' : 'plus'} />
                <div className="ant-upload-text">上傳照片</div>
            </div>
        ); 
        return (
            <Spin spinning={this.props.loading} size="large">
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
                <FormItem>
                    <Button 
                        type="primary" 
                        className="login-form-button" 
                        onClick={this.handleSubmit}
                    >
                        儲存
                    </Button>
                </FormItem>
            </Form>
            </Spin>
        )
    }
    handleSubmit =()=>{
        this.props.handleloading();
        setTimeout(() => { 
            this.props.handleloading(false);     
            Modal.success({
                title: '更新成功',
                content: '您的資料已經被覆蓋',
                okText: '確認',
                // onOk: ()=>{
                //     this.props.history.push('/dashboard/config')
                // }
            });
        }, 500);        
    }

    FormGoogle(){        
        // const FormItem = Form.Item
        // const TextArea = Input.TextArea;
        // const styleRow = {
        //     minRows: 4, maxRows: 6
        // }
        return (
            <Spin spinning={this.props.loading} size="large">
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
                        onClick={this.handleSubmit}
                    >
                        儲存
                    </Button>
                </FormItem>
            </Form>
            </Spin>
        )
    }
}


// 組件要做連接時接收兩個參數
// 把倉庫裡的focused( 即state.focused)映射到組件的props的focused
const mapStateToProps = (state) => {
    return {
        loading: state.getIn(['admin','loading']),
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        // Loading加載
        handleloading(loadingStatus = true){
            // console.log('有嗎')
            const action = actionCreatorsAdmin.getLoading(loadingStatus);
            dispatch(action);      
        },  
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Config);
// export default Config