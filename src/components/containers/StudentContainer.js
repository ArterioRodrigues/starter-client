import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk , deleteStudentThunk} from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    return (
      <StudentView 
        student={this.props.student}
        deleteStudent={this.props.deleteStudent} 
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);