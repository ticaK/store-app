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
              
        }
    },
    props:["customers"],
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





