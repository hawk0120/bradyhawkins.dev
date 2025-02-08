export interface Post {
  title: string;
  slug?: string;
  date: Date;
}

export const entries: Post[] = [

   {
   title: 'Digital Trade Exports per Capita',
    date: new Date('2024-12-12'),
  },

  {
    title: 'Leetcode Strategies: Two Pointer',
    date: new Date('2024-06-05'),
  },
  {
    title: 'build weepy',
    date: new Date('2024-05-24'),
  },
  {
    title: 'build debby',
    date: new Date('2024-05-16'),
  },
  {
    title: 'Java Streams',
    date: new Date('2024-04-05'),
  },
  {
    title: 'Welcome to my Website',
    date: new Date('2024-03-31'),
  },
  {
    title: 'Dotfiles',
    date: new Date('2023-02-01'),
  },
  {
    title: 'Repatriation and the Rosetta Stone',
    date: new Date('2022-12-22'),
  },
];
