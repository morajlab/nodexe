export interface ITaskProps {
  name: string;
  task: () => Promise<any>;
  description?: string;
  options?: { [key: string]: string };
}
