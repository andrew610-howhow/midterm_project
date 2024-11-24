import { Button,Card,CardBody, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Competition = () => {
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
              比賽簡介
            </CardTitle>
            <CardBody className="">
              <div>
                <h1 style={{ fontSize: "28px", color: "#1E3A8A", fontWeight: "bold",textAlign: "center" }}>
                  英雄聯盟2024賽季世界大賽
                </h1>
                <h2 style={{ fontSize: "22px", color: "#243C5A",textAlign: "center",marginBottom: "30px" }}>英語：2024 League of Legends World Championship</h2>
                <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                  又譯作「英雄聯盟S14全球總決賽」、「2024年英雄聯盟全球總決賽」、「2024英雄聯盟世界賽」，
                </p>
                <p style={{ fontSize: "18px", lineHeight: "1.6",marginBottom: "13px" }}>
                  是由拳頭遊戲所舉行的第14屆《英雄聯盟》全球總決賽。
                </p>
                <p style={{ fontSize: "18px", lineHeight: "1.6",marginBottom: "13px" }}>
                  由來自八個戰區的頂尖戰隊相互交鋒，爭奪世界冠軍稱號。世界大賽舉辦地點每年都不同，時間則是在例行季賽盛大落幕後，來自全球各地職業聯賽的晉級戰隊將在這場賽事中一較高下。
                </p>
                <p style={{ fontSize: "18px", lineHeight: "1.6" ,marginBottom: "13px"}}>
                  今年賽事將在歐洲舉，而本屆比賽是第五次於歐洲舉辦的世界大賽。
                </p>
                <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                  本屆世界大賽因應與英雄聯盟季中邀請賽系列賽事的相關性增強，來自韓國賽區的2024年英雄聯盟季中邀請賽冠軍隊伍Gen.G已直接獲得本屆世界大賽席位，且該席位不占用原有賽區席位，同時位列第二的中國大陸賽區也已獲得一個額外席位。
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
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

export default Competition;