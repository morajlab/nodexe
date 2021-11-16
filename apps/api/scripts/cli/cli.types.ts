export interface ICliProps {
  argv: string[];
  options: { [key: string]: string[] };
}

export interface ICheckArgsProps {
  task?: string;
}
