
import MeetupDetail from './../../components/meetups/MeetupDetail';
const DetailsPage = (props) => {
  return (
    <MeetupDetail
        image='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg'
        title="Itay The King"
        address="Petah Tikva"
        description="Come on !"
    />
  )
};

export async function getStaticPaths(){
    return {
        fallback: true,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context){

    const { meetupId } = context.params;
    console.log(meetupId)

    return {
        props: {
            meetupData: {
                id: meetupId,
                image:'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
                title:"Itay The King",
                address:"Petah Tikva",
                description:"Come on !",
            }
        }
    }
};

export default DetailsPage
