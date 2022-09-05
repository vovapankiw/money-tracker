import { app } from './app';

const PORT = 3000;

const start = async (port: number) => {
  app.listen(port, () => {
    console.info(`Server is running on ${port} port`);
  });
};

start(PORT);
