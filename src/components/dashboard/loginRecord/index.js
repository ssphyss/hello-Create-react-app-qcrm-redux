import React from 'react';
import { Card, Table } from 'antd';
// 引入
import { connect } from 'react-redux';


class LoginRecord extends React.Component{

    state = {
        dataSource: []
    }

    render(){
        // console.log('-----(LoginRecord讀取)inputValue', this.props.inputValue)
        // console.log('-----(LoginRecord讀取)data', this.props.data)
        console.log('-----(LoginRecord讀取)focused', this.props.focused)
        // 設定表檔頭欄位 
        const columns = [
            {
                title: '登入帳號',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="/">{text}</a>,
            }, 
            {
                title: '登入時間',
                dataIndex: 'login_start',
                key: 'login_start',
            },
            {
                title: '操作時間',
                dataIndex: 'operating_time',
                key: 'operating_time',
            },
            {
                title: 'IP 位置',
                dataIndex: 'ip_address',
                key: 'ip_address',
            }
        ];

        // // 設定資料
        // const data = [
        //     {
        //         key: '1',
        //         name: 'John Brown',
        //         login_start: '2018-10-13',
        //         operating_time: '36mins',
        //         ip_address: '192.168.1.1'
        //     }
        // ]; 
    
        return(
            <div>
                <Card 
                    title='登入者記錄'
                    extra={<a href="/">More</a>}
                    // style={{ width: 300 }}
                >
                    <Table columns={columns} dataSource={this.state.dataSource} />
                </Card>
                
            </div>
        )
    }
}

// 引入
const mapStateToProps = (state) => {
    return {
        // focused: state.dashboard.focused,
        focused: state.getIn(['dashboard','focused']),
    }
}

// 引入
const mapDispathToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispathToProps)(LoginRecord);
// export default LoginRecord