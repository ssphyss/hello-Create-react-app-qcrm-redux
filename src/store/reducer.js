// 1. 引入
// import { combineReducers } from  'redux';

// 2. 傳入小的reducer
import { reducer as adminReducer } from './../layout/store';
import { reducer as dashboardReducer } from './../components//dashboard/store';

// 3. 改引用redux-immutable
import { combineReducers } from  'redux-immutable';

const reducer = combineReducers ({
    // abc : adminReducer
    admin : adminReducer,
    dashboard: dashboardReducer
})
export default reducer;
