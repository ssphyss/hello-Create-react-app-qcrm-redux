import React from 'react';
import './index.scss';

class TabDetails extends React.Component{
    render(){
        return(
            <div>
                {/* TabDetails 還款明細 */}
                <div className="form-container detail-table lend">
                    {/* <!-- 表頭區 --> */}
                    <div className="detail-table__head lend">
                        {/* <!-- 左 --> */}
                        <div className="detail-table__head-left">
                            {/* <!-- 信用評級 --> */}
                            <div className="detail-table__rank">
                                <p className="detail-table__info-head">信用評級</p>
                                <span className="detail-table__info-content">A</span>
                            </div>
                            {/* <!-- 借款人資訊 --> */}
                            <div className="detail-table__profile">
                                <div className="detail-table__info">
                                    <p className="detail-table__info-head">投資人姓名</p>
                                    <span className="detail-table__info-content">TESTING</span>
                                </div>
                                <div className="detail-table__info">
                                    <p className="detail-table__info-head">地址</p>
                                    <span className="detail-table__info-content">台北市大安區信義路二段194號</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 右 --> */}
                        <div className="detail-table__head-right">
                            {/* <!-- 貨款日期 / 還款方法 / 貨款金額 --> */}
                            <div className="detail-table__info-row">
                                <div className="detail-table__info">
                                    <p className="detail-table__info-head">投資日期</p>
                                    <span className="detail-table__info-content">2016/11/23</span>
                                </div>
                                <div className="detail-table__info">
                                    <p className="detail-table__info-head">計息方法</p>
                                    <span className="detail-table__info-content">本利攤</span>
                                </div>
                                <div className="detail-table__info">
                                    <p className="detail-table__info-head">投資金額 (TWD$)</p>
                                    <span className="detail-table__info-content">10,000</span>
                                </div>
                            </div>
                            {/* <!-- 年息 --> */}
                            <div className="detail-table__info-row">
                                <div className="detail-table__info">
                                    <p className="detail-table__info-head">年息</p>
                                    <span className="detail-table__info-content">2016/11/23</span>
                                </div>
                                <div className="detail-table__info">
                                    <p className="detail-table__info-head">總分期數</p>
                                    <span className="detail-table__info-content">本利攤</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end 表頭區 --> */}
                    {/* <!-- table-loan 明細區--> */}
                    <div className="table-loan table-loan-detail">
                        <table className="table-loan__table">
                            <thead>
                                <tr>
                                    <th>期數</th>
                                    <th>投資日期</th>
                                    <th>承上結餘</th>
                                    <th>本金數目</th>
                                    <th>利息數目</th>		                   
                                    <th>投資數目</th>
                                    <th>投資結餘</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,888</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,000</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td className="td-time">2017-01-31</td>
                                    <td className="td-amount">2,010,000</td>
                                    <td className="td-rate">2.01</td>
                                    <td>12</td>
                                    <td className="td-status">申請中</td>
                                    <td className="td-amount">2,010,000</td>
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