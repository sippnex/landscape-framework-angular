export class RestApiPage<T> {

  page: number;

  size: number;

  length: number;

  content: T[];

  constructor(page: number, size: number, length: number, content: T[]) {
    this.page = page;
    this.size = size;
    this.length = length;
    this.content = content;
  }

}
