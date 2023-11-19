import React, { useEffect, useState } from 'react';
import api from '../../api/axios'
import DataTable from '../common/dataTable.js';
import { InputFieldParameter, TabelCol} from './loyaltyParaInputs.js'
import LoyaltyForm from './loyaltyForm';


export default function Loyalty() {

  const initState = {
    id: "",
    firstname: "",
    lastname: "",
    address: "",
  }

  const [customerInfo, setcustomerInfo] = useState(initState)
  const [formReset, setFormReset] = useState(false);
  const [classes, setClasses] = useState([]);
  // const [student, setstudent] = useState([]);
  const [formsumbit, setformsumbit] = useState("Save");


  // useEffect(() => {
  //   getClasseRooms();
  //   const getData = async () => {
  //     // const studentTableData = await updateStudentDataTable()
  //     // if (studentTableData) setstudent(studentTableData)
  //   }
  //   getData()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);


  function handelTextChange(e) {
    setcustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  }

  function handleReset(e) {
    setcustomerInfo(initState);
    setFormReset(!formReset)
    setformsumbit("Save")
  }

  // async function getClasseRooms() {
  //   await api.get("/api/Classrooms")
  //     .then(response => {
  //       let data = response.data
  //       console.log(data); 
  //       setClasses(data);    
  //       setClasses(data);    
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }

  // const retriveAllStudentData = async () => {
  //   try {
  //     const response = await api.get(`/api/Students/`);
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

//   function formatDate(date) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2) 
//         month = '0' + month;
//     if (day.length < 2) 
//         day = '0' + day;

//     return [year, month, day].join('-');
// }
 

  // const getSelectedStudentData = async (e) => {
  //   try {
  //     const response = await api.get(`/api/Students/${e.target.id}`);
  //     if (response.data) {
  //       const student = response.data;
  //       const className = await getClassName(student.classroomId);
  //       setcustomerInfo({
  //         studentid: student.studentId,
  //         firstname: student.studentFirstName,
  //         lastname: student.studentLastName,
  //         contactperson: student.contactPerson,
  //         contactno: student.contactNo,
  //         email: student.email,
  //         dob: formatDate(student.studentDob),
  //         age: "",
  //         classroom: className,
  //       });
  //       setformsumbit("Update")
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const updateSelectedStudentData = async (e) => {
  //   try {
  //     const classId = await getClassId(customerInfo.classroom);
  //     const request = {
  //       studentId:customerInfo.studentid,
  //       studentFirstName: customerInfo.firstname,
  //       studentLastName: customerInfo.lastname,
  //       contactPerson: customerInfo.contactperson,
  //       contactNo: customerInfo.contactno,
  //       email: customerInfo.email,
  //       studentDob: customerInfo.dob,
  //       classroomId: classId
  //     }
  //     console.log(request);
  //     let response = await api.put(`/api/Students/${customerInfo.studentid}`, request);
  //     if (response.status === 204) {
  //       shorAlert("info", "Student Sucessfully Updated");
  //       handleReset();
  //     }
  //   } catch (error) {
  //     shorAlert("danger", "Error Updating Student")
  //   }
  // }

  // const updateStudentDataTable = async () => {
  //   const data = await retriveAllStudentData();
  //   if (data) {
  //     return data.map((student) => (
  //       <tr key={student.studentId}>
  //         <th scope="row">
  //           {student.studentFirstName}
  //         </th>
  //         <td>
  //           {student.studentLastName}
  //         </td>
  //         <td>
  //           {student.contactPerson}
  //         </td>
  //         <td>
  //           {student.contactNo}
  //         </td>
  //         <td>
  //           <Button color="primary"  id={student.studentId} onClick={getSelectedStudentData} block>Update</Button>
  //         </td>
  //       </tr>
  //     ))
  //   } else {
  //     shorAlert("danger", "Student Information Not Available or Connection Error")
  //   }
  // }

  
  // function getClassId(className) {
  //   for (let index = 0; index < classes.length; index++) {
  //     if (classes[index].classroomName === className) {
  //       return classes[index].classroomId;
  //     }
  //   }
  // }

  // function getClassName(classId) { 
  //   console.log("My clsesse-->", classes);
  //   for (let index = 0; index < classes.length; index++) {
  //     if (classes[index].classroomId === classId) {
  //       return classes[index].classroomName;
  //     }
  //   }
  // }


  async function createStudent() {
    try {
      // const classId = await getClassId(customerInfo.classroom);
      const request = {
        firstname: customerInfo.firstname,
        lastname: customerInfo.lastname,
        address: customerInfo.address,
      }
      console.log(request);
      let response = await api.post("/api/Students", request);
      if (response.status === 201) {
      
        handleReset()
      }
    } catch (error) {
      
    }
  }




  function onSubmitForm(e) {
    e.preventDefault();
    if (validateAllFields()) {
      if(formsumbit === "Save"){
        createStudent();
      }else{
        // updateSelectedStudentData();
      }  
    } else {
     
    }
  }

  function validateAllFields() { // validate  all required  fields updated
    for (let index = 0; index < InputFieldParameter.length; index++) {
      if (InputFieldParameter[index].required) {
        if (customerInfo[InputFieldParameter[index].name] === "") {
          return false;
        }
      }
    }
    return true;
  }


  return (
    <>
    <DataTable tableCol={TabelCol} tableData={null}/>
     <LoyaltyForm formsumbit={formsumbit} handelTextChange={handelTextChange} onSubmitForm={onSubmitForm} handleReset={handleReset}
    InputFieldParameter={InputFieldParameter} customerInfo={customerInfo} formReset={formReset} classes={classes} />
    </>
  );
}

