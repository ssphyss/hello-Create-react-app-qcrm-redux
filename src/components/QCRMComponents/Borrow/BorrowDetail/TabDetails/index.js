import React from 'react';
import './index.scss';

class TabDetails extends React.Component{
    render(){
        return(
            <div>
                {/* TabDetails 還款明細 */}
                <div class="form-container detail-table">
                    {/* <!-- 表頭區 --> */}
                    <div class="detail-table__head">
                        {/* <!-- 左 --> */}
                        <div class="detail-table__head-left">
                            {/* <!-- 信用評級 --> */}
                            <div class="detail-table__rank">
                                <p class="detail-table__info-head">信用評級</p>
                                <span class="detail-table__info-content">A</span>
                            </div>
                            {/* <!-- 借款人資訊 --> */}
                            <div class="detail-table__profile">
                                <div class="detail-table__info">
                                    <p class="detail-table__info-head">借款人姓名</p>
                                    <span class="detail-table__info-content">TESTING</span>
                                </div>
                                <div class="detail-table__info">
                                    <p class="detail-table__info-head">地址</p>
                                    <span class="detail-table__info-content">台北市大安區信義路二段194號</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 右 --> */}
                        <div class="detail-table__head-right">
                            {/* <!-- 貨款日期 / 還款方法 / 貨款金額 --> */}
                            <div class="detail-table__info-row">
                                <div class="detail-table__info">
                                    <p class="detail-table__info-head">貨款日期</p>
                                    <span class="detail-table__info-content">2016/11/23</span>
                                </div>
                                <div class="detail-table__info">
                                    <p class="detail-table__info-head">還款方法</p>
                                    <span class="detail-table__info-content">本利攤</span>
                                </div>
                                <div class="detail-table__info">
                                    <p class="detail-table__info-head">貨款金額 (TWD$)</p>
                                    <span class="detail-table__info-content">10,000</span>
                                </div>
                            </div>
                            {/* <!-- 年息 --> */}
                            <div class="detail-table__info-row">
                                <div class="detail-table__info">
                                    <p class="detail-table__info-head">年息</p>
                                    <span class="detail-table__info-content">2016/11/23</span>
                                </div>
                                <div class="detail-table__info">
                                    <p class="detail-table__info-head">總分期數</p>
                                    <span class="detail-table__info-content">本利攤</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end 表頭區 --> */}
                    {/* <!-- table-loan 明細區--> */}
                    <div class="table-loan table-loan-detail">
                        <table class="table-loan__table">
                            <thead>
                                <tr>
                                    <th>期數</th>
                                    <th>供款日期</th>
                                    <th>承上結餘</th>
                                    <th>本金數目</th>
                                    <th>利息數目</th>		                   
                                    <th>供款數目</th>
                                    <th>貨款結餘</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,888</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td class="td-time">2017-01-31</td>
                                    <td class="td-amount">2,010,000</td>
                                    <td class="td-rate">2.01</td>
                                    <td>12</td>
                                    <td class="td-status">申請中</td>
                                    <td class="td-amount">2,010,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TabDetails