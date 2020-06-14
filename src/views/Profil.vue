<template>
    <div class="box" :style="{'background-image':'url(https://i.ibb.co/TbSNdGd/bg111.jpg)'}">
        <div >
            <p class="welcome" v-if="this.$store.user = true">Dobrodošao/la <strong>{{store.username}}</strong> </p> 
            <div class="box2">
                <ul>
                    <li class="left">Lokacija: </li>
                    <li class="right">Uredi profil</li>

                    <br><br><li>Kontakt broj:</li><br><br>
                    <li>O meni:</li> <textarea name="" id="" cols="93" rows="10"></textarea>
                </ul>
                <div class="interesi">
                    <input type="text" placeholder="interes1">
                    <input type="text" placeholder="interes2">
                    <input type="text" placeholder="interes3">
                    <input type="text" placeholder="interes4">

                    <!-- <p @click="addInteres()">+</p> -->
                </div>

            </div>
        </div>
    </div>
</template>


<script>
import {User} from '@/services/index'
import store from '@/store/store'

export default {
name: 'Profil' ,   

data() {
    return {
        user:{
            username:''
        },
        error: '',
        store,
        interesi: []
    }
},
async created(){
      try{
        this.user.username = await User.username;
        console.log(this.user.username)
      }catch(error){
        this.error = error.message;
      }
    },
methods: {
    
},
}
</script>


<style lang="scss" scoped>
.box {
    height: 836px;
    width: 100%;

  }

.box2 {
    margin: auto;
    width: 800px;
    height: 700px;
    border: 1px black solid;
    padding:10px 20px;
    background-color: #ebebeb;
    opacity: 0.9;

}

.welcome{
    padding: 10px;
    text-align: center;
    font-size: 25px;
    text-shadow: 2px 2px 4px white;
}

input{
    border-radius: 15px;
    margin-left: 10px;
    margin-bottom: 10px;
    padding-left: 8px;
}

.interesi{
    width: 600px;
    height: auto;
    margin: auto;
    margin-top: 20px;
    padding-top: 20px;
    // border: 1px black solid;
    background-color: #ebebeb;
}

ul{
    list-style: none;
    margin-top: 20px;
}

.right{
    float: right;
    margin-right: 20px;
}
.left{
    float: left;
}
</style>