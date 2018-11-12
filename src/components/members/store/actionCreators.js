import * as constants from './constants';
import axios from 'axios';

// Ajax資料載入
export const getListMember = () => {
    return async (dispatch) => {
        
        // const res = await axios.get('https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/member/list')
        const res = await axios.get('/api/member/memberList.json')

        // console.log('AAA')
        const data = res.data.result.data;
        // console.log(res.data);
        const action = {
            type: constants.AJAX_LIST_MEMBER,
            data        
        }       
        
        setTimeout(() => {
            dispatch(action);     
        }, 500);
    }
}

// Ajax資料載入單筆
export const getProfileMember = (id) => {
    return async (dispatch) => {
        
        const res = await axios.get(`https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/memberProfile/${id}`)
        // const res = await axios.get('/api/member/memberProfile.json')

        console.log('id',id)

        const data = res.data.result.data;
        console.log(res.data);
        const action = {
            type: constants.AJAX_PROFILE_MEMBER,
            data        
        }       
        
        setTimeout(() => {
            dispatch(action);     
        }, 500);
    }
}