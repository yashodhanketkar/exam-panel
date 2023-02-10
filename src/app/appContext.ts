import React from "react";

const currentQuestion = {
    questionNumber: 1,
    questionStatus: 'not-visited',
}

export const defaultContext: {
    pageNumber: number,
    section: string,
    currentQuestion: typeof currentQuestion,
} = {
    pageNumber: 1,
    section: 'all',
    currentQuestion: currentQuestion
}

const AppContext = React.createContext(defaultContext);

export default AppContext;
