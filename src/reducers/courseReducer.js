const initializeState = {
  courses: [],
  course: {}
}

const courseReducer = (state = initializeState, action) => {
  console.log(action.type);
  switch (action.type) {
      case "course/add":
          if (!state.courses) state.courses = [];
          console.log(action.data);
          return state;
      case "course/getAll":
          return {courses: action.data};
      case "course/getById":
          return {
              courses: state.courses,
              //course= action.whatever is fetched from api
              course: action.data
          }
      default:
          console.log(state.courses);
          return state;
  }
}

export default courseReducer;