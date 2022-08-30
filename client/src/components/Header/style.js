export const Bar = {
  backgroundColor: "#242F9B",
};

export const ButtonS = {
  fontSize: "17px",
  color: " #f3feff",
  borderRadius: 0,
  "&:hover": {
    color: "#023e8a",
    backgroundColor: " #f3feff",
    borderColor: " #f3feff",
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
  color: " #f3feff",
  "&:hover": {
    color: "#03045e",
    marginTop: "-1.5px",
  },
};
