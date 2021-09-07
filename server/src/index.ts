import "./configs"
import cors from 'cors';
import express from 'express';
import { Request, Response } from 'express';

const app = express()

const whiteList = ['localhost:3000']
const port = process.env.PORT ? parseInt(process.env.PORT) : 7777


const corsOptionsDelegate: cors.CorsOptionsDelegate<any> = (req, callback) => {
  const corsOptions = (whiteList.indexOf(req.header('Origin')) !== -1)? { origin: true }: { origin: false };
  callback(null, corsOptions);
};

app.use(express.json());
app.use(cors(corsOptionsDelegate));

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;