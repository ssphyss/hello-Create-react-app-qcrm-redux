import * as constants from './constants';
import {fromJS, /**/ Map} from 'immutable';

// 把數據對象轉化成immutable對象
const defaultState = Map(
    {
        dataPermission: [],
        isRoleVisible: false, //角色顯示
        submitOk: false, //角色送出
        isPermVisible: false, //權限顯示
        roleSet: {},            //role_name, status, menus, id
        roleSetMenus: []
    }
)

export default (state = defaultState, action) => {

    // Ajax資料載入 - 會員管理資料   
    if (action.type === constants.AJAX_LIST_PERMISSION) {   
        // console.log('Ajax收到 Reducer', action);   
        // console.log('Ajax收到data Reducer', action.data); 
        let data = action.data;
        return state.set('dataPermission', data)
        // return state.set('data', data).set('loading', false);
    }   

    // // Ajax資料載入 - 會員管理資料單筆   
    // if (action.type === constants.AJAX_PROFILE_MEMBER) {   
    //     // console.log('Ajax收到 Reducer', action);   
    //     // console.log('Ajax收到data Reducer', action.data); 
    //     let data = action.data;
    //     return state.set('dataProfile', data)
    //     // return state.set('data', data).set('loading', false);
    // }   

    // 顯示  
    if (action.type === constants.ROLE_VISIBLE) {   
        return state.set('isRoleVisible', true);
    } 

    // 送出權限  
    if (action.type === constants.SUBMIT_ROLE) {   
        // console.log('payload',action.payload);
        let data ={
            authorize_time: "2018-12-15",
            authorize_user: "adminss",
            create_time: "1990-06-24",
            id: `${Math.floor(Math.random()*10000)}`,
            key: `${Math.floor(Math.random()*10000)}`,
            role_name: action.payload.permissionName,
            status: action.payload.permissionStatus   
        }
        let [...dataPermission] = state.get('dataPermission');
        dataPermission.unshift(data);
        // console.log('new dt', dataPermission)
        // return state.set('dataPermission', dataPermission).set('submitOk', true);
        return state.merge({
            'dataPermission': dataPermission,
            'submitOk':true,
            'isRoleVisible': false
        })
    }

    // 關閉彈框  
    if (action.type === constants.MODAL_CANCLE) {   
        return state.set('isRoleVisible', false);
    } 


    ////////////////權限設置/////////////////
    // 顯示彈框  
    if (action.type === constants.PERM_VISIBLE) {   
        return state.set('isPermVisible', true);
    } 
    // 選擇項目  
    if (action.type === constants.SELECT_ITEM) {   
        console.log('action.payload', action.payload)
        return state.set('roleSet', action.payload).set('roleSetMenus', action.payload.menus);
    } 
    // 關閉彈框  
    if (action.type === constants.MODAL_CANCLE_PERM) {   
        return state.set('isPermVisible', false);
    } 

    if(action.type === constants.PATCH_MENU_INFO) {
        // console.log('reducer', action.payload);
        let roleSetMenus = state.get('roleSetMenus');
        
        roleSetMenus = action.payload.menus;
        // console.log('roror', roleSetMenus);
        return state.set('roleSetMenus', roleSetMenus);
    }

    if(action.type === constants.SAVE_ROLE_SET){
        let roleSet = state.get('roleSet');
        let roleSetMenus = state.get('roleSetMenus');
        let dataPermission = state.get('dataPermission');
        dataPermission.map((item) => {
            if(item.id === roleSet.id){
                item.status = roleSet.status;
                item.menus = roleSetMenus;
            }
            return item;
        })
        console.log('reducer',roleSet, roleSetMenus);
        return state.set('dataPermission', dataPermission).set('isPermVisible', false);
    }

    return state;
}