import Consumer from './requests/consumer';
import Project from './requests/project';
import Todo from './requests/todo';

export default {
  Consumer: new Consumer('consumer'),
  Project: new Project('project'),
  Todo: new Todo('todo')
}