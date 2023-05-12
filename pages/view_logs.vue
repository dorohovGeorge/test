<template>
    <div>
        <el-space direction="vertical" alignment="center" :size="30">
            <h1>VIEW LOGS</h1>
            <el-space alignment="center" :size="20">
                <el-select
                        v-model="value1"
                        multiple
                        placeholder="Type"
                        style="width: 100px"
                >
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    />
                </el-select>
                <el-date-picker
                    v-model="dateValue1"
                    type="date"
                    placeholder="Date from"

                />
                <el-date-picker
                    v-model="dateValue2"
                    type="date"
                    placeholder="Date till"

                />
                <el-select
                        v-model="value2"
                        multiple
                        placeholder="User"
                        style="width: 100px"
                >
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    />

                </el-select>
                <el-input
                    v-model="input3"
                    placeholder="Please input"
                    class="input-with-select"
                >
                    <template #prepend>
                        <el-button :icon="Search" />
                    </template>
                    <template #append>
                        <el-select v-model="select" placeholder="Select" style="width: 115px">
                            <el-option label="Restaurant" value="1" />
                            <el-option label="Order No." value="2" />
                            <el-option label="Tel" value="3" />
                        </el-select>
                    </template>
                </el-input>
            </el-space>
            <el-space alignment="flex-end" :size="100" >
                <el-table
                    :data="tableData"
                    :default-sort="{ prop: 'date', order: 'descending' }"
                    :border=true
                    style="width: 100%"
                    :table-layout="tableLayout"
                >
                    <el-table-column prop="date" label="Date" sortable width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" width="180" :formatter="formatter" />
                </el-table>
                <el-table
                    :data="tableData"
                    :default-sort="{ prop: 'date', order: 'descending' }"
                    :border=true
                    style="width: 100%"
                    :table-layout="tableLayout"
                >
                    <el-table-column prop="date" label="Date" sortable width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" width="180" :formatter="formatter" />
                </el-table>
            </el-space>

        </el-space>

    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {Search} from "@element-plus/icons-vue";
import type { TableColumnCtx } from 'element-plus'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const tableLayout = ref('fixed')
console.log(isDark)
const value1 = ref([])
const value2 = ref([])
const dateValue1 = ref('')
const dateValue2 = ref('')
const select = ref('')
const input3 = ref('')
const options = [
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
interface User {
    date: string
    name: string
    address: string
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
    return row.address
}

const tableData: User[] = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<style>
.input-with-select .el-input-group__prepend {
    background-color: var(--el-fill-color-blank);
}
.el-table  {
    background-color: #845353;
}

</style>
  