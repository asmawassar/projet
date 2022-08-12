import { getkey } from "../../action/acces";

function barrages() {
  const success = getkey();
  return <>{success == "editor" ? <div></div> : <div></div>}</>;
}
export default barrages;
