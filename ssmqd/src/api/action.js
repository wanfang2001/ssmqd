/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
	'SERVER': 'http://localhost:8080/theloan/', //服务器
	'sysPermission_node':'sysPermission/queryNode',//显示左侧菜单栏
  'teacherclass':'TeacherController/finAlly',//班级信息管理
  'Ckclass':'ClassController/finclass',//查看所有班级
	'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
		return this.SERVER + this[k];
	}
}
