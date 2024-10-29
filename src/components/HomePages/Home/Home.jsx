import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";


const Home = () => {


  const allDonations = useLoaderData();
  console.log(allDonations);

  return (
    <div>
      <h1 className="text-center mt-12 text-3xl">Total Donation : {allDonations.length} </h1>
      <div className="grid grid-cols-3 px-12 mb-12">
        {
          allDonations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
        }
      </div>
    </div>
  );
};

export default Home;
