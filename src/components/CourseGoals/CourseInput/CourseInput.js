import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0){
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('') //in order to get this to clear the form, you MUST assign the STATE as the VALUE in the FORM BECAUSE ITS USING THE CURRENT STATE. As seen below!
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* ['form-control'] aka ['property-name'] etc is how you access properties with CSS Modules */}
      {/* !isValid && styles.invalid MEAN that, is false, implement styles.invalid */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
