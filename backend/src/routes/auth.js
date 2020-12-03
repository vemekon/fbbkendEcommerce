import express from "express";
import { authCheck } from "../middlewares/auth";
import {
  create,
  createOrUpdateUser,
  getCurrentUser,
} from "../controllers/auth";
const router = express.Router();

router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, getCurrentUser);
router.get("/c", create());

//export default router;
module.exports = router;
