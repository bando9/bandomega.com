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
        id: 101,
        li: "Ensured accuracy and validation of transaction data, developing strong attention to detail and structured data management.",
      },
      {
        id: 102,
        li: "Maintained organized documentation and digital records,reinforcing systematic workflows relevant to database and code management.",
      },
      {
        id: 103,
        li: "Collaborated with cross-functional teams (sales & operations), enhancing communication, teamwork, and problem-solving skills.",
      },
    ],
  },
  {
    id: 2,
    title: "PVMBG, Sundoro-Sumbing Observation Post, Volcano Observer Intern",
    year: "August 2022 – September 2022.",
    location: "Temanggung, Central Java.",
    description:
      "The PVMBG Sundoro-Sumbing Observation Post is part of Indonesia’s Geological Agency responsible for monitoring volcanic activity. The post operates seismographic instruments and conducts direct observations to collect and analyze data from Mount Sundoro and Mount Sumbing.",
    list: [
      {
        id: 106,
        li: "Performed maintenance and monitoring of seismograph instruments, reinforcing technical accuracy and system monitoring skills.",
      },
      {
        id: 107,
        li: "Assisted in analyzing and reporting volcanic data, building strong data analysis and documentation abilities.",
      },
      {
        id: 108,
        li: "Conducted systematic observations and data collection of volcanic activity, demonstrating attention to detail and structured workflows.",
      },
    ],
  },
  {
    id: 3,
    title:
      "Physics Student Association (HMJ Fisika), Head of Education and Reasoning Department.",
    year: "2021 – 2022.",
    location: "Semarang, Central Java",
    description:
      "The Physics Student Association (HMJ Fisika) at UIN Walisongo is an academic organization managed by physics students.",
    list: [
      {
        id: 111,
        li: "Led and coordinated meetings for the Education and Reasoning division, demonstrating leadership and organizational skills.",
      },
      {
        id: 112,
        li: "Served as person-in-charge for the National Islamic Physics Olympiad program for high school and junior high school levels.",
      },
      {
        id: 113,
        li: "Developed a registration website and implemented question-and-answer input using LaTeX, showcasing early web development and technical skills.",
      },
    ],
  },
  {
    id: 4,
    title: "Bidikmisi Community Walisongo, Media and Journalism Staff.",
    year: "2021 – 2022.",
    location: "Semarang, Central Java.",
    description:
      "Bidikmisi Community Walisongo is a student organization at UIN Walisongo formed by scholarship awardees of the Bidikmisi program. The organization focuses on academic development, leadership training, and social activities to support the personal growth of its members.",
    list: [
      {
        id: 121,
        li: "Managed the organization’s social media platforms, ensuring consistent and engaging communication.",
      },
      {
        id: 122,
        li: "Published and distributed information about programs and activities to reach a wider student audience.",
      },
    ],
  },
];
