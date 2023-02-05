import axios from "axios";
import PROJECT from "./types";

export const requestProjects = (data) => async (dispatch) => {
  dispatch({
    type: PROJECT.GET_DATA,
  });
  try {
    // If endpoint would not be blocked by CORS policy
    // we get a proper response back
    // const json = await axios.get("https://api.gcfund.org/v1/projects");

    // You can simulate delayed response here
    // const json = await new Promise((complete) => {
    //   setTimeout(() => {
    //     complete(data);
    //   }, 5000);
    // });
    const json = data;
    dispatch({
      type: PROJECT.GET_DATA_SUCCESS,
      data: json,
      themes: [...new Set(json.map((project,index) => project?.Theme)).values()],
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: PROJECT.GET_DATA_SUCCESS,
      data: [],
      themes: [],
      isError: true,
    });
  }
};