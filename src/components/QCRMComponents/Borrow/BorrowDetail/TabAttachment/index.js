import React from 'react';
import './index.scss';
import pic1 from './../../../../../assets/upload/id001-1.jpg';
import pic2 from './../../../../../assets/upload/id001-2.jpg';
import pic3 from './../../../../../assets/upload/id002.jpg';


class TabAttachment extends React.Component{
    render(){
        return(
            <div>
                {/* TabAttachment 附件相關 */}
                <form class="form form-upload" action="loan-step3.html">
                    <div class="form-container">
                        {/* <!--  */}
                        <div class="head-bar">
                            {/* <h2 class="step-title">證件上傳</h2> */}
                            <div class="step-desc">
                                {/* <p class="step-desc__text">請於下方填寫您的基本資料，完成後按下一步： ( 本頁資料全部皆為必填欄位 )</p> */}
                                {/* <span>＊為免影響您的申貸結果，請確認以下輸入的資料無誤再繼續流程＊</span> */}
                            </div>
                        </div>
                        <p class="upload-desc">為保障借款人及投資人雙方利益，在使用本平台的借款配對服務前，錢匯將為您進行信用評等，以了解您之信用狀況及繳款能力。請準備以下文件之掃瞄檔或清晰照片檔，並點擊「選擇檔案」上載文件，再按「送出申請」完成申貸：</p>
                        {/* <!-- 身份證明 / 銀行資料--> */}
                        <div class="field-row">                            
                            <div class="form-group form-group-upload form-group-1-2">
                                <h3>身份證正面</h3>
                                <span>(必提供)</span>								
                                <div class="upload">
                                    <label>身份證正面上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div class="upload-container">                                   
                                    <div class="upload-file">
                                        <div class="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            <img class="vv" src={pic1} alt='pic1'/>                                            
                                            <div class="upload-delate">
                                                <a href="/" class="btn btn-delate">刪除</a>
                                            </div>
                                        </div>
                                        <span>螢幕快照 2017-02-24 下午12.54.03.png</span>
                                    </div>                                    
                                </div>                                
                            </div>

                            {/* <!-- 身份證背面 --> */}
                            <div class="form-group form-group-upload form-group-1-2">
                                <h3>身份證背面</h3>
                                <span>(必提供)</span>
                                <div class="upload">
                                    <label>身份證背面上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div class="upload-container">
                                    <div class="upload-file">
                                        <div class="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img src="images/upload/id001-2.jpg" />  */}
                                            <img class="vv" src={pic2} alt='pic2'/>                                             
                                            <div class="upload-delate">
                                                <a href="/" class="btn btn-delate">刪除</a>
                                            </div>                                            
                                        </div>
                                        <span>螢幕快照 2017-02-24 下午12.54.03.png</span>
                                    </div>
                                </div>							
                            </div>
                        </div>
                        {/* <!-- 健保卡 --> */}
                        <div class="field-row">				
                            <div class="form-group form-group-upload form-group-1-2">
                                <h3>健保卡</h3>
                                <span>(必提供)</span>
                                <div class="upload">
                                    <label>健保卡上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div class="upload-container">
                                    <div class="upload-file">
                                        <div class="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img src="images/upload/id002.jpg" />  */}
                                            <img class="vv" src={pic3} alt='pic3'/>    
                                            <div class="upload-delate">
                                                <a href="/" class="btn btn-delate">刪除</a>
                                            </div>
                                        </div>
                                        <span>螢幕快照 2017-02-24 下午12.54.03.png</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field-row">
                            {/* <!-- 銀行資料 --> */}
                            <div class="form-group form-group-upload form-group-1-2">
                                <h3>銀行資料</h3>
                                <span>(必提供)</span>
                                <div class="upload">
                                    <label>銀行資料上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div class="upload-container">
                                    <div class="upload-file">
                                        <div class="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img /> */}
                                            <div class="upload-delate">
                                                <a href="/" class="btn btn-delate">刪除</a>
                                            </div>
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        
                            {/* <!--  勞保投保明細 --> */}

                            <div class="form-group form-group-upload form-group-1-2">
                                <h3>勞保投保明細</h3>
                                <span>(可候補)</span>								
                                <div class="upload">
                                    <label>勞保投保明細上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div class="upload-container">
                                    <div class="upload-file">
                                        <div class="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img /> */}
                                            <div class="upload-delate">
                                                <a href="/" class="btn btn-delate">刪除</a>
                                            </div>
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 扣繳憑單 / 其他收入證明 --> */}
                        <div class="field-row">
                            {/* <!-- 扣繳憑單 --> */}
                            <div class="form-group form-group-upload form-group-1-2">
                                <h3>扣繳憑單</h3>
                                <span>(可候補)</span>
                                <div class="upload">
                                    <label>扣繳憑單上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div class="upload-container">
                                    <div class="upload-file">
                                        <div class="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img /> */}
                                            <div class="upload-delate">
                                                <a href="/" class="btn btn-delate">刪除</a>
                                            </div>
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 其他收入證明 --> */}
                            <div class="form-group form-group-upload form-group-1-2">
                                <h3>其他收入證明</h3>
                                <span>(可候補)</span>
                                <div class="upload">
                                    <label>其他收入證明上傳</label>
                                    <input type="file" name="" />
                                </div>
                                <div class="upload-container">
                                    <div class="upload-file">
                                        <div class="upload-file__desc">
                                            <p>您可拖曳檔案到此區</p>
                                        </div>
                                        <div className='figure'>
                                            {/* <img /> */}
                                            <div class="upload-delate">
                                                <a href="/" class="btn btn-delate">刪除</a>
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
}

export default TabAttachment