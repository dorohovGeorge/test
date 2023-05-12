<template>
  <div class="card">
    <span class="large-text">Export List Report</span>
    <el-divider content-position="left"/>
    <el-space direction="vertical" size="large" :fill="true" style="width: 90vw;">
    <span class="text">Filial: Вост.-Сибирский</span>
    <el-space  style="width: 50vw;">
      <span class="text" >Product: </span>
      <el-select style="padding-left: 1%;" v-model="value"  size="large" clearable placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          />
      </el-select>
    </el-space>
    <el-space  style="width: 70vw;">
      <span class="text" >Bank: </span>
      <el-select style="padding-left: 10%;" v-model="value2"  size="large" clearable placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          />
      </el-select>
    </el-space>
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
    value2: '',
    bs_date : false,
    transist : false,
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