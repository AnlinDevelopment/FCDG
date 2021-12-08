import React from "react";

function Static_map() {
  <div>
    <a //opens new tab to directions page
      target="_blank"
      rel="noreferrer"
      href="https://www.google.com/maps/dir/36.8311554,-119.6846718/36.8479476,-119.6277998/"
    >
      <img //link for rendered map png with marker
        alt="none"
        src="https://maps.googleapis.com/maps/api/staticmap?autoscale=false&size=1000x1000&maptype=roadmap&key=AIzaSyCzRLyUMPIizb15X7SrckiLsbbNDWjhuKE&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C36.849334,+-119.808033"
      />
    </a>
  </div>;
}

export default Static_map;
