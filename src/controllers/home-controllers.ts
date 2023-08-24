import { Request, Response, NextFunction } from "express";

export function getHome(req: Request, res: Response) {
  res.render("home/selection", {
    title: "Home",
    home:true
  });
  if (req.cookies.username) {
    res.redirect("/logi n");
    return;
  }
}
export function getProfile(req: Request, res: Response) {
  res.render("home/profile", {
    title: "Profile",
  });
}
export function getAdd(req: Request, res: Response) {
  res.render("home/addWord", {
    title: "Add word",
    add: true
  });
}
export function getSay(req: Request, res: Response) {
  res.render("home/say", {
    title: "To say",
    say:true
  });
}
