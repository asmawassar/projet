export const header = {
  backgroundColor: "#582f0e",
  padding: "0.5%",
  fontSize: "23px",
  display: "flex",
  boxShadow: "1px 1px 18px #582f0e",
};

export const styleL = {
  fontSize: "19px",
  color: "#c2c5aa",
  borderColor: "#c2c5aa",
  "&:hover": {
    backgroundColor: "#bc6c25",
    borderColor: "transparent",
    color: "#c2c5aa",
    marginTop: "-1.5px",
  },
  "&:active": {
    backgroundColor: "#992600",
  },
};

export const styleD = {
  fontSize: "19px",
  color: "#c2c5aa",
  borderColor: "#c2c5aa",
  "&:hover": {
    backgroundColor: "#bc6c25",
    borderColor: "transparent",
    color: "#c2c5aa",
    marginTop: "-1.5px",
  },
  "&:active": {
    backgroundColor: "#992600",
  },
};

export const ButtonL = ({ isActive }) =>
  isActive
    ? {
        marginTop: "-1.5px",
        backgroundColor: "#bc6c25",
        borderColor: "transparent",
        color: "#c2c5aa",
        marginTop: "-1.5px",
      }
    : {};

export const link = ({ isActive }) =>
  isActive
    ? {
        marginTop: "-1.5px",
        textDecoration: "none",
        color: "#bc6c25",
      }
    : {};

export const styleS = {
  fontSize: "19px",
  color: "#582f0e",
  backgroundColor: "#c2c5aa",
  borderColor: "#c2c5aa",
  "&:hover": {
    backgroundColor: "#bc6c25",
    marginTop: "-1.5px",
    color: "#c2c5aa",
  },
  "&:active": {
    backgroundColor: "#992600",
  },
};
