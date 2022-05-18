const API = "https://api.github.com/users/";

async function buscar(){
    const response = await fetch(API + 'MiguelEquisDe')
    //ahora quiero traer la info en formato json
    const data = await response.json()
    console.log(data)
}

//se crea un modelo
const app = Vue.createApp({
    data() {
        return {
            message: 'Cambio Correcto'
        }
    }
})
//montamos esta informacion en el div app