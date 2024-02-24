/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Header from "../Header/Header";
import Landing_page from "../Landing_page/Landing_page";
import { Link } from "react-router-dom";
// import HowToBuy from "../How To Buy/how";
// import Footer from "../Footer/footer";
// import JoinCommunity from "../Landing_page/JoinCommunity";
// import AuditKYC from "../Landing_page/AuditKYC";

const Homepage = () => {
  return (
    <>
      <Landing_page />

      <div className="max-w-[800px] px-4 mx-auto">
        <p className="text-center py-4 text-[#fefefe] font-medium font-publicSans">
          Kindly be aware that upon Token Generation Event (TGE) or Listing day,
          50% of your acquired BOTIFI tokens will be transferred to your wallet,
          while the remaining 50% will follow a structured vesting schedule.
        </p>
      </div>
      {/* <AuditKYC />
      <HowToBuy />
      <JoinCommunity />
      <Footer /> */}
    </>
  );
};

export default Homepage;
