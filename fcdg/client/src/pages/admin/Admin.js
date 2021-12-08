// import UserForm from "./forms/UserForm";
// import UserData from "./data/UserData";
// import CardForm from "./forms/CardForm";
// import CardData from "./data/CardData";

import Map from "../../components/map/Map";
import CardForm from "../../components/submit/CardForm";
import CardData from "../../components/pull/CardData";

function Admin(props) {
  return (
    <div>
      <Map />
      <CardForm />
      <CardData />
    </div>
  );
}

export default Admin;
