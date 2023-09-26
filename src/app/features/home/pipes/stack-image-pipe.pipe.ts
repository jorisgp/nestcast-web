import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stackImagePipe',
})
export class StackImagePipePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    switch (value) {
      case StackType.JAVASCRIPT:
        return 'assets/images/stack/javascript.svg';
      case StackType.TYPESCRIPT:
        return 'assets/images/stack/typescript.svg';
      case StackType.ANGULAR:
        return 'assets/images/stack/angular.svg';
      case StackType.NESTJS:
        return 'assets/images/stack/nestjs.svg';
      case StackType.NODEJS:
        return 'assets/images/stack/nodejs.svg';
      case StackType.JEST:
        return 'assets/images/stack/jest.svg';
      case StackType.SPECTATOR:
        return 'assets/images/stack/spectator.svg';
      case StackType.CYPRESS:
        return 'assets/images/stack/cypress.png';
      case StackType.AWS:
        return 'assets/images/stack/aws.svg';
      case StackType.AWSS3:
        return 'assets/images/stack/awss3.svg';
      case StackType.MONGODB:
        return 'assets/images/stack/mongodb.svg';
      case StackType.GITHUB:
        return 'assets/images/stack/github.svg';
      case StackType.GITHUBACTIONS:
        return 'assets/images/stack/githubactions.svg';
      case StackType.CODIUM:
        return 'assets/images/stack/codium.png';
      case StackType.CHATGPT:
        return 'assets/images/stack/chatgpt.svg';
      case StackType.GITHUBCOPILOT:
        return 'assets/images/stack/githubcopilot.svg';
      case StackType.NGRX:
        return 'assets/images/stack/ngrx.svg';
      default:
        return 'assets/images/stack/javascript.svg';
    }
  }
}

export enum StackType {
  JAVASCRIPT = 'javascript',
  TYPESCRIPT = 'typescript',
  ANGULAR = 'angular',
  NESTJS = 'nestjs',
  NODEJS = 'nodejs',
  JEST = 'jest',
  SPECTATOR = 'spectator',
  CYPRESS = 'cypress',
  AWS = 'aws',
  AWSS3 = 'awss3',
  MONGODB = 'mongodb',
  GITHUB = 'github',
  GITHUBACTIONS = 'githubactions',
  CODIUM = 'codium',
  CHATGPT = 'chatgpt',
  GITHUBCOPILOT = 'githubcopilot',
  NGRX = 'ngrx',
}
