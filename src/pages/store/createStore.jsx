import React,{useState} from "react"
import { TextField } from "@mui/material"
import { Card } from "@mui/material"
import ClassButton from "./inputStore/button"
import InputStore from "./inputStore/inputStore"
function CreateStore() {
const [name, setName] = useState('')
const [location, setLocation] = useState('')
const [description, setDescription] = useState('')
const [movil, setMovil] = useState([])

function handleChange(valid,value){
    if(valid === 'name'){
        setName(value)
    }
    if(valid==='location'){
        setLocation(value)
    }
    if(valid==='description'){
        setDescription(value)
    }
    if(valid === 'movil'){
        setMovil(value)
    }
}

 const handleSubmit =()=>{
    let store = {name,location}
    console.log(store);

}

    return (
        <div>
            <InputStore
                attribute={{
                    id:'name',
                    label:'Store name',
                    name:'Store name',
                    type: 'text',
                    placeholder: 'Store name'
                }}
            handleChange={handleChange}
            />
            <InputStore
                attribute={{
                    id:'location',
                    label:'Store location',
                    name:'Store location',
                    type: 'text',
                    placeholder: 'Store location'
                }}
            handleChange={handleChange}
            />
            <InputStore
                attribute={{
                    id:'description',
                    label:'Store description',
                    name:'Store description',
                    type: 'text',
                    placeholder: 'Store description'
                }}
            handleChange={handleChange}
            /> 
            <InputStore
                attribute={{
                    id:'movil',
                    label:'Store phone',
                    name:'Store phone',
                    type: 'tel',
                    placeholder: 'Store phone'
                }}
            handleChange={handleChange}
            />
            <ClassButton onClick={(e)=> handleSubmit} text='Crear'/>
        </div>
    )
}

export default CreateStore
