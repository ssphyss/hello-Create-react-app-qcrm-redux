import * as constants from './constants';
// import { fromJS/*, Map*/ } from 'immutable';
import { /*fromJS,*/ Map } from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = Map(
    {
        // focused: false,
        isMobile: false,    
        visible: true,    
        collapsed: false,  
        // menuTreeNode: '',
        menuAjax: []
    }
)

export default (state = defaultState, action) => {

    // 判斷是手機嗎Reducer
    if (action.type === constants.IS_MOBILE) {     
        // console.log('判斷是手機嗎? Reducer isMobile：', action.payload.isMobile)
        // console.log('判斷是手機嗎? Reducer visible', action.payload.visible)
        // console.log('判斷是手機嗎? Reducer collapsed', action.payload.collapsed)

        // const isMobile = action.isMobile
        return state.merge({
            isMobile: action.payload.isMobile,
            visible: action.payload.visible,
            collapsed: action.payload.collapsed,
            // visible: 
        })
    }

    // // 讀取MenuConfig
    // if (action.type === constants.GET_MENU) {     
    //     console.log('讀取MenuConfig? Reducer：', action.menuTreeNode)
    //     return state.merge({
    //         menuTreeNode: action.menuTreeNode,
    //     })
    // }

    // 讀取MenuAjax
    if (action.type === constants.AJAX_MEMU) {     
        console.log('讀取MenuAjax? Reducer：', action.data)
        return state.merge({
            menuAjax: action.data,
        })
    }
    return state;
}