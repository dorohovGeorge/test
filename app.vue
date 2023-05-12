<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <div class="container">
        <el-container class="container">
            <el-space direction="vertical" alignment="center" :size="30">
                <el-header class="header">
                    <Header/>
                </el-header>
                <el-main class="main">
                    <NuxtPage/>
                </el-main>
            </el-space>
        </el-container>
    </div>


</template>

<style>
#index {
  margin: 0px !important;
}

.container {
    
    margin-bottom: 20px;
    
    justify-content: center;
    height: 100%;
    width: 100%;
}

.header,
.main {
    padding: 20px; 
    /* justify-content: center; */
    /* align-items: left; */
    /* text-align: center; */
}

.header {
    background-color: #212529;
    line-height: 1;
    text-align: justify-all;
    width: 100vw;
    
    
}

.main {
    
    
    width: 100vw;
    height: 100vh;
}

</style>