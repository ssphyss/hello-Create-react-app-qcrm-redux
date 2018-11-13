import React from 'react';
import { Provider } from 'react-redux';
import store from './../store'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Admin from './Admin';
import Example from './../components/_ExampleComponents/Example';
import Example2 from './../components/_ExampleComponents/Example2';

import Login from './../pages/User/Login/';
import Register from './../pages/User/Register/';

import Dashboard from './../pages/Dashboard';
import LoginRecord from './../components/dashboard/loginRecord';
import Config from './../components/dashboard/config';
import AdminMembers from './../components/dashboard/adminMembers';

import BorrowList from './../components/borrow/borrowList';
import BorrowDetail from './../components/borrow/borrowDetail';
import LendList from './../components/lend/lendList';
import MemberList from './../components/members/memberList';
import MemberProfile from './../components/members/memberProfile';

export default class Layout extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/login' exact render={ () => <div>這裡是login</div> }></Route>
                        <Route path='/register' exact render={ () => <div>這裡是register</div> }></Route>

                        <Route path="/user/login" component={Login} />
                        <Route path="/user/register" component={Register} />
                        <Admin>
                            {/* <Route path='/' exact render={ () => <div>這裡是home</div> }></Route> */}
                            <Route path="/" exact component={Dashboard} />

                            {/* Example */}
                            <Route path='/S1' exact component={Example} />
                            <Route path='/admin/S2' exact component={Example2} />

                            {/* 控制台 */}
                            <Route path="/dashboard/analysis" component={Dashboard} />
                            <Route path="/dashboard/loginRecord" component={LoginRecord} />
                            <Route path="/dashboard/config" component={Config} />
                            <Route path="/dashboard/adminMembers" component={AdminMembers} />        

                            {/* 借款管理 */}                            
                            <Route path="/borrow/list" exact component={BorrowList} />
                            <Route path="/borrow/list/detail" exact component={BorrowDetail} />  

                            {/* 投資管理 */}                            
                            <Route path="/lend/list" component={LendList} />

                            {/* 會員管理 */}
                            <Route path="/member/list" exact component={MemberList} />
                            <Route path="/member/list/profile/:id" exact component={MemberProfile} />                            
                        </Admin>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}