var express = require('express');
var router  = express.Router();
 
// ユーザのサンプルデータ
var userList = [
  {
    id: "1",
    name: "icchy",
    age: "24",
    hobby: "card game"
  },{
    id: "2",
    name: "icchy-san",
    age: "24",
    hobby: "hip hop"
  }
]
 
// GET
router.get('/', function(req, res, next) {
  res.json(userList);
});
 
module.exports = router;
