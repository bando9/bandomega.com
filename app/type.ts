import { RemixiconComponentType } from "@remixicon/react";

export type PostType = {
  slug: string;
  content: string;
  author: string;
  date: Date;
  title: string;
  description: string;
  like: number;
  view: number;
  read: number;
  draft: boolean;
};

export interface Tool {
  id: number;
  name: string;
  icon: RemixiconComponentType;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tools: Tool[];
  websiteURL: string;
  githubURL: string;
  projectdetailURL: string;
  isContentTextLeft: boolean;
}

export type ProjectsType = ProjectType[];
