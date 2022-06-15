import express from 'express';
import dotenv from 'dotenv';
import { mongoConnect } from './database/mongo';
import mainRoutes from './routes/task.route'



dotenv.config();

mongoConnect();

const server = express();

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

server.use((_, res) => {

    res.status(404).send('Not found!')
})

server.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
    
})
