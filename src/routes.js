import React from 'react';
import { Provider } from 'react-redux';
import store from './store'  // 大store
import { HashRouter, /*BrowserRouter,*/ Route, Switch} from 'react-router-dom';

import Example from './components/_ExampleComponents/Example';
import Example2 from './components/_ExampleComponents/Example2';
import Admin from './components/LayoutComponents';
import Login from './components/pages/User/Login/';
import Register from './components/pages/User/Register/';
import Dashboard from './components/QCRMComponents/Dashboard';
import LoginRecord from './components/QCRMComponents/Dashboard/LoginRecord';
import Config from './components/QCRMComponents/Dashboard/Config';
import AdminMembers from './components/QCRMComponents/Dashboard/AdminMembers';
import BorrowList from './components/QCRMComponents/Borrow/BorrowList';
import BorrowDetail from './components/QCRMComponents/Borrow/BorrowDetail';
import LendList from './components/QCRMComponents/Lend/LendList';
import LendDetail from './components/QCRMComponents/Lend/LendDetail';
import MemberList from './components/QCRMComponents/Members/MemberList';
import MemberProfile from './components/QCRMComponents/Members/MemberProfile';

export default class Routes extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <HashRouter>
                        <Switch>
                            <Route path='/login' exact render={ () => <div>這裡是login</div> }></Route>
                            <Route path='/register' exact render={ () => <div>這裡是register</div> }></Route>

                            <Route path="/user/login" component={Login} />
                            <Route path="/user/register" component={Register} />

                            <Admin>
                                
                                {/* <Route path='/' exact render={ () => <div>這裡是home</div> }></Route> */}
                                <Route path="/" exact component={Dashboard} />

                                {/* Example */}
                                {/* <Route path='/S1' exact component={Example} />
                                <Route path='/admin/S2' exact component={Example2} /> */}

                                {/* 控制台 */}
                                <Route path="/dashboard/analysis" component={Dashboard} />
                                <Route path="/dashboard/loginRecord" component={LoginRecord} />
                                <Route path="/dashboard/config" component={Config} />
                                <Route path="/dashboard/adminMembers" component={AdminMembers} />        

                                {/* 借款管理 */}                            
                                <Route path="/borrow/list" exact component={BorrowList} />
                                <Route path="/borrow/list/detail" exact component={BorrowDetail} />  

                                {/* 投資管理 */}                            
                                <Route path="/lend/list" exact component={LendList} />
                                <Route path="/lend/list/detail" exact component={LendDetail} />  

                                {/* 會員管理 */}
                                <Route path="/member/list" exact component={MemberList} />
                                {/* <Route path="/member/list/profile/:id" exact component={MemberProfile} /> */}
                                <Route path="/member/list/profile" component={MemberProfile} />   
                                
                            </Admin>
                        </Switch>   
                </HashRouter>
            </Provider>
        )
    }
}