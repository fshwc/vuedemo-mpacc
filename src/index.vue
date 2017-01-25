<template>
<div>
	<nav-list></nav-list>
	<router-view></router-view>
	<div></div>
	<div id="content_bottom"></div>
	<footer-box></footer-box>
</div>
</template>

<script>
import nav from './home/nav.vue'
import footer from './home/footer.vue'
import photo from './home/photo.vue'

export default {
	components: {
		'nav-list':nav,
		'footer-box':footer,
		'photo-box':photo
	}
}	
</script>

<style>
*{margin:0;padding: 0;}
body{font-family: "微软雅黑";}
a{text-decoration: none;}
li{list-style-type: none;}
img{border: none;}
.fl{float:left;}
.fr{float:right;}
.cb{clear: both;}


/*===头部+导航栏===*/
.header{width:1080px;margin:0 auto;}
.header a{float:right;margin:10px 8px 0 0;}
.nav{height:44px;min-width:1080px;background: url("./assets/nav_bg.png") repeat-x;}
.nav ul{width:1080px;height:44px;margin:0 auto;}
.nav ul li{float: left;margin-left: 10px;}
.nav ul li a{display: inline-block;width:108px;height:44px;line-height: 44px;
	color:#fff;font-size: 16px;text-align: center;
}
.nav ul li a:hover{background: url("./assets/nav_bg_02.png") no-repeat;}
.nav .selected{background: url("./assets/nav_bg_02.png") no-repeat;}

.content{background-color:#e1d6b7;}
.content:after {clear:both; display:table; content:'';}

#footer{width:100%; background:#e1d6b7; padding-top:30px;}
#footer div {padding:10px 0;border-top: 1px solid #9d998d; width:1080px; margin:0 auto;}
#footer ul li{width: 1080px;text-align: center;color:#795a3c;}
/*===大图片及侧边===*/
.content_1{height: 232px;max-width:1366px;margin:0 auto; background: url("./assets/body_bg.png") no-repeat;}
.content_1~div,.content_1>div{width:1080px;margin:0 auto;clear: both;}
.photo_box{width:800px;float: left;}
.content_right{width:280px;height:232px;float: left;background-color:#0170D9;}
.content_right span{display:block;width:280px;text-align:center;font-size:16px;color:#fff;}
.content_right img{width:160px;height:160px;margin-left:50px;margin:10px 60px;}
/*----------pic(2015/11/13 add by BU  )---------- */
.flashbox{ width:800px; height:232px;  position:relative; }
.flashbox .focusNew_out{width:800px; height:232px; position:relative; z-index:2}
.flashbox .focusNew_out .f_out_txt{ height:40px;width:765px; display:block; position:absolute; bottom:0; left:0; background-color:#2A2A2A; opacity:0.7; color:#d6d6d6; font-size:20px; font-family:"微软雅黑"; line-height:50px; padding:0 150px 0 20px; overflow:hidden}
.flashbox .focusNew_out .f_out_txt a{color:#fff;font-size:14px; }
#indexPicList div span a:hover{color:#fff!important;}
#indexPicList img{width:800px;height:232px;}
.flashbox .f_tabs{
	height:35px;
	position:absolute;
	bottom:0;
	right:0;
	z-index:100;
}
.flashbox .f_tabs span{ width:26px; height:20px; background-color:#474747; float: left; margin-right:3px; text-align:center; color:#f0f0f0; margin-top:15px; cursor:pointer}
.flashbox .f_tabs span.hover{background-color:#B51017;}
/*----------pic(2015/11/13 add by BU  )end---------- */

.icon1{display:inline-block;width:54px;height:54px;float:left;margin-left:5px;}
/*===box===*/
.new_boxs{background-color:#fff;margin-top: 15px;
filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);/*兼容ie*/
-moz-box-shadow: 2px 2px 10px #909090;/*兼容firefox*/
-webkit-box-shadow: 2px 2px 10px #909090;/*兼容safari或chrome*/
box-shadow:2px 2px 10px #909090;/*兼容opera或ie9*/
 }
.new_boxs .title{width:100%;height:40px;line-height:40px;
	font-size: 22px;color:#760000;text-indent: 2em;
}
.new_boxs .title>span{float: left;}
.new_boxs .title>a{color:#760000;float: right;margin-right: 10px;}
.title_1{border-bottom: 1px solid #760000;background-color: #fff;}
.title_2{border-bottom: 0px;background-color: #f1f0f0;}
.new_boxs ul{ padding-right: 8px;padding-bottom: 20px;clear: both;}
.new_boxs ul li{font-size: 14px;height:26px; line-height:26px;
	overflow: hidden; white-space: nowrap;  text-overflow: ellipsis;
	border-bottom:1px dashed #a4a3a3;margin-left: 35px;margin-top: 6px;}
.new_boxs ul li span{display:inline-block;width:94px;height:27px;line-height: 26px;
	color:#fff;text-align:center;background: url("./assets/date_bg.png") no-repeat;}
.new_boxs ul li a{color:#000;margin-left: 10px;}
.new_boxs .notNew{display:inline-block;width:35px;height:16px;background:none;}
/*===照片滚动===*/
.activity_pic{overflow: hidden;position: relative;height:275px;}
.activity_pic ul{position: absolute;left: 0px;font-size: 0;padding-right: 0;}
#photo_ul li a{margin-left: 0;}
#photo_ul img{width:270px;height:180px;}
#photo_ul li{display: inline-block; *display:inline; width:270px;height:180px;border-bottom: 0;margin:20px 0 0 0;}

.notice{width:600px;height:220px;float: left;}
.dynamic{width:465px;height:220px;float: right;}
.activity_pic{width:1080px;float: left;}
.Enrollment{width:465px;height:220px;float:left;}
.arrangement{width:600px;height:220px;float:right;}

#ad{position:fixed;right:10px;top:200px;}
.close{display:block;font-size:12px;line-height:14px;text-align:center;color:#f00;width:14px;height:14px;background-color:#fff;position:absolute;top:0px;right:0px;}


</style>