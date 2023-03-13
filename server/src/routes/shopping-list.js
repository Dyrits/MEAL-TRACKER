import { Router } from "express";

import controller from "../controllers/shopping-list.js";

const router = Router();

router.get("/", controller.get);

export default router;
