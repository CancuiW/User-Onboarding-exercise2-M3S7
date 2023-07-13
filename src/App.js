import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import * as yup from 'yup';
import axios from 'axios';
import Display from './components/Display';


const initialValues={
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  termsOfService:false
}
const initialError={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  termsOfService:''
}

const schema=yup.object().shape({
  firstName:yup.string().trim().required('firstName is required'),
  lastName: yup.string().trim().required('lastName is required'),
  email:yup.string().email(),
  password: yup.string().trim().min(6,'password needs to have more than 6 characters'),
  termsOfService:yup.boolean()
})



function App() {

  const [values,setValues]=useState(initialValues)
  const [disabled,setDisabled]=useState(false)
  const [errors,setErrors]=useState(initialError)
  const [display,setDisplay]=useState([])

  const change=(name,value)=>{
    yup.reach(schema,name).validate(value)
       .then(()=>setErrors({...errors,[name]:''}))
       .catch(err=>setErrors({...errors,[name]:err.errors[0]}))
   setValues({...values,[name]:value})
  }
  const onSubmit=()=>{
    const newValues={
      firstName:values.firstName.trim(),
      lastName:values.lastName.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
      termsOfService: values.termsOfService
    }
    axios.post('https://reqres.in/api/users',newValues)
         .then(res=>{
         // console.log(res.data)
           setDisplay([...display,res.data])
         })
         .catch(err=>console.error(err))
         .finally(()=>setValues(initialValues))

  }

  useEffect(() => {

    schema.isValid(values).then(valid => setDisabled(!valid))
  }, [values])



  return (
    <div className="App">
      <Form  values={values} 
             change={change} 
             submit={onSubmit} 
             disabled={disabled}
             errors={errors}
        />
       
      <Display  displayValues={display}/>
    </div>
  );
}

export default App;
