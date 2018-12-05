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
        
        const res = await axios.get('./api/dashboard/loginRecord.json')
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
        const res = await axios.get('https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/dashboard/adminMembers')
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


