import * as constants from './constants';
import axios from 'axios';

// Ajax資料載入
export const getListBorrow = () => {
    return async (dispatch) => {
        // const res = await axios.get('https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi/borrow/list')
        const res = await axios.get(`${process.env.PUBLIC_URL}/api/borrow/borrowList.json`)
        // const res = await axios.get('/api/borrow/borrowList.json')

        // let baseUrl= 'https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi' ;        
        // const res = await axios.get(baseUrl + '/dashboard/loginRecord')
        // const res = await axios.get(`${baseUrl}/dashboard/loginRecord`)
        
        // const res = await axios.get('/api/dashboard/loginRecord.json')
        // const res = await axios.get('./api/finapis/finLists.json')

        // const res = await axios.get('https://easy-mock.com/mock/5be154988432fb26b49b1174/finapis/finList')
            // .catch(()=>{alert('err')})

        // console.log(res.data);
        const data = res.data.result.data;

        const action = {
            type: constants.AJAX_LIST_BORROW,
            data        
        }       
        
        setTimeout(() => {
            dispatch(action);     
        }, 500);
    }
}
