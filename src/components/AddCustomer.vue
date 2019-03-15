<template>
    <div>
    <form @submit.prevent="addCustomer">


        <div class="form-group"> 
          <label>First name:</label>
          <input type="text" class="form-control" v-model="customer.firstName">
        </div>

        <div class="form-group"> 
          <label>Last name</label>
          <input type="text" class="form-control" v-model="customer.lastName">
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control"  v-model="customer.email"><br>
        </div>

        <button class="btn btn-primaty btn-block" type="submit">Add customer</button>

    </form>
        
        </div>
        
</template>

<script>
import uuid from 'uuid'
export default {
    data(){
        return {
   customer:{firstName:"",lastName:"",email:""}

        }
    },
    
    methods:{
         addCustomer(){
            let customer = {
                id:uuid.v4(),
                firstName:this.firstName,
                lastName:this.lastName,
                email:this.email
        }
        this.$emit('add-cust',customer);
    }
    
    }

}
</script>

<style>

</style>
