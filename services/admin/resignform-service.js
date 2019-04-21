const DBHelper = require('../../common/db/db-helper')
/**
  * 获取补签方式列表
  * @method getResignFormList
  * @param  {object} params - 参数
  * @return {object}
 */
const getResignFormList = async (params) => {
  let resignformList = await DBHelper.getResignFormList()
  return resignformList
}

module.exports = {
  getResignFormList
}
