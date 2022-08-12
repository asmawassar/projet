import Header from "./Header";
import HeaderLog from "./HeaderLog";

function Head() {
  function getToken() {
    console.log(sessionStorage.getItem("token"));
    return sessionStorage.getItem("token");
  }
  const success = getToken();
  return <>{success ? <HeaderLog /> : <Header />}</>;
}
export default Head;
