import React from 'react';
import Admin from './Admin';
import { Provider } from 'react-redux';
import store from './../store'

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Example from './../components/Example';
import Example2 from './../components/Example2';
import Dashboard from './../components/Example_antd';

export default class Layout extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/login' exact render={ () => <div>這裡是login</div> }></Route>
                        <Route path='/register' exact render={ () => <div>這裡是register</div> }></Route>
                        <Admin>
                            <Route path='/' exact render={ () => <div>這裡是home</div> }></Route>

                            {/* Example */}
                            <Route path='/S1' exact component={Example} />
                            <Route path='/admin/S2' exact component={Example2} />

                            {/* 控制台 */}
                            {/* <Route path="/dashboard/analysis" component={Dashboard} />
                            <Route path="/dashboard/loginRecord" component={LoginRecord} />
                            <Route path="/dashboard/adminMembers" component={AdminMembers} />
                            <Route path="/dashboard/config" component={Config} /> */}
                        </Admin>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}