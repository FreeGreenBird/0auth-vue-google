<template>
    <div>
      <h1>Test</h1>
      <button @click="handleClickGetAuth" :disabled="!isInit">get auth code</button>
      <button @click="handleClickSignIn" v-if="!isSignIn" :disabled="!isInit">signIn</button>
      <button @click="handleClickSignOut" v-if="isSignIn" :disabled="!isInit">signOout</button>
    </div>
  </template>
  
<script>
export default {
// eslint-disable-next-line vue/multi-word-component-names
name: 'test',
data () {
    return {
    isInit: false,
    isSignIn: false
    }
},

methods: {
    async handleClickGetAuth() {
    try {
        const authCode = await this.$gAuth.getAuthCode()
        const response = await this.$http.post('http://your-backend-server.com/auth/google', { code: authCode, redirect_uri: 'postmessage' })

        console.log(response);
    } catch (error) {
        // On fail do something
    }
    },

    async handleClickSignIn(){
    try {
        const googleUser = await this.$gAuth.signIn()
        console.log('user', googleUser)
        this.isSignIn = this.$gAuth.isAuthorized
    } catch (error) {
        // On fail do something
        console.error(error);
        return null;
    }
    },

    async handleClickSignOut(){
    try {
        await this.$gAuth.signOut()
        this.isSignIn = this.$gAuth.isAuthorized
    } catch (error) {
        // On fail do something
    }
    }
},
mounted(){
    let that = this
    let checkGauthLoad = setInterval(function(){
    that.isInit = that.$gAuth.isInit
    that.isSignIn = that.$gAuth.isAuthorized
    if(that.isInit) clearInterval(checkGauthLoad)
    }, 1000);
}

}
</script>