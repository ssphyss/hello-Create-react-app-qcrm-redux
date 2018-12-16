const menuConfig = [ 
	{
		"title":"控制台",
		"path":"/dashboard",
		"icon": "pie-chart",
		"children":[
			{
				"title":"控制台總覽",
				"path":"/dashboard/analysis",
				"icon": "star"
			},
			{
				"title":"登入者記錄",
				"path":"/dashboard/loginRecord",
				"icon": "star"
			},
			{
				"title":"系統參數設定",
				"path":"/dashboard/config",
				"icon": "star"
			},
			{
				"title":"管理者帳號設定",
				"path":"/dashboard/adminMembers",
				"icon": "star"
			}
		]
	},
	{
		"title":"借款管理",
		"path":"/borrow",
		"icon": "pie-chart",
		"children":[	
			{
				"title":"借款管理",
				"path":"/borrow/list"
			},
			{
				"title":"借款明細表",
				"path":"/borrow/list/detail"
			},
			{
				"title":"借款訊息設定",
				"path":"/borrow/config"
			}
		]
	},
	{
		"title":"投資管理",
		"path":"/lend",
		"icon": "bar-chart",
		"children":[					
			{
				"title":"投資管理",
				"path":"/lend/list"
			},
			{
				"title":"投資明細表",
				"path":"/lend/list/detail"
			},
			{
				"title":"投資訊息設定",
				"path":"/lend/config"
			}
		]
	},
	{
		"title":"客戶管理",
		"path":"/member",
		"icon": "user",        
		"children":[
			{
				"title":"客戶管理",
				"path":"/member/list"
			},
			{
				"title":"客戶檔案",
				"path":"/member/list/profile"
			}
		]
	},
	{
		"title":"審批管理",
		"path":"/admin/order",
		"icon": "smile",
		"children":[
			{
				"title":"審批列表",
				"path":"/admin/order/order-list"
			},
			{
				"title":"結束審批",
				"path":"/admin/order/finish"
			}
		]
	},
	{
		"title":"權限設置",
		"path":"/admin/permission",
		"icon": "setting",
		"children":[
			{
				"title":"權限列表",
				"path":"/permission/list"
			},
			{
				"title":"權限設置",
				"path":"/permission/permissionSet"
			}
		]
	},
	{
		"title":"登出",
		"path":"/user/login",
		"icon": "user"
	}			
	
]

export default menuConfig;