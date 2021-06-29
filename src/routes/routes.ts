import express, { Request, Response } from "express";

const route = express().route("/hello");

export class Routes {
  app: any;
  helloWorld() {
    route.get((req: Request, res: Response) => {
      res.send("Hello world");
    });
  }
}
 