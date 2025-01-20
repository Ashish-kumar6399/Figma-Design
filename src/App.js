import React, { useState } from "react";
import Frame from "./Components/Frame";
import Dnsrecords from "./Components/Dnsrecords";

const App = () => {
  const [dnsData, setDnsData] = useState({});
  const [isSearched, setIsSearched] = useState(false);
  const [activeTab, setActiveTab] = useState("A");

  const sampleDnsData = {
    A: [
      {
        type: "A",
        domain: "xemailverify.com",
        details: [
          "v=A; p=reject; fo=1;",
        "mailto:business@xemailverify.com",
        "dmarc.com; rua=mailto:xyz@abc.com",

        ],
      },
    ],
    TXT: [
      {
        type: "TXT",
        domain: "amazon.com",
      details: [
        "v=TXT; p=reject; fo=1;",
        "mailto:support@amazon.com",
        "dmarc.com; rua=mailto:txt@example.com",
      ],
      },
    ],
    DMARC: [
      {
        type: "DMARC",
        domain: "hotmail.com",
        details: [
          "v=DMARC; p=reject; fo=1;",
          "mailto:support@hotmail.com",
          "dmarc.com; rua=mailto:dmarc@spf.com",
      ],
      },
    ],
    MX: [
      {
        type: "MX",
        domain: "google.com",
        details: [
          "v=MX; p=reject; fo=1;",
          "rua:mailto:business@xemailverify.com,mailto:9YO6hos8h@rua.k",
          "dmarc.com; ruf=mailto:9YO6hos8h@rua.k.dmarc.com;",
        ],  
      },
    ],
    NS: [
      {
        type: "NS",
        domain: "Yahoo.com",
        details: [
          "v=NS; p=reject; fo=1;",
        "rua:mailto:business@xemailverify.com,mailto:9YO6hos8h@rua.k",
        "dmarc.com; ruf=mailto:9YO6hos8h@rua.k.dmarc.com;",
      ],
      },
    ],
    SPF: [
      {
        type: "SPF",
        domain: "chatgpt.com",
        details: [
          "v=SPF; p=reject; fo=1;",
          "rua:mailto:business@xemailverify.com,mailto:9YO6hos8h@rua.k",
          "dmarc.com; ruf=mailto:9YO6hos8h@rua.k.dmarc.com;",
        ],
      },
    ],
    AAAA: [
      {
        type: "AAAA",
        domain: "bing.com",
        details: [
          "v=AAAA; p=reject; fo=1;",
          "rua:mailto:business@xemailverify.com,mailto:9YO6hos8h@rua.k",
          "dmarc.com; ruf=mailto:9YO6hos8h@rua.k.dmarc.com;",
        ],
      },
    ],
  
    // Add more data as needed...
  };

  const handleSearch = (clientName, domain) => {
    if (clientName && domain) {
      // Simulate fetching data based on the domain
      setDnsData(sampleDnsData);
      setIsSearched(true);
      setActiveTab("A"); // Default tab
    } else {
      // Clear DNS data if either field is empty
      setDnsData({});
      setIsSearched(false);
    }
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div>
      <Frame onSearch={handleSearch} />
      {isSearched ? (
        <Dnsrecords
          dnsData={dnsData}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      ) : (
        <p className="text-center mt-5">Search to view DNS records</p>
      )}
    </div>
  );
};

export default App;
