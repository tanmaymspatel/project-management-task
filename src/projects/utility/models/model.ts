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

export interface IProjectFormValues {
  id?: string;
  clientName: string;
  description: string;
  projectName: string;
  projectType: string;
  reportingManager: string;
  status: string;
  userId: number;
}
