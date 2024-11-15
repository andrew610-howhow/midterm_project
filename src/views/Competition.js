import { Badge, Button, Card, CardBody, CardTitle, Row, Col } from "reactstrap";

const Competition = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="12" sm="12">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              比賽簡介
            </CardTitle>
            <CardBody className="">
              <div>
                <h1>
                英雄聯盟2024賽季世界大賽，英語：2024 League of Legends World Championship， <Badge color="secondary"></Badge>
                </h1>
                <h2>
                又譯作「英雄聯盟S14全球總決賽」、「2024年英雄聯盟全球總決賽」、「2024英雄聯盟世界賽」， <Badge color="secondary"></Badge>
                </h2>
                <h3>
                是由拳頭遊戲所舉行的第14屆《英雄聯盟》全球總決賽。 <Badge color="secondary"></Badge>
                </h3>
              </div>
            </CardBody>
          </Card>
        </Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
          更多資訊
        </CardTitle>
        <CardBody className="">
          <div>
            <Alert color="primary">
              <a href="Competition.js" className="alert-link">
                比賽簡介
              </a>
            </Alert>
            <Alert color="secondary">
              <a href="Competition.js" className="alert-link">
                比賽時間
              </a>
            </Alert>
            <Alert color="success">
              <a href="Competition.js" className="alert-link">
                賽制
              </a>
            </Alert>
            <Alert color="danger">
              <a href="Competition.js" className="alert-link">
                參賽資格
              </a>
            </Alert>
            <Alert color="warning">
              <a href="Competition.js" className="alert-link">
                獎金
              </a>
            </Alert>
            <Alert color="info">
              <a href="Competition.js" className="alert-link">
                主題
              </a>
            </Alert>
            <Alert color="light">
              <a href="Competition.js" className="alert-link">
                主題曲
              </a>
            </Alert>
            <Alert color="dark">
              <a href="Competition.js" className="alert-link">
                主辦城市
              </a>
            </Alert>
            <Alert color="primary">
              <a href="Competition.js" className="alert-link">
                遊戲版本
              </a>
            </Alert>
            <Alert color="secondary">
              <a href="Competition.js" className="alert-link">
                直播平台
              </a>
            </Alert>
          </div>
        </CardBody>
      </Card>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Competition;