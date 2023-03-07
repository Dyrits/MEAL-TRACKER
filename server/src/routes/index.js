import { Router } from "express";

const create$router = controller =>  {
  const router = Router();

  router.get("/", controller.get.all);
  router.post("/", controller.create);
  router.put("/:id", controller.update);

  return router;
}

export default create$router;
