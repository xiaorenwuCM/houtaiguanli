# houtaiguanli

一个通用的后台管理系统

技术栈：vite2.0 VueCli4.5  Vue3全家桶 UI框架：ElementPlus koa2/Mongo4.4
系统模块：用户登录   系统首页    用户管理   菜单管理   角色管理   部门管理   休假申请  待我审批

vue3相比vue2的优点
更小：全局API和内置组件/功能支持three-shaking(通过名叫 “tree-shaking” 的技术使打包的结果只包括实际用到的 exports)，核心代码尺寸控制在10kb
更快：性能更快,基于Proxy的变动侦测，性能整体由于getter/setter,虚拟DOM重构(VDOM优化，增加了静态标记，静态提升，事件缓存)
维护性更高：代码采用monorepo结构，内部分层更清晰
加强API设计一致性：采用Composition API  定义响应式：ref/reactive  入口函数：setup 钩子函数：computed/onMounted  上下文：getCurrentInstance/globalproperties
加强TS支持
开发更多底层功能

Vite
Vite,一个基于浏览器原生ES modeal imports的服务器

