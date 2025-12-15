export type ListType = {
  id: number;
  li: string;
};

export type WorkType = {
  id: number;
  title: string;
  year: string;
  location: string;
  description: string;
  list: ListType[];
};

export type WorksType = WorkType[];

export const Works: WorksType = [
  {
    id: 1,
    title: "PT. Roda Pasifik Mandiri, Account Receivable",
    year: "Oktober 2024 - Present.",
    location: "Semarang, Central Java.",
    description:
      "PT Roda Pasifik Mandiri is an Indonesian manufacturing company specializing in bicycles and related products. The company operates in the consumer goods sector, focusing on delivering affordable and reliable mobility solutions.",
    list: [
      {
        id: 100,
        li: "Ensured accuracy and validation of transaction data, developing strong attention to detail and structured data management.",
      },
      {
        id: 101,
        li: "Maintained organized documentation and digital records,reinforcing systematic workflows relevant to database and code management.",
      },
      {
        id: 102,
        li: "Collaborated with cross-functional teams (sales & operations), enhancing communication, teamwork, and problem-solving skills.",
      },
    ],
  },
];
