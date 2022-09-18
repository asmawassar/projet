import { Toolbar, Box, Typography, Link, Stack } from "@mui/material";
import image1 from "../../images/asma.jpg";
import image2 from "../../images/amine.jpg";
import image3 from "../../images/nour.jpg";
import github from "../../images/github.png";
import facebook from "../../images/Facebook.png";
import linkdIn from "../../images/linkin.png";

import { imageStyle3, icon } from "./style";
import { un } from "./style";
function Contact() {
  return (
    <Box id="Contact">
      <Toolbar />
      <Typography align="center">
        <h1>Meet The Team</h1>
        <Box
          style={{
            display: "flex",
            marginTop: "50px",
            marginBottom: "100px",
          }}
        >
          <Box style={un} sx={{ marginRight: "-20vh" }}>
            <img src={image1} style={imageStyle3} />
            <h2>Wassar Asma</h2>

            <Box style={{ display: "block" }}>
              <Link href="mailto:asma.wassar@ensi-uma.tn">
                asma.wassar@ensi-uma.tn
              </Link>
            </Box>

            <Link
              href="https://github.com/asmawassar"
              target="_blank"
              underline="none"
            >
              {" "}
              <img src={github} style={icon} />
            </Link>
            <Link
              href="https://www.facebook.com/asma.wassar"
              target="_blank"
              underline="none"
            >
              {" "}
              <img src={facebook} style={icon} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/asma-wassar-6727681aa/"
              target="_blank"
              underline="none"
            >
              {" "}
              <img src={linkdIn} style={icon} />
            </Link>
          </Box>

          <Box style={un} sx={{ marginRight: "-20vh" }}>
            <img src={image2} style={imageStyle3} />
            <h2>Oueslati Mohamed Amine</h2>
            <Box style={{ display: "block" }}>
              <Link href="mailto:mohamedamine.oueslati@ensi-uma.tn">
                mohamedamine.oueslati@ensi-uma.tn
              </Link>
            </Box>
            <Link
              href="https://github.com/MedAmineOueslati"
              target="_blank"
              underline="none"
            >
              {" "}
              <img src={github} style={icon} />
            </Link>
            <Link
              href="https://www.facebook.com/amine.oueslati3"
              target="_blank"
              underline="none"
            >
              {" "}
              <img src={facebook} style={icon} />
            </Link>
            <Link href="#" target="_blank" underline="none">
              {" "}
              <img src={linkdIn} style={icon} />
            </Link>
          </Box>
          <Box style={un}>
            <img src={image3} style={imageStyle3} />
            <h2>Wanis Nour</h2>
            <Box style={{ display: "block" }}>
              <Link href="mailto:nour.wanis@ensi-uma.tn">
                nour.wanis@ensi-uma.tn
              </Link>
            </Box>
            <Link
              href="https://github.com/NourWanis"
              target="_blank"
              underline="none"
            >
              {" "}
              <img src={github} style={icon} />
            </Link>
            <Link
              href="https://www.facebook.com/nour.onis"
              target="_blank"
              underline="none"
            >
              {" "}
              <img src={facebook} style={icon} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nour-wanis-2708bb24b/"
              target="_blank"
              underline="none"
            >
              {" "}
              <img src={linkdIn} style={icon} />
            </Link>
          </Box>
        </Box>
      </Typography>
    </Box>
  );
}
export default Contact;
