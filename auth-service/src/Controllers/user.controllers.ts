import { Request, Response } from 'express';

const currentUser = async (req: Request, res: Response) => {
  res.send('I am Vova');
}

const signin = async (req: Request, res: Response) => {
  res.send('You are sign')
}

const signout = async (req: Request, res: Response) => {
  // req.session = null;

  res.send({});
}

const signup = async (req: Request, res: Response) => {
  res.send({ name: 'Vova', surname: 'ZiLvova'})
}

export { currentUser, signin, signout, signup };