import React from 'react'
import style from './InputName.module.css'
// import { useState } from 'react'
import {connect} from 'react-redux';
import {setInputNameAction} from './store/actions';

const InputName = (props) => {
    // {setInputName,inputName,setFilteredByName}
 
    return (
        <div className={style.InputWrapper} >
            <input
                className={style.InputName}
                list='cities'
                placeholder="Search by name:"
                value={props.inputName}
                onChange={(e) => props.setInputName(e.target.value)}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputName:state.inputName,
        
   } 
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setInputName(value) {
        dispatch(setInputNameAction(value))
      },
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(InputName);