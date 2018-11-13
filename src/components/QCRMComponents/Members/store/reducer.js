import * as constants from './constants';
// import { fromJS/*, Map*/ } from 'immutable';
import { /*fromJS,*/ Map } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = Map(
    {
        dataMember: ['11'],
        dataProfile: {}
    }
)

export default (state = defaultState, action) => {

    // Ajax資料載入 - 會員管理資料   
    if (action.type === constants.AJAX_LIST_MEMBER) {   
        // console.log('Ajax收到 Reducer', action);   
        // console.log('Ajax收到data Reducer', action.data); 
        let data = action.data;
        return state.set('dataMember', data)
        // return state.set('data', data).set('loading', false);
    }   

    // Ajax資料載入 - 會員管理資料單筆   
    if (action.type === constants.AJAX_PROFILE_MEMBER) {   
        // console.log('Ajax收到 Reducer', action);   
        // console.log('Ajax收到data Reducer', action.data); 
        let data = action.data;
        return state.set('dataProfile', data)
        // return state.set('data', data).set('loading', false);
    }   

    return state;
}