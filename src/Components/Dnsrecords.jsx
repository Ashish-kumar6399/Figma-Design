import React from "react";
import { Card, Tabs, Typography, Row, Col } from "antd";
import "./Dnsrecord.css";

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const Dnsrecords = ({ dnsData, activeTab, onTabChange }) => {
  const renderSection = (sectionData) => {
    return sectionData.map((record, index) => (
      <Card
        className="card_border"
        key={index}
        style={{
          marginBottom: "20px",
          borderRadius: "10px solid",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Title className="fw-bolder" level={5} style={{ marginBottom: "10px" }}>
              {record.type} Lookup
            </Title>
          </Col>
          <Col span={12}>
            <Text strong>Desired Results</Text>
            <div style={{ marginTop: "10px", padding: "10px" }}>
              {record.details.map((detail, idx) => (
                <p key={idx} style={{ margin: 0, fontSize: "14px" }}>
                  {detail}
                </p>
              ))}
            </div>
          </Col>
          <Col span={6}>
            <Text strong>Type</Text>
            <br />
            <Text>
              <br />
              <br />
              {record.type}</Text>
          </Col>
          <Col span={6}>
          
            <Text strong>Domain</Text>
            <br />
            <Text>
            <br />
            <br />{record.domain}</Text>
          </Col>
        </Row>
      </Card>
    ));
  };

  return (
    <div className="p-0 ps-lg-5 pe-lg-5">
      <Tabs
        activeKey={activeTab}
        onChange={onTabChange}
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
