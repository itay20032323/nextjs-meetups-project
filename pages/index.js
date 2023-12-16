import MeetupList from "./../components/meetups/MeetupList";
import Head from "next/head";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
    address: "Petah Tikva, Center",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://charlotte.axios.com/wp-content/uploads/2022/11/1216-Pinecrest-Dr-feature-image.jpg",
    address: "Tel Aviv, Center",
  },
];

const HomePage = (props) => {
  return (
  <>
    <Head>
      <title>Itay's Meetups</title>
      <meta 
        name="description"
        content="Meetups website - come and see the meetup list and add a meetup on your own !"
      />
    </Head>
    <MeetupList meetups={props.meetups} />
  </>
  );
};

// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   console.log(req.method);

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, // Number of seconds that the server is render his porps
  };
}

export default HomePage;
