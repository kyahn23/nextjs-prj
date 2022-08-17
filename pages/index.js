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

function HomePage(props) {
  // getStaticProps렌더링을 통해 props로 데이터가 설정되므로 state관리를 따로 할 필요가 없어짐
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // http 요청 & 데이터 수신
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return <MeetupList meetups={props.meetups} />;
}

// 정적 렌더링
// 네이밍은 반드시 getStaticProps 고정!! nextjs에서 해당이름의 함수를 찾아서 렌더링중 함수를 실행
// revalidate 값은 숫자. 10으로 설정시 이 페이지에 요청이 들어오는경우 10초마다 서버에서 페이지를 다시 생성
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

// 네이밍은 getStaticProps 처럼 지정된 이름
// 페이지에 대한 요청이 들어올때마다 실행 되는 함수
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
