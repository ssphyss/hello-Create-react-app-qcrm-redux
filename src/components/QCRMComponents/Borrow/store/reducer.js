import * as constants from './constants';
// import { fromJS/*, Map*/ } from 'immutable';
import { /*fromJS,*/ Map } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = Map(
    {
        dataBorrow: []
    }
)

export default (state = defaultState, action) => {

    // Ajax資料載入 - 借款管理資料   
    if (action.type === constants.AJAX_LIST_BORROW) {   
        // console.log('Ajax收到 Reducer', action);   
        // console.log('Ajax收到data Reducer', action.data); 
        let data = action.data;
        return state.set('dataBorrow', data)
        // return state.set('data', data).set('loading', false);
    }   

    // 刪除
    if (action.type === constants.DELETE_TODO_ITEM) {
        let data = state.get('dataBorrow')
        data = data.filter((item) => {
            if(item.id === action.id){
                return false  // 不要的就是return false (那筆就不要的意思)
            }else {
                return true
            }
        })     
        return state.set( 'dataBorrow', data);           
    }

    return state;
}