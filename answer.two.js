import DATA from "./data.json";
const answerTwo = () => {

  let groupNames = DATA.reduce((result, item) => {
    result[item.group] = []
    return result;
  }, {});

  Object.keys(groupNames).forEach(group => {
    let findStudents = DATA.filter(student => student.group == group);
    groupNames[group] = findStudents;
  });


  console.log("answerTwo by Group Names", groupNames)
};

export default answerTwo;

