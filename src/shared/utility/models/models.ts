export interface IProject {
  id: string;
  userId: number;
  projectName: string;
  clientName: string;
  description: string;
  reportingManager: string;
  status: string;
  projectType: string;
}

export interface ITask {
  id?: string;
  name: string;
  userId: string;
  projectId: string;
  category: string;
  description: string;
  billingType: string;
  status: string;
}
