<template>
    <div>
        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Quantity</th>
                <td>Increment</td>
                <td>Decrement</td>
            </tr>

            <tr v-for="(product,index) in products" :key="index">
                <td>{{product.id}}</td>                
                <td>{{product.title}}</td>
                <td>{{product.quantity}}</td>   
                <td><button @click="increment">+</button></td>
                <td><button @click="decrement">-</button></td>
                
                             
            </tr> 

    </table> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            products:[
                {id:1, title:"product1",quantity:6},
                {id:2, title:"product2",quantity:7},
                {id:3, title:"product3",quantity:8},
                {id:4, title:"product4",quantity:6},
                {id:5, title:"product5",quantity:6},
                {id:6, title:"product6",quantity:7}
            ]
        }
    },
    methods:{
        increment(){
            this.products.quantity++;
        },
        decrement(){
            this.products.quantity--;
        },
    }

}
</script>

<style>

</style>
