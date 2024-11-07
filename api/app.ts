import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import createError from 'http-errors';
import statusRouter from "./routes/statusRouter";


interface ErrorInterface {
  message: string;
  status: number;
}


const app = express();

// Middleware
const corsOption = {
  origin: '*'
}

app.use(helmet());
app.use(express.json());
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(statusRouter);

// error handler
app.use(function (err: ErrorInterface, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('Something went wrong');
});

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

function set(port: string, value: any): void {
  app.set(port, value);
}

function listen(port: number | string): void {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

function on(event: string, callback: (...args: any[]) => void): void {
  app.on(event, callback);
}

function address(): { port: number } | string {
  const serverAddress = app.settings();
  if (typeof serverAddress === 'string') {
    return serverAddress;
  }
  return { port: serverAddress.port };
}

export { set, listen, on, address };

export default app;