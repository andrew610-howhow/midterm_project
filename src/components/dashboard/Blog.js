import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Blog = (props) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <Button
          style={{
            backgroundColor: "#003366", 
            borderColor: "#003366",
            color: "red", 
          }}
          onClick={props.onReadMoreClick}
        >
          Read More
        </Button>
      </CardBody>
    </Card>
  );
};

export default Blog;
