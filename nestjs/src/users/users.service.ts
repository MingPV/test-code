// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UsersService {}

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [{ id: 1, name: 'Ming' }, { id: 2, name: 'John' }];

  findAll() {
    return this.users;
  }
}
