import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
} from "reactstrap";

import Blog from "../components/dashboard/Blog"; 
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import t1 from "../assets/images/members/t1.jpg";
import bilibili from "../assets/images/members/blg.jpg";
import Bin from "../assets/images/members/blg_bin.jpg";
import Xun from "../assets/images/members/blg_xun.jpg";
import Knight from "../assets/images/members/blg_knight.jpg";
import ELK from "../assets/images/members/blg_elk.jpg";
import ON from "../assets/images/members/blg_on.jpg";
import Zeus from "../assets/images/members/t1_zeus.jpg";
import Oner from "../assets/images/members/t1_oner.jpg";
import Faker from "../assets/images/members/t1_faker.jpg";
import Guma from "../assets/images/members/t1_gumayusi.jpg";
import Keria from "../assets/images/members/t1_keria.jpg";
import champ from "../assets/images/members/championship.jpg";

//滾動到指定區域
const scrollToDetails = () => {
  document.getElementById('more-details').scrollIntoView({ behavior: 'smooth' });
};

const BlogData = [
  {

    image: t1,
    title: "T1",
    subtitle: "LCK - 韓國 - #4",
    description:
      "這是一隻創立於2014年的電競戰隊,前身為SK Telecom T1(SKT),此隊伍曾4度斬獲世界冠軍,保留了去年奪冠五人組後在本次世界賽再度衝擊冠亞賽。",
    btnbg: "danger",
    height: '1300px',

  },
  {
    image: bilibili,
    title: "Bilibili Gaming",
    subtitle: "LPL - 中國 - #1",
    description:
      "此隊伍為中國影音平台BILIBILI於2017年創立的電競戰隊,在2024引入了Knight選手後分別在春夏季賽取得18勝1敗與15勝2敗的好成績。",
    btnbg: "info",
  },

];

const About = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h2 className="mb-3" style={{ fontWeight: 'bold' }}>隊伍介紹</h2>
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="8" lg="8" xl="6" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
              onReadMoreClick={scrollToDetails} 
              height={blg.height}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <h2 className="mb-3 mt-3" style={{ fontWeight: 'bold' }}>賽事資訊</h2>
        <Col md="12" lg="6">
          <Card body style={{
            backgroundImage: `url(${champ})`,
            backgroundSize: 'covered',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '595px', width: '950px',
          }}>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <div id="more-details"></div>
        <h2 className="mb-3 mt-3" style={{ fontWeight: 'bold' }}>資訊分享</h2>
        <Col md="6" lg="4">
          <Card body className="text-first">
            <CardTitle tag="h5">T1消息</CardTitle>
            <CardText>
              <br />聯賽內的T1在資格賽中艱難取勝，獲得了以第四種子出國的機會，但T1一來到世界賽就像變了個隊伍一樣，一改之前的疲態，甚至戰勝了連續一年都沒戰勝過的對手GENG。
              <br />
            </CardText>

          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="top">
            <CardTitle tag="h5">BLG消息</CardTitle>
            <CardText>
              <br />Knight選手原本效力於JDG，在去年世界賽四強被T1以3:1橫掃出局後與BLG中路Yagao選手進行了互換，在Knight來到BLG之前JDG一直都是第一，連續數個系列賽都贏過BLG。
              <br />
            </CardText>

          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-first">
            <CardTitle tag="h5">宿命之戰</CardTitle>
            <CardText>
              Faker選手有著在世界賽上從未輸過LPL隊伍bo5的紀錄,而Bin選手則有bo5中從未輸給T1的紀錄,一個是延續自己的不敗傳說，一個則是打破BO5沒贏過T1且全華班無奪冠紀錄，本次不論誰勝出都將是一場精采對決。

            </CardText>

          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h2 className="mb-3 mt-3" style={{ fontWeight: 'bold' }}>選手資訊</h2>
        <Col sm="12" lg="6" className="mb-4">
          <Card body style={{
            backgroundImage: `url(${Bin})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '190px',

          }}
            inverse>

            <CardTitle tag="h3">上路</CardTitle>
            <CardText>
              <br /><span style={{ fontSize: '20px' }}>陳澤彬</span>
              <br />
              <span style={{ fontSize: '15px' }}>ZE-BIN CHEN</span>
            </CardText>
            <div>
              <Button onClick={() => window.open("https://lol.fandom.com/wiki/Bin_(Chen_Ze-Bin)")}>更多...</Button>
            </div>
          </Card>
        </Col>
        <Col sm="12" lg="6" className="mb-4">
          <Card body style={{
            backgroundImage: `url(${Zeus})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '190px',

          }}
            inverse>

            <CardTitle tag="h3">上路</CardTitle>
            <CardText>
              <br /><span style={{ fontSize: '20px' }}>崔祐齊</span>
              <br />
              <span style={{ fontSize: '15px' }}>WOOJE CHOI</span>
            </CardText>
            <div>
              <Button onClick={() => window.open("https://lol.fandom.com/wiki/Zeus")}>更多...</Button>
            </div>
          </Card>
        </Col>
        <Col sm="12" xl="6" className="mb-4">
          <Card body style={{
            backgroundImage: `url(${Xun})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '190px',

          }}
            inverse>

            <CardTitle tag="h3">打野</CardTitle>
            <CardText>
              <br /><span style={{ fontSize: '20px' }}>彭立勛</span>
              <br />
              <span style={{ fontSize: '15px' }}>LI-XUN PENG</span>
            </CardText>
            <div>
              <Button onClick={() => window.open("https://lol.fandom.com/wiki/Xun")}>更多...</Button>
            </div>
          </Card>
        </Col>
        <Col sm="12" xl="6" className="mb-4">
          <Card body style={{
            backgroundImage: `url(${Oner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '190px',

          }}
            inverse>

            <CardTitle tag="h3">打野</CardTitle>
            <CardText>
              <br /><span style={{ fontSize: '20px' }}>文炫竣</span>
              <br />
              <span style={{ fontSize: '15px' }}>HYUNJUN MUN</span>
            </CardText>
            <div>
              <Button onClick={() => window.open("https://lol.fandom.com/wiki/Oner")}>更多...</Button>
            </div>
          </Card>
        </Col>


        <Col sm="12" xl="6" className="mb-4">
          <Card body style={{
            backgroundImage: `url(${Knight})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '190px',

          }}
            inverse>

            <CardTitle tag="h3">中路</CardTitle>
            <CardText>
              <br /><span style={{ fontSize: '20px' }}>	卓定</span>
              <br />
              <span style={{ fontSize: '15px' }}>DING ZHUO</span>
            </CardText>
            <div>
              <Button onClick={() => window.open("https://lol.fandom.com/wiki/Knight_(Zhuo_Ding)")}>更多...</Button>
            </div>
          </Card>
        </Col>

        <Col sm="12" xl="6" className="mb-4">
          <Card body style={{
            backgroundImage: `url(${Faker})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '190px',

          }}
            inverse>

            <CardTitle tag="h3">中路</CardTitle>
            <CardText>
              <br /><span style={{ fontSize: '20px' }}>李相赫</span>
              <br />
              <span style={{ fontSize: '15px' }}>SANGHYEOK LEE</span>
            </CardText>
            <div>
              <Button onClick={() => window.open("https://lol.fandom.com/wiki/Faker")}>更多...</Button>
            </div>
          </Card>
        </Col>


        <Col sm="12" xl="6" className="mb-4">
          <Card body style={{
            backgroundImage: `url(${ELK})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '190px',

          }}
            inverse>

            <CardTitle tag="h3">下路</CardTitle>
            <CardText>
              <br /><span style={{ fontSize: '20px' }}>	趙嘉豪</span>
              <br />
              <span style={{ fontSize: '15px' }}>JIAHAO ZHAO</span>
            </CardText>
            <div>
              <Button onClick={() => window.open("https://lol.fandom.com/wiki/Elk")}>更多...</Button>
            </div>
          </Card>
        </Col>


        <Col sm="12" xl="6" className="mb-4">
          <Card body style={{
            backgroundImage: `url(${Guma})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '190px',

          }}
            inverse>

            <CardTitle tag="h3">下路</CardTitle>
            <CardText>
              <br /><span style={{ fontSize: '20px' }}>李珉炯</span>
              <br />
              <span style={{ fontSize: '15px' }}>MINHYUNG LEE</span>
            </CardText>
            <div>
              <Button onClick={() => window.open("https://lol.fandom.com/wiki/Gumayusi")}>更多...</Button>
            </div>
          </Card>
        </Col>


        <Col sm="12" xl="6" className="mb-4">
          <Card body style={{
            backgroundImage: `url(${ON})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '190px',

          }}
            inverse>

            <CardTitle tag="h3">輔助</CardTitle>
            <CardText>
              <br /><span style={{ fontSize: '20px' }}>駱文俊</span>
              <br />
              <span style={{ fontSize: '15px' }}>WENJUN LUO</span>
            </CardText>
            <div>
              <Button onClick={() => window.open("https://lol.fandom.com/wiki/ON")}>更多...</Button>
            </div>
          </Card>
        </Col>

        <Col sm="12" xl="6" className="mb-4">
          <Card body style={{
            backgroundImage: `url(${Keria})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '190px',

          }}
            inverse>

            <CardTitle tag="h3">輔助</CardTitle>
            <CardText>
              <br /><span style={{ fontSize: '20px' }}>柳岷析</span>
              <br />
              <span style={{ fontSize: '15px' }}>ZE-BIN CHEN</span>
            </CardText>
            <div>
              <Button onClick={() => window.open("https://lol.fandom.com/wiki/Keria")}>更多...</Button>
            </div>
          </Card>
        </Col>




      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-Group*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h2 className="mb-3 mt-3" style={{ fontWeight: 'bold' }}>看看其他的...</h2>
        <Col>
          <CardGroup>
            <Card>
              <CardImg alt="Card image cap" src={bg2} top width="20%" />
              <CardBody>
                <CardTitle tag="h5">回首頁</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  資訊一覽
                </CardSubtitle>
                <CardText>
                
                </CardText>
                <Button onClick={() => window.location.href = '/home'}>跳轉</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg1} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">比賽介紹</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  詳細介紹
                </CardSubtitle>
                <CardText>
                
                </CardText>
                <Button onClick={() => window.location.href = '/home#/badges'}>跳轉</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={bg3} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">比賽分數</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  詳細介紹
                </CardSubtitle>
                <CardText>
                 
                </CardText>
                <Button onClick={() => window.location.href = '/home#/alerts'}>跳轉</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default About;
