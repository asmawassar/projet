import { getkey } from "../../action/acces";
import Admin from "./Admin";
function barrages() {
  const success = getkey();
  return (
    <>
      <div>
        {success == "admin" ? (
          <div>
            <Admin />
          </div>
        ) : (
          <h1>bienvenu a my profile</h1>
        )}
      </div>
      <div></div>
    </>
  );
}
export default barrages;
