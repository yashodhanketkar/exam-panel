export interface SampleQuestionType {
  number: number;
  section: string;
  instruction: string;
  question: string;
  options: string[];
}

const SampleQuestion: SampleQuestionType[] = [
  {
    number: 1,
    section: "physics",
    instruction: "Please select correct option.",
    question:
      "A LED lamp produces 300 lumens of light per watt, which makes it about 20 times as efficient as an incandescent lamp and four times as efficient as the fluorescent tube. What is the reason for this?",
    options: [
      "Electricity is directly converted to light particles in LED",
      "The resistance of the filaments used in LED is very small",
      "Presence of mercury in LED lamp makes it efficient",
      "Materials used for LED production have very high refractive indices",
    ],
  },
  {
    number: 2,
    section: "physics",
    instruction: "What is the difference between GSLV and PSLV?",
    question:
      "1. While PSLV is designed mainly to deliver the earth-observation satellites, GSLV is designed mainly to deliver the communication-satellites 2. While PSLV is a three stage vehicle, GSLV is four stage vehicle",
    options: ["Only 1", "Only 2", "Both 1 & 2", "Neither 1 nor 2"],
  },
  {
    number: 3,
    section: "physics",
    instruction:
      "Which among the following affect the propagation of the Radio Waves in the atmosphere of earth?",
    question: "1. Reflection 2. Refraction 3. Diffraction 4. Absorption",
    options: ["Only 1, 2 & 3", "Only 1, 3 & 4", "Only 1, 2 & 4", "1, 2, 3 & 4"],
  },
  {
    number: 4,
    section: "physics",
    instruction: "What is Reynolds number?",
    question:
      "1. a dimensionless quantity 2. inversely proportional to viscosity of liquid 3. directly proportional to velocity of liquid 4. used for quantifying the laminar or turbulent flow of liquid",
    options: ["Only 1 & 2", "Only 1, 2 & 3", "Only 2, 3 & 4", "1, 2, 3 & 4"],
  },
  {
    number: 5,
    section: "chemistry",
    instruction: "Fill in the blanks",
    question:
      "Multiplication of equivalent weight and valency of an element is equal to ___.",
    options: ["Density", "Relative temperature", "Atomic weigh", "Atomicity"],
  },
  {
    number: 6,
    section: "chemistry",
    instruction: "Fill in the blanks",
    question:
      "Elements having same atomic numbers but different mass number are called ___.",
    options: ["isotones", "isotopes", "isotobes", "isobar"],
  },
  {
    number: 7,
    section: "chemistry",
    instruction: "Select correct option",
    question:
      "Which of the following methods helps in separating cream from milk?",
    options: [
      "Distillation",
      "Centrifugation",
      "Chromatography",
      "Sublimation",
    ],
  },
  {
    number: 8,
    section: "maths",
    instruction: "Fill in the blank",
    question:
      "A fraction which bears the same ratio to 1/27 as 3/11 bear to 5/9 is equal to ___.",
    options: ["1/55", "55", "3/11", "1/11"],
  },
  {
    number: 9,
    section: "maths",
    instruction: "Select correct option",
    question:
      "A clock strikes once at 1 o'clock, twice at 2 o'clock, thrice at 3 o'clock and so on. How many times will it strike in 24 hours?",
    options: ["78", "136", "156", "196"],
  },
  {
    number: 10,
    section: "maths",
    instruction: "Select correct option",
    question:
      "Which of the following numbers gives 240 when added to its own square?",
    options: ["15", "16", "18", "20"],
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
    end: 10,
  },
  physics: {
    start: 1,
    end: 4,
  },
  chemistry: {
    start: 5,
    end: 7,
  },
  maths: {
    start: 8,
    end: 10,
  },
};

export { defaultResponse };
export default SampleQuestion;
