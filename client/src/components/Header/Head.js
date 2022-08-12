import Header from "./Header";
import HeaderLog from "./HeaderLog";
import { getkey } from "../../action/acces";

function Head() {
  const success = getkey();
  return <>{success ? <HeaderLog /> : <Header />}</>;
}
export default Head;
