import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';

import App from './App';

import DEMO from './pages/demo/Parent';
import Login from './pages/Login';
import Home from './pages/home';

import Admin from './admin';
import Admin2 from './admin2';
import Common from './commom';

import Buttons from './components/ui/buttons';
import Carousel from './components/ui/carousel';
import Gallery from './components/ui/gallery';
import Loadings from './components/ui/loadings';
import Messages from './components/ui/messages';
import Modals from './components/ui/modals';
import Notice from './components/ui/notice';
import Tabs from './components/ui/tabs';

import LoginComponent from './components/form/login';
import RegisterComponent from './components/form/register';
// import BasicTable from './components/table/basicTable1';
// import BasicTable1 from './components/table/basicTable1';
// import BasicTable2 from './components/table/basicTable2';
// import BasicTable3 from './components/table/basicTable3';
// import BasicTable4 from './components/table/basicTable4';
// import BasicTable5 from './components/table/basicTable5';
import BasicTable from './components/table/basic';
import HighTable from './components/table/high';

import City from './pages/city/index';
import Order from './pages/order/order-list';
import Order2 from './pages/order/order-list2';
import OrderDetail from './pages/order/order-detail';
import Permission from './pages/permission';

import Bar from './components/echarts/bar';
import Pie from './components/echarts/pie';

export default class IRouter extends React.Component {

    render(){
        return(
            <HashRouter>
                <App>                    
                    {/* <Route path='/' component={Admin}/> */}
                    <Route path='/login' component={Login}/>
                    <Route path='/demo' component={DEMO}/>
                    {/* <Route path='/admin' component={Admin}/> */}
                    {/* 子路由需加上render渲染 */}
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Route path='/admin/home' component={Home}/>
                            <Route path='/admin/city' component={City}/>

                            <Route path='/admin/order/order-list' component={Order}/>
                            <Route path='/admin/order/order-list2' component={Order2}/>

                            <Route path='/admin/ui/buttons' component={Buttons}/>
                            <Route path='/admin/ui/carousel' component={Carousel}/>
                            <Route path='/admin/ui/gallery' component={Gallery}/>
                            <Route path='/admin/ui/loadings' component={Loadings}/>
                            <Route path='/admin/ui/messages' component={Messages}/>
                            <Route path='/admin/ui/modals' component={Modals}/>
                            <Route path='/admin/ui/carousel' component={Carousel}/>
                            <Route path='/admin/ui/notice' component={Notice}/>
                            <Route path='/admin/ui/tabs' component={Tabs}/>
                            <Route path='/admin/ui/carousel' component={Carousel}/>
                            <Route path='/admin/table/basic' component={BasicTable}/>
                            {/* <Route path='/admin/table/basicTable1' component={BasicTable1}/>
                            <Route path='/admin/table/basicTable2' component={BasicTable2}/>
                            <Route path='/admin/table/basicTable3' component={BasicTable3}/>
                            <Route path='/admin/table/basicTable4' component={BasicTable4}/>
                            <Route path='/admin/table/basicTable5' component={BasicTable5}/> */}
                            
                            <Route path='/admin/table/high' component={HighTable}/>                            
                            <Route path='/admin/charts/bar' component={Bar}/>
                            <Route path='/admin/charts/pie' component={Pie}/>
                            
                            {/* <Route path='/admin/login' component={Login}/> */}
                            <Route path='/admin/form/login' component={LoginComponent}/>
                            <Route path='/admin/form/register' component={RegisterComponent}/>

                            {/* <Route path='/admin/order/order-detail' component={OrderDetail}/> */}
                            <Route path='/admin/order/order-detail/:orderId' component={OrderDetail}/>
                            <Route path='/admin/permission' component={Permission}/>
                        </Admin>                    
                    }/>
                    <Route path='/admin2' render={()=>
                        <Admin>
                            <Route path='/common/order/detail/:orderId' component={Login}/>
                        </Admin>                    
                    }/>
                    {/* <Route path='/order/detail' component={Login}/> */}
                    <Route path='/common' render={()=>
                        <Common>
                            <Route path='/common/order/detail/:orderId' component={Login}/>
                            <Route path='/common/order/detail/:orderId' component={OrderDetail}/>
                        </Common>
                    }/>
                </App>
            </HashRouter>
        )
    }
}