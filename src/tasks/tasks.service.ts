import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  create(createTaskDto: any) {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  findAll() {
    return this.taskModel.find().exec();
  }

  update(id: string, updateTaskDto: any) {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true });
  }

  remove(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
