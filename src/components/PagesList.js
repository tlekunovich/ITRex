import React from 'react'
import style from './PagesList.module.css'
import {connect} from 'react-redux';
import {setPageAction} from './store/actions';

const PagesList = (props) => {

 const getPreviousPage = () => {
    if(props.page > 0){
        props.setPage(props.page-1)
    } else 
    {props.setPage(0)}
} 

const getNextPage = () => {
    if(props.page+1 < props.localPaginationData.length){
        props.setPage(props.page+1)
    } else if (props.page === props.localPaginationData.length)
    {props.setPage(props.localPaginationData.length)}
} 
 
 
 return (
        <div className={style.Pages}>
            <div className={style.pagesWrapper}>
            <div className={style.pagesElem} onClick={()=>getPreviousPage()}>Previous</div>
                    {props.countPages.map((p,i)=>{
                        return(
                            <div className={style.pagesElem} onClick={()=>props.setPage(p)}>{p+1}</div>
                    )}
                    )
                }
                <div className={style.pagesElem} onClick={()=>{getNextPage()}}>Next</div>
                </div>
        </div>
        
    )
}


const mapStateToProps = (state) => {
    return {
       page: state.page,
   } 
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setPage(value) {
            dispatch(setPageAction(value))
          },
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(PagesList);
