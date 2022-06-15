import { Router } from "express";

import * as TaskController from '../controllers/task.controller'


const router = Router();

router.post('/', TaskController.createTask);
router.get('/', TaskController.readTasks);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.removeTask);





export default router