# vuex-ile-daha-iyi-state-yonetimi

> A Vue.js project

# Notes

Vuex ile alakalı her şey (.babelrc dosyası olmayınca çalışmıyor)

store klasöründe 3 farklı vuex yönetimi yapıldı. 
-   Direkt store.js içinde işlemler, 
-   Modules olarak işlemler,
-   Tüm işlemlerin ayrı ayrı dosyalanarak import edilmesi.

-   STATE => Bir çok yerde kullanılacak olan ve tutulması gereken veriler tanımlanır (üye bilgileri vs.)

-   GETTERS => State verilerine işlem yapabilmek için

-   MUTATIONS => State verilerini güncelleme işlemleri. this.$store.commit('fonksiyonadı',val); şeklinde güncelleme yapılır ya da işlemleri burada yaptırarak sadece ...mapMutations ile fonksiyonları çağırıp o şekilde kullanılır. (Counter.vue dosyasında örnek).

-   ACTIONS => Veritabanı ile ilgili bir istek-cevap sonucunda State verilerinin güncelleneceği zaman Actions'a ihtiyaç duyulur. Asenkron veri işlemleri yapabilir.


# Documents

Vuex Github: https://github.com/vuejs/vuex
Vuex Document : https://vuex.vuejs.org/en/


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
