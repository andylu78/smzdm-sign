/**
 * 项目配置表
 * 邮件推荐使用qq邮箱，其他邮箱可能协议方面要自行设置
 * xuess<wuniu2010@126.com>
 * 2018-04-17
 */

// email 登陆账号 如：xxxx@qq.com
const emailName = '349346868@qq.com';
// email 登陆密码
const emailPassword = 'dmcsjxbgjrtzcafh';
// 接收者 邮箱
const toEmail = 'xxx@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': '非必填，用户发送邮件展示',
		'phone': '非必填，用户发送邮件展示',
		'cookies': '__ckguid=AqQ4yv5gatbhw18t5TPoxH; device_id=213070643317437626176064902880bcba9fa547810250d719dd2c12fd; homepage_sug=d; r_sort_type=score; _zdmA.vid=*; Hm_lvt_9b7ac3d38f30fe89ff0b8a0546904e58=1743762619; HMACCOUNT=120BC63725EC9F2E; footer_floating_layer=0; ad_date=4; ad_json_feed=%7B%7D; sajssdk_2015_cross_new_user=1; sess=BA-hWixfwjW2xb79E8SaX1xnP5SbnwEW8WyaIzSSkUmBBYvmYkwIblOy4XlrX8S3W7BwWEuxv73BZjdwCEac6I9us76jDDOGn312vRQ5v%2BzDOLTIhBH7zu%2FbnNJ; user=qq_ua1q2%7C8226999044; smzdm_id=8226999044; _zdmA.uid=ZDMA.ZK-uoxeaZP.1743762636.2419200; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%228226999044%22%2C%22first_id%22%3A%221960059fb5cde6-0a3171b521a4468-26011d51-1327104-1960059fb5d1182%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.smzdm.com%2F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk2MDA1OWZiNWNkZTYtMGEzMTcxYjUyMWE0NDY4LTI2MDExZDUxLTEzMjcxMDQtMTk2MDA1OWZiNWQxMTgyIiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiODIyNjk5OTA0NCJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%228226999044%22%7D%2C%22%24device_id%22%3A%221960059fb5cde6-0a3171b521a4468-26011d51-1327104-1960059fb5d1182%22%7D; Hm_lpvt_9b7ac3d38f30fe89ff0b8a0546904e58=1743762636; bannerCounter=%5B%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%5D; _zdmA.time=1743762636283.0.https%3A%2F%2Fwww.smzdm.com%2F
'
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'感谢爆料，很不错',
	'现在这个价格还可入手吗？',
	'感谢爆料，价格不错~~',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};
