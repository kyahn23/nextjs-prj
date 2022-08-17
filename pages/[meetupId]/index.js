import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201305/22/20/a0001620_519c97243d022.jpg"
      title="A first meetup"
      address="Seoul Jongro"
      description="Gwanghwamun"
    />
  );
}

export default MeetupDetails;
