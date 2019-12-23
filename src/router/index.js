import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'

import Router from 'vue-router'

// import Home from 'pages/home';
// import Forbidden from 'pages/forbidden';
// import NotFound from 'pages/not-found';
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(iView)
Vue.use(contentmenu)

/**
 * 1. 首页定义：第一个menu的第一个submenu页面即为首页
 * 2. 单击菜单，更新router，更新router前先发送请求判断是否有权限访问，有权限访问则可以，否则跳转forbidden页面
 * 3. 当打开/a/b页面时，应该自动将menu a下的b高亮
 * 4. 当初始打开/时，自动跳转到首页
 */

// 项目管理和查询
// const ProjectManage = () => import(/* webpackChunkName: "project-manage" */ 'pages/project-manage');

// // 任务详情
// const TaskDetail = () => import(/* webpackChunkName: "task-detail" */ 'pages/task-detail');

// // 待领取作业任务
// const EditAllocate = () => import(/* webpackChunkName: "edit-allocate" */ 'pages/edit-allocate');

// // 我的待作业任务
// const MyTodoEdit = () => import(/* webpackChunkName: "my-todo-edit" */ 'pages/my-todo-edit');

// // 作业员编辑任务
// const MapEdit = () => import(/* webpackChunkName: "map-edit" */ 'pages/map-edit');

// // 我的已作业任务
// const MyDoneEdit = () => import(/* webpackChunkName: "my-done-edit" */ 'pages/my-done-edit');

// // 待领取审核任务
// const AuditAllocate = () => import(/* webpackChunkName: "audit-allocate" */ 'pages/audit-allocate');

// // 我的待审核任务
// const MyTodoAudit = () => import(/* webpackChunkName: "my-todo-audit" */ 'pages/my-todo-audit');

// // 审核员审核任务
// const MapAudit = () => import(/* webpackChunkName: "map-audit" */ 'pages/map-audit');

// // 我的已审核任务
// const MyDoneAudit = () => import(/* webpackChunkName: "my-done-audit" */ 'pages/my-done-audit');

// // 当日作业量统计
// const DailyWorkStatistics = () => import(/* webpackChunkName: "daily-work-statistics" */ 'pages/statistics/daily-work-statistics');

// // 当日审核量统计
// const DailyAuditStatistics = () => import(/* webpackChunkName: "daily-audit-statistics" */ 'pages/statistics/daily-audit-statistics');

// // 历史作业量统计
// const HistoryWorkStatistics = () => import(/* webpackChunkName: "history-work-statistics" */ 'pages/statistics/history-work-statistics');

// // 历史审核量统计
// const HistoryAuditStatistics = () => import(/* webpackChunkName: "history-audit-statistics" */ 'pages/statistics/history-audit-statistics');

// // 数据判重项目管理
// const FusionProjectManage = () => import(/* webpackChunkName: "fusion-project-manage" */ 'pages/fusion-project-manage');

// // 数据判重任务详情
// const FusionTaskDetail = () => import(/* webpackChunkName: "fusion-task-detail" */ 'pages/fusion-task-detail');

// // 数据判重我的待作业
// const FusionMyTodoEdit = () => import(/* webpackChunkName: "fusion-my-todo-edit" */ 'pages/fusion-my-todo-edit');

// // 数据判重作业员编辑任务
// const FusionMapEdit = () => import(/* webpackChunkName: "fusion-map-edit" */ 'pages/fusion-map-edit');

// // 数据判重我的已作业
// const FusionMyDoneEdit = () => import(/* webpackChunkName: "fusion-my-done-edit" */ 'pages/fusion-my-done-edit');

// // 数据判重我的待审核
// const FusionMyTodoAudit = () => import(/* webpackChunkName: "fusion-my-todo-audit" */ 'pages/fusion-my-todo-audit');

// // 数据判重审核员编辑任务
// const FusionMapAudit = () => import(/* webpackChunkName: "fusion-map-audit" */ 'pages/fusion-map-audit');

// // 数据判重我的已审核
// const FusionMyDoneAudit = () => import(/* webpackChunkName: "fusion-my-done-audit" */ 'pages/fusion-my-done-audit');

const routes = [
  // {
  // name: 'home',
  // path: '/',
  // component: Home
  // children: [{
  //   path: 'data-produce/project-manage',
  //   component: ProjectManage
  // }, {
  //   path: 'data-produce/task-detail',
  //   component: TaskDetail
  // }, {
  //   path: 'data-produce/edit-allocate',
  //   component: EditAllocate
  // }, {
  //   path: 'data-produce/my-todo-edit',
  //   component: MyTodoEdit
  // }, {
  //   path: 'data-produce/map-edit',
  //   component: MapEdit
  // }, {
  //   path: 'data-produce/my-done-edit',
  //   component: MyDoneEdit
  // }, {
  //   path: 'data-produce/audit-allocate',
  //   component: AuditAllocate
  // }, {
  //   path: 'data-produce/my-todo-audit',
  //   component: MyTodoAudit
  // }, {
  //   path: 'data-produce/map-audit',
  //   component: MapAudit
  // }, {
  //   path: 'data-produce/my-done-audit',
  //   component: MyDoneAudit
  // }, {
  //   path: 'statistics/daily-work-statistics',
  //   component: DailyWorkStatistics
  // }, {
  //   path: 'statistics/daily-audit-statistics',
  //   component: DailyAuditStatistics
  // }, {
  //   path: 'statistics/history-work-statistics',
  //   component: HistoryWorkStatistics
  // }, {
  //   path: 'statistics/history-audit-statistics',
  //   component: HistoryAuditStatistics
  // }, {
  //   path: 'data-fusion/fusion-project-manage',
  //   component: FusionProjectManage
  // }, {
  //   path: 'data-fusion/fusion-task-detail',
  //   component: FusionTaskDetail
  // }, {
  //   path: 'data-fusion/fusion-my-todo-edit',
  //   component: FusionMyTodoEdit
  // }, {
  //   path: 'data-fusion/fusion-map-edit',
  //   component: FusionMapEdit
  // }, {
  //   path: 'data-fusion/fusion-my-done-edit',
  //   component: FusionMyDoneEdit
  // }, {
  //   path: 'data-fusion/fusion-my-todo-audit',
  //   component: FusionMyTodoAudit
  // }, {
  //   path: 'data-fusion/fusion-map-audit',
  //   component: FusionMapAudit
  // }, {
  //   path: 'data-fusion/fusion-my-done-audit',
  //   component: FusionMyDoneAudit
  // }]
// },
// {
//   name: 'forbidden',
//   path: '/forbidden',
//   component: Forbidden
// },
// {
//   path: '*',
  //   component: NotFound
  // },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/test',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

// router.beforeEach(async (to, from, next) => {
//   try {
//     let canToNext = false;
//     const passUrls = ['/', '/forbidden'];
//     if (passUrls.indexOf(to.path) >= 0) {
//       canToNext = true;
//     } else {
//       const res = await service.uacAuthUrl(to.path);
//       canToNext = res.status === 'ok' && res.result;
//     }

//     if (canToNext) {
//       next();
//     } else {
//       next('/forbidden');
//     }
//   } catch (e) {
//     cat.report({ name: 'router beforeEach', msg: e });
//   }
// });

export default router
