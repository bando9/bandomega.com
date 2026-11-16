import { RemixiconComponentType } from "@remixicon/react";
import { StaticImageData } from "next/image";

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

export type PostsType = PostType[];

export interface Tool {
  id: number;
  name: string;
  icon: RemixiconComponentType;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  tools: Tool[];
  websiteURL: string;
  githubURL: string;
  projectdetailURL: string;
  isContentTextLeft: boolean;
}

export type ProjectsType = ProjectType[];

export type HeaderProps = {
  title: string;
  description: string;
  preTitle?: string;
};
