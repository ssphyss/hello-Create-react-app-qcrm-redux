// 1. 引入
// import { combineReducers } from  'redux';

// 2. 傳入小的reducer
import { reducer as reducerAdmin } from './../components/LayoutComponents/store';
import { reducer as reducerDashboard } from './../components/QCRMComponents/Dashboard/store';
import { reducer as reducerBorrow } from './../components/QCRMComponents/Borrow/store';
import { reducer as reducerLend } from './../components/QCRMComponents/Lend/store';
import { reducer as reducerMember } from './../components/QCRMComponents/Members/store';
import { reducer as reducerPermission } from './../components/QCRMComponents/Permission/store';

// 3. 改引用redux-immutable
import { combineReducers } from  'redux-immutable';

const reducer = combineReducers ({
    // abc : adminReducer
    admin : reducerAdmin,
    dashboard: reducerDashboard,
    borrow: reducerBorrow,
    lend: reducerLend,
    member: reducerMember,
    permission: reducerPermission
})

export default reducer;
