const Router = require("express");
const router = new Router();
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");
const userRouter = require("./userRouter");
const deviceRouter = require("./deviceRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/device", deviceRouter);
router.use("/brand", brandRouter);

module.exports = router;
