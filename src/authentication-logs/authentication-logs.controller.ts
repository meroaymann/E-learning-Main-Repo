// authentication_logs.controller.ts
import { Controller, Get, Post, Request } from '@nestjs/common';
import { AuthenticationLogService } from './authentication-logs.service';
import { AuthenticationLog } from './models/authlogs.schema';

@Controller('authentication_logs')
export class AuthenticationLogsController {
  constructor(private readonly authenticationLogService: AuthenticationLogService) {}

  // Fetch all authentication logs
  @Get()
  async findAll(): Promise<AuthenticationLog[]> {
    return this.authenticationLogService.findAll();
  }

  // Log an authentication event (auto-triggered) 
  @Post()
  async create(@Request() req: any): Promise<AuthenticationLog> { 
    const userId = req.user ? req.user.id : null;
    const event = req.body.event; 
    const status = req.body.status;
    const failureReason = req.body.failureReason; 

    const newLog: Partial<AuthenticationLog> = {
      userId, 
      event,
      status,
      failureReason, 
    };

    return this.authenticationLogService.create(newLog);
  }
}