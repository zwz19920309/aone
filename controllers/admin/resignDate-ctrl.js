const HttpResult = require('../../common/http/http-result')
const ToolUtil = require('../../common/utils/tool-util')
const resignDateService = require('../../services/admin/resigndate-service')

// 获取日期类型类表
const getResignDateList = async (ctx) => {
  let resignDateList = await resignDateService.getResignDateList()
  ctx.body = HttpResult.response(HttpResult.HttpStatus.SUCCESS, { list: resignDateList }, 'SUCCESS')
}

// 获取日期类型类表
const addResignDate = async (ctx) => {
  let { resignDates } = ctx.request.body
  let dates = []
  let oldDatesList = await resignDateService.getResignDateList()
  let olddDates = []
  oldDatesList.forEach(date => {
    olddDates.push(date.re_date)
  })
  let newDates = ToolUtil.removeDuplication(resignDates, olddDates)
  console.log('@newDates: ', newDates)
  newDates.forEach(date => {
    dates.push([date])
  })
  let resignDateList = await resignDateService.addResignDate(dates)
  ctx.body = HttpResult.response(HttpResult.HttpStatus.SUCCESS, { list: resignDateList }, 'SUCCESS')
}

module.exports = {
  getResignDateList,
  addResignDate
}
