<template>
  <div>
    <button class="btn btn-success" @click="incCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreCounter">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="incAsync({time : 2000})">+ incAsync Arttır</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  methods : {
    ...mapMutations([
      'incCounter',
      'decreCounter'
    ]),
    ...mapActions([
      'increment',
      'decrement',
      'incAsync'
    ])
  }
  
  // {
  //   incrementCounter(){
  //     // this.$emit("counterEvent", 1);
  //     // this.$store.state.counter++;
  //     this.$store.commit('updateCounter' , 1);
  //   },
  //   decrementCounter(){
  //     // this.$emit("counterEvent", -1);
  //     // this.$store.state.counter--;
  //     this.$store.commit('updateCounter' , -1);
  //   }
  // }
}
</script>

<style>
</style>
