import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 登录
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/pages/login.vue')
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/comm-home',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/home.vue'),
      children: [
        // 首页
        {
          path: '/comm-home',
          name: 'comm-home',
          component: () => import(/* webpackChunkName: "comm-home" */ '@/pages/comm-home/index.vue'),
          meta: {
            headerHide: true,
            footerShow: true
          }
        },
        // 注册
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "register" */ '@/pages/register.vue'),
          meta: {
            title: [{
              titleName: '注册',
              toPath: '/register'
            }],
            goBack: '/login',
            goBackShow: true,
            headerHide: false,
            footerShow: false
          }
        },
        // 商品详情
        {
          path: '/comm-detail',
          name: 'comm-detail',
          component: () => import(/* webpackChunkName: "comm-detail" */ '@/pages/comm-detail/index.vue'),
          meta: {
            title: [
              {
                titleName: '商品',
                toPath: '/comm-detail',
                active: true
              },
              {
                titleName: '评价',
                toPath: '/comm-evaluate'
              }
            ],
            goBack: '/comm-home',
            goBackShow: true,
            headerHide: false,
            footerShow: false
          }
        },
        // 商品评价
        {
          path: '/comm-evaluate',
          name: 'comm-evaluate',
          component: () => import(/* webpackChunkName: "comm-evaluate" */ '@/pages/comm-evaluate/index.vue'),
          meta: {
            title: [
              {
                titleName: '商品评价',
                toPath: '/comm-evaluate'
              }
            ],
            goBack: '/comm-detail',
            goBackShow: true,
            headerHide: false,
            footerShow: false
          }
        },
        // 商品分类
        {
          path: '/comm-classify',
          name: 'comm-classify',
          component: () => import(/* webpackChunkName: "comm-classify" */ '@/pages/comm-classify/index.vue'),
          meta: {
            title: [
              {
                titleName: '商品分类',
                toPath: '/comm-classify'
              }
            ],
            goBack: '/comm-home',
            goBackShow: false,
            headerHide: false,
            footerShow: true
          }
        },
        // 购物车
        {
          path: '/shop-car',
          name: 'shop-car',
          component: () => import(/* webpackChunkName: "shop-car" */ '@/pages/shop-car/index.vue'),
          meta: {
            title: [
              {
                titleName: '购物车',
                toPath: '/shop-car'
              }
            ],
            goBack: '/comm-home',
            goBackShow: true,
            headerHide: false,
            footerShow: true
          }
        },
        // 我的
        {
          path: '/mine',
          name: 'mine',
          component: () => import(/* webpackChunkName: "mine" */ '@/pages/mine/index.vue'),
          meta: {
            title: [
              {
                titleName: '我的',
                toPath: '/mine'
              }
            ],
            goBack: '/comm-home',
            goBackShow: false,
            headerHide: false,
            footerShow: true
          }
        },
        // 订单列表
        {
          path: '/order-list',
          name: 'order-list',
          component: () => import(/* webpackChunkName: "order-list" */ '@/pages/order-list/index.vue'),
          meta: {
            title: [
              {
                titleName: '我的订单',
                toPath: '/order-list'
              }
            ],
            goBack: '/mine',
            goBackShow: true,
            headerHide: false,
            footerShow: true
          }
        },
        // 修改密码
        {
          path: '/change-password',
          name: 'change-password',
          component: () => import(/* webpackChunkName: "change-password" */ '@/pages/change-password/index.vue'),
          meta: {
            title: [
              {
                titleName: '修改密码',
                toPath: '/change-password'
              }
            ],
            goBack: '/mine',
            goBackShow: true,
            headerHide: false,
            footerShow: false
          }
        },
        // 修改店铺邀请码
        {
          path: '/change-store-code',
          name: 'change-store-code',
          component: () => import(/* webpackChunkName: "change-store-code" */ '@/pages/change-store-code/index.vue'),
          meta: {
            title: [
              {
                titleName: '修改店铺邀请码密码',
                toPath: '/change-store-code'
              }
            ],
            goBack: '/mine',
            goBackShow: true,
            headerHide: false,
            footerShow: false
          }
        },
        // 订单详情
        {
          path: '/order-detail',
          name: 'order-detail',
          component: () => import(/* webpackChunkName: "order-detail" */ '@/pages/order-detail/index.vue'),
          meta: {
            title: [
              {
                titleName: '订单详情',
                toPath: '/order-detail'
              }
            ],
            goBack: '/order-list',
            goBackShow: true,
            headerHide: false,
            footerShow: false
          }
        },
        //店长订单详情
        {
          path: '/shop-order-detail',
          name: 'shop-order-detail',
          component: () => import(/* webpackChunkName: "shop-order-detail" */ '@/pages/shop-order-detail/index.vue'),
          meta: {
            title: [
              {
                titleName: '订单详情',
                toPath: '/shop-order-detail'
              }
            ],
            goBack: '/order-list',
            goBackShow: true,
            headerHide: false,
            footerShow: false
          }
        },
        // 订单评价
        {
          path: '/order-evaluate',
          name: 'order-evaluate',
          component: () => import(/* webpackChunkName: "order-evaluate" */ '@/pages/order-evaluate/index.vue'),
          meta: {
            title: [
              {
                titleName: '订单评价',
                toPath: '/order-evaluate'
              }
            ],
            goBack: '/order-list',
            goBackShow: true,
            headerHide: false,
            footerShow: false
          }
        },
          // 司机信息
          {
            path: '/diver',
            name: 'diver',
            component: () => import(/* webpackChunkName: "diver" */ '@/pages/diver/index.vue'),
            meta: {
              title: [
                {
                  titleName: '司机信息',
                  toPath: '/mine'
                }
              ],
              goBack: '/shop-mine',
              goBackShow: true,
              footerShow: true
            } 
          } ,
          // 店长我的
          {
            path: '/shop-mine',
            name: 'shop-mine',
            component: () => import(/* webpackChunkName: "shop-mine" */ '@/pages/shop-mine/index.vue'),
            meta: {
              title: [
                {
                  titleName: '我的',
                  toPath: '/shop-mine'
                }
              ],
              footerShow: true,
              goBack: '/mine',
            } 
          } ,  
          // 司机我的
          {
            path: '/diver-mine',
            name: 'diver-mine',
            component: () => import(/* webpackChunkName: "diver-mine" */ '@/pages/diver-mine/index.vue'),
            meta: {
              title: [
                {
                  titleName: '我的',
                  toPath: '/mine'
                }
              ],
              footerShow: true
            } 
          } ,  
          // 司机门店
          {
            path: '/diver-shop',
            name: 'diver-shop',
            component: () => import(/* webpackChunkName: "diver-shop" */ '@/pages/diver-shop/index.vue'),
            meta: {
              title: [
                {
                  titleName: '负责门店信息',
                  toPath: '/mine'
                }
              ],
              goBack: '/diver-mine',
              goBackShow: true,
              footerShow: true
              // headerHide: true,   
            } 
          } ,  
      ]
    }
  ]
})
