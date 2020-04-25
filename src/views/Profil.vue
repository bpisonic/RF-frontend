<template>
    <div>
        ime korisnika
        <div class="box">
            profilna slika upload <br><br>
            <input type="text" name="grad_kor"> <br>
            <input type="text" name="kontakt">

            <div class="interesi">
                <input type="text" placeholder="neki interes">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    
.box {
    margin: auto;
    width: 800px;
    height: 700px;
    border: 1px black solid;
    padding:10px 20px;

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
    border: 1px black solid;
    background-color: #ebebeb;
}
</style>