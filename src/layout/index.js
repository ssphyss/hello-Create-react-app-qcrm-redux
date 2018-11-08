import React from 'react';
import Admin from './Admin';
import { Provider } from 'react-redux';
import store from './../store'

export default class Layout extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Admin />
            </Provider>
        )
    }
}