<template>
     <div class="box">
                <div>
                    {{errorMess}}
                </div>
                <div class="signup">
                    <p class="txt">Create an account:</p>
                        <ul>
                            <li class="txt">Email:</li>
                            <input v-model="email" type="email" >

                            <li class="txt">Username:</li>
                            <input v-model="username" type="username" >

                            <li class="txt">Password:</li>
                            <input v-model="password" type="password" >

                            <li class="txt">Confirm password:</li>
                            <input v-model="confirmPassword" type="password" >
                            
                            <button @click.prevent="register()" class="submit">SUBMIT</button>
                        </ul>
                </div>
            </div>
</template>


<script>

export default {


    data() {
        return {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            errorMess: ''
        }
    },
    methods: {
        register(){
            
        }
    }
}

</script>


<style scoped>
div .signup{
    border: 1px #8a8a8a solid;
    width: 400px;
    height: auto;
    padding: 20px;
    margin: auto;
    margin-top:50px;
}


div ul li {
        list-style: none;
        padding-top: 20px;
        padding-bottom: 3px;
        font-family: 'Nunito', sans-serif;
    }

    input {
        border: 1px #8a8a8a solid;
        border-radius: 15px;
        width: 250px;
        height: 25px;
        padding-left: 10px;
        margin:auto;
        
    }

    .submit {
        
        border-radius: 15px;
        margin-top: 20px;
        width: 100px;
        height: 25px;
        background-color:#FFBE3D;
        font-family: 'catamaran';
        padding-bottom: 5px;
        border: 1px #FFBE3D solid;
    }
    
    .submit:hover {
        background-color:#F2921D;
    }

    .txt{
        font-family: 'Catamaran', sans-serif;
        font-style: italic;
        font-size: 18px;
        margin-left: 23px;
    }
</style>