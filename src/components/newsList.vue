<template>
  <div class="wrap_newslist">
    <div class="content_list">
      <div class="con_list_items" v-for="newItems in newsLists">
        <router-link :to='{name:"article", params:{id:newItems.item_id}}' class="items_link">
          <div v-if='newItems.image_list.length !== 0 && newItems.image_list.length !== undefined'>
            <div>
              <h3 class="items_title">{{newItems.title}}</h3>
              <div class="items_img_list">
                <ul class="clearfix">
                  <li class="image_list">
                    <img v-lazy="newItems.image_list[0].url" alt="">
                  </li>
                  <li class="image_list">
                    <img v-lazy="newItems.image_list[1].url" alt="">
                  </li>
                  <li class="image_list">
                    <img v-lazy="newItems.image_list[2].url" alt="">
                  </li>
                </ul>
              </div>
              <div class="items_info">
                <div v-if="newItems.label !== undefined" class="stick_label">
                  <span>{{newItems.label}}</span>
                </div>
                <span>{{newItems.media_name}}</span>
                <span class="items_comment">评论 {{newItems.comment_count}}</span>
                <span>{{newItems.datetime}}</span>
              </div>
            </div>
          </div>
          <div class="wrap_box" v-if='newItems.image_url !== undefined'>
            <div class="items_detail_two">
              <h3 class="items_title">{{newItems.title}}</h3>
              <div class="items_info">
                <div v-if="newItems.label !== undefined" class="stick_label">
                  <span>{{newItems.label}}</span>
                </div>
                <span>{{newItems.media_name}}</span>
                <span class="items_comment">评论 {{newItems.comment_count}}</span>
                <span>{{newItems.datetime}}</span>
              </div>
            </div>
            <div class="items_img">
              <img v-lazy="newItems.image_url" alt="">
            </div>
          </div>
          <div class="wrap_box" v-if='newItems.image_list.length == 0 && newItems.image_url == undefined'>
            <div class="items_detail">
              <h3 class="items_title">{{newItems.title}}</h3>
              <div class="ad_img" v-if='newItems.label == "广告"'>
                <img v-lazy="newItems.large_image_url" alt="">
              </div>
              <div class="items_info">
                <div v-if="newItems.label !== undefined" class="stick_label">
                  <span>{{newItems.label}}</span>
                </div>
                <span>{{newItems.media_name}}</span>
                <span class="items_comment">评论 {{newItems.comment_count}}</span>
                <span>{{newItems.datetime}}</span>
              </div>
            </div>
          </div>
          
        </router-link>
      </div>
    </div>
    <div class="loading">
      <span>{{loadingText}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // newsLists: this.allList,
      loadingText: "正在加载中....",
    }
  },
  props:['allList'],
  computed:{
    newsLists() {
      return this.allList
    }
  },
  watch:{
  	// allList(value){
  	// 	this.newsLists = value
  	// }
  }
}

</script>
<style>
.con_list_items {
  margin: 0 3%;
  border-bottom: 1px solid rgba(221, 221, 221, 0.6);
}

.ad_img {
  margin-top: 2%;
  width: 100%;
  overflow: hidden;
}

.ad_img img {
  width: 100%;
  height: 100%;
  float: left;
}

.items_link {
  display: block;
  padding: 3% 0;
}

.wrap_box {
  box-sizing: border-box;
  overflow: hidden;
  vertical-align: middle;
}

.items_detail_two {
  box-sizing: border-box;
  width: 67%;
  float: left;
}

.items_detail_two h3 {
  padding: 0;
  margin: 0;
}

.items_info {
  padding-top: 2%;
}

.items_img {
  width: 30%;
  float: right;
  height: 100%;
}

.items_info .stick_label {
  display: inline-block;
  color: #f85959;
  border: 1px solid rgba(248, 89, 89, 0.5);
  border-radius: 4px;
  margin-right: 0.1rem;
}

.stick_label span {
  font-size: 0.02rem;
  padding: 0.02rem;
}

.items_img img {
  width: 100%;
  height: 100%;
}

.items_info {
  color: #999;
  font-size: 0.1rem;
}

.items_title {
  color: #333;
  font-size: 0.28rem;
  font-weight: 500;
}

.items_img_list ul {
  height: 100%;
}

.items_img_list ul li {
  float: left;
  width: 33.3%;
  height: 100%;
  padding-left: 1%;
  box-sizing: border-box;
}

.items_img_list ul li:first-child {
  padding-left: 0;
}

.items_img_list {
  height: 1.8rem;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 2%;
}

.items_img_list ul li img {
  width: 100%;
  height: 100%;
}

.items_comment {
  color: #f85959;
}

.loading {
  width: 100%;
  padding: 3% 0;
  background: #d6d6d6;
  text-align: center;
  color: #000;
  font-size: 0.2rem;
}

</style>
