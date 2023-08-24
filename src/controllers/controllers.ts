import { Request, Response, NextFunction } from "express";

export function getIndex(req: Request, res: Response) {
  res.render("partials/index", {
    title: "LexiJoy app",
  });
}

export function getAbout(req: Request, res: Response) {
  res.render("partials/about", {
    title: "About",
  });
}
export function getContact(req: Request, res: Response) {
  res.render("partials/contact", {
    title: "Contact",
  });
}
export function getBlog(req: Request, res: Response) {
  res.render("partials/blog", {
    title: "Blog",
  });
}
export function getLogin(req: Request, res: Response) {
  res.render("partials/login", {
    title: "Register",
  });
}

export function getSign(req: Request, res: Response) {
  res.render("partials/sign-in", {
    title: "Sign-in",
  });
}