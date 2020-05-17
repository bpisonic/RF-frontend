<template>
    <div>
      <form action=""> 
        <select id = "zupanije" class="zupanija">
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
        </select><br>
        <select id="gradovi" class="grad">
          <option v-for="grad in Gradovi" :key="grad.id">{{odabraniGradovi.name}}</option>
      </select>

      <!-- GRADOVI  -->

      
        <!--<input type="text" class="naselje" placeholder="Naselje">-->
        <br>
        <br>
        <p>Cijena:</p>
        <input type="number" class="od_cijena"> do <input type="number" class="do_cijena"><br>

        <label for="ljubimci" style="word-wrap:break-word">
        Kućni ljubimci:
        <input type="checkbox" id="ljubimci" class="chkbox">
        </label><br>
        
        <label for="dostupno" style="word-wrap:break-word">
        Dostupno cijele godine:
        <input type="checkbox" id="dostupno" class="chkbox">
        </label><br>

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

        <p>Opis:</p>
        <input type="text" class="opis"><br>

        <button type="submit" @click="createPost" class="objavi">Objavi</button>
        
      </form> 

    </div>
</template>

<script>


import store from "@/store/store.js"

export default {
    data() {
        return store
    },
    methods: {
        createPost(){
            
         
            
        }
    },
}
</script>

<style scoped>
 

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
  .opis{
    border-radius: 10px;
    padding-left: 8px;
    width: 290px;
    height: 200px;
    margin: 10px 10px auto;
    border: 1px #c7c7c7 solid;
  }

  .objavi {
   
    color: black;
    border: 1px #FFBE3D solid;
    border-radius: 5px;
    margin-top: 20px;
    width: 100px;
    height: 27px;
    background-color:#FFBE3D;
    font-family: 'catamaran';
    padding-top: 3px;
  }
    .objavi:hover{
      background-color: #F27405;
      border-color: #F2A922;
    } 
</style>