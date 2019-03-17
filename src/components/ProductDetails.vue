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

            <div class="form-group">
            <label for="customer">Customer</label>
            <select class="form-control" id="customer" v-model="selectedCustomer">
              <option v-for="customer in customers" :key="customer.id" :value="customer">
                {{ customer.firstName}}
              </option>
            </select>
            <button @click="sellProduct(product)">Confirm</button>
            <router-link class="btn btn-light" to="/products">Cancel</router-link>

            <router-link class="btn btn-light" id="go-back" style="display:none" to="/products">Go back to products</router-link>


          </div>
          


    </div>
</template>

<script>
    export default {
      data(){
        return {
          selectedCustomer:null

        }
      },
        props: ['product','customers'],
        methods:{
          sellProduct(prod){
            if(!this.selectedCustomer){
              alert('Please select a customer ')
            }
            else if (prod.quantity===0){
              alert("There are no products")
              var btn = document.getElementById("go-back");
              btn.style.display="block";     
             
            } else {
              this.selectedCustomer.products.push(prod);
              prod.quantity--;
      
            }
              

             
            
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
table{
  margin:50px;
  width: 80%;  
}

th {
  background-color: #cec7c7;
}
</style>