const API = "https://api.github.com/users/";

//se crea un modelo/metodo
const app = Vue.createApp({
    data() {
        return {
            //message: 'Buscar Mirrey'
            busqueda: null,
            result: null
        }
    },
    //nuevo, la palabra function ya no es necesaria ya que se
    //usa un metodo
    methods: {
        async buscar() {
            const response = await fetch(API + this.busqueda)
            //ahora quiero traer la info en formato json
            const data = await response.json()
            console.log(data)
            this.result = true
        }
    }
})