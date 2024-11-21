<script setup>

import { ref, onMounted } from 'vue';
import { ALL_PRODUCTS_API_URL } from '../utils';
import Loader from '../components/Loader.vue';
import { RouterLink } from 'vue-router';
import { useFetch } from '@vueuse/core';

const products = ref([]);
const loading = ref(true); 

const fetchData = async () => {
    const { isFetching, data } = await useFetch(ALL_PRODUCTS_API_URL, {
        fetchOptions: {
        mode: 'no-cors',
        },
    }).json();

    products.value = data.value.data;
    loading.value = false;
}

onMounted(() => {
    fetchData();
})



</script>

<template>

    <h1>Products</h1>

    <Loader isLoading="loading" v-if="loading"/>
    <ul class="products" v-else>
        <li v-for="product in products">
            <RouterLink :to="`/product/${product.documentId}`">
                <img :src="product.image.url" width="360" height="360"/>
                <h2>{{ product.title }}</h2>
                <p>{{ product.description }}</p>
                <h3>${{ product.price }}</h3>
                <h4 v-if="product.size">SIZE: {{ product.size }}</h4>
                <div class="buy-section" v-if="product.stock > 0">
                    <button>Add to cart</button>
                </div>
            </RouterLink>
        </li>
    </ul>

</template>

<style>


.products {
    display: flex;
    margin:0;
    padding: 0;
    list-style: none;
    gap: 30px;
}

.products li a, h1{
    text-decoration: none;
    color: green;
}

</style>