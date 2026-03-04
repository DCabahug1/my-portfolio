export interface EducationItem {
  institution: string;
  degree: string;
  graduation: string;
  gpa: string;
  tags: string[];
}

export const educationList: EducationItem[] = [
  {
    institution: "California State University, Northridge",
    degree: "Bachelor of Science in Computer Science · Minor in Data Science",
    graduation: "May 2027",
    gpa: "3.56",
    tags: ["Engineering Honor Society", "Society of Software Engineers"],
  },
];
