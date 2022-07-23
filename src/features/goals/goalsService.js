import axios from "axios";

const API_ROUTE = process.env.REACT_APP_API_URL + "api/goals/";

// create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_ROUTE, goalData, config);
  console.log(response.data);

  return response.data;
};

// get user goal
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_ROUTE, config);

  return response.data;
};

// delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_ROUTE + goalId, config);

  return response.data;
};

const goalsService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalsService;
