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
                <td><router-link to="/customers/:id">Latest Purchases</router-link></td>  
                
            </tr> 

    </table> 
    </div>
</template>

<script>
import AddCustomer from './AddCustomer'
export default {
    components:{
        AddCustomer
    },

    data(){
        return {
            customers:[
                {id:1, firstName:"Tijana", lastName:"Koprivica", email:"tijana@gmail.com"},
                {id:2, firstName:"Jana", lastName:"Janic", email:"jana@gmail.com"},
                {id:3, firstName:"Ana", lastName:"Anic", email:"ana@gmail.com"},
                {id:4, firstName:"Marko", lastName:"Markovic", email:"marko@gmail.com"},
                {id:5, firstName:"Janko", lastName:"Jankovic", email:"janko@gmail.com"},  
            ],

                
            
        }
    },
    methods:{
        removeCustomer(index){
            this.customers.splice(index,1);
        },

        addCustomer(cust){
        this.customers=[...this.customers, cust];
    }
    } 

}
</script>

<style>

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



