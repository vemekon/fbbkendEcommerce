export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGGED_USER":
      return action.payload;
    case "LOGGOUT_USER":
      return action.payload;

    default:
      return state;
  }
};
