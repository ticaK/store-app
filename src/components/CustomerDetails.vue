<template>
    <div class="customer-details">
        <h1>Customer Details</h1>
           <table>
               <tr>
                   <td>First name:{{ customer.firstName }}</td>
               </tr>
               <tr>
                   <td>Last name:{{ customer.lastName }}</td>
               </tr>
               <tr>
                    <td>Email:{{ customer.email }}</td>
               </tr>
                <tr>
                    <td>List of products:{{ customer.products }}</td>
               </tr>
            
            </table>
    <router-link to="/customers">Back</router-link>

        <p></p>
    </div>
</template>

<script>
    export default {
        props: ['customer'],
    }
</script>
<style scoped>

table, th, td {
  text-align: center;
  border: 1px solid black;
  font-weight: bold;
}
table, form {
  margin:50px;
  width: 80%;  
}

th {
  background-color: #cec7c7;
}
</style>