import React from 'react'
import style from './Table.module.css'
import arrow from './../img/arrow.svg'
import {connect} from 'react-redux';
import { setUsersDataAction, setInputNameAction,setPageAction, setSortedParamAction, setUserInfoAction} from './store/actions';


const Table = (props) => {

const table = [
   {key:'id', title: 'id'},
   {key:'firstName', title: 'First name'},
   {key:'lastName', title: 'Last name'},
   {key:'email', title: 'Email'},
   {key:'phone', title: 'Phone'},
   {key:'state', title: 'State'},
    ]
   
    const sortedByItem = (key) => {
        props.setSortedParam(key)
        props.setPage(0)
    }

    return (
       
       <div className={style.tableWrapper} >
            <table className={style.table}>
            <tbody>
                <tr className={style.headRowOfTable}>
                    {table.map((elem,index)=>{
                        return (
                            <td key={index} >
                                <div className={style.headOfTable} onClick={()=>sortedByItem(elem.key)}>
                                {elem.title}
                                <img alt='' 
                                src={arrow}
                                 className={style[props.sortedParam===elem.key?'arrowUp':'arrowDown']}
                                  >
                                </img>
                                </div>
                                
                            </td>

                        )
                    })}
                </tr>
               
                    {props.data?.length> 0 && props.data.map((elem,index)=>{
                        
                        return (
                            <tr onClick={()=>props.setUserInfo(elem)}>
                        <td key={index}>
                           {elem.id}
                        </td>

                        <td key={index}>
                        {elem.firstName}
                     </td>

                     <td key={index}>
                        {elem.lastName}
                     </td>

                     <td key={index}>
                        {elem.email}
                     </td>

                     <td key={index} >
                        {elem.phone}
                     </td>

                     <td key={index}>
                        {elem.adress.state}
                     </td>

                     </tr>
                        )
                    })}
               
                </tbody>
            </table>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        usersData:state.usersData,
        inputName:state.inputName,
        page: state.page,
        sortedParam: state.sortedParam,
        userInfo: state.userInfo,
   } 
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setUsersData(value) {
        dispatch(setUsersDataAction(value))
      },
      setInputName(value) {
        dispatch(setInputNameAction(value))
      },
      setPage(value) {
        dispatch(setPageAction(value))
      },
      setSortedParam(value) {
        dispatch(setSortedParamAction(value))
      },
      setUserInfo(value) {
        dispatch(setUserInfoAction(value))
      },
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(Table);
