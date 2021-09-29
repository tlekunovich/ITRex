import React from 'react'
import style from './UserInformation.module.css'
import {connect} from 'react-redux';
import {setUserInfoAction} from './store/actions';

const UserInformation = (props) => {
    const {userInfo} = props
    return (
        <>
        {!userInfo
        ?
        <div className={style.UserInformationWrapper} >
            Select user for more information
        </div>
        : 
        <div className={style.UserInformationWrapper} >
            <div className={style.infoItem}>Profile Info</div>
           <div className={style.infoItem}>Selected profile:{userInfo.firstName} {userInfo.lastName}</div> 
           <div className={style.infoItem}>Description:{userInfo.description}</div>
           <div className={style.infoItem}>Adress:{userInfo.adress.streetAddress} </div>
           <div className={style.infoItem}>City:{userInfo.adress.city}</div>
           <div className={style.infoItem}>State:{userInfo.adress.state}</div>
           <div className={style.infoItem}>Index:{userInfo.adress.zip} </div> 
        </div>
    }
        </>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);
