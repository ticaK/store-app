<template>
    <div>
<AddCustomer @add-cust="addCustomer"  />

         <table>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              
                <th>Remove</th>
                <th>Latest Purchases</th>
                
            </tr>

            <tr v-for="(customer,index) in customers" :key="index">
                <td>{{customer.id}}</td>                
                <td>{{customer.firstName}}</td>
                <td>{{customer.lastName}}</td>
                <td>{{customer.email}}</td>

                <td><button class="btn-warning btn-block" @click="removeCustomer(index)">Remove</button></td>
                <td><router-link :to="{ name: 'latest-purchases', params: {id: customer.id} }">
                            Latest Purchases
                    </router-link>
                </td>   
            </tr>
    </table> 
 </div>
</template>

<script>
import AddCustomer from './AddCustomer.vue'

export default {
        components:{
          AddCustomer
        },

        props: ['customers'],

        methods:{
             removeCustomer(index){
            this.customers.splice(index,1);
            },
            
            addCustomer(customer){
                this.customers.push({...customer});
            }
       }
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