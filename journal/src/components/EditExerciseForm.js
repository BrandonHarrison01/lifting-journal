import React from 'react';

import AddExercise from './editexerciseforms/AddExercise'
import EditExercise from './editexerciseforms/EditExercise'
import DeleteExercise from './editexerciseforms/DeleteExercise'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './EditExerciseForm.scss'

class EditExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button outline color="success" size='lg' className='btn' onClick={this.toggle}>Edit Exercises</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className='header' toggle={this.toggle}>Edit Exercises</ModalHeader>
          <ModalBody className='modal-body' >
            <p className='crud-title'>Add an exercise!</p>
            <AddExercise toggle={this.toggle} />
            <p className='crud-title'>Edit an exercise!</p>
            <EditExercise toggle={this.toggle} />
            <p className='crud-title'>Delete an exercise!</p>
            <DeleteExercise toggle={this.toggle} />
          </ModalBody>
          <ModalFooter>
            <Button outline color="danger" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditExerciseForm;