import { React, useState } from "react";
import { Alert } from "react-bootstrap";
import "./Alerts.css";

export default function AlertDismissible(props) {
  const [show, setShow] = useState(true);
  if (props.type == "danger") {
    if (show) {
      return (
        <div className="AlertBox">
          <Alert
            className="AlertBox"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading>Oh snap!</Alert.Heading>
            <p className="text-danger">{props.message}</p>
          </Alert>
        </div>
      );
    }
  } else if (props.type == "warning") {
    if (show) {
      return (
        <div className="AlertBox">
          <Alert
            className="AlertBox"
            variant="warning"
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading>Head up!</Alert.Heading>
            <p className="text-warning">{props.message}</p>
          </Alert>
        </div>
      );
    }
  } else if (props.type == "success") {
    if (show) {
      return (
        <div className="AlertBox">
          <Alert
            className="AlertBox"
            variant="success"
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading>Success!</Alert.Heading>
            <p className="text-success">{props.message}</p>
          </Alert>
        </div>
      );
    }
  } else if (props.type == "info") {
    if (show) {
      return (
        <div className="AlertBox">
          <Alert
            className="AlertBox"
            variant="info"
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading>Info!</Alert.Heading>
            <p className="text-info">{props.message}</p>
          </Alert>
        </div>
      );
    }
  } else {
    return <></>;
  }
}
