import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";


const Alerts = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <ProjectTables />
      </Col>

      
      {/* --------------------------------------------------------------------------------*/}
      {/* table-2*/}
      {/* --------------------------------------------------------------------------------*/}
      

      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            第一場總結
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>隊伍</th>
                  <th>勝敗</th>
                  <th>擊殺數</th>
                  <th>飛龍數</th>
                  <th>經濟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">T1</th>
                  <td>Lose</td>
                  <td>3</td>
                  <td>1</td>
                  <td>46.8K</td>
                </tr>
                <tr>
                  <th scope="row">BLG</th>
                  <td>Win</td>
                  <td>18</td>
                  <td>3</td>
                  <td>55.9K</td>
                </tr>
                
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>

      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            第一場選角
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>選手</th>
                  <th>路線</th>
                  <th>英雄</th>
                  <th>K/D/A</th>
                  <th>尾兵數</th>
                  <th>經濟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">T1 Zeus</th>
                  <td>Top</td>
                  <td>吶兒</td>
                  <td>2 / 3 / 1</td>
                  <td>235</td>
                  <td>12,195</td>
                </tr>
                <tr>
                  <th scope="row">T1 Oner</th>
                  <td>jungle</td>
                  <td>史瓦妮</td>
                  <td>0 / 3 / 0</td>
                  <td>163</td>
                  <td>7,995</td>
                </tr>
                <tr>
                  <th scope="row">T1 Faker</th>
                  <td>MID</td>
                  <td>犽凝</td>
                  <td>1 / 4 / 1</td>
                  <td>215</td>
                  <td>9,294</td>
                </tr>
                <tr>
                  <th scope="row">T1 Gumayusi</th>
                  <td>AD</td>
                  <td>凱特琳</td>
                  <td>0 / 4 / 1</td>
                  <td>282</td>
                  <td>11,377</td>
                </tr>
                <tr>
                  <th scope="row">T1 Keria</th>
                  <td>support</td>
                  <td>布郎姆</td>
                  <td>0 / 4 / 0</td>
                  <td>35</td>
                  <td>5,917</td>
                </tr>
                <tr>
                  <th scope="row">-</th>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">BLG Bin</th>
                  <td>Top</td>
                  <td>藍寶</td>
                  <td>2 / 1 / 7</td>
                  <td>230</td>
                  <td>10,972</td>
                </tr>
                <tr>
                  <th scope="row">BLG XUN</th>
                  <td>jungle</td>
                  <td>史加納</td>
                  <td>3 / 0 / 9</td>
                  <td>144</td>
                  <td>9,750</td>
                </tr>
                <tr>
                  <th scope="row">BLG knight</th>
                  <td>MID</td>
                  <td>賽勒斯</td>
                  <td>4 / 0 / 11</td>
                  <td>244</td>
                  <td>13,085</td>
                </tr>
                <tr>
                  <th scope="row">BLG Elk</th>
                  <td>AD</td>
                  <td>艾希</td>
                  <td>8 / 1 / 5</td>
                  <td>273</td>
                  <td>13,758</td>
                </tr>
                <tr>
                  <th scope="row">BLG ON</th>
                  <td>support</td>
                  <td>銳兒</td>
                  <td>1 / 1 / 14</td>
                  <td>33</td>
                  <td>8,329</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
          
        </Card>
      </Col>

      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            第二場總結
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>隊伍</th>
                  <th>勝敗</th>
                  <th>擊殺數</th>
                  <th>飛龍數</th>
                  <th>經濟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">T1</th>
                  <td>Win</td>
                  <td>18</td>
                  <td>2</td>
                  <td>56.0K</td>
                </tr>
                <tr>
                  <th scope="row">BLG</th>
                  <td>Lose</td>
                  <td>3</td>
                  <td>1</td>
                  <td>40.6K</td>
                </tr>
                
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>

      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            第二場選角
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>選手</th>
                  <th>路線</th>
                  <th>英雄</th>
                  <th>K/D/A</th>
                  <th>尾兵數</th>
                  <th>經濟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">T1 Zeus</th>
                  <td>Top</td>
                  <td>鄂爾</td>
                  <td>2 / 1 / 8</td>
                  <td>178</td>
                  <td>10,547</td>
                </tr>
                <tr>
                  <th scope="row">T1 Oner</th>
                  <td>jungle</td>
                  <td>夜曲</td>
                  <td>6 / 0 / 8</td>
                  <td>191</td>
                  <td>11,953</td>
                </tr>
                <tr>
                  <th scope="row">T1 Faker</th>
                  <td>MID</td>
                  <td>賽勒斯</td>
                  <td>2 / 0 / 10</td>
                  <td>239</td>
                  <td>10,976</td>
                </tr>
                <tr>
                  <th scope="row">T1 Gumayusi</th>
                  <td>AD</td>
                  <td>克黎思妲</td>
                  <td>8 / 2 / 4</td>
                  <td>284</td>
                  <td>14,581</td>
                </tr>
                <tr>
                  <th scope="row">T1 Keria</th>
                  <td>support</td>
                  <td>睿娜妲．格萊斯克</td>
                  <td>0 / 0 / 15</td>
                  <td>32</td>
                  <td>7,916</td>
                </tr>
                <tr>
                  <th scope="row">-</th>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">BLG Bin</th>
                  <td>Top</td>
                  <td>藍寶</td>
                  <td>1 / 2 / 0</td>
                  <td>201</td>
                  <td>8,810</td>
                </tr>
                <tr>
                  <th scope="row">BLG XUN</th>
                  <td>jungle</td>
                  <td>趙信</td>
                  <td>0 / 4 / 2</td>
                  <td>149</td>
                  <td>7,529</td>
                </tr>
                <tr>
                  <th scope="row">BLG knight</th>
                  <td>MID</td>
                  <td>加里歐</td>
                  <td>0 / 5 / 1</td>
                  <td>204</td>
                  <td>8,227</td>
                </tr>
                <tr>
                  <th scope="row">BLG Elk</th>
                  <td>AD</td>
                  <td>艾希</td>
                  <td>2 / 4 / 0</td>
                  <td>252</td>
                  <td>10,043</td>
                </tr>
                <tr>
                  <th scope="row">BLG ON</th>
                  <td>support</td>
                  <td>銳空</td>
                  <td>0 / 3 / 3</td>
                  <td>38</td>
                  <td>5,984</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
          
        </Card>
      </Col>

      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            第三場總結
          </CardTitle>
          <CardBody className="">
            <Table bordered>
            <thead>
                <tr>
                  <th>隊伍</th>
                  <th>勝敗</th>
                  <th>擊殺數</th>
                  <th>飛龍數</th>
                  <th>經濟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">T1</th>
                  <td>Lose</td>
                  <td>3</td>
                  <td>1</td>
                  <td>44.0K</td>
                </tr>
                <tr>
                  <th scope="row">BLG</th>
                  <td>Win</td>
                  <td>17</td>
                  <td>3</td>
                  <td>58.1K</td>
                </tr>
                
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>

      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            第三場選角
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>選手</th>
                  <th>路線</th>
                  <th>英雄</th>
                  <th>K/D/A</th>
                  <th>尾兵數</th>
                  <th>經濟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">T1 Zeus</th>
                  <td>Top</td>
                  <td>賈克斯</td>
                  <td>0 / 4 / 3</td>
                  <td>209</td>
                  <td>8,944</td>
                </tr>
                <tr>
                  <th scope="row">T1 Oner</th>
                  <td>jungle</td>
                  <td>菲艾</td>
                  <td>1 / 3 / 1</td>
                  <td>182</td>
                  <td>8,531</td>
                </tr>
                <tr>
                  <th scope="row">T1 Faker</th>
                  <td>MID</td>
                  <td>賽勒斯</td>
                  <td>0 / 4 / 2</td>
                  <td>226</td>
                  <td>9,297</td>
                </tr>
                <tr>
                  <th scope="row">T1 Gumayusi</th>
                  <td>AD</td>
                  <td>剎雅</td>
                  <td>2 / 2 / 0</td>
                  <td>307</td>
                  <td>11,613</td>
                </tr>
                <tr>
                  <th scope="row">T1 Keria</th>
                  <td>support</td>
                  <td>睿娜妲．格萊斯克</td>
                  <td>0 / 4 / 2</td>
                  <td>39</td>
                  <td>5,592</td>
                </tr>
                <tr>
                  <th scope="row">-</th>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">BLG Bin</th>
                  <td>Top</td>
                  <td>藍寶</td>
                  <td>7 / 0 / 5</td>
                  <td>233</td>
                  <td>12,970</td>
                </tr>
                <tr>
                  <th scope="row">BLG XUN</th>
                  <td>jungle</td>
                  <td>鏡爪</td>
                  <td>1 / 1 / 14</td>
                  <td>190</td>
                  <td>11,466</td>
                </tr>
                <tr>
                  <th scope="row">BLG knight</th>
                  <td>MID</td>
                  <td>加里歐</td>
                  <td>1 / 1 / 13</td>
                  <td>275</td>
                  <td>11,751</td>
                </tr>
                <tr>
                  <th scope="row">BLG Elk</th>
                  <td>AD</td>
                  <td>克黎思妲</td>
                  <td>7 / 0 / 4</td>
                  <td>232</td>
                  <td>14,046</td>
                </tr>
                <tr>
                  <th scope="row">BLG ON</th>
                  <td>support</td>
                  <td>布里茨</td>
                  <td>1 / 1 / 9</td>
                  <td>44</td>
                  <td>7,831</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
          
        </Card>
      </Col>

      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            第四場總結
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>隊伍</th>
                  <th>勝敗</th>
                  <th>擊殺數</th>
                  <th>飛龍數</th>
                  <th>經濟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">T1</th>
                  <td>Win</td>
                  <td>13</td>
                  <td>4</td>
                  <td>58.3K</td>
                </tr>
                <tr>
                  <th scope="row">BLG</th>
                  <td>Lose</td>
                  <td>9</td>
                  <td>0</td>
                  <td>51.5K</td>
                </tr>
                
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>

      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            第四場選角
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>選手</th>
                  <th>路線</th>
                  <th>英雄</th>
                  <th>K/D/A</th>
                  <th>尾兵數</th>
                  <th>經濟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">T1 Zeus</th>
                  <td>Top</td>
                  <td>藍寶</td>
                  <td>2 / 4 / 6</td>
                  <td>252</td>
                  <td>12,767</td>
                </tr>
                <tr>
                  <th scope="row">T1 Oner</th>
                  <td>jungle</td>
                  <td>波比</td>
                  <td>0 / 1 / 10</td>
                  <td>182</td>
                  <td>9,726</td>
                </tr>
                <tr>
                  <th scope="row">T1 Faker</th>
                  <td>MID</td>
                  <td>賽勒斯</td>
                  <td>5 / 1 / 2</td>
                  <td>248</td>
                  <td>12,982</td>
                </tr>
                <tr>
                  <th scope="row">T1 Gumayusi</th>
                  <td>AD</td>
                  <td>艾希</td>
                  <td>4 / 2 / 6</td>
                  <td>296</td>
                  <td>14,211</td>
                </tr>
                <tr>
                  <th scope="row">T1 Keria</th>
                  <td>support</td>
                  <td>睿娜妲．格萊斯克</td>
                  <td>2 / 1 / 9</td>
                  <td>33</td>
                  <td>8,580</td>
                </tr>
                <tr>
                  <th scope="row">-</th>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">BLG Bin</th>
                  <td>Top</td>
                  <td>吶兒</td>
                  <td>1 / 2 / 4</td>
                  <td>246</td>
                  <td>10,435</td>
                </tr>
                <tr>
                  <th scope="row">BLG XUN</th>
                  <td>jungle</td>
                  <td>史瓦妮</td>
                  <td>3 / 4 / 6</td>
                  <td>146</td>
                  <td>9,494</td>
                </tr>
                <tr>
                  <th scope="row">BLG knight</th>
                  <td>MID</td>
                  <td>史矛德</td>
                  <td>3 / 2 / 2</td>
                  <td>328</td>
                  <td>13,178</td>
                </tr>
                <tr>
                  <th scope="row">BLG Elk</th>
                  <td>AD</td>
                  <td>希格斯</td>
                  <td>2 / 3 / 3</td>
                  <td>250</td>
                  <td>11,167</td>
                </tr>
                <tr>
                  <th scope="row">BLG ON</th>
                  <td>support</td>
                  <td>銳空</td>
                  <td>0 / 2 / 5</td>
                  <td>57</td>
                  <td>7,200</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
          
        </Card>
      </Col>

      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            第五場總結
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>隊伍</th>
                  <th>勝敗</th>
                  <th>擊殺數</th>
                  <th>飛龍數</th>
                  <th>經濟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">T1</th>
                  <td>Win</td>
                  <td>12</td>
                  <td>3</td>
                  <td>62.5K</td>
                </tr>
                <tr>
                  <th scope="row">BLG</th>
                  <td>Lose</td>
                  <td>6</td>
                  <td>1</td>
                  <td>55.3K</td>
                </tr>
                
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>

      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            第五場選角
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>選手</th>
                  <th>路線</th>
                  <th>英雄</th>
                  <th>K/D/A</th>
                  <th>尾兵數</th>
                  <th>經濟</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">T1 Zeus</th>
                  <td>Top</td>
                  <td>古拉格斯</td>
                  <td>0 / 1 / 8</td>
                  <td>282</td>
                  <td>12,891</td>
                </tr>
                <tr>
                  <th scope="row">T1 Oner</th>
                  <td>jungle</td>
                  <td>趙信</td>
                  <td>5 / 1 / 4</td>
                  <td>214</td>
                  <td>12,306</td>
                </tr>
                <tr>
                  <th scope="row">T1 Faker</th>
                  <td>MID</td>
                  <td>加里歐</td>
                  <td>4 / 1 / 6</td>
                  <td>311</td>
                  <td>14,409</td>
                </tr>
                <tr>
                  <th scope="row">T1 Gumayusi</th>
                  <td>AD</td>
                  <td>剎雅</td>
                  <td>3 / 1 / 3</td>
                  <td>374</td>
                  <td>15,301</td>
                </tr>
                <tr>
                  <th scope="row">T1 Keria</th>
                  <td>support</td>
                  <td>波比</td>
                  <td>0 / 2 / 3</td>
                  <td>35</td>
                  <td>7,573</td>
                </tr>
                <tr>
                  <th scope="row">-</th>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">BLG Bin</th>
                  <td>Top</td>
                  <td>賈克斯</td>
                  <td>0 / 2 / 5</td>
                  <td>281</td>
                  <td>11,637</td>
                </tr>
                <tr>
                  <th scope="row">BLG XUN</th>
                  <td>jungle</td>
                  <td>嘉文四世</td>
                  <td>2 / 2 / 4</td>
                  <td>184</td>
                  <td>10,043</td>
                </tr>
                <tr>
                  <th scope="row">BLG knight</th>
                  <td>MID</td>
                  <td>阿璃</td>
                  <td>3 / 1 / 1</td>
                  <td>310</td>
                  <td>13,240</td>
                </tr>
                <tr>
                  <th scope="row">BLG Elk</th>
                  <td>AD</td>
                  <td>凱莎</td>
                  <td>1 / 2 / 2</td>
                  <td>321</td>
                  <td>13,407</td>
                </tr>
                <tr>
                  <th scope="row">BLG ON</th>
                  <td>support</td>
                  <td>銳兒</td>
                  <td>0 / 5 / 5</td>
                  <td>42</td>
                  <td>6,981</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
          
        </Card>
      </Col>

      
    </Row>
  );
};

export default Alerts;
