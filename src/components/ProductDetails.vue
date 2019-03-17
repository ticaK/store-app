<template>
    <div class="product-details">
        <h1>Product Details</h1>
           <table>
               <tr>
                   <td>Title:{{ product.title}}</td>
               </tr>
               <tr>
                   <td>Quantity:{{ product.quantity}}</td>
               </tr>
               
            </table>

    </div>
</template>

<script>
    export default {
        props: ['product'],
    }
</script>
<style scoped>

table, th, td {
  text-align: center;
  border: 1px solid black;
  font-weight: bold;
}
table{
  margin:50px;
  width: 80%;  
}

th {
  background-color: #cec7c7;
}
</style>