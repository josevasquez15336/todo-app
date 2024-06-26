export interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
  }
  
  export type FilterType = 'All' | 'Active' | 'Completed';
  