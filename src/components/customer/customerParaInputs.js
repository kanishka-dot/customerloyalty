export  const InputFieldParameter = [
  {
    id: 1,
    name:"firstname",
    label: "First name",
    type:"text",
    errorMessage:"Valid Name is required",
    pattern: /^[a-zA-Z]+$/,
    required:true
  },
  {
    id: 2,
    name:"lastname",
    label: "Last name",
    type:"text",
    errorMessage:"Valid Name is required",
    pattern: /^[a-zA-Z]+$/,
    required:true
  },
  {
    id: 3,
    name:"address",
    label: "Address",
    type:"text",
    errorMessage:"Valid Name is required",
    pattern: /^[#./0-9a-zA-Z\s,-]+$/,
    required:true
  },
  
]

