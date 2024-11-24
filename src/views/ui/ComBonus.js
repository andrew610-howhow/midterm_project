import {Button, Card,CardBody, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ComBonus = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="10" sm="12">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h1" className="border-bottom p-3 mb-0">
              比賽獎金
            </CardTitle>
            <CardBody className="">
              <div>
              <h2 style={{
                  fontSize: "22px",
                  color: "#2ECC71",  
                  marginTop: "10px",
                  fontWeight: "bold"
                }}>
                  冠軍：445,000
                </h2>
                <h2 style={{
                  fontSize: "22px",
                  color: "#F1C40F",  
                  marginTop: "10px",
                  fontWeight: "bold"
                }}>
                  亞軍：356,000
                </h2>
              </div>
            </CardBody>
          </Card>
        </Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col xs="12" md="2" >
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            更多資訊
          </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Button className="btn" color="primary" size="lg" block active>
                  <Link to="/starter" className="alert-link" style={{ textDecoration: 'none' }}>首頁</Link>
                </Button>
                <Button className="btn" color="primary" size="lg" block active>
                  <Link to="/badges" className="alert-link" style={{ textDecoration: 'none' }}>比賽簡介</Link>
                </Button>
                <Button className="btn" color="primary" size="lg" block active>
                  <Link to="/Time" className="alert-link" style={{ textDecoration: 'none' }}> 比賽時間</Link>
                </Button>
                <Button className="btn" color="primary" size="lg" block active>
                  <Link to="/ComFormat" className="alert-link" style={{ textDecoration: 'none' }}>賽制</Link>
                </Button>
                <Button className="btn" color="primary" size="lg" block active>
                  <Link to="/ComQualify" className="alert-link" style={{ textDecoration: 'none' }}>參賽資格</Link>
                </Button>
                <Button className="btn" color="primary" size="lg" block active>
                  <Link to="/ComBonus" className="alert-link" style={{ textDecoration: 'none' }}>獎金</Link>
                </Button>
                <Button className="btn" color="primary" size="lg" block active>
                  <Link to="/ComTopic" className="alert-link" style={{ textDecoration: 'none' }}>主題</Link>
                </Button>
                <Button className="btn" color="primary" size="lg" block active>
                  <Link to="/ComSong" className="alert-link" style={{ textDecoration: 'none' }}>主題曲</Link>
                </Button>
                <Button className="btn" color="primary" size="lg" block active>
                  <Link to="/ComCity" className="alert-link" style={{ textDecoration: 'none' }}>主辦城市</Link>
                </Button>
                <Button className="btn" color="primary" size="lg" block active>
                  <Link to="/ComVersion" className="alert-link" style={{ textDecoration: 'none' }}>遊戲版本</Link>
                </Button>
                <Button className="btn" color="primary" size="lg" block active>
                  <Link to="/ComPF" className="alert-link" style={{ textDecoration: 'none' }} >直播平台</Link>
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default ComBonus;