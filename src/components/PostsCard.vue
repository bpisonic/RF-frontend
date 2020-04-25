<template>
    <div class="card">
        <div class="grad">
        {{info.grad}}
        </div>

        <div class="url">
            <img class="card-img-top" :src="info.url" alt="neka slika"/>
        </div>
        <hr>
        <div class="cijena">
            {{info.cijena}}        
        </div>
    </div>
</template>


<script>
    export default {
        props: ['info']
    }
</script>