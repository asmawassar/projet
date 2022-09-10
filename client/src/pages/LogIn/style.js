import image from "../../images/R.jpeg";
export const box = {
  my: 8,
  mx: 4,
  marginTop: "-10",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
export const formS = {
  width: "100%",
  display: "inline-flex",
  flexDirection: "row-reverse",
  justifyContent: "center",
  marginTop: 10,
};

export const stack = {
  width: "100%",
  padding: "15px",
  background: "linear-gradient( rgb(85, 73, 148), rgb(85, 73, 148,0.2) )",
  backgroundRepeat: " no-repeat",
};

export const row = {
  direction: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
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
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "130vh",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
};
