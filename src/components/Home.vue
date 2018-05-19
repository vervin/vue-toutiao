<template>
  <div id="home">
    <div class="wrap_tab">
      <div class="top_home_tab">
        <div class="tab_list">
          <router-link v-for="(item,index) in tabList" :to='{name:"all", params:{type:item.type}}' class="tab_items" :class="{'change': flag == index}" @click.native = 'change(index)' :key='index'>
            {{ item.text }}
          </router-link>
        </div>
        <div class="top_home_more"  @click='isPopShow = true'>
          <i></i>
        </div>
        <div class="wrap_pop clearfix" v-transfer-dom>
          <popup class="pop_up" v-model='isPopShow' height='92%' :popup-style="{zIndex: 999}">
            <div class="pop_close" @click="isPopShow = false"></div>
            <div class="pop_tit clearfix">
              <span class="tit_font">我的频道</span>
              <span class="tit_text">点击进入频道</span>
              <span class="tit_edit" @click='isDelShow = !isDelShow'>
                <i v-if='isDelShow'>完成</i>
                <i v-else>编辑</i>
              </span>
              <div class="more_tab clearfix">
                <router-link class="more_tab_items" 
                v-for='(item,index) in tabList' 
                :key='index'
                :to='{name:"all", params:{type:item.type}}' 
                @click.native = 'change(index)'>
                  {{item.text}}
                  <i class="del" :class='isDelShow?"show":"hide"' @click='delItems(index)'></i>
                </router-link>
              </div>
            </div>
            <div class="recommend">
              <span class="tit_font">频道推荐</span>
              <span class="tit_text">点击添加频道</span>
            </div>
            <div class="more_tab">
              <span class="more_tab_items" v-for='(item,index) in newTabList'  :key='index' @click='addItems(index)'>
                {{item.text}}
              </span>
            </div>
          </popup>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import {
  TransferDom,
  Popup
} from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup
  },
  data() {
    return {
      tabList: [
        {
          text: '推荐',
          name: 'wap',
          type: '__all__'
        },
        {
          text: '热点',
          name: 'newsHot',
          type: 'news_hot'
        },
        {
          text: '社会',
          name: 'society',
          type: 'news_society'
        },
        {
          text: '娱乐',
          name: 'entertainment',
          type: 'news_entertainment'
        },
        {
          text: '科技',
          name: 'tech',
          type: 'news_tech'
        },
        {
          text: '汽车',
          name: 'car',
          type: 'news_car'
        },
        {
          text: '体育',
          name: 'sports',
          type: 'news_sports'
        },
        {
          text: '财经',
          name: 'finance',
          type: 'news_finance'
        },
        {
          text: '军事',
          name: 'military',
          type: 'news_military'
        },
        {
          text: '国际',
          name: 'world',
          type: 'news_world'
        },
        {
          text: '时尚',
          name: 'fashion',
          type: 'news_fashion'
        },
      ],
      newTabList: [
        {
          text: '游戏',
          name: 'newsGame',
          type: 'news_game'
        },
        {
          text: '旅游',
          name: 'newsTravel',
          type: 'news_travel'
        },
        {
          text: '历史',
          name: 'newsHistory',
          type: 'news_history'
        },
        {
          text: '探索',
          name: 'newsDiscovery',
          type: 'news_discovery'
        },
        {
          text: '美食',
          name: 'newsFood',
          type: 'news_food'
        },
        {
          text: '育儿',
          name: 'newsBaby',
          type: 'news_baby'
        },
        {
          text: '养生',
          name: 'newsRegimen',
          type: 'news_regimen'
        },
        {
          text: '故事',
          name: 'newsStory',
          type: 'news_story'
        },
        {
          text: '美文',
          name: 'newsEssay',
          type: 'news_essay'
        }
      ],
      isPopShow: false,
      isDelShow: false,
      flag:0 
    }
  },
  methods: {
    addItems(i) {
      this.tabList.push(this.newTabList[i]);
      this.newTabList.splice(i,1);
    },
    delItems(i) {
      this.newTabList.push(this.tabList[i]);
      this.tabList.splice(i,1);
    },
    change(index) {
      this.flag = index;
    }
  },
  beforeRouteUpdate(to,from,next){
    if(this.isPopShow){
      this.isPopShow = false
    }
    next();
  }

}

</script>
<style>
#home {
  width: 100%;
}
.wrap_tab{
  width: 100%;
  padding-top: 0.6rem; 
}

#home .top_home_tab {
  width: 100%;
  height: 0.6rem;
  background: #f1f1f1;
  position: fixed;
  top: 1rem;
  left: 0;
  z-index: 10;
}

.tab_list {
  width: 90%;
  float: left;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  margin: 0.1rem 0;
  font-size: 0.3rem;
}

.top_home_tab .tab_list::-webkit-scrollbar {
  display: none;
}

.tab_list .tab_items {
  font-size: 0.25rem;
  color: #333;
  padding: 0 0.15rem;
}
.tab_list .tab_items.change{
  color: #ea2323;
}
.top_home_more {
  width: 0.7rem;
  float: right;
  height: 0.6rem;
  background: #fff;
}

.top_home_more i {
  display: block;
  width: 100%;
  height: 100%;
  background: url(../assets/img/gengduo.svg) no-repeat center center;
  background-size: 60% 60%;
}
.wrap_pop{
  overflow: hidden;
}
.wrap_pop .pop_up{
  background: #fff;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 1px 15px 5px rgba(0,0,0,0.5);
  padding: 3%;
  box-sizing: border-box;
}
.wrap_pop .pop_up::-webkit-scrollbar {
  display: none;
}
.pop_close{
  display: block;
  background: url(../assets/img/close.svg) no-repeat center;
  background-size: 100% 100%;
  width: 5%;
  height: 5%;
}
.pop_tit{
  padding-top: 2%;
}
.tit_font{
  font-size: 0.35rem;
  color: #333;
}
.tit_text{
  margin-left: 2%;
  font-size: 0.25rem;
  color: #999;
}
.tit_edit{
  float: right;
  padding: 1% 2%;
  border: 1px solid #f85959;
  color: #f85959;
  border-radius: 20px;
  font-size: 0.2rem;
}
.tit_edit i{
  font-style: normal;
}
.more_tab{
  /*padding: 0 5%;*/
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5%;
}
.more_tab_items{
  box-sizing: border-box;
  padding: 2% 6%;
  white-space:nowrap;
  margin: 2% 2.1%;
  font-size: 0.3rem;
  text-align: center;
  background: #d6d6d6;
  position: relative;
  color: #333;
}
.more_tab_items .del{
  position: absolute;
  top: -6px;
  right: -5px;
  display: block;
  background: url(../assets/img/del.svg) no-repeat;
  background-size: 100% 100%;
  width: 0.35rem;
  height: 0.35rem;
  display: none;
}
.show{
  display: block !important;
}
.hide{
  display: none !important;
}
</style>
