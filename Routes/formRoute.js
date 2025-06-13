import { Router } from "express";

import {createForm, getAllFrom} from "../Controllers/formController.js"

const userRouter = Router();

userRouter.post("/createForm",createForm);
userRouter.get("/getForm",getAllFrom);

export default userRouter
