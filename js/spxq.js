$(function(){
	$.ajax({
	    type:"get",
	    url:"php/getGoodsList.php",
	    success:function(data){
	    	showgoodsList(data);
	    },
	    dataType:"json"
	});
});
   function showgoodsList(datas){
   	  let $com=$(".com");
   	  for(let i=0;i<datas.length;i++){
   	  	 let str='<div class="cydp">'+
                 '<a href="#"><img src='+datas[i].goodsImg+'></a><br/>'+
                 '<a href="#" class="tit">'+datas[i].goodsName+'</a><br/>'+
                 '<a href="#" class="money">'+'<span class="sone">￥'+datas[i].goodsPrice+'.00'+'</span>'+'<span class="stwo">'+datas[i].goodsCount+'</span>'+
                 '</a>'+
                 '<div class="buttons">'+
                 '<a href="#" class="xdlj">'+datas[i].goodsType+'</a>'+
                 '</div>'+
             '</div>';
   	  
   	     $com.append(str);
   	  }
   }
   
