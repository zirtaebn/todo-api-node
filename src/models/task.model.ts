import { Schema, model, connection, Model } from "mongoose";

type TaskType = {


    title: string,
    done: boolean
}

const schema = new Schema<TaskType>({

    title: String, 
    done: { type: Boolean, default: false }
});


const taskModel:string = 'Task';

export default ( connection && connection.models[taskModel] ? 
    connection.models[taskModel] as Model<TaskType>
:
    model<TaskType>(taskModel, schema)
);