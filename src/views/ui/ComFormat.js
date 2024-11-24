import { Button,Card,CardBody, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ComFormat = () => {
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
              賽制
            </CardTitle>
            <CardBody className="">
              <div>
                <h2 style={{ fontSize: "22px", color: "#A7C7E7", fontWeight: "600" }}>入圍賽：</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  將８支隊伍分成A、B兩組，組內對戰、採雙淘汰BO3對決（三戰兩勝，輸的一方會另一組的隊伍對決），取4支隊伍晉級，獲勝隊伍晉級瑞士輪。
                </p>
                
                <h2 style={{ fontSize: "22px", color: "#A7C7E7", fontWeight: "600" }}>瑞士制（積分循環）：</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  對戰隊伍包括直接晉級瑞士輪的12支隊伍以及從入圍賽脫穎而出的4支隊伍。在第一輪比賽，來自相同賽區的兩支隊伍將不會成為對決隊伍。
                  第一輪之後，參賽隊伍不會重複對戰。取得3勝的隊伍晉級，取得3敗的隊伍淘汰。
                </p>
                
                <h2 style={{ fontSize: "22px", color: "#A7C7E7", fontWeight: "600" }}>半準決賽：</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                  以瑞士輪勝利的隊伍晉級，最後決賽由兩支隊伍爭取冠軍。
                </p>

                <h2 style={{ fontSize: "22px", color: "#A7C7E7", fontWeight: "600" }}>準決賽</h2>
                <h2 style={{ fontSize: "22px", color: "#A7C7E7", fontWeight: "600" }}>總決賽</h2>
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

export default ComFormat;