<template> <!-- OVJDE IDE HOME-->
  <div class="cointainer">
    <div class="filter">
      <p>FILTERI:</p>
      <form action="">
        <input type="text" class="zupanija" placeholder="Županija">
        <input type="text" class="grad" placeholder="Grad">
        <input type="text" class="naselje" placeholder="Naselje">
        <br>
        <br>
        <p>Cijena:</p>
        <input type="number" class="od_cijena"> do <input type="number" class="do_cijena">

        <label for="ljubimci" style="word-wrap:break-word">
        Kućni ljubimci:
        <input type="checkbox" id="ljubimci" class="chkbox">
        </label>
        
        <label for="dostupno" style="word-wrap:break-word">
        Dostupno cijele godine:
        <input type="checkbox" id="dostupno" class="chkbox">
        </label>

        <label for="soba" style="word-wrap:break-word">
        Odvojena soba:
        <input type="checkbox" id="soba" class="chkbox">
        </label><br>

        <label for="terasa" style="word-wrap:break-word">
        Terasa/balkon:
        <input type="checkbox" id="terasa" class="chkbox">
        </label><br>

        <label for="rezije" style="word-wrap:break-word">
        Uključene režije:
        <input type="checkbox" id="rezije" class="chkbox">
        </label>
      </form>
    </div>

    <!-- <div v-for="post in getAllPostsUseCase" :key="post.id" class="post"> 
      <img :src="postImage" alt="Post image">
      <p class="location">{{ getAllPostsUseCase.location }}</p>
      <p class="price"> {{ getAllPostsUseCase.price }} kn</p>
     <p class="about"> </p>
    </div> -->

    <a href="">
      <div  class="post">
       <!-- <PostsCard v-for="card in cards" :info="card"/> -->
      </div>
    </a>

    <div class="post">
      SLIKA
      Lokacija
      Cijena
      <hr>
      Kratki opis
    </div>

  </div>
</template>

<script>
 import PostsCard from '@/components/PostsCard'
 //import store from '@/store'

  export default {
    data(){
           

            return {
              // idp:'',
              // price:'',
              // location: '',
              // img:'',

              // posted_at:'',
              // posted_by:'',
              // zup:'',
              // nas:'',
              // ljub:'',
              // godina:'',
              // soba:'',
              // terasa_balkon:'',
              // rezije:''

              cards:[
                {                  
                    cijena:1245.00,
                    grad:'pula',
                    url:'https://picsum.photos/seed/picsum/200/300'
                },
                {
                    cijena:2300.00,
                    grad:'zagreb',
                    url:'https://picsum.photos/seed/picsum/200/300'
                }
              ]
              

            }
            // return 
            //    store;
            
          },
    methods: {
      logout(){
       // store.authenticated=false
      }
    },
    computed: {
      filteredCards() {
        return this.cards.filter(card =>
        card.title.includes(store.searchTerm))
      }
    },
    components:
    {
      PostsCard
    },
    // mounted() {
    //   this.cards = []

    // //p kao promise
    //   fetch('http://localhost:3000/') //vracamo promise sa fetcha, fetch gleda na http i vraca u varijabli p da ce on to zavrsiti
    //     .then(response=>{ //lambda funkcija
    //         return response.json()
    //       })
    //     .then(data => {
    //       console.log('Podaci s backenda', data)

    //       let data2 = data.map(element => {
    //         return{
    //           idp: element.id,
    //           price: element.cijena,
    //           location: element.grad,
    //           img: element.source
    //         }
    //       })

    //       this.cards=data2;
    //     })
    // },
    
          
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  div .filter {
    
    width: 270px;
    height: 600px;
    border: 2px #F29422 dashed;
    margin: 10px 23px;
    background-color: #ebebeb;
    float: left;
  }
//remove arrow
 input::-webkit-outer-spin-button,
 input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

  p{
    margin: 5px 5px;
  }

  .zupanija, .grad, .naselje, .od_cijena, .do_cijena {
    border-radius: 15px;
    padding-left: 8px;
    width: 200px;
    margin: 10px 10px auto;
    border: 1px #c7c7c7 solid;
  }
 
  .od_cijena, .do_cijena {
    border-radius: 15px;
    margin: 0 10px auto;
    margin-bottom: 10px;
    padding-left: 8px;
    width: 80px;
  }

 div .ponuda{
    float: left;
    width: auto;
 }

  .chkbox {
    width: 15px;
    margin-left: 10px;
    margin-top: 5px;
    
  }

  .post{
    border: 1px #c7c7c7 solid;
    float: left;
    width: auto;
    height: auto;
    padding: 20px;
    margin-right: 30px;
    margin-bottom: 30px;
  }

  label {
    margin-left: 15px;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  /////////////
 
  .card {
    margin-bottom: 20px;
    }

</style>
