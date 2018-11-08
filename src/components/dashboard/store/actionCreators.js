import * as constants from './constants';
import axios from 'axios';

// 判斷是手機嗎
// export const getIsMobile = (isMobile, visible, collapsed) => {
//     // console.log('判斷是手機嗎? Action') 
//     return {
//         type: constants.IS_MOBILE,
//         payload: { isMobile, visible, collapsed }
//     }      
// }

// 讀取MenuAjax查詢
// export const getMenuAjax = () => {
//     return async (dispatch) => {
//         // console.log('讀取MenuAjax Action') 
//         const res = await axios.get('/api/layout/finLists.json')
//             .catch(()=>{alert('err')})
//         // console.log('後端傳回的Ajax結果', res.data);  // 到時候看後端傳回的

//         const data = res.data.result.data;
//         // console.log('後端傳回的Ajax結果', data);  // 到時候看後端傳回的
//         const action = {
//             type: constants.AJAX_MEMU,
//             data: data    
//         }        
//         dispatch(action);        
        
//     }
// }
