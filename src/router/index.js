import Vue from 'vue'
import Router from 'vue-router'
import BottomNav from '@/components/BottomNav'
import HeadCon from '@/components/HeadCon'
import Home from '@/components/Home'
import Wap from '@/components/Wap'



// //导航栏主页面链接
import ImportantNews from '@/components/mainIndex/ImportantNews'
import Video from '@/components/mainIndex/Video'
import UserInfo from '@/components/mainIndex/UserInfo'
// 新闻文章信息
import Article from '@/components/content/article'
import Author from '@/components/content/author'
import Search from '@/components/content/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/all/__all__',
      components: Home
    },
    {
      path: '/home',
      name: 'Home',
      components: {
        top: HeadCon,
        main: Home,
        bottom: BottomNav
      },
      children: [{
        path: 'all/:type',
        name: 'all',
        component: Wap
      }
      ]
    },{
      path: '/importantNews',
      name: 'ImportantNews',
      components: {
        top: HeadCon,
        main: ImportantNews,
        bottom: BottomNav
      }
    }, {
      path: '/video',
      name: 'Video',
      components: {
        top: HeadCon,
        main: Video,
        bottom: BottomNav
      }
    }, {
      path: '/userInfo',
      name: 'UserInfo',
      components: {
        main: UserInfo,
        bottom: BottomNav
      }
    }, {
      path: '/article/:id?',
      name: 'article',
      components: {
        main: Article
      }
    }, {
      path: '/author/:id',
      name: 'author',
      components: {
        main: Author
      }
    }
  ]
})
