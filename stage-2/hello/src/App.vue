<template>
  <div>
    <el-steps :active="step" align-center style="margin-top: 20px">
      <el-step title="步骤1" description="损坏信息填写"></el-step>
      <el-step title="步骤2" description="损坏信息一级审批"></el-step>
      <el-step title="步骤3" description="损坏信息二级审批"></el-step>
      <el-step title="步骤4" description="审批结果"></el-step>
    </el-steps>
    <el-divider></el-divider>

    <el-switch
      v-model="v1"
      v-show="step === 1"
      active-text="按月付费"
      inactive-text="按年付费"
    >
    </el-switch>
    <el-time-select
      v-model="t1"
      v-show="step === 2"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      placeholder="选择时间"
    >
    </el-time-select>

    <el-row>
      <el-button
        type="warning"
        icon="el-icon-star-off"
        circle
        @click="forward"
      ></el-button>
      <el-button
        type="danger"
        icon="el-icon-delete"
        circle
        @click="back"
      ></el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      step: 1,
      v1: true,
      t1: "",
    };
  },
  methods: {
    forward() {
      this.step = (this.step + 1) % 4;
    },

    back() {
      this.step = (this.step - 1) % 4;
    },
  },
};
</script>
<style scoped>
</style>
