import * as constants from './constants';
import axios from 'axios';

// Ajax資料載入
export const getListPermission = () => {
    return async (dispatch) => {
        
        // const res = await axios.get('https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/member/list')
        const res = await axios.get(`${process.env.PUBLIC_URL}/api/permission/permissionList.json`)
        const data = res.data.result.data;
        // console.log(res.data);
        const action = {
            type: constants.AJAX_LIST_PERMISSION,
            data        
        }       
        
        setTimeout(() => {
            dispatch(action);     
        }, 500);
    }
}

// // Ajax資料載入單筆
// export const getProfileMember = (id) => {
//     return async (dispatch) => {
        
//         const res = await axios.get(`https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/memberProfile/${id}`)
//         // const res = await axios.get('/api/member/memberProfile.json')

//         // console.log('id',id)

//         const data = res.data.result.data;
//         // console.log(res.data);
//         const action = {
//             type: constants.AJAX_PROFILE_MEMBER,
//             data        
//         }       
        
//         setTimeout(() => {
//             dispatch(action);     
//         }, 500);
//     }
// }


// 彈框出現(角色)
export const getRoleVisible = (permInfo) => {
    // console.log('來自ac的：')
    return {
        type: constants.ROLE_VISIBLE,
    }
}
// 彈框送出
export const getSubmitRole = (permInfo) => {
    // console.log('來自ac的：')
    return {
        type: constants.SUBMIT_ROLE,
        payload: permInfo
    }
}
// 關閉彈框
export const getModalCancle = () => {    
    return {
        type: constants.MODAL_CANCLE,
    }
}


///////////////////權限設置//////////////////////
// 彈框出現(權限)
export const getPermVisible = (permInfo) => {
    // console.log('來自ac的：')
    return {
        type: constants.PERM_VISIBLE,
    }
}
// 選擇Item
export const getSelectItem = (name, status, menus) => {
    // console.log('來自ac的：')
    return {
        type: constants.SELECT_ITEM,
        payload: {
            name, 
            status,
            menus
        }
    }
}

// // 彈框送出
// export const getSubmitRole = (permInfo) => {
//     // console.log('來自ac的：')
//     return {
//         type: constants.SUBMIT_ROLE,
//         payload: permInfo
//     }
// }
// 關閉彈框
export const getModalCanclePerm = () => {    
    return {
        type: constants.MODAL_CANCLE_PERM,
    }
}


