import image from "../../images/test5.jpg";

export const imageStyle = {
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "100vh",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
};
export const imageStyle2 = {
  height: "45vh",
};
export const imageStyle3 = {
  height: "30vh",
  borderRadius: "50%",
};
export const icon = {
  height: "30px",
  marginTop: "5px",
};
export const left = {
  marginLeft: "20vh",
  flex: 2,
};
export const un = {
  flex: 1,
};
export const right = {
  flex: 2,
  marginTop: "-50px",
  marginRight: "20vh",
};
export const text = {
  marginTop: "20%",
  fontFamily: "Sofia",
  color: "#D4F1F4",
};
