import Header from "./Header";
import HeaderLog from "./HeaderLog";

function Head() {
  function getkey() {
    console.log(localStorage.getItem("key"));
    return localStorage.getItem("key");
  }
  const success = getkey();
  return <>{success ? <HeaderLog /> : <Header />}</>;
}
export default Head;
