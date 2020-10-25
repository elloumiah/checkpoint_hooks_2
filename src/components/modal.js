import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalAdd({ movies, setMovies }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [rate, setRate] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlechangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlechangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handlechangeRate = (e) => {
    setRate(e.target.value);
  };
  const handleClickAdd = ({ title, desc, rate }) => {
    setMovies([...movies, { title, desc, rate }]);
    // let movie = {title,desc,rate}
    // movies.push(movie)
    console.log(movies);
  };

  return (
    <>
      {console.log({ title, desc, rate })}
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            title:{" "}
            <input
              type="text"
              onChange={handlechangeTitle}
              value={title}
            ></input>
          </div>
          description:
          <input type="text" onChange={handlechangeDesc} value={desc}></input>
          <div>
            rate:
            <input type="text" onChange={handlechangeRate} value={rate}></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {handleClickAdd({ title, desc, rate });handleClose()}}
            
          >
            add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdd;
