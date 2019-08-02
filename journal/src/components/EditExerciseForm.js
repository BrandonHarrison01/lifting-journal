// import React from 'react'
// import { Link as NewWorkout } from 'react-router-dom'

import AddExercise from './editexerciseforms/AddExercise'
import EditExercise from './editexerciseforms/EditExercise'
import DeleteExercise from './editexerciseforms/DeleteExercise'

// function EditExerciseForm(props) {

//     return(
//         <div>
//             <AddExercise history={props.history} />
//             <EditExercise history={props.history} />
//             <DeleteExercise history={props.history} />
//         </div>
//     )
// }

// export default EditExerciseForm

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
        <Button color="danger" onClick={this.toggle}>edit exercises</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <AddExercise />
            <EditExercise />
            <DeleteExercise />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditExerciseForm;