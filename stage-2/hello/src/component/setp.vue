<template>
  <div>
    <el-card>
      <el-steps :active="step" align-center style="margin-top: 20px">
        <el-step title="步骤1" description="损坏信息填写"></el-step>
        <el-step title="步骤2" description="损坏信息一级审批"></el-step>
        <el-step title="步骤3" description="损坏信息二级审批"></el-step>
        <el-step title="步骤4" description="审批结果"></el-step>
      </el-steps>
      <el-divider></el-divider>
      <el-tabs tab-position="left" style="height: 200px">
        <el-tab-pane label="用户管理" :disabled="step !== 0"
          >用户管理</el-tab-pane
        >
        <el-tab-pane label="配置管理" :disabled="step !== 1"
          >配置管理</el-tab-pane
        >
        <el-tab-pane label="角色管理" :disabled="step !== 2"
          >角色管理</el-tab-pane
        >
        <el-tab-pane label="定时任务补偿" :disabled="step !== 3"
          >定时任务补偿</el-tab-pane
        >
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Step",
  data() {
    return {
      step: 0,
      v1: true,
      t1: "",
    };
  },
};
</script>

<style>
</style>