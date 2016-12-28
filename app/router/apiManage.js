const router = require('./index.js');
const controller = require('../controller/apiManage');
// const checkLogin = require('../auth').checkLogin
// 查询书签

let util = require('../util');
let formatParam = util.formatParam;

router.get('/mock/getApiBase', formatParam, controller.getApiBase)

router.post('/mock/addApiBase', formatParam, controller.addApiBase)

router.put('/mock/editApiBase', formatParam, controller.editApiBase)

router.delete('/mock/deleteApiBase', formatParam, controller.deleteApiBase)


