<template>
<div>
    <ul>

    <li><router-link to="/">Home</router-link></li>  
    <li><router-link to="/customers">Customers</router-link></li>
    <li><router-link to="/products">Products</router-link></li>
    </ul>
    <router-view/>
</div>
</template>

<script>
export default {

}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>
