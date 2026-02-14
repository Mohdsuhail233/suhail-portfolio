
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
