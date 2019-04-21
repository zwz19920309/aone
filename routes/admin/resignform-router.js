const apiRouter = require('koa-router')()
const resignFromCtrl = require('../../controllers/admin/resignform-ctrl')

// 获取签到类型列表
apiRouter.post('/getResignFormList', resignFromCtrl.getResignFormList)

module.exports = router => {
  router.use('/admin/resignform', apiRouter.routes(), apiRouter.allowedMethods())
}
