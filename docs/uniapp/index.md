# uniapp

## 什么是uniapp
- uniapp是一个允许用vue开发所有前端应用的框架。允许开发者用一套代码同时发布到安卓，ios上。

## uniapp适用于哪些场景
- 多平台开发，快速原型开发，中小型项目

## uniapp有哪些限制
- 性能问题
- 平台特定功能限制
- 插件和第三方库的依赖

## uniapp Ios打包流程
- 注册Apple Developer账号，注册应用，配置appid，证书，设备，描述文件
- 通过“manifest.json”配置应用信息
- 线上打包
- 登录到App Store Connect，提交应用进行审核

## uniapp页面跳转方式
- uni.navigateTo
- uni.redirectTo
- uni.switchTab
- uni.reLaunch
- uni.navigateBack

## uniapp页面生命周期
- onLoad
- onLaunch
- onShow
- onHide
- onUnload
- onResize