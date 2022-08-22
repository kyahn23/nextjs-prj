import { MongoClient, ObjectId } from "mongodb";

import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  useRouter();
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  //fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://mgdb:ahdrhqlqjs23@cluster0.12oard2.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray(); // _id: 1 >> ID만 포함하고 다른 필드값은 포함하지 않는다
  client.close();

  return {
    fallback: "blocking", // fallback true 일 경우 빈 페이지가 즉시 반환 / blocking 일 경우 페이지가 미리 생성될때까지 볼 수 없고 완성된 페이지가 제공
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  // fetch data for a single meetup
  const client = await MongoClient.connect(
    "mongodb+srv://mgdb:ahdrhqlqjs23@cluster0.12oard2.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const selectedMeetup = await meetupCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        address: selectedMeetup.address,
      },
    },
  };
}

export default MeetupDetails;
