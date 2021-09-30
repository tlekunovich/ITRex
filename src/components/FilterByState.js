import React from 'react'
import style from './FilterByState.module.css'
import { useState,useEffect } from 'react'
import arrow from './../img/arrow.svg'
import {connect} from 'react-redux';
import {setUserInfoAction} from './store/actions';

const FilterByState = (props) => {
   
    const [subMenu,setSubMenu]=useState(false) 

    const menuItem = [
        {text: 'WI', id:1, },
        {text: 'TN', id:2, },
        {text: 'CA', id:3, },
        {text: 'NE', id:4, },
             
    ]
    

    return (
        <div>
            <button className={style.ToggleButton} onClick={()=>setSubMenu(!subMenu)}>
                Filter By State 
                <img alt='' src={arrow} className={style.arrow}></img>
            </button>
           
            {
                subMenu
                ? 
                <div className={style.MenuToggle}>
                    <ul>
                        <li className={style.MenuToggleItem}  onClick={()=>{props.setInputState(''); setSubMenu(!subMenu)}}>
                            none
                        </li>
                        {menuItem.map((elem)=>{
                            return(
                                <li key={elem.id} 
                                    className={style.MenuToggleItem} 
                                    onClick={()=>{props.setInputState(elem); setSubMenu(!subMenu)}}
                                >
                                    {elem.text}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                : 
                <div></div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    userInfo: state.userInfo,
   } 
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo(value) {
            dispatch(setUserInfoAction(value))
          },
    }
  };


export default connect(mapStateToProps, mapDispatchToProps)(FilterByState);
