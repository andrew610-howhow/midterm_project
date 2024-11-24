import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "Elk snipes Faker",
    icon: "bi bi-1-circle",
    color: "primary",
    date: "Elk-Ashe",
    videoUrl: "https://www.youtube.com/embed/NJcwiqHSoGg",
  },
  {
    title: "Unkillable demon king",
    icon: "bi bi-2-circle",
    color: "danger",
    date: "Faker-Sylas",
    videoUrl: "https://www.youtube.com/embed/VaXo3AJV6Y8",
  },
  {
    title: "One step left",
    icon: "bi bi-3-circle",
    color: "primary",
    date: "BLG team",
    videoUrl: "https://www.youtube.com/embed/09hbtMtomXg",
  },
  {
    title: "Game-changing play",
    icon: "bi bi-4-circle",
    color: "danger",
    date: "Faker-Sylas",
    videoUrl: "https://www.youtube.com/embed/eYLjsxiJETA",
  },
  {
    title: "Finals MVP",
    icon: "bi bi-5-circle",
    color: "danger",
    date: "Faker-Galio",
    videoUrl: "https://www.youtube.com/embed/qdDCh4K407M",
  },
];

const Feeds = ({ onVideoSelect }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">精華片段</CardTitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              tag="button"
              className="d-flex align-items-center p-3 border-0"
              onClick={() => onVideoSelect(feed.videoUrl)}
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
