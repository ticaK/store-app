<template>
    <div>
<AddCustomer v-if="!routeCustomer" @add-cust="addCustomer"  />
<CustomersList v-if="!routeCustomer" :customers="customers"/>
<CustomerDetails v-else :customer="routeCustomer"/>


    </div>
     
</template>

<script>
import AddCustomer from './AddCustomer.vue'
import CustomersList from './CustomersList.vue'
import CustomerDetails from './CustomerDetails.vue'

export default {
    components:{
        AddCustomer,
        CustomersList,
        CustomerDetails
    },

    data(){
        return {
            customers:[
                {id:1, firstName:"Tijana", lastName:"Koprivica", email:"tijana@gmail.com"},
                {id:2, firstName:"Jana", lastName:"Janic", email:"jana@gmail.com"},
                {id:3, firstName:"Ana", lastName:"Anic", email:"ana@gmail.com"},
                {id:4, firstName:"Marko", lastName:"Markovic", email:"marko@gmail.com"},
                {id:5, firstName:"Janko", lastName:"Jankovic", email:"janko@gmail.com"},  
            ]  
        }
    },
    methods:{

        addCustomer(customer){
            this.customers.push({...customer});
        }

    },
        computed: {
            routeCustomer() {
                return this.customers.find(customer => customer.id === this.$route.params.id);
            }
        }
        
    }
    

</script>





