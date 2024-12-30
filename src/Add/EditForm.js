import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { useRef } from 'react';

const MydModalWithGrid = (props) => {
    const Rname = useRef('');
    const Rcatagories = useRef('');
    const Ringredients = useRef('');
    const Rprice = useRef(0);
    console.log(props);
    const EditedForm = () =>{
        props.onHide();
        
    let Robj = {
        Rn: Rname.current.value,
        Rc: Rcatagories.current.value,
        Ri: Ringredients.current.value,
        Rp: Rprice.current.value
    }
        fetch(`https://food-app-76ef6-default-rtdb.firebaseio.com/admin/recipes/${props.data.rece.key}.json`
            ,{
            method:"PUT",
            body: JSON.stringify(Robj),
            headers:{
              "Content-Type":"application/json",
            },
          }
        ).then(console.log("Edited",props.data.rece.key));
    }
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Recipies
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={8}>
            <input type="text" ref={Rname} placeholder="Recipe name" />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
            <select ref={Rcatagories}>
                          <option>Select catagories</option>
                          <option value="1">Appetizers</option>
                          <option value="2">Main Courses</option>
                          <option value="3">Desserts</option>
                      </select>
            </Col>
            <Col xs={6} md={4}>
            <input type="number" ref={Rprice} placeholder="Price"/>
            </Col>
            <Col xs={6} md={4}>
            <input type="text" ref={Ringredients} placeholder="Ingredients" />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <button className="button1" onClick={EditedForm}>Submit</button>
        <button className="button1" onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
    );
}

export default MydModalWithGrid;