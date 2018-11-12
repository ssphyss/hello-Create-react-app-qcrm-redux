// 1. 引入
// import { combineReducers } from  'redux';

// 2. 傳入小的reducer
import { reducer as reducerAdmin } from './../layout/store';
import { reducer as reducerDashboard } from './../components/dashboard/store';
import { reducer as reducerBorrow } from './../components/borrow/store';
import { reducer as reducerLend } from './../components/lend/store';
import { reducer as reducerMember } from './../components/members/store';

// 3. 改引用redux-immutable
import { combineReducers } from  'redux-immutable';

const reducer = combineReducers ({
    // abc : adminReducer
    admin : reducerAdmin,
    dashboard: reducerDashboard,
    borrow: reducerBorrow,
    lend: reducerLend,
    member: reducerMember,
})

export default reducer;
