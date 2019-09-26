<template>
    <div class="container mt-50">
        <div class="columns">
            <div class="column is-6 is-offset-3">
                <form action="" @submit.prevent="register">
                
                <h3 class="title is-3">Registrarse</h3>
                <hr />
                <div class="field">
                    <label class="label">Nombre:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Ingrese nombre" v-model="name">
                    </div>
                    </div>

                    <div class="field">
                    <label class="label">Email:</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="Ingrese emai" v-model="email">
                    </div>
                    </div>

                    <div class="field">
                    <label class="label">Contraseña:</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Ingrese contraseña" v-model="password">
                    </div>
                    </div>

                    <button type="submit" class="button is-success">Registrarse</button>

                    </form>

                    <div class="notification is-danger mt-10" v-if="error">
                        {{error}}
</div>  
            </div>
        </div>
    </div>
</template>

<script>
import db  from '@/firebase/init.js'
import firebase from 'firebase'
export default {
    data(){
        return{
            name: '',
            password: '',
            email: '',
            error: ''
        }
    },
    name: 'Register',
    methods:{
        register(){
            this.error = ''
            if(this.name  && this.email && this.password){
                   firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                   .then(user =>{

                       if(user){
                           var user = firebase.auth().currentUser;
                          user.updateProfile({
                            displayName: this.name
                            }).then((u) => {
                            this.name = ''
                            this.email = ''
                            this.password = ''
                            this.$router.push({name: 'dashboard' })
                            console.log(user)
                            }).catch((err) => {
                                this.error = err.message
                            })
                       }
                       
                   }).catch(function(error) {
	                console.log(error);
            })
           }else{
                this.error = 'Todos los campos son requeridos'
            }
        }
    }
}
</script>
