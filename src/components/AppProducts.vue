<template>
    <div>
    <ProductsList v-if="!routeProduct" :products="products"/>
    <ProductDetails v-else :product="routeProduct" :customers="customers"/>

        
    </div>
</template>

<script>
import ProductsList from './ProductsList'
import ProductDetails from './ProductDetails'
export default {
    components:{
        ProductsList,
        ProductDetails
    },

    
    data(){
        return {
            products:[
                {id:1, title:"book",quantity:6},
                {id:2, title:"pencil",quantity:7},
                {id:3, title:"car",quantity:2},
                {id:4, title:"table",quantity:6},
                {id:5, title:"bag",quantity:6},
                {id:6, title:"bananas",quantity:7}
            ],
           
        }
    },
    props:["customers"],
    methods:{
        
    },
    computed: {
        filteredList() {
            return this.products.filter(product => {
                return product.title.toLowerCase().includes(this.search.toLowerCase())
            })
        },

        routeProduct() {
                return this.products.find(product => product.id === this.$route.params.id);
         }
        
    }


}
</script>


