<template> <!-- OVJDE IDE HOME-->
  <div class="box" :style="{'background-image':'url(https://i.ibb.co/TbSNdGd/bg111.jpg)'}">
    <div class="filter" >
      <p>FILTERI:</p>
      <form action="">
        <!-- ŽUPANIJE -->
        <select @change="odabranaZupanija(value)" id = "zupanije" class="zupanija">
          <option value="" disabled selected class="undefined">Županija</option>
          <option value = "1">Bjelovarsko-bilogorska</option>
          <option value = "2">Brodsko-posavska</option>
          <option value = "3">Dubrovačko-neretvanska</option>
          <option value = "4">Istarska</option>
          <option value = "5">Karlovačka</option>
          <option value = "6">Koprivničko-križevačka</option>
          <option value = "7">Krapinsko-zagorska</option>
          <option value = "8">Ličko-senjska</option>
          <option value = "9">Međimurska</option>
          <option value = "10">Osječko-baranjska</option>
          <option value = "11">Požeško-slavonska</option>
          <option value = "12">Primorsko-goranska</option>
          <option value = "13">Sisačko-moslavačka</option>
          <option value = "14">Splitsko-dalmatinska</option>
          <option value = "15">Varaždinska</option>
          <option value = "16">Virovitičko-podravska</option>
          <option value = "17">Vukovarsko-srijemska</option>
          <option value = "18">Zadarska</option>
          <option value = "19">Zagrebačka</option>
          <option value = "20">Šibensko-kninska</option>
          <option value = "21">Grad Zagreb</option>
        </select>

        <select id="gradovi" class="grad">
          <option v-for="grad in Gradovi" :key="grad.id">{{odabraniGradovi.name}}</option>
      </select>

      <!-- GRADOVI  -->

      
        <!--<input type="text" class="naselje" placeholder="Naselje">-->
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
        </label><br>

        <button v-on:click="primjeniFilter" class="filter-btn" type="submit">Traži</button>
      </form>
    </div>

      <a href="">
        <div v-for="post in posts" :key="post.id" class="post">
          SLIKA <br>
          {{post.grad}} <br>
          {{post.cijena}},00 kn
          <hr>
          {{post.opis}}
        </div>
      </a>

  </div>
</template>

<script>

  export default {
    data(){
           

            return {
              
              posts,

            }
          },
    computed: {
      posts(){
        return this.$store.state.posts
      },

      odabranaZupanija(value){
        
        Gradovi = $store.gradovi.filter((grad)=>(grad.zupanija==value))
        
      }
    },
    methods: {
      onChangePage(pageOfItems){
        this.pageOfItems = pageOfItems;
      },
      logout(){
       // store.authenticated=false
      }
    },
     mounted() {

     },
    
          
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .box {
    height: 1200px;
    width: 100%;

  }
  .filter {
    width: 270px;
    height: 600px;
    border: 2px #F29422 dashed;
    margin: 10px 23px;
    margin-top: 20px;
    background-color: #ebebeb;
    float: left;
    opacity: 0.97;
  }

  .filter-btn {
    margin-left: 100px;
    margin-top: 40px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
  }

    .filter-btn:hover{
      background-color: rgb(255, 167, 59);
      opacity: 0.8;
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
    margin-top: 20px;
    border: 1px #c7c7c7 solid;
    float: left;
    width: 490px;
    height: 350px;
    padding: 20px;
    margin-right: 30px;
    margin-bottom: 30px;
    background: white;
    opacity: 0.97;

    //internet
  
    position:relative;
    overflow:hidden;
  }

  label {
    margin-left: 15px;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

</style>
