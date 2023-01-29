
import React from 'react'
import ElseCard from './ElseCard'
import GivePermissionCard from './GivePermissionCard'
// import FindPatient from './FindPatient'
// import PatientCard from './PatientCard'
// import Patients from './Patients'
// import TimeLine from './TimeLine'

const MainComponent = (props) => {

    if(props.nums == 1){
        return <GivePermissionCard />
    }
    // else if(props.num == 1){
    //     return <Patients />
    // }
    // else if(props.num == 2){
    //     return <FindPatient />
    // }
    return <ElseCard />
}

export default MainComponent