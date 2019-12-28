export class RestApiPagingConfig {

  page = 0;
  size = 20;
  sortDir = 'ASC';
  sort = 'id';

  constructor(page?: number, size?: number, sortDir?: string, sort?: string) {
    if (page != null) {
      this.page = page;
    }
    if (size != null) {
      this.size = size;
    }
    if (sortDir != null) {
      this.sortDir = sortDir;
    }
    if (sort != null) {
      this.sort = sort;
    }
  }

}
