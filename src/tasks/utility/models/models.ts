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
