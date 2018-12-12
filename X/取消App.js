import React from 'react';
// import Admin from './layout/Admin';
import { Provider } from 'react-redux';
import store from './layout/store'
import Routers from './routes'

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Routers />
            </Provider>
        )
    }
}
