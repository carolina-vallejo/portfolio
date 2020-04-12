export interface Project {
  key_image: string;
  status: string;
  category: string;
  title: string;
  year: string;
  spec: string;
  description: string;
  color: string;
  links?: Array<{
    title: string;
    href: string;
  }>;
}

export enum STATUS {
  ARCHIVED = "archived",
  PUBLISHED = "published",
}
