<script setup lang="ts">
import dashboardTop from '../../components/dashboard/header.vue'
import dashboardMain from '../../components/dashboard/main.vue'
import { onMounted } from 'vue';

onMounted(() => {
    console.log('dashboard mounted', localStorage.getItem('token'))
});

</script>

<template>
    <div class="main grid py-6 mx-9">
        <div class="">            
            <dashboardTop />
        </div>
        <div>
            <dashboardMain />
        </div>
    </div>
</template>