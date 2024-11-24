import { Card, CardBody } from "reactstrap";

const SalesChart = ({ videoUrl }) => {
  return (
    <Card>
      <CardBody>
        {videoUrl ? (
          <iframe
            width="100%"
            height="375"
            src={videoUrl}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>請從右邊選擇想觀看的精華片段</p>
        )}
      </CardBody>
    </Card>
  );
};

export default SalesChart;