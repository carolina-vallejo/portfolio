export interface Project {
  key: number;
  category_key: number;
  category: string;
  title: string;
  year: string;
  spec: string;
  description: string;
  color: string;
  slides: {
    [key: string]: string;
  };
  video?: string;
  video2?: string;
}
