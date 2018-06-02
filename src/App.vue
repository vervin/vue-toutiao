<template>
<div id="app">
<router-view name='top'></router-view>
<router-view name='main'></router-view>
<router-view name='bottom'></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dt,dd,form,fieldset,legend,input,textarea,select{
  margin: 0;
  padding: 0;
  font-family: 'Arial','Microsoft YaHei', 'Helvetica';
  -webkit-tap-highlight-color: rgba(0,0,0,0);  
  -webkit-tap-highlight-color: transparent;
}
#app{
	background: #fff;
}
input{
	border: none;
	outline: 0;
}
a{
  text-decoration: none;
}
ol,ul{
  list-style: none;
}
.clearfix:after{
  content: '.';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  zoom: 1;
}
</style>
