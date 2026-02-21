export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface MusicItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail?: string;
  date: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  src: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Music Club Website',
    description: 'Personal portfolio built with React, Redux, and MUI.',
    tags: ['React', 'TypeScript', 'MUI'],
    github: 'https://github.com/minglong51/MusicClubWebsite',
  },
  {
    id: '2',
    title: 'Sample Project',
    description: 'A demo project showcasing full-stack development.',
    tags: ['Node.js', 'Python', 'AWS'],
    github: 'https://github.com/minglong51',
  },
];

export const musicItems: MusicItem[] = [
  {
    id: '1',
    title: 'Piano Cover - Sample',
    description: 'A piano arrangement of a popular song.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2024-01-15',
  },
  {
    id: '2',
    title: 'Original Composition',
    description: 'An original piece exploring ambient soundscapes.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    date: '2024-02-20',
  },
];

export const photos: PhotoItem[] = [
  { id: '1', title: 'City Lights', src: 'https://picsum.photos/seed/1/800/600', category: 'Urban' },
  { id: '2', title: 'Mountain View', src: 'https://picsum.photos/seed/2/800/600', category: 'Nature' },
  { id: '3', title: 'Street Scene', src: 'https://picsum.photos/seed/3/800/600', category: 'Urban' },
  { id: '4', title: 'Sunset', src: 'https://picsum.photos/seed/4/800/600', category: 'Nature' },
  { id: '5', title: 'Architecture', src: 'https://picsum.photos/seed/5/800/600', category: 'Urban' },
  { id: '6', title: 'Forest Path', src: 'https://picsum.photos/seed/6/800/600', category: 'Nature' },
];
