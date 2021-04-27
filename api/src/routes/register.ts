import { Router } from "express";
import { appErrorHandler, guest } from "../middleware";
import { logIn } from "../auth";
import { User } from "../models";
import { registerSchema, validate } from "../validation";
import { BadRequest } from "../errors";

const router = Router();

router.post(
  "/register",
  guest,
  appErrorHandler(async (req: any, res: any) => {
    await validate(registerSchema, req.body);

    const { email, name, password } = req.body;

    const foundUser = await User.exists({ email });

    if (foundUser) {
      throw new BadRequest("Invalid Email");
    }

    const user = await User.create({
      email,
      name,
      password,
    });

    logIn(req, user._id);

    res.json({ user });
  })
);

export default router;
