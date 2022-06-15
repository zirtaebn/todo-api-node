import { Request, Response } from "express";

import Task from '../models/task.model';

export const createTask = async (req: Request, res: Response) => {

    if( req.body.title ) {
 
         let newTask = await Task.create({
 
             title: req.body.title,
             done: req.body.done ? true : false
         });
 
         res.status(201).json({message: 'Task successfully added!', task: newTask})
 
    } else {
 
     res.json({ error: 'No data sent.'})
 
    }        
}

export const readTasks = async (req: Request, res: Response) => {

    const list = await Task.find();
    res.status(200).json({ list });

}

export const updateTask = async (req: Request, res: Response) => {

    const id:string = req.params.id;

    let task = await Task.findById(id);

    if (task) {

        if (req.body.title){

            task.title = req.body.title
        }

        if (req.body.done) {

            switch (req.body.done.toLowerCase()) {
                case 'true':
                case '1':
                    task.done = true
                    break;
            
                case 'false':
                case '0':
                    task.done = false
                    break;    
            }
        }

        await task.save();
        res.status(200).json({ message: 'Task successfully updated!', task})

    } else {

        res.status(404).json({ error: 'Item not found.' })
    }
}

export const removeTask = async (req: Request, res: Response) => {

    const id:string = req.params.id;

    let task = await Task.findById(id);

    if (task) {

        await task.remove();

        res.status(200).json({ message: 'Task successfully removed!'})
    }
}


