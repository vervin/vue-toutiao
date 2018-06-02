
<template>
  <div class="article">
    <div class="top_goback">
      <div class="goback">
        <div class="goback_icon">
          <i @click="$router.go(-1)" class="goback_link"></i>
        </div>
        <div class="goback_tit">头条新闻</div>
        <div class="goback_more">
          <i class="more_btn"></i>
        </div>
      </div>
    </div>
    <div class="article_content">
      <div class="article_title">
        <h3>{{article.title}}</h3>
        <div v-if='article.media_user != undefined' class="author_info clearfix">
          <span class="author_head">
						<img :src="article.media_user.avatar_url" alt="">
					</span>
          <span class="author_name">
						<p>
							<span class="author_source">{{article.source}}</span>
              <img src="../../assets/img/tth.png" v-if='article.media_user.no_display_pgc_icon == false' class="tth_logo" alt="">
          </p>
          <p>
            <span class="article_comment_count">{{article.comment_count}}评论</span>
          </p>
          </span>
          <span class="favor_btn">关注</span>
        </div>
      </div>
      <div class="article_text" v-html='article.content'></div>
    </div>
    <div class="article_bottom">
      <div class="bottom_con">
        <div class="article_inp">
          <input type="text" placeholder="写评论...">
        </div>
        <div class="article_box">
          <span class="icon">
            <i class="article_icon1"></i>
          </span>
          <span class="icon">
            <i class="article_icon2" :class='{iconHover:isChange}' @click='collection'></i>
          </span>
          <span class="icon">
            <i class="article_icon3"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="loadbg" v-show='isLoad'></div>
  </div>
</template>
<script>
import Jsonp from 'jsonp'                        

export default {
  data() {
    return {
        article: {
		media_user:{
      		avatar_url: '',
      		screen_name: ''
      	},
      	source: '',
      	comment_count: '',
      	content: ''
	  },
      isChange: false,
      isLoad: true
    }
  },
  methods: {
    collection() {
      this.isChange = !this.isChange
    },
    getArticle(articleUrl){
		Jsonp(`https://m.toutiao.com/i${articleUrl}/info/`,
			{ timeout: 3000 },(err,res) => {
				if(res){
                    this.addArticle(res.data)
				}
		})
    },
    addArticle(article) {            //添加文章
		this.article = article
	},
  },
  created() {
      this.getArticle(this.$route.params.id)
  },
  watch: {
    article(val) {
      this.isLoad = false
    }
  }
}

</script>
<style>
.loadbg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff url(../../../static/loading.png) no-repeat center center;
  background-size: 100% 100%;
}
.top_goback {
  width: 100%;
  padding-top: 0.85rem;
}

.goback {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid #d6d6d6;
  color: #666;
  box-sizing: border-box;
  font-size: 0.4rem;
  text-align: center;
  font-weight: normal;
  padding: 2% 0;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
}

.goback_icon {
  width: 10%;
}

.goback_link {
  display: block;
  height: 100%;
  background: url(../../assets/img/goback.svg) no-repeat center center;
  background-size: 70% 70%;
}

.goback_tit {
  width: 80%;
}

.goback_more {
  width: 10%;
}

.more_btn {
  display: block;
  height: 100%;
  background: url(../../assets/img/dian.svg) no-repeat center center;
  background-size: 100% 100%;
}

.author_info {
  width: 100%;
  margin-top: 5%;
  box-sizing: border-box;
}

.author_head {
  width: 0.8rem;
  height: 0.8rem;
  float: left;
  border-radius: 50%;
  overflow: hidden;
}

.author_head img {
  width: 100%;
}

.author_name {
  float: left;
  margin-left: 2%;
  line-height: 0.38rem;
}

.author_name p {
  text-align: left;
}

.author_source {
  font-weight: 600;
  font-size: 0.2rem;
}

.article_comment_count {
  color: #f85959;
  font-size: 0.2rem;
  vertical-align: top;
}
.tth_logo{
  width: 0.58rem;
}
.favor_btn {
  box-sizing: border-box;
  padding: 2% 5%;
  float: right;
  color: #fff;
  background: #ff5050;
  font-size: 0.1rem;
}

.article {
  width: 100%;
}

.article_content {
  margin-top: 2%;
  padding: 0 4%;
}

.article_title {
  font-size: 0.4rem;
}

.article_text img {
  width: 100%;
}

.article_text {
  width: 100%;
  font-size: 0.3rem;
  line-height: 0.5rem;
}

.article_text p {
  margin-top: 4%;
  word-wrap: break-word;
}

.article_text h1 {
  font-size: 0.3rem;
  margin: 2% 0 3%;
}

.article_text .pgc-img-caption {
  text-align: center;
  color: #999;
  font-size: 0.2rem;
  line-height: 0.25rem;
  margin-top: 2%;
  margin-bottom: 5%;
}
.article_bottom{
  padding-bottom: 0.85rem;
}
.bottom_con{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.5rem;
  height: 0.85rem;
  background: #fff;
  display: flex;
  border-top: 1px solid #d6d6d6;
}
.article_inp {
  flex: 1;
  text-align: center;
  padding: 1% 0;
}
.article_inp input{
  width: 70%;
  -webkit-appearance: none;
  height: 0.5rem;
  padding: 0 10%;
  border-radius: 20px;
  border: 1px solid #d6d6d6;
}
.article_box {
  flex: 1;
  display: flex;
}
.article_box .icon{
  flex: 1;
  text-align: center;
}
.article_box .icon i{
  display: inline-block;
  width: 0.85rem;
  height: 0.85rem;
  background-position: center 1px;
  background-size: 0.85rem 0.85rem;
}
.article_icon1{
  background: url(../../assets/img/pl.png) no-repeat;
}
.article_icon2{
  background: url(../../assets/img/star.png) no-repeat;
}
.article_icon3{
  background: url(../../assets/img/fx.png) no-repeat;
}
.article_icon2.iconHover {
  background: url(../../assets/img/star1.png) no-repeat;
} 
</style>
