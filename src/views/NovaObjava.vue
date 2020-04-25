<template>
    <div>
        
        <p>Zupanija:</p>
        <input type="text" class="zupanija" v-model="zupanija">

        <p>Grad:</p>
        <input type="text" class="grad" v-model="grad">

        <p>Naselje:</p>
        <input type="text" class="naselje" v-model="naselje">

        <p>Cijena:</p>
        <input type="number" class="od_cijena"> do <input type="number" class="do_cijena" v-model="price"> <br>

        <label for="ljubimci" style="word-wrap:break-word">
        Kućni ljubimci:
        <input type="checkbox" id="ljubimci" v-model="pets">
        </label> <br>
        
        <label for="dostupno" style="word-wrap:break-word">
        Dostupno cijele godine:
        <input type="checkbox" id="dostupno" v-model="yearAvailable">
        </label> <br>

        <label for="soba" style="word-wrap:break-word">
        Odvojena soba:
        <input type="checkbox" id="soba" v-model="seperateRoom">
        </label><br>

        <label for="terasa" style="word-wrap:break-word">
        Terasa/balkon:
        <input type="checkbox" id="terasa" v-model="terasa">
        </label><br>

        <label for="rezije" style="word-wrap:break-word">
        Uključene režije:
        <input type="checkbox" id="rezije" v-model="utilitiesIncluded">
        </label>

        <p>Opis:</p>
        <input type="text" class="opis"><br>

        <button type="submit" @click="createPost">Objavi</button>
        


    </div>
</template>

<script>




export default {
    data() {
        return {
            price: '',
            zupanija: '',
            grad: '',
            naselje: '',
            pets: '',
            yearAvailable: '',
            seperateRoom: '',
            terasa: '',
            utilitiesIncluded: ''
        
        }
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
</style>