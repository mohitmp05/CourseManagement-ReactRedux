import axios from "axios";

export const courseGetAll = (courses) => {
  console.log("get all", courses);
  return {
    type: "course/getAll", // reducer
    data: courses,
  };
};

export const getcourse = (id) => {
    return async function(dispatch, getState) {
        await axios.get("http://localhost:8080/courses/" + id)
        .then(data => {
            console.log(data);
            return dispatch({
                type: "course/getById",
                data: data.data
            });
        });
    };
}

export const courseDelete = (id) => {
  return async function (dispatch, getState) {
    await axios.delete("http://localhost:8080/courses/" + id).then((data) => {
      console.log("delete", data);
      alert("Course Deleted")
      return dispatch(courseFetchAll());
    });
  };
};

export const courseUpdate = (course) => {
    return async function(dispatch, getState) {
        await axios.put("http://localhost:8080/courses/",  course)
        .then(data => {
            console.log(data);
            alert("Course Updated")
        });
    };
}

export const courseAdd = (course) => {
  if (course) {
    return async function (dispatch, getState) {
      await axios.post("http://localhost:8080/courses", course).then((data) => {
        console.log(data);
        alert("Course Added")
      });
    };
  }
};

export const courseFetchAll = () => {
  return async function (dispatch, getState) {
    await axios.get("http://localhost:8080/courses").then((data) => {
      console.log(data);
      return dispatch(courseGetAll(data.data));
    });
  };
};
