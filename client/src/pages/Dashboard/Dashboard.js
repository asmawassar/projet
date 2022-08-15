import Barrages from "./barrages";
import Tableau from "./Tableau";

import { UserContext } from "../../action/acces";
import React, { useContext } from "react";

function Head() {
  const { user } = useContext(UserContext);
  console.log(user.role);
  return (
    <>
      <Barrages />
      <Tableau />
    </>
  );
}
export default Head;
