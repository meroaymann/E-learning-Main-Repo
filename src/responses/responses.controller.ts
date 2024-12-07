import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { Response } from './models/responses.schema';

@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  // Submit quiz responses
  @Post('/quizzes/:id/responses')
  @HttpCode(HttpStatus.CREATED)
  async submitResponse(
    @Param('id') quizId: string,
    @Body() responseData: Partial<Response>,
  ): Promise<Response> {
    return await this.responsesService.submitResponse({
      ...responseData,
      quizId,
    });
  }

  // Get all responses for a quiz
  @Get('/quizzes/:id/responses')
  async getResponsesByQuizId(@Param('id') quizId: string): Promise<Response[]> {
    return await this.responsesService.getResponsesByQuizId(quizId);
  }

  // Get details of a specific response
  @Get('/:id')
  async getResponseById(@Param('id') id: string): Promise<Response> {
    return await this.responsesService.getResponseById(id);
  }

  // Delete a quiz response
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteResponse(@Param('id') id: string): Promise<void> {
    return await this.responsesService.deleteResponse(id);
  }
}
