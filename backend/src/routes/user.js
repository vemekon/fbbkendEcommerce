import express from "express";
const router = express.Router();

router.get("/second", (req, res) => {
  res.send("weyin");
});

//export default router;
module.exports = router;
