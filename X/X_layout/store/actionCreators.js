import * as constants from './constants';
import axios from 'axios';

// 全域Loading加載中
export const getLoading = (loadingStatus) => {
    return {
        type: constants.LOADING_STATUS,
        loadingStatus
    }      
}

// 判斷是手機嗎
export const getIsMobile = (isMobile, visible, collapsed) => {
    // console.log('判斷是手機嗎? Action') 
    return {
        type: constants.IS_MOBILE,
        payload: { isMobile, visible, collapsed }
    }      
}

// // 讀取MenuConfig
// export const getMenu = (menuTreeNode) => {
//     console.log('讀取MenuConfig Action') 
//     return {
//         type: constants.GET_MENU,
//         menuTreeNode
//     }      
// }

// 讀取MenuAjax查詢
export const getMenuAjax = () => {
    return async (dispatch) => {
        // console.log('讀取MenuAjax Action') 
        // const res = await axios.get('/.api/layout/finLists.json')
        const res = await axios.get('/api/layout/menuConfig.json')
            .catch(()=>{alert('err')})
        // console.log('後端傳回的Ajax結果', res.data);  // 到時候看後端傳回的

        const data = res.data.result.data;
        // console.log('後端傳回的Ajax結果', data);  // 到時候看後端傳回的
        const action = {
            type: constants.AJAX_MEMU,
            data: data    
        }        
        dispatch(action);        
        
    }
}
