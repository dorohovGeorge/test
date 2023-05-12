<template>
  <div class="card">
    <span class="large-text">Payments witd difference Report</span>
    <el-divider content-position="left"/>
    <el-space direction="vertical" size="large" :fill="true" style="width: 90vw;">
    <el-space  style="width: 20vw;">
      <el-button @click="extractReport" :loading="false" color="#DC3545" size="large">Extract report</el-button>
    </el-space>
    
    </el-space>
  </div>
</template>

<script >
export default {
data () {
  return {
    value : '',
    modify_date : false,
    payment_date : false,
    date_from: '',
    date_till: '',
    options : [
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
      {
        value: 'Option4',
        label: 'Option4',
      },
      {
        value: 'Option5',
        label: 'Option5',
      },
    ]
  }
},
methods: {
  extractReport() {
    alert("Extract report");
  }
}

}


</script>

<style>
.card {
padding-left: 4%;
}
.large-text {
font-size: 1.5em;
}
.text {
font-size: 1.2em;
}

.el-checkbox__input.is-checked  .el-checkbox__inner{
background-color: #DC3545;
border-color: #DC3545;
}

.el-checkbox__label {
color: black !important;
}

</style>