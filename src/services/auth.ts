
interface Response{
  token:string,
  user:{
    name:string,
    email:string
  }
}


export function signIn():Promise<Response> {
  return new Promise(resolve =>{
    setTimeout(() => {
      resolve({
        token:'asdasfasfadahpsd8f8sdf',
      user:{
        name:'jose',
        email:'jose@gmail.com'
      }})
      
      }
    , 2000);
  })
}