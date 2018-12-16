import * as constants from './constants';
import { /*fromJS,*/ Map } from 'immutable';

// dashboard數據
const defaultState = Map(
    {
        dataLoginRecord:[],
        dataAdminMembers:[],
        editStatus: false,
        id: '',
        inputName: '',
        inputEmail: '',
        permission: '',
        // focused: 111,
        // loading: false,
        // data: [],
        // 設定資料
        // data : [
        //     {
        //         key: '1',
        //         name: 'John Brown',
        //         login_start: '2018-10-13',
        //         operating_time: '36mins',
        //         ip_address: '192.168.1.1'
        //     }
        // ]   
    }
)

export default (state = defaultState, action) => {

    // // Loading加載
    // if (action.type === constants.LOADING_STATUS) {       
    //     return state.merge({
    //         loading: true
    //     })
    // }

    // Ajax資料載入- 登入者記錄   
    if (action.type === constants.AJAX_LIST_LOGIN) {   
        // console.log('Ajax收到 Reducer', action);   
        // console.log('Ajax收到data Reducer', action.data); 
        let data = action.data;
        return state.set('dataLoginRecord', data).set('loading', false);
    }   

    // Ajax資料載入 - 管理者帳號  
    if (action.type === constants.AJAX_LIST_ADMINMEMBERS) {   
        // console.log('Ajax收到 Reducer', action);   
        console.log('Ajax收到data Reducer', action.data); 
        let data = action.data;
        return state.set('dataAdminMembers', data).set('loading', false);
    }  

    // 輸入框可編輯
    // console.log('reducer',state, action);
    if (action.type === constants.CHANGE_INPUT_SHOW) {
        // console.log('reducer',action);
        return state.set('editStatus', action.payload.bool).set('id', action.payload.id);       
    }

    // 輸入框變化
    // console.log('reducer',state, action);
    if (action.type === constants.CHANGE_INPUT_VALUE) {
        console.log('reducer',action.payload);
        return state.set( action.payload.type, action.payload.value);       
    }

    // 儲存
    // console.log('reducer',state, action);
    if (action.type === constants.SAVE_INPUT) {
        console.log('reducer',action.payload);
        const data = state.get('dataAdminMembers')
        console.log('data',data);
        data.map((item, i)=>{
            if(item.id === state.get('id')){
                if(state.get('inputName') !== ''){
                    item.name = state.get('inputName')
                }
                if(state.get('inputEmail') !== ''){
                    item.email = state.get('inputEmail')
                }
                if(state.get('permission')!== ''){
                    item.permission = state.get('permission')
                }            
            }
            return item
        })
        console.log('data2',data);
        // return state.set( 'dataAdminMembers', data); 
        return state.merge({
            dataAdminMembers:  data,
            editStatus: false,
            id: '',
            inputName: '',
            inputEmail: '',
            permission: ''
        });      
    }

    // 選擇框變化
    if (action.type === constants.CHANGE_SELECT) {
        return state.set( 'permission', action.value);       
    }

    // 刪除
    if (action.type === constants.DELETE_TODO_ITEM) {
        let data = state.get('dataAdminMembers')
        data = data.filter((item) => {
            if(item.id === action.id){
                return false  // 不要的就是return false (那筆就不要的意思)
            }else {
                return true
            }
        })     
        return state.set( 'dataAdminMembers', data);           
    }

    // 刪除取消
    if (action.type === constants.EDIT_CANCLE) {
        return state.merge({
            editStatus: false,
            id: '',
            inputName: '',
            inputEmail: '',
            permission: ''
        });       
    }

    return state;
}