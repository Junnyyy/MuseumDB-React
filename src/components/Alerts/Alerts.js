import { React, useState, render } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import "./Alerts.css";

export default function AlertDismissible() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <div className="AlertBox0">
        <Alert
          className="AlertBox"
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Oh snap!</Alert.Heading>
          <p class="text-danger">Your password or username was incorrect</p>
          {/* <Alert.Heading>Oh snap!</Alert.Heading>*/}
        </Alert>
      </div>
    );
  }
  // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
