export const Bar = {
  backgroundColor: "#ddebe7",
};

export const ButtonS = {
  fontSize: "17px",
  color: " #023e8a",
  borderRadius: 0,
  "&:hover": {
    color: "#f3feff",
    backgroundColor: " #023e8a",
    borderColor: " #023e8a",
    marginTop: "-1.5px",
  },
};

export const ButtonA = ({ isActive }) =>
  isActive
    ? {
        marginTop: "-1.5px",
        color: "#f3feff",
        backgroundColor: "#03045e",
        borderColor: "#03045e",
      }
    : {};

export const linkA = ({ isActive }) =>
  isActive
    ? {
        marginTop: "-1.5px",
        color: "#03045e",
      }
    : {};
export const linkS = {
  fontWeight: "bold",
  fontSize: "19px",
  textTransform: "none",
  color: " #023e8a",
  "&:hover": {
    color: "#03045e",
    marginTop: "-1.5px",
  },
};
