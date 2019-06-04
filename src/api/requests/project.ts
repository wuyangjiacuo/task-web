import { Ajax } from '../base';

interface Project {
  parrentId ?: number,
  label: string
}

class ProjectServer {
  baseUrl: string;
  constructor(URL: string) {
    this.baseUrl = URL;
  }
  getAll(parrentId: number) {
    return Ajax.get(this.baseUrl + '/all?parrentId=' + parrentId)
  }
  addProject(project: Project) {
    return Ajax.post(this.baseUrl + '/add', project)
  }
}

export default ProjectServer;