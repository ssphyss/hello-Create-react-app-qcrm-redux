import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './layout';
import Admin from './layout/Admin';

import SiderBar from './layout/SiderBar';
import Example1 from './components/Example';
const { Header, Content } = Layout;
export default class Router extends React.Component{
    
    render(){
        console.log('------ ▉▉▉▉▉▉▉▉ Router ▉▉▉▉▉▉▉▉ ------')
        return(
            <BrowserRouter>
                <div>
                    <Admin>
                        <Route path='/S1' component={SiderBar} />
                        <Route path='/admin/home' component={SiderBar} />
                    </Admin>                    
                </div>                
            </BrowserRouter>
        )
    }
}