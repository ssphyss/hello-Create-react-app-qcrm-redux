import * as constants from './constants';
import axios from 'axios';

// // Loading加載
// export const getLoading = () => {
//     return {
//         type: constants.LOADING_STATUS,
//     }      
// }

// Ajax資料載入 - 登入者記錄
export const getListLoginRecord = () => {
    return async (dispatch) => {
        // const res = await axios.get('https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/dashboard/loginRecord')
        // let baseUrl= 'https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi' ;        
        
        // const res = await axios.get(baseUrl + '/dashboard/loginRecord')
        // const res = await axios.get(`${baseUrl}/dashboard/loginRecord`)
        
        const res = await axios.get(`${process.env.PUBLIC_URL}/api/dashboard/loginRecord.json`)
        // const res = await axios.get('./api/finapis/finLists.json')

        // const res = await axios.get('https://easy-mock.com/mock/5be154988432fb26b49b1174/finapis/finList')
            // .catch(()=>{alert('err')})
        // console.log('有嗎');
        // console.log(res.data);
        const data = res.data.result.data;

        const action = {
            type: constants.AJAX_LIST_LOGIN,
            data        
        }       
        
        setTimeout(() => {
            dispatch(action);     
        }, 500);
    }
}

// Ajax資料載入 - 管理者帳號
export const getListAdminMembers = () => {
    return async (dispatch) => {
        
        // const res = await axios.get('https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/dashboard/adminMembers');
        const res = await axios.get(`${process.env.PUBLIC_URL}/api/dashboard/adminMembers.json`)
        // console.log('aaa');
        const data = res.data.result.data;
        const action = {
            type: constants.AJAX_LIST_ADMINMEMBERS,
            data        
        }               
        setTimeout(() => {
            dispatch(action);     
        }, 500);
    }
}


// // 輸入框改變
// export const getInputChangeAction = (value, type) => ({
//     type: constants.CHANGE_INPUT_VALUE,
//     payload: {
//         value,
//         type
//     }
// })

// 輸入框可編輯
export const getEditAction = (id, bool=true) => {
    // console.log('來自ac的, id', id)
    return {
        type: constants.CHANGE_INPUT_SHOW,
        payload: {
            id,
            bool
        }
    }
}

// 輸入框改變
export const getInputChangeAction = (value, type) =>{
    // console.log('來自ac的',value )
    return {
        type: constants.CHANGE_INPUT_VALUE,
        payload: {
            value,
            type
        }
    }
}

// 儲存
export const getSaveAction = () => {
    // console.log('來自ac的：', )
    return {
        type: constants.SAVE_INPUT
    }
}

// 選擇框改變
export const getSelectAction = (value) => {
    // console.log('來自ac的')
    return {
        type: constants.CHANGE_SELECT,
        value
    }
}

// 刪除
export const getDeleteItemAction = (id) => {
    // console.log('來自ac的刪除')
    return {
        type: constants.DELETE_TODO_ITEM,
        id
    }
}
// 編輯取消
export const getEditCancleAction = () => {
    return {
        type: constants.EDIT_CANCLE,
    }
}

