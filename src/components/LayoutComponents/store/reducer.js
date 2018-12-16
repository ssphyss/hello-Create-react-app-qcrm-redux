import * as constants from './constants';
import { /*fromJS,*/ Map } from 'immutable';

// 全域數據
const defaultState = Map(
    {
        // focused: false,
        loading: false,
        isMobile: false,    
        visible: true,    
        collapsed: false,  
        // menuTreeNode: '',
        menuAjax: [],
        selectedKey: ''
    }
)

export default (state = defaultState, action) => {

    // Loading加載
    if (action.type === constants.LOADING_STATUS) {  
        const loadingStatus = action.loadingStatus
        return state.merge({
            loading: loadingStatus
        })
    }

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
        // console.log('讀取MenuAjax? Reducer：', action.data)
        return state.merge({
            menuAjax: action.data,
        })
    }

    // 釘住功能
    if(action.type === constants.CHANGE_SELECT_MENU_ITEM) {
        console.log('reducer', action.payload);
        return state.merge({
            selectedKey: action.payload
        })
    }
    return state;
}