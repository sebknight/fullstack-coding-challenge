import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import UpdateStation from './UpdateStation';

const Station = (props) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`api/stations/history/${props.station.id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then((res) => {
        console.log(res);
        if (res.ok) return res.json();
        else throw new Error(res.statusText);
      })
      .then((data) => {
        setHistory(data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  return (
    <>
      <Card>
        <Card.Header>{props.station.name}</Card.Header>
        <Card.Body>
          {props.station.latitude}, {props.station.longitude}
        </Card.Body>
        <Card.Header>
          History
        </Card.Header>
        <Card.Body>
          {history}
        </Card.Body>
      </Card>
      <UpdateStation station={props.station} />
    </>
  );
};

export default Station;
