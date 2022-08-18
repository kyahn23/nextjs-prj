import { useRouter } from "next/router";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  useRouter();
  return (
    <MeetupDetail
      image="http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201305/22/20/a0001620_519c97243d022.jpg"
      title="A first meetup"
      address="Seoul Jongro"
      description="Gwanghwamun"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(context);
  console.log(context.params);
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201305/22/20/a0001620_519c97243d022.jpg",
        title: "A first meetup",
        address: "Seoul Jongro",
        description: "Gwanghwamun",
      },
    },
  };
}

export default MeetupDetails;
