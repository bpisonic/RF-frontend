<template>
    <div class="box" :style="{'background-image':'url(https://i.ibb.co/TbSNdGd/bg111.jpg)'}"> 
        <div v-if="post" class="box2">
            <ul>
                <li class="postedAt"><strong>{{post.postedAt}}</strong></li>
                <li class="postedBy">Objavio/la: <strong>{{post.postedBy}}</strong></li><br><br><br>

                <li><strong>Cijena: </strong>{{post.cijena}} kn</li><br>

                <li class="margin"><strong>Županija:</strong> {{post.zupanija}}</li>
                <li class="margin"><strong>Grad:</strong> {{post.grad}}</li><br>
                
                    <form action="">
                        <label  for=""><strong>Dostupno preko godine: </strong>
                            <input v-if="post.dostupnoGod" checked disabled type="checkbox" class="check" id="">
                            <input v-if="!post.dostupnoGod" disabled type="checkbox" class="check" id="">
                        </label><br>
                        
                        <label  for=""><strong>Dopušteni kućni ljubimci: </strong>
                            <input v-if="post.ljubimci" checked disabled type="checkbox" class="check" id="">
                            <input v-if="!post.ljubimci" disabled type="checkbox" class="check" id="">
                        </label><br>

                        <label  for=""><strong>Odvojena soba: </strong>
                            <input v-if="post.odvojenaSoba" checked disabled type="checkbox" class="check" id="">
                            <input v-if="!post.odvojenaSoba" disabled type="checkbox" class="check" id="">
                        </label><br>

                        <label  for=""><strong>Ima balkon/terasu: </strong>
                            <input v-if="post.terasa" checked disabled type="checkbox" class="check" id="">
                            <input v-if="!post.terasa" disabled type="checkbox" class="check" id="">
                        </label><br>

                        <label  for=""><strong>Režije uključene u cijenu: </strong>
                            <input v-if="post.ukljuceneRezije" checked disabled type="checkbox" class="check" id="">
                            <input v-if="!post.ukljuceneRezije" disabled type="checkbox" class="check" id="">
                        </label><br><hr>
                    </form>
                <li class="opis"><strong>Opis: </strong>{{post.opis}}</li>
            </ul>
        </div>
    </div>   
</template>

<script>
import { Posts, User } from '@/services/index.js'
import store from '@/store/store.js'
export default {
    name: 'Objava',
    data(){
        return {
            post: null,
        }
    },
    async mounted(){
        console.log("ovo je id: ", this.$route.params.id)
        this.post = await Posts.getPostById(this.$route.params.id)
        this.post.zupanija = this.$store.zupanijeIdToStr[this.post.zupanija]
        this.post.postedBy = (await User.GetUsernameById(this.post.postedBy)).username;
        console.log("this.post: ", this.post)

    }


}
</script>

<style scoped>

label, .margin{
    margin-top: 7px;
}

.box {
    height: 836px;
    width: 100%;
    padding-top: 70px;
  }

.box2 {
    margin: auto;
    width: 800px;
    height: 700px;
    border: 1px black solid;
    padding:10px 20px;
    padding-top: 20px;
    background-color: #ebebeb;
    opacity: 0.9;
}

ul{
    list-style:none;
}

.postedAt{
    float: left;
}

.postedBy{
    float: right;
}

.opis{
    width: 670px;
    text-align: justify;
}

.check{
    float: right;
    margin-top: 7px;
    margin-left: 10px;
}
</style>