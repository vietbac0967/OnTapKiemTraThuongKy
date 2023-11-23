const initState = {
  tasks: [
    { id: 1, name: "Code Javascript" },
    { id: 2, name: "Code React Native" },
    { id: 3, name: "Code ReactJS" },
  ],
};

export default (state = initState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
};
