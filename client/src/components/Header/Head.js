import Header from "./Header";
import HeaderLog from "./HeaderLog";
import { UserContext } from "../../action/acces";
import React, { useContext } from "react";

function Head() {
  const { user, UserState } = useContext(UserContext);
  return <>{user != "false" ? <HeaderLog /> : <Header />}</>;
}
export default Head;
