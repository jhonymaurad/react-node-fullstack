import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <h2>form</h2>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
