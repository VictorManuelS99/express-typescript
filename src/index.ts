import express, { Request, Response } from "express";
import cors from "cors";
import { UserController } from "./User";

class App {
  app: express.Application;
  user: express.IRoute;
  userController: UserController;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    this.user = this.app.route("/user");
    this.userController = new UserController();

    this.app.listen(1234, () => {
      console.log("Server running in 1234 port");
    });
  }

  getUsers() {
    const user = this.user;
    const userController = this.userController;

    user.get((req: Request, res: Response) => {
      res.send(userController.getUsers());
    });
  }

  createUser() {
    const user = this.user;
    const userController = this.userController;

    user.post((req: Request, res: Response) => {
      const { username, password } = req.body;
      if (!username?.trim() || !password?.trim()) {
        return res.status(400).send("Bas username or password");
      }

      userController.addUser({ username, password });
      res.status(201).send("User created");
    });
  }

  createApp() {}
}

new App();
