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

        <input type="hidden" v-model="customer.id" />
               
        <button class="btn btn-success " type="submit">Add customer</button>

    </form>
        
        </div>
        
</template>

<script>
import uuid from 'uuid'
export default {
    data(){
        return {
          customer:{id:0, firstName:"",lastName:"",email:""},
        }
        
    },

    methods:{
         addCustomer(){
          this.customer.id=this._uid-1;
          this.$emit('add-cust',this.customer);
          this._uid++;
        }
    
    }
   

}
</script>

<style scoped>
form {
  margin:50px 100px;

}
</style>
