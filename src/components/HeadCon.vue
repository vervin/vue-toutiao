<template>
  <div id="wrap_head">
    <div class="head_con">
      <flexbox class="wrap_head">
        <flexbox-item :span="3" class="wrap_logo">
          <div class="logo"></div>
        </flexbox-item>
        <flexbox-item :span="9" class="wrap_search">
          <div class="search">
            <input type="text" placeholder="请输入内容" @focus='toSearch' class="search_input">
          </div>
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
  },
  methods: {
    toSearch() {
    //   this.$router.push('/search')
      console.log(123)
    }
  }
}

</script>
<style>
#wrap_head{
	padding-top: 1rem;
}
.head_con {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background: #ea2323;
  z-index: 10;
}

.head_con .wrap_head {
  height: 100%;
}

.wrap_head>div {
  height: 100%;
}

.logo {
  height: 100%;
  background: url(../assets/img/toutiao_logo.png) no-repeat center;
  background-size: 1.5rem;
}

.search {
  width: 100%;
  height: 100%;
  position: relative;
}

.search_input {
  display: block;
  width: 80%;
  height: 0.45rem;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  margin-top: -0.25rem;
  padding-left: 0.6rem;
  background: #fff url(../assets/img/search.svg) no-repeat;
  background-size: 0.4rem;
  background-position: 0.1rem center;
  color: #fff;
  font-size: 0.2rem;
}

</style>
