import DATA from "./data.json";

const answerOne = () => {
  let assistants = DATA.filter(person => person.assistant);
  let nonAssistanst = DATA.filter(person => !person.assistant);

  // Bug
  assistants = assistants.map(assistant => {
    return {
      ...assistant,
      student: []
    }
  });

  nonAssistanst.forEach(student => {
    let findAssistantIndex = assistants.findIndex(person => person.group == student.group)
    assistants[findAssistantIndex].student.push(student)
  });

  console.log("answerOne by Assistants", assistants)
};

export default answerOne;

