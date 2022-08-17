import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201305/22/20/a0001620_519c97243d022.jpg",
    address: "Seoul Jongro",
    description: "Gwanghwamun",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "http://www.sangjomagazine.com/imgdata/sangjomagazine_com/201811/2018111017584296.jpg",
    address: "Seoul namsan",
    description: "namsan",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
