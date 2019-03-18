<template>
    <div>
        <CustomersList v-if="!routeCustomer" :customers="customers"/>
        <CustomerDetails v-else :customer="routeCustomer"/>
    </div>   
</template>

<script>
import CustomersList from './CustomersList.vue'
import CustomerDetails from './CustomerDetails.vue'

export default {
    components:{
        CustomersList,
        CustomerDetails
    },

    props:["customers"],

    computed: {
        routeCustomer() {
            return this.customers.find(customer => customer.id === this.$route.params.id);
        }
    }      
}
</script>





