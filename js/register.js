$(function () {
      // 手机
    $("#username").click(function(){
      var str = $("#username").val();
      var ret = /^[\d]{5,20}$/;
      if(ret.test(str)){
        alert('ok');
      }else{
        alert('wrong');
      }
    });
    
    // 用户名
    $("userpass").click(function(){
      var str = $("#userpass").val();
      var ret = /^[a-zA-Z][a-zA-Z0-9_]{5,20}$/;
      if(ret.test(str)){
        alert('ok');
      }else{
        alert('wrong');
      }
    });
    // 邮件
    $("#email").click(function(){
      var str = $("#email").val();
      var ret = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
      if(ret.test(str)){
        alert('ok');
      }else{
        alert('wrong');
      }
    });
  
  });