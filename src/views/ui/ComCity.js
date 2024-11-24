import { Table,Button,Card,CardBody, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import city01 from '../../assets/images/city/city01.jpg';
import city02 from '../../assets/images/city/city02.jpg';
import city03 from '../../assets/images/city/city03.jpg';

const ComCity = () => {
  return (
    <div>
      <style>
        {`
         td {
            font-size:26px;
            justify-content: center;      
            align-items: center;          
            height: 100px;                
            text-align: center;           
          }

          .table-image {
            max-width: 100%;        
            max-height: 100%;      
            object-fit: contain;    
            display: block;
          }
        `}
      </style>
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
              主辦城市
            </CardTitle>
            <CardBody className="">
              <div>
                <h1 style={{ fontSize: "30px", color: "#F9E79F" }}>9/25~29 入圍賽</h1>
                <h2 style={{ fontSize: "30px", color: "#F9E79F" }}>10/3~7 & 10/10~13瑞士制</h2>
                <Table bordered>
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center",width: "25%" }}>國家</th>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center",width: "25%" }}>城市</th>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center" ,width: "25%"}}>地點</th>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center" ,width: "25%"}}>圖片</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>德國</td>
                      <td>柏林</td>
                      <td>拳頭遊戲競技場</td>
                      <td><img src={city01} alt="拳頭遊戲競技場" style={{ width: "150px", height: "auto" }} /></td>
                      
                    </tr>
                  </tbody>
                </Table>
                <hr></hr>

                <h1 style={{ fontSize: "30px", color: "#F9E79F" }}>10/17~20 半準決賽</h1>
                <h2 style={{ fontSize: "30px", color: "#F9E79F" }}>10/26~27 準決賽 </h2>
                <Table bordered>
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center",width: "25%" }}>國家</th>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center",width: "25%" }}>城市</th>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center" ,width: "25%"}}>地點</th>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center",width: "25%" }}>圖片</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>法國</td>
                      <td>巴黎</td>
                      <td>愛迪達體育館</td>
                      <td><img src={city02} alt="愛迪達體育館" style={{ width: "150px", height: "auto" }} /></td>
                    </tr>
                  </tbody>
                </Table> 
                <hr></hr>

                <h2 style={{ fontSize: "30px", color: "#F9E79F" }}>11/2 總決賽</h2>
                <Table bordered>
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center" ,width: "25%"}}>國家</th>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center" ,width: "25%"}}>城市</th>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center" ,width: "25%"}}>地點</th>
                      <th style={{ backgroundColor: "#4b4b4b", color: "white", padding: "8px", border: "1px solid #ddd", fontWeight: "bold", textAlign: "center",width: "25%" }}>圖片</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>英國</td>
                      <td>倫敦</td>
                      <td>O2體育館</td>
                      <td><img src={city03} alt="O2體育館" style={{ width: "150px", height: "auto" }} /></td>
                      
                    </tr>
                  </tbody>
                </Table> 
                
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

export default ComCity;