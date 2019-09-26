<template>
    <div class="container mt-50">
        <div class="columns">
            <div class="column is-6 is-offset-3">
                <form action="" @submit.prevent="login">
                
                <h3 class="title is-3">Login</h3>
                <hr />
                
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

                    <button type="submit" class="button is-success">Ingresar</button>

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
            password: '',
            email: '',
            error: ''
        }
    },
    name: 'Login',
    methods:{
        login(){
            this.error = ''
            if(this.email && this.password){
                   firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                   .then(user => {
                       this.$router.push({name: 'dashboard'})
                   }).catch(function(error) {
                       error.message
                    });
           }else{
                this.error = 'Todos los campos son requeridos'
            }
        }
    }
}
</script>