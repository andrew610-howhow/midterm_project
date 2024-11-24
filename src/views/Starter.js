import { Col, Row, Card, CardGroup, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import { useState } from "react";
import ProjectTables from "../components/dashboard/ProjectTable";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";


import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";

const BlogData = [
  {
    image: bg1,
    title: "比賽介紹",
    subtitle: "全球頂尖隊伍角逐召喚師杯的榮耀之戰",
    description:
      "英雄聯盟2024年世界大賽匯聚了來自各大賽區的精英戰隊，通過多輪激烈對決展現策略、操作與團隊合作的巔峰水平，帶來一場史詩級的電競盛宴，並最終決定召喚師杯的歸屬。",
    btnbg: "primary",
    link: "/home#/badges",
  },
  {
    image: bg2,
    title: "隊伍介紹",
    subtitle: "韓國的T1和中國的BLG-最強隊伍的終極對決",
    description:
      "決賽將由來自T1和BLG展開巔峰對決，兩支戰隊憑藉無與倫比的實力一路過關斬將，最終站上榮耀之巔，爭奪召喚師杯的最高榮譽，為全球玩家帶來一場史詩級的對抗。",
    btnbg: "primary",
    link: "/home#/about",
  },
  {
    image: bg3,
    title: "比賽分數",
    subtitle: "史詩決戰：最終比分揭曉",
    description:
      "英雄聯盟2024年世界大賽決賽由T1對陣BLG，經過激烈的五局三勝制比賽，T1以3:2險勝BLG，奪得冠軍，展現了頂尖隊伍的實力與韌性，為全球玩家帶來了一場難忘的視覺盛宴。",
    btnbg: "primary",
    link: "/home#/alerts",
  },
];

const Starter = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleFeedClick = (url) => {
    setVideoUrl(url);
  };
  
  return (
    <div>
      {/***Top Cards***/}

      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>

      {/***Blog 4***/}
      <Row className="justify-content-center mb-4 mt-4">
        <Col xs="12" md="12"> 
          <div
            style={{
              backgroundColor: "#757e85",
              padding: "1.5rem", 
              textAlign: "left",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
              marginTop: "10px",
            }}
          >
            <h2>賽事簡介</h2>
            <p>
            <br></br>英雄聯盟2024年世界大賽（League of Legends World Championship 2024）是年度最盛大的電競賽事之一，也是全球玩家矚目的焦點。作為英雄聯盟最高水平的國際賽事，世界大賽吸引了來自全球各大賽區的頂尖戰隊，包括韓國T1、中國BLG、歐洲G2、北美FLY等等以及新興賽區的代表隊伍，共同角逐召喚師杯這一電子競技界的至高榮譽。
            <br></br>
            <br></br>本次賽事分為多個階段，包括入圍賽、小組賽、淘汰賽和總決賽。各支戰隊需要在多輪對決中展現團隊協作、戰術深度和個人操作，以擊敗對手晉級下一輪。比賽採用五局三勝制的淘汰賽規則，最終的總決賽更是決定了年度冠軍的歸屬。
            <br></br>
            <br></br>2024年的世界大賽在歐洲舉行，賽場分佈於多個標誌性城市，為觀眾帶來不僅僅是遊戲內的競技體驗，還融合了文化交流與現場觀賽的熱情氛圍。本屆比賽吸引了數以百萬計的觀眾線上觀看，並創下了同時觀看人數的新高。
            <br></br>
            <br></br>最終，韓國的T1與中國的BLG在決賽中展開史詩級對抗。T1憑藉多年經驗與靈活的戰術應變，以3:2的比分險勝對手，成功奪得本屆世界大賽冠軍。這場對決不僅是對兩隊實力的考驗，也是對全球電競生態的一次精彩詮釋。
            <br></br>
            <br></br>英雄聯盟世界大賽不僅是一場比賽，它還代表了電子競技行業的蓬勃發展，展示了遊戲文化在全球範圍內的影響力。每年的賽事都會為玩家留下無數經典瞬間，而2024年也不例外。從戰術創新到激情時刻，這場巔峰之戰再一次向世界證明了英雄聯盟作為全球最具影響力的電競遊戲的地位。
            </p>
          </div>
        </Col>
      </Row>

      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart videoUrl={videoUrl} />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds onVideoSelect={handleFeedClick} />
        </Col>
      </Row>

      {/***Blog Cards***/}
      <Row className="justify-content-center">
        {BlogData.map((blg, index) => (
          <Col sm="12" lg="6" xl="4" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
              onReadMoreClick={() => window.location.href = blg.link}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;
