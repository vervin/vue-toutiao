<template>
  <div id="bottom">
    <div class="bottom_nav">
      <flexbox :gutter="0">
        <flexbox-item class="items">
          <router-link to='/home/all/__all__' class='change'>
            <div class="nav_icon1"></div>
            <div class="nav-tit">首页</div>
          </router-link>
        </flexbox-item>
        <flexbox-item class="items">
          <router-link to='/importantNews'>
            <div class="nav_icon2"></div>
            <div class="nav-tit">要闻</div>
          </router-link>
        </flexbox-item>
        <flexbox-item>
            <div class="nav_icon5"></div>
        </flexbox-item>
        <flexbox-item class="items">
          <router-link to='/video'>
            <div class="nav_icon3"></div>
            <div class="nav-tit">段子</div>
          </router-link>
        </flexbox-item>
        <flexbox-item class="items">
          <router-link to='/userInfo'>
            <div class="nav_icon4"></div>
            <div class="nav-tit">我的</div>
          </router-link>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
import {
  Flexbox,
  FlexboxItem
} from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem
  }
}

</script>
<style>
#bottom{
  padding-bottom: 1.1rem;
}
.bottom_nav {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top: 1px solid #d6d6d6;
}

.items {
  padding: 0.15rem 0;
}

.nav-tit {
  width: 100%;
  text-align: center;
  font-size: 0.2rem;
  color: #000;
}

.nav_icon1 {
  height: 0.5rem;
  background: url(../assets/img/index.svg) no-repeat center;
  background-size: 0.5rem 0.5rem;
}

.nav_icon2 {
  height: 0.5rem;
  background: url(../assets/img/yaowen.svg) no-repeat center;
  background-size: 0.5rem 0.5rem;
}

.nav_icon3 {
  height: 0.5rem;
  background: url(../assets/img/shipin.svg) no-repeat center;
  background-size: 0.5rem 0.5rem;
}

.nav_icon4 {
  height: 0.5rem;
  background: url(../assets/img/me.svg) no-repeat center;
  background-size: 0.5rem 0.5rem;
}
.nav_icon5 {
  height: 1rem;
  background: url(../assets/img/jia.svg) no-repeat center;
  background-size: 1rem;
}
.router-link-active .nav-tit {
  color: #ea2323;
}
.router-link-active .nav_icon1 {
  background: url(../assets/img/index_gover.svg) no-repeat center;
  background-size: 0.5rem 0.5rem;
}
.router-link-active .nav_icon2 {
  background: url(../assets/img/yaowen_hover.svg) no-repeat center;
  background-size: 0.5rem 0.5rem;
}
.router-link-active .nav_icon3 {
  background: url(../assets/img/shiping_hover.svg) no-repeat center;
  background-size: 0.5rem 0.5rem;
}
.router-link-active .nav_icon4 {
  background: url(../assets/img/me_hover.svg) no-repeat center;
  background-size: 0.5rem 0.5rem;
}

.nav_icon img {
  width: 100%;
  height: 100%;
}

</style>
