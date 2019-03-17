<template>
    <div>
        <div class="search-wrapper">
            <input type="text" v-model="search" placeholder="Search title.."/>
                <label>Search title:</label>
        </div>

        <div class="wrapper">
            <div class="card" v-for="(product,key) in filteredList" :key="key">

                 <router-link :to="{ name: 'single-product', params: {id: product.id} }">
                            {{product.title}}
                        </router-link>  
            </div>
        </div>
         <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Increment</th>
                <th>Decrement</th>
            </tr>

            <tr v-for="(product,index) in products" :key="index">
                <td>{{product.id}}</td>         
                <td>{{product.title}} <router-link :to="{ name: 'single-product', params: {id: product.id} }">
                            Buy
                        </router-link></td>       
                <td>{{product.quantity}}</td>   
                <td><button @click="increment(index)">+</button></td>
                <td><button @click="decrement(index)">-</button></td>
                
                             
            </tr> 

    </table> 
  </div>
</template>

<script>
export default {
    props:["products"],
    data(){
        return {
             search:"",
        }
    },
    computed: {
        filteredList() {
            return this.products.filter(product => {
                return product.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods:{
        increment(index){
            
            this.products[index].quantity++;
        },
        decrement(index){
            if(this.products[index].quantity===0){
                alert("There are no products...");

            } else {
                this.products[index].quantity--;
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