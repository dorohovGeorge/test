<template>
    <!--  -->
    <nav class="flex align-center ">
        <NuxtLink  to="/" class="links dropdown-text" >
          PHOENIX
        </NuxtLink> 
        <NuxtLink to="/reconcilation" class="n-link-base links">
          Reconcilation
        </NuxtLink>
        
        <NuxtLink to="/matching" class="n-link-base links">
          Matching
        </NuxtLink>
        
        <el-dropdown>
          <span class="el-dropdown-link links dropdown-text">
              Reporting
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item ><NuxtLink to="/reporting_matched" class="n-link-base dropdown-links">Matched</NuxtLink></el-dropdown-item>
              <el-dropdown-item ><NuxtLink to="/reporting_not_matched" class="n-link-base dropdown-links">Not Matched</NuxtLink></el-dropdown-item>
              <el-dropdown-item ><NuxtLink to="/reporting_export_list" class="n-link-base dropdown-links">Export List</NuxtLink></el-dropdown-item>
              <el-dropdown-item ><NuxtLink to="/reporting_export_history" class="n-link-base dropdown-links">Export History</NuxtLink></el-dropdown-item>
              <el-dropdown-item ><NuxtLink to="/reporting_payments_with_difference" class="n-link-base dropdown-links">Payments with difference</NuxtLink></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <NuxtLink to="/security" class="n-link-base links">
          Security
        </NuxtLink>
        <NuxtLink to="/view_logs" class="n-link-base links">
          Logs
        </NuxtLink>
        <NuxtLink to="/help" class="n-link-base links">
          Help
        </NuxtLink>
    </nav>

</template>

<style>


.links {  
  margin-right: 1.5vw;
  margin-left: 1.5vw;
  text-decoration: none;
  color: white;
}

.dropdown-links {
  text-decoration: none;
  color: black;
  justify-content: center;
}

.dropdown-text {
  margin-top: 0.2vh;
  font-size: 1.13em;
}


</style>

