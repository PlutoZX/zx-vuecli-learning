<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div class="hasbgimg1">

        </div>
        <div class="hasbgimg2">
            <img src="../assets/img/pan.png" alt="">
        </div>
    </div>
</template>

<script>
    // console.log(window.jdShare); 测试外部引入的js

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hasbgimg1 {
    width: 200px;
    height: 200px;
    margin: 50px auto 0;
    background-image: url("../assets/img/pan.png");
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
}
.hasbgimg2 {
    width: 200px;
    height: 200px;
    margin: 50px auto 0;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}

</style>
