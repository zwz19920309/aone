const HttpResult = require('../../common/http/http-result')
const datetypeService = require('../../services/admin/datetype-service')

// 获取日期类型类表
const getDateTypeList = async (ctx) => {
  let { type } = ctx.request.body
  let dateTypeList
  (!type) && (type = 0)
  if (parseInt(type) === 0) {
    dateTypeList = await datetypeService.getDateTypeList()
  } else {
    dateTypeList = await datetypeService.getDateTypeListByType(type)
  }
  console.log('@getdateTypeList:--------- ')
  ctx.body = HttpResult.response(HttpResult.HttpStatus.SUCCESS, { list: dateTypeList }, 'SUCCESS')
}

module.exports = {
  getDateTypeList
}
