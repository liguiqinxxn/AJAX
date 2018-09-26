window.onload = function(){

	var oUser = document.getElementById('user');
	var oReg = document.getElementById('reg');
	var oLogin = document.getElementById('login');
	var oUserInfo = document.getElementById('userinfo');
	var oList = document.getElementById('list');
	var iPage = 1;

	var oShowMore = document.getElementById('oShowMore');

	var oUsername1 = document.getElementById('oUsername1');
	var oVerifyUserNameMsg = document.getElementById('verifyUserNameMsg');


	// 初始化
	updateUserstatus();

	function updateUserstatus(){
		var uid = getCookie('uid');
		var username = getCookie('username');

		if (uid) {
			// 如果是登录状态
			oUser.style.display = 'block';
			oUserInfo.innerHTML = username;
			oReg.style.display = 'none';
			oLogin.style.display = 'none';
		}else {
			oUser.style.display = 'none';
			oUserInfo.innerHTML = '';
			oReg.style.display = 'block';
			oLogin.style.display = 'block';
		}
	}

	showList();

	/*
	验证用户名
	get
		guestbook/index.php
			m : index
			a : verifyUserName
			username : 要验证的用户名
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
	oUsername1.onblur = function(){
		ajax('get', 'guestbook/index.php', 'm=index&a=verifyUserName&username=' + this.value, function(data) {
			alert(data);
		});
	}

}

function getCookie(key) {
	var arr1 = document.cookie.split('; ');
	for (var i = 0; i < arr1.length; i++) {
		var arr2 = arr1[i].split('=');
		if (arr2[0] == key) {
			return arr2[1];
		}
	}
}