require(["config"], function(){
	require(["jquery","load"], function($){
		$(".zhuce").on("submit",function(e){
			e.preventDefault();
			const _username = $(".cellphone").value,
				_password = $(".password").value,
			const xhr =  new XMLHttpRequest();
			xhr.open("POST", "login.php?", true);
			const queryString = `cellphone=${_username}&password=${_password}`;
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xhr.send(queryString);

			xhr.onreadystatechange = function(){
				if (xhr.readyState === 4) { 
					if (xhr.status === 200) { 
						let data = xhr.responseText; 

						data = JSON.parse(data);
						if (data.res_code === 1) { 
							alert("用户注册成功");
						} else {
							alert("用户注册失败");
						}
						console.log(data);
					}
				}
			}
		});
	
		});
	});