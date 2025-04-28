import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Logger } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  private readonly logger = new Logger(TasksController.name);

  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: any) {
    this.logger.log('Creating task');
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    this.logger.log('Fetching all tasks');
    return this.tasksService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: any) {
    this.logger.log(`Updating task ${id}`);
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.log(`Deleting task ${id}`);
    return this.tasksService.remove(id);
  }
}
