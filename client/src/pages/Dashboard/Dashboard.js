import Barrages from "./barrages";
import Tableau from "./Tableau";

import { UserContext } from "../../action/acces";
import React, { useContext } from "react";

function Head() {
  const { user, UserState } = useContext(UserContext);
  return (
    <>
      <Barrages />
      <Tableau />
      {user.user.role != "user" ? (
        <>
          <h1>head</h1>
        </>
      ) : (
        <h1>header</h1>
      )}
    </>
  );
}
export default Head;
