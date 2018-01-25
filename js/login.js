window.onload=function(){
	
		function $(id){
		return document.getElementById(id)
		}
		

	var flag1=false;
	var flag2=false;
	
//判断用户名
	$('user').onblur=function(){
		if((/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test($('user').value))||(/^((13[0-9])|(14[5|7])(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test($('user').value))){
			$('hint').innerHTML='用户名合法';
     		flag1=true;
		}else{
			$('hint').innerHTML='用户名不合法'
			flag1=false;
		}
	}
//判断密码
	$('password1').onblur=function(){
		
		if(/^\w{8,20}$/.test($('password1').value)){
       		$('hints').innerHTML='密码合法';
		    flag2=true;
		}else{
			$('hints').innerHTML='密码不合法';
			flag2=false;
		}
		
	}

	$('btn').onclick=function(){
			
		if(flag1&&flag2('check').checked){			

			var d=new Date()
			d.setDate(d.getDate()+7)
			setCookie('username',$('user').value,d)
			setCookie('password',$('password1').value,d)
			var oLi=document.createElement('li')
			var liArr=$('list').getElementsByTagName('li')
			var flag6=false;
			for(var i=0;i<liArr.length;i++){
				if(liArr[i].innerHTML==getCookie('username')){
			  	 flag6=true;
				}
			}
			if(flag6==false){
				oLi.innerHTML=getCookie('username')
				$('list').appendChild(oLi)
			}
			$('hint').innerHTML='登录成功';
//			alert('注册成功')
		}

	}	
}