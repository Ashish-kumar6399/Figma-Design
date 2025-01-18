import React, { useState } from "react";
import { Card, Tabs, Typography, Row, Col } from "antd";
import "../Components/Dnsrecord.css";
import "../Components/Frame.css"; 


const { TabPane } = Tabs;
const { Title, Text } = Typography;

// Sample Data
const dnsData = {
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
      domain: "yahoo.com",
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
};

const Dnsrecords = () => {
  const [activeTab, setActiveTab] = useState("A");

  // Render Section Content
  const renderSection = (sectionData) => {
    return sectionData.map((record, index) => (
      <Card className="card_border"
        key={index}
        style={{
          marginBottom: "20px",
          borderRadius: "10px solid",
          // background: "#f9f9f9",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Row gutter={[16, 16]}>
          {/* Section Header */}

          <Col  span={24}>
            <Title
              className="fw-bolder"
              level={5}
              style={{ marginBottom: "10px" }}
            >
              {record.type} Lookup
            </Title>
          </Col>

          <Col span={12}>
            <Text strong>Desired Results</Text>
            <div
              style={{
                marginTop: "10px",
                padding: "10px",
                // background: "#ffffff",
                // border: "1px solid #d9d9d9",
                borderRadius: "5px",
              }}
            >
              {record.details.map((detail, idx) => (
                <p key={idx} style={{ margin: 0, fontSize: "14px" }}>
                  {detail}
                </p>
              ))}
            </div>
          </Col>
          <Col span={6} style={{ textAlign: "left" }}>
            <Text strong>Type</Text>
            <br />
            <br />
            <br />
            <Text style={{ marginLeft: "8px" }}>{record.type}</Text>
          </Col>

          <Col span={6} style={{ textAlign: "left" }}>
            <Text strong>Domain</Text>
            <br/>
            <br/>
            <br/>
            <Text style={{ marginLeft: "8px" }}>{record.domain}</Text>
          </Col>
        </Row>
      </Card>
    ));
  };

  return (
    <div className=" p-0 ps-lg-5 pe-lg-5  "  >
      <Tabs
        defaultActiveKey="A"
        onChange={(key) => setActiveTab(key)}
        style={{
          marginBottom: "20px",
          background: "#ffffff",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {Object.keys(dnsData).map((key) => (
          <TabPane tab={key} key={key}>
            {renderSection(dnsData[key])}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Dnsrecords;
