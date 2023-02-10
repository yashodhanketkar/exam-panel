const SampleQuestion = [
  {
    number: 1,
    section: "physics",
    instruction: "Hello world",
    question: "Solve x - y, if x = 5 and y = 6",
    options: ["8", "7", "0", "12"],
  },
  {
    number: 2,
    section: "chemistry",
    instruction: "Hello world",
    question: "Solve x * y, if x = 5 and y = 6",
    options: ["5", "6", "1", "11"],
  },
  {
    number: 3,
    section: "maths",
    instruction: "Hello world",
    question: "Solve x + y, if x = 5 and y = 6",
    options: ["5", "6", "1", "11"],
  },
  {
    number: 4,
    section: "maths",
    instruction: "Hello world 2",
    question: "Solve x / y, if x = 5 and y = 6",
    options: ["5", "6", "1", "11"],
  },
];

let defaultResponse: any = {};

for (let i = 1; i < SampleQuestion.length + 1; i++) {
  defaultResponse[i] = {
    response: "",
    status: "not-visited",
  };
}

export const sections = [
  {
    name: "all",
    label: "All Sections",
  },
  {
    name: "physics",
    label: "PHYSICS",
  },
  {
    name: "chemistry",
    label: "CHEMISTRY",
  },
  {
    name: "maths",
    label: "MATHS",
  },
];

export const pageLimits: any = {
  all: {
    start: 1,
    end: 4,
  },
  physics: {
    start: 1,
    end: 1,
  },
  chemistry: {
    start: 2,
    end: 2,
  },
  maths: {
    start: 3,
    end: 4,
  },
};

export { defaultResponse };
export default SampleQuestion;
