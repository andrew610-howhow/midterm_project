import { Button,Card,CardBody, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ComSong = () => {
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
              比賽主題曲
            </CardTitle>
            <CardBody className="">
              <div>
                <h2 style={{ fontSize: "28px", color: "#F9E79F" }}className="text-center">
                <a
                    href="https://www.youtube.com/watch?v=5FrhtahQiRc"  
                    target="_blank"                 
                    rel="noopener noreferrer"       
                    style={{ textDecoration: 'none', color: '#F9E79F' }}
                  >
                    為美國搖滾樂隊聯合公園演唱的「HEAVY IS THE CROWN（沉重王冠）」
                  </a>
                </h2>
              </div>
              <div className="text-center my-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5Yxi7NaExBY" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="《英雄聯盟》2024世界大賽主題曲-〈沉重王冠〉ft. Linkin Park（官方MV）" 
                ></iframe>
              </div>
              <p style={{ fontSize: "13px",color: "#fff",position: "absolute",bottom: "10px", right: "10px",  margin: "0", textAlign: "right",  }}>
                (影片來源：<a href="https://www.youtube.com/watch?v=5Yxi7NaExBY" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF' }}>
                  https://www.youtube.com/watch?v=5Yxi7NaExBY)</a></p>
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

export default ComSong;