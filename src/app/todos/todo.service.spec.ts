/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TodoService } from './todo.service.ts';

describe('Service: Todo', () => {
  beforeEach(() => {
    addProviders([TodoService]);
  });

  it('should ...',
    inject([TodoService],
      (service: TodoService) => {
        expect(service).toBeTruthy();
      }));
});
