import Table from "./components/Table";
import style from './App.module.css';
import {useEffect,useState} from "react";
import FilterByState from "./components/FilterByState";
import InputName from "./components/InputName";
import UserInformation from "./components/UserInformation";
import PagesList from "./components/PagesList"; 
import {connect} from 'react-redux';
import { setUsersDataAction, setInputNameAction, setPageAction, setSortedParamAction, setUserInfoAction} from './components/store/actions';


function App(props) {
  
const [inputState, setInputState] = useState('')

  const requestToTheServer = async () => {

    let url = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'
    try{
      let resp = await fetch(url);
      resp = await resp.json();
      props.setUsersData(resp);
  } catch (e) {
      console.log('error')
  }
}
  

useEffect(()=>{
  requestToTheServer()
},[])


 const resultFilterByName = props.usersData.filter((elem)=>{
   return(
     elem.firstName.toLowerCase().indexOf(props.inputName.toLocaleLowerCase()) === 0
   )
 })


let  typeArr = props.inputName.length > 0 ? resultFilterByName: props.usersData 

if(inputState?.text?.length>0){ 
  typeArr = typeArr.filter ((elem) => {
    return(
      elem.adress.state.toLocaleLowerCase() === inputState.text.toLowerCase()
    )
  })
}


const sortedForParams = typeArr.sort((a, b)=>{
    if(props.sortedParam ==='state'){
    if(a.adress[props.sortedParam] < b.adress[props.sortedParam]) { return -1; }
    if(a.adress[props.sortedParam] > b.adress[props.sortedParam]) { return 1; }
    return 0;
  }else{
    if(a[props.sortedParam] < b[props.sortedParam]) { return -1; }
    if(a[props.sortedParam] > b[props.sortedParam]) { return 1; }
    return 0;
  }
 
})


const SIZE = 20;
const localPaginationData = sortedForParams.reduce((acc,elArr)=>{
  if(acc[acc.length-1].length === SIZE){
    acc.push([]);
  }
  acc[acc.length-1].push(elArr);
  
  return acc;
}, [[]]);


const countPages = [...Array(localPaginationData.length).keys()]

const isActivePage = localPaginationData.length < props.page ? 0 : props.page;

if(props.usersData.length<=0){return false}
  return (
    <div className={style.AppWrapper}>
      <div className={style.filter}>
        <InputName />
        <FilterByState 
          setInputState ={setInputState}
          inputState={inputState}
        />
      </div>
        <Table data = {localPaginationData[isActivePage]} />
        <PagesList 
          countPages={countPages}
          localPaginationData={localPaginationData} />
        <UserInformation />
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
