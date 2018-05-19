<template>
  <div class="wap_all">
    <div class="all" ref='touchAll'>
      <div class="tx" v-show='isShow'>今日头条推荐引擎有{{newsLength}}条更新</div>
      <div class="jz" ref='listLoading'>
        <i>{{listText}}</i>
      </div>
      <news-list :allList='listItme'></news-list>
      <div class="top" v-show='isTop' @click='returnScrollTop'></div>
    </div>
  </div>
</template>
<script>
import NewsList from "./newsList.vue";
import Jsonp from 'jsonp'

// import { mapState } from 'vuex'

export default {
  components: {
    NewsList
  },
  data() {
    return {
      touchPosition: 0,
      listText: "",
      isShow: false,
      isTop: false,
      isUpdateNews: false, //是否获取更多新闻
      isReturnNews: false, //是否有新闻返回
      newsLength: 0,
      newsLists: {
        //新闻频道列表
        __all__: [],
        news_hot: [],
        news_society: [],
        news_entertainment: [],
        news_tech: [],
        news_car: [],
        news_sports: [],
        news_finance: [],
        news_military: [],
        news_world: [],
        news_fashion: [],
        news_game: [],
        news_travel: [],
        news_history: [],
        news_discovery: [],
        news_food: [],
        news_baby: [],
        news_regimen: [],
        news_story: [],
        news_essay: []
      }
    };
  },
  computed: {
    // ...mapState([
    //   'newsLists',
    //   'isReturnNews',
    //   'newsLength'
    // ]),
    listItme() {
      return this.newsLists[this.$route.params.type || "__all__"];
    }
  },
  methods: {
    // scrollRenovate() {
    //   const SH = document.body.scrollHeight;
    //   const viewH = document.documentElement.clientHeight;
    //   const scrollTop = document.body.scrollTop;
    //   this.isTop = scrollTop > 600 ? true : false;
    //   if (viewH + scrollTop === SH) {
    //     this.$store.dispatch("getNewsList", {
    //       type: this.$route.params.type,
    //       isUpdateNews: true
    //     });
    //   }
    // },
    returnScrollTop() {
      document.body.scrollTop = 0;
    },
    // touchmove(e) {
    //   const disY = e.touches[0].pageY - this.touchPosition;
    //   if (disY < 30) return false;
    //   this.$refs.touchAll.style.transform = `translateY(${Math.min(
    //     disY,
    //     200
    //   )}px)`;
    //   if (disY < 100) return false;
    //   this.listText = "松开推荐";
    // },
    // touchend(e) {
    //   this.$refs.touchAll.removeEventListener("touchmove", this.touchmove);
    //   this.$refs.touchAll.removeEventListener("touchend", this.touchend);
    //   const disY = e.changedTouches[0].pageY - this.touchPosition;
    //   if (disY < 30) return false;
    //   this.$refs.touchAll.style.transform = "";
    //   this.$refs.touchAll.style.transition = "transform 0.3s linear";
    //   if (disY < 100) return false;
    //   this.listText = "推荐中";
    //   this.$refs.touchAll.style.transform = "translateY(1.5rem)";
    //   this.$store.dispatch("getNewsList", {
    //     type: this.$route.params.type,
    //     isUpdateNews: false
    //   });
    //   setTimeout(() => {
    //     if (this.isReturnNews) {
    //       this.$refs.touchAll.style.transform = "";
    //       this.isShow = true;
    //       this.closeShow();
    //     } else {
    //       this.listText = "加载失败";
    //       this.$refs.touchAll.style.transform = "";
    //     }
    //   }, 2000);
    // },
    // closeShow() {
    //   setTimeout(() => {
    //     this.isShow = false;
    //   }, 3000);
    // },

    getNewsList(newsType){
		if(newsType.type != undefined){
			let timeRequest = parseInt(new Date().getTime() / 1000)
			Jsonp(`https://m.toutiao.com/list/?tag=${newsType.type}&ac=wap&count=20&format=json_raw&as=A1355A001191ABB&cp=5A01011A9BCB9E1&min_behot_time=${timeRequest}`,
				{ timeout: 3000 },(err,res) => {
			    this.newsLists[this.$route.params.type || "__all__"] = res.data
			})
		}
	}
  },
  created() {
    if (this.newsLists[this.$route.params.type].length == 0) {
        this.getNewsList(this.$route.params)
    //   this.$store.dispatch('getNewsList', {
    //     type: this.$route.params.type,
    //     isUpdateNews: false
    //   })
    }
  },
//   mounted() {
//     window.addEventListener("scroll", this.scrollRenovate); //滚动条监听

//     let _this = this;
//     this.$refs.touchAll.addEventListener("touchstart", function(e) {
//       if (document.body.scrollTop <= 0) {
//         _this.touchPosition = e.touches[0].pageY;
//         _this.$refs.touchAll.style.transition = "";
//         _this.listText = "下拉加载";
//         _this.isShow = false;
//         _this.$refs.touchAll.addEventListener("touchmove", _this.touchmove);
//         _this.$refs.touchAll.addEventListener("touchend", _this.touchend);
//       }
//     });
//   },
  watch: {
    // $route(to, from) {
    //   if (to.path.includes("all")) {
    //     const type = this.$route.params.type;
    //     if (this.newsLists[type].length == 0) {
    //     this.getNewsList(this.$route.params)
         
    //     }
    //   }
    // }
  },
//   beforeRouteLeave(to, form, next) {
//     window.removeEventListener("scroll", this.scrollRenovate);
//     this.$refs.touchAll.removeEventListener("touchstart", this.touchmove);
//     next();
//   }
};
</script>
<style>
.wap_all {
  width: 100%;
  background: #dbdbdb;
  overflow: hidden;
}

.all {
  width: 100%;
  background: #fff;
  position: relative;
}

.jz {
  width: 100%;
  height: 1.5rem;
  background: url(../assets/img/lie.svg) no-repeat;
  background-size: 0.8rem;
  background-position: center 0.3rem;
  position: absolute;
  top: -1.5rem;
}

.jz i {
  display: block;
  width: 1rem;
  font-style: normal;
  position: absolute;
  bottom: 0.1rem;
  left: 50%;
  margin-left: -0.5rem;
  font-size: 0.1rem;
  text-align: center;
}

.tx {
  background: rgba(140, 203, 248, 0.7);
  color: #0c94f3;
  font-size: 0.3rem;
  box-sizing: border-box;
  padding: 2% 0;
  text-align: center;
}
.top {
  position: fixed;
  bottom: 10%;
  right: 5%;
  width: 0.6rem;
  height: 0.6rem;
  background: #fff url(../assets/img/top.svg) no-repeat center center;
  background-size: 100% 100%;
  border-radius: 20%;
}
</style>
