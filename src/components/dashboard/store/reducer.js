import * as constants from './constants';
import { fromJS/*, Map*/ } from 'immutable';
// import { /*fromJS,*/ Map } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = fromJS(
    {
        focused: 111,
        // isMobile: false,    
        // visible: true,    
        // collapsed: false,  
        // menuTreeNode: '',
        // menuAjax: []
    }
)

export default (state = defaultState, action) => {

    // // 讀取MenuAjax
    // if (action.type === constants.AJAX_MEMU) {     
    //     // console.log('讀取MenuAjax? Reducer：', action.data)
    //     return state.merge({
    //         menuAjax: action.data,
    //     })
    // }
    return state;
}