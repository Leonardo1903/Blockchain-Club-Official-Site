import React from "react";
import { SponsorCard } from "./SponsorCard";
import accelchainLogo from "../../assets/Sponsors/accelchain-logo-removebg-preview.png";


const Sponsors = () => {
  // Sponsor Data
  const sponsors = [
    { id: 1, name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { id: 2, name: "PW Skills", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHL06fJvV9ZcA/company-logo_200_200/company-logo_200_200/0/1699112299202/pw_skills_official_logo?e=1748476800&v=beta&t=A3i37pQ04ohQgmhyXF-yAV186m6M4YK8ClTYyiwdTXU" },
    { id: 3, name: "Accelchain", logo: accelchainLogo },
    { id: 4, name: "InterviewBuddy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxT6W2J3-40UX9t2ELVsd2lBlaVIsMk63iKQ&s", url: "https://www.interviewbuddy.net/" },
    { id: 5, name: "SYBGEN", logo: "https://sdn.signalhire.co/storage/company/5d92/0d2b/8015/aec7/d1db/fbe5/7a31/39e1.webp", url: "https://sybgen.com/" },
    { id: 6, name: "StockGro", logo: "https://www.stockgro.club/static/favicon.png", url: "https://www.stockgro.club/" },
    { id: 7, name: "WaySpire", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVMBPcumRRNeBXzKcstJPH-AsT3Y_azE4mw&s", url: "https://wayspire.in/" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-lg md:text-7xl font-normal text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 mb-6">
          OUR SPONSORS
        </h1>

        <p className="text-center text-xl mb-8">
          We thank our partners for supporting the Blockchain Club's initiatives.
        </p>

        {/* First Row - 4 sponsors per row on Desktop, 1 per row on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {sponsors.slice(0, 4).map((sponsor) => (
            <SponsorWrapper key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>

        {/* Second Row - 3 sponsors per row on Desktop, Centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-6 mt-6">
          {sponsors.slice(4, 7).map((sponsor) => (
            <SponsorWrapper key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Sponsor Wrapper Component
const SponsorWrapper = ({ sponsor }) => {
  return (
    <div className="flex justify-center">
      <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
        <div className="w-full max-w-xs">
          <SponsorCard name={sponsor.name} logo={sponsor.logo} />
        </div>
      </a>
    </div>
  );
};

export default Sponsors;
