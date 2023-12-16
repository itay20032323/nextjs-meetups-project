import NewMeetupForm from './../../components/meetups/NewMeetupForm';

const NewMweetupPage = () => {
  function handleAddMeetup(enteredData){
      console.log(enteredData);
  }
  
  return (
    <NewMeetupForm onAddMeetup={handleAddMeetup}/>
  )
}

export default NewMweetupPage
