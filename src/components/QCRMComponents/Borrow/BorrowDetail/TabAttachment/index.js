import React from 'react';
import { /*Icon, Upload, Message*/ } from 'antd';
import './index.scss';
import pic1 from './../../../../../assets/upload/id001-1.jpg';
import pic2 from './../../../../../assets/upload/id001-2.jpg';
import pic3 from './../../../../../assets/upload/id002.jpg';


// ========================圖片(上傳前驗證)=========================
// function beforeUpload(file) {
//     const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJPG) {
//       Message.error('只能上傳 JPG 或 png 檔案');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       Message.error('圖檔需小於 2MB');
//     }
//     return isJPG && isLt2M;
// }
// img = info.file.originFileObj
function getBase64(img, callback) {
    // 讀取一張圖片,下面三行必寫
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
// ========================圖片(上傳前驗證)End=========================
class TabAttachment extends React.Component{

    state = {
        loading: true,
        imageUrl: '',
        loadingPhoto: false    
    }
    render(){
        // const imageUrl = this.state.imageUrl;
        // const uploadButton = (
        //     <div>
        //         <Icon type={this.state.loadingPhoto ? 'loading' : 'plus'} />
        //         <div className="ant-upload-text">上傳照片</div>
        //     </div>
        // ); 
        return(
            <div>
                {/* TabAttachment 附件相關 */}
                <form className="form form-upload" action="loan-step3.html">
                    <div className="form-container">
                        {/* <!--  */}
                        <div className="head-bar">
                            {/* <h2 className="step-title">證件上傳</h2> */}
                            <div className="step-desc">
                                {/* <p className="step-desc__text">請於下方填寫您的基本資料，完成後按下一步： ( 本頁資料全部皆為必填欄位 )</p> */}
                                {/* <span>＊為免影響您的申貸結果，請確認以下輸入的資料無誤再繼續流程＊</span> */}
                            </div>
                        </div>
                        <p className="upload-desc">為保障借款人及投資人雙方利益，在使用本平台的借款配對服務前，錢匯將為您進行信用評等，以了解您之信用狀況及繳款能力。請準備以下文件之掃瞄檔或清晰照片檔，並點擊「選擇檔案」上載文件，再按「送出申請」完成申貸：</p>
                        {/* <!-- 身份證明 / 銀行資料--> */}
                        <div className="field-row">                            
                            <div className="form-group form-group-upload form-group-1-2">
                                <h3>身份證正面</h3>
                                <span>(必提供)</span>								
                                <div className="upload">
                                    <label>身份證正面上傳</label>
                                    <input type="file" name="" />
                                </div>
                                {/* <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    // action="//jsonplaceholder.typicode.com/posts/"
                                    // action='https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/upload/99'
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChange}
                                    // onChange={()=>this.handleChange()}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                                </Upload> */}
                                <div className="upload-container">                                   
                                    <div className="upload-file">
                                        <div className="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            <img className="vv" src={pic1} alt='pic1'/>                                            
                                            {/* <div className="upload-delate">
                                                <a href="/" className="btn btn-delate">刪除</a>
                                            </div> */}
                                        </div>
                                        <span>螢幕快照 2017-02-24 下午12.54.03.png</span>
                                    </div>                                    
                                </div>                                
                            </div>

                            {/* <!-- 身份證背面 --> */}
                            <div className="form-group form-group-upload form-group-1-2">
                                <h3>身份證背面</h3>
                                <span>(必提供)</span>
                                <div className="upload">
                                    <label>身份證背面上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div className="upload-container">
                                    <div className="upload-file">
                                        <div className="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img src="images/upload/id001-2.jpg" />  */}
                                            <img className="vv" src={pic2} alt='pic2'/>                                             
                                            {/* <div className="upload-delate">
                                                <a href="/" className="btn btn-delate">刪除</a>
                                            </div>                                             */}
                                        </div>
                                        <span>螢幕快照 2017-02-24 下午12.54.03.png</span>
                                    </div>
                                </div>							
                            </div>
                        </div>
                        {/* <!-- 健保卡 --> */}
                        <div className="field-row">				
                            <div className="form-group form-group-upload form-group-1-2">
                                <h3>健保卡</h3>
                                <span>(必提供)</span>
                                <div className="upload">
                                    <label>健保卡上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div className="upload-container">
                                    <div className="upload-file">
                                        <div className="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img src="images/upload/id002.jpg" />  */}
                                            <img className="vv" src={pic3} alt='pic3'/>    
                                            {/* <div className="upload-delate">
                                                <a href="/" className="btn btn-delate">刪除</a>
                                            </div> */}
                                        </div>
                                        <span>螢幕快照 2017-02-24 下午12.54.03.png</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field-row">
                            {/* <!-- 銀行資料 --> */}
                            <div className="form-group form-group-upload form-group-1-2">
                                <h3>銀行資料</h3>
                                <span>(必提供)</span>
                                <div className="upload">
                                    <label>銀行資料上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div className="upload-container">
                                    <div className="upload-file">
                                        <div className="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img /> */}
                                            {/* <div className="upload-delate">
                                                <a href="/" className="btn btn-delate">刪除</a>
                                            </div> */}
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        
                            {/* <!--  勞保投保明細 --> */}

                            <div className="form-group form-group-upload form-group-1-2">
                                <h3>勞保投保明細</h3>
                                <span>(可候補)</span>								
                                <div className="upload">
                                    <label>勞保投保明細上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div className="upload-container">
                                    <div className="upload-file">
                                        <div className="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img /> */}
                                            <div className="upload-delate">
                                                <a href="/" className="btn btn-delate">刪除</a>
                                            </div>
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 扣繳憑單 / 其他收入證明 --> */}
                        <div className="field-row">
                            {/* <!-- 扣繳憑單 --> */}
                            <div className="form-group form-group-upload form-group-1-2">
                                <h3>扣繳憑單</h3>
                                <span>(可候補)</span>
                                <div className="upload">
                                    <label>扣繳憑單上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div className="upload-container">
                                    <div className="upload-file">
                                        <div className="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img /> */}
                                            <div className="upload-delate">
                                                <a href="/" className="btn btn-delate">刪除</a>
                                            </div>
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 其他收入證明 --> */}
                            <div className="form-group form-group-upload form-group-1-2">
                                <h3>其他收入證明</h3>
                                <span>(可候補)</span>
                                <div className="upload">
                                    <label>其他收入證明上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div className="upload-container">
                                    <div className="upload-file">
                                        <div className="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img /> */}
                                            <div className="upload-delate">
                                                <a href="/" className="btn btn-delate">刪除</a>
                                            </div>
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </form>
            </div>
        )
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
}

export default TabAttachment