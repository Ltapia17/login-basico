<template>
    <div>
      <div class="container">
        <nav class="navbar " role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/">
      <h3 class="title is-3">Vue Js</h3>
   </router-link>

    <a role="button" class="navbar-burger burger" :class="{'is-active': isOpen}" @click.prevent="toggleMenu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        Inicio
      </router-link>

      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <template v-if="user">
          <div class="navbar-item has-dropdown is-hoverable">
        <router-link class="navbar-link" to="">
          {{user.displayName || user.email}}
        </router-link>

        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/dashboard">
            Dashboard
          </router-link>
          <a class="navbar-item" @click.prevent="logout">
            Cerrar Session
          </a>
        </div>
      </div>
        </template>
        <template v-else>
          <div class="buttons">
          <router-link class="button is-info" to="/Register">
            <strong>Registrarse</strong>
          </router-link>
          <router-link class="button is-light" to="/Login">
            Logearse
          </router-link>
        </div>
        </template>
        
      </div>
    </div>
    
  </div>
</nav>
</div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      isOpen: false,
      user: null
    }
  },
  methods:{
    toggleMenu(){
      const status = !this.isOpen;
      this.isOpen = status;
    },
    logout(){
      firebase.auth().signOut().then(()=>{
        this.$router.push({name: 'login'})
      })
    },
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.user = user
      }else{
        this.user = null
      }
    })
  }
}
</script>
