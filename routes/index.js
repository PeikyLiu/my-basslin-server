const router = require("koa-router")({
  prefix: "/",
});

const diaryController = require("../controllers/diary.js");
const indexController = require("../controllers/index.js");

router.get("/", indexController.indexRender);
router.post("api/checkcode", diaryController.checkCode);

module.exports = router;
