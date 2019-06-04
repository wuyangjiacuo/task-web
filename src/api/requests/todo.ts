import { Ajax } from '../base';

interface Todo {
  id: number,
  content: string,
  status: number,
  importance: number,
  isDeleted: number
}

class TodoServer {
  baseUrl: string;
  constructor(URL: string) {
    this.baseUrl = URL;
  }
  getAll(projectId: number) {
    return Ajax.get(this.baseUrl + '/all?projectId=' + projectId)
  }
  add(todo: object) {
    return Ajax.put(this.baseUrl + '/add', todo)
  }
  update(todo: Todo) {
    return Ajax.put(this.baseUrl + '/update?id=' + todo.id, todo)
  }
}

export default TodoServer;