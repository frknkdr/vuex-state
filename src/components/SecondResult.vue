<template>
  <div>
    <hr>
    <p class="counter-container"> Sayaç : {{ double }}</p>
    <p class="counter-container"> Tıklama Sayısı : {{ stringC }}</p>
    <!-- <input type="text" :value="value" @input="setValue"> -->
    <input type="text" v-model="value">
    <p>{{ value }}</p>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    // props : ["counter"],
    computed : {
        ...mapGetters({
            double : 'getDoubleCounter',
            stringC : 'stringCounter'
        }),
        value : { 
        //v-model ile hem state içindeki veriyi güncellemek hem de getirmek için bu şekilde bi obje oluşturabiliriz. store.js içindeki get => getters, set => actions alanına işlem yaptırıyoruz.
            get() {
                return this.$store.getters.getValue;
            },
            set(value) {
                this.$store.dispatch("setValueData", value);
            }
        }
    },
    //   value() {
    //       return this.$store.getters.getValue;
    //   }
    // },
    // methods: {
    //     setValue(e) {
    //         this.$store.dispatch("setValueData", e.target.value);
    //     }
    // }
  }

</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
