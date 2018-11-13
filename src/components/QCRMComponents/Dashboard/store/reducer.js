import * as constants from './constants';
import { /*fromJS,*/ Map } from 'immutable';

// dashboard數據
const defaultState = Map(
    {
        dataLoginRecord:[],
        // dataAdminMembers:[]
        // focused: 111,
        // loading: false,
        // data: [],
        // 設定資料
        // data : [
        //     {
        //         key: '1',
        //         name: 'John Brown',
        //         login_start: '2018-10-13',
        //         operating_time: '36mins',
        //         ip_address: '192.168.1.1'
        //     }
        // ]   
    }
)

export default (state = defaultState, action) => {

    // // Loading加載
    // if (action.type === constants.LOADING_STATUS) {       
    //     return state.merge({
    //         loading: true
    //     })
    // }

    // Ajax資料載入- 登入者記錄   
    if (action.type === constants.AJAX_LIST_LOGIN) {   
        // console.log('Ajax收到 Reducer', action);   
        // console.log('Ajax收到data Reducer', action.data); 
        let data = action.data;
        return state.set('dataLoginRecord', data).set('loading', false);
    }   

    // Ajax資料載入 - 管理者帳號  
    if (action.type === constants.AJAX_LIST_ADMINMEMBERS) {   
        // console.log('Ajax收到 Reducer', action);   
        console.log('Ajax收到data Reducer', action.data); 
        let data = action.data;
        return state.set('dataAdminMembers', data).set('loading', false);
    }  


    return state;
}