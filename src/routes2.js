import React from 'react';
import { Provider } from 'react-redux';
import store from './store'  // 大store
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Example from './components/_ExampleComponents/Example';
import Example2 from './components/_ExampleComponents/Example2';

import Admin from './components/LayoutComponents/Admin';
import Login from './pages/User/Login/';
import Register from './pages/User/Register/';
import Dashboard from './components/QCRMComponents/Dashboard';
import LoginRecord from './components/QCRMComponents/Dashboard/LoginRecord';
import Config from './components/QCRMComponents/Dashboard/Config';
import AdminMembers from './components/QCRMComponents/Dashboard/AdminMembers';
import BorrowList from './components/QCRMComponents/Borrow/BorrowList';
import BorrowDetail from './components/QCRMComponents/Borrow/BorrowDetail';
import LendList from './components/QCRMComponents/Lend/LendList';
import MemberList from './components/QCRMComponents/Members/MemberList';
import MemberProfile from './components/QCRMComponents/Members/MemberProfile';

export default class Routes extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='MSQCRM2018/login' exact render={ () => <div>這裡是login</div> }></Route>
                        <Route path='MSQCRM2018/register' exact render={ () => <div>這裡是register</div> }></Route>

                        <Route path="MSQCRM2018/user/login" component={Login} />
                        <Route path="MSQCRM2018/user/register" component={Register} />
                        <Admin>
                            {/* <Route path='/' exact render={ () => <div>這裡是home</div> }></Route> */}
                            <Route path="MSQCRM2018/" exact component={Dashboard} />

                            {/* Example */}
                            <Route path='MSQCRM2018/S1' exact component={Example} />
                            <Route path='MSQCRM2018/admin/S2' exact component={Example2} />

                            {/* 控制台 */}
                            <Route path="MSQCRM2018/dashboard/analysis" component={Dashboard} />
                            <Route path="MSQCRM2018/dashboard/loginRecord" component={LoginRecord} />
                            <Route path="MSQCRM2018/dashboard/config" component={Config} />
                            <Route path="MSQCRM2018/dashboard/adminMembers" component={AdminMembers} />        

                            {/* 借款管理 */}                            
                            <Route path="MSQCRM2018/borrow/list" exact component={BorrowList} />
                            <Route path="MSQCRM2018/borrow/list/detail" exact component={BorrowDetail} />  

                            {/* 投資管理 */}                            
                            <Route path="MSQCRM2018/lend/list" component={LendList} />

                            {/* 會員管理 */}
                            <Route path="MSQCRM2018/member/list" exact component={MemberList} />
                            <Route path="MSQCRM2018/member/list/profile/:id" exact component={MemberProfile} />                            
                        </Admin>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}