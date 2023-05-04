// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children: [
				{
					// 注意不要写成 /news
					path: 'news',
					component: News,
					beforeEnter(from,to,next) {
						console.log('进入news');
						next();
					}
				},
				{
					path: 'message',
					component: Message,
					children: [
						{
							name: "detail",
							path: 'detail/:id/:title',
							// path: 'detail',
							component: Detail,
							// 此方式配合 props 使用
							props($route){
								console.log($route);
								return {
									// id: $route.query.id,
									// title: $route.query.title,
									id: $route.params.id,
									title: $route.params.title,
								}
							}
						}
					]
				}
			]
		}
	]
})

// 全局前置路由守卫
router.beforeEach((from,to,next) => {
	console.log('beforeEach',from,to);
	next();
})

// 全局后置路由守卫
router.afterEach((from,to) => {
})

export default router