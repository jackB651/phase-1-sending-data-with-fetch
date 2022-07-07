// Add your code here
const URL = "http://localhost:3000/users"

function submitData (name, email){
       return fetch (URL, {
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
        }, 
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        }) 
       } ).then(Response=>Response.json()).then(data=>{
        const ID = data.id   
        document.body.append(ID)
       }).catch(message=>{
        document.body.append(message)
       })
}