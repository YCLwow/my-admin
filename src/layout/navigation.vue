<template>
  <el-scrollbar
    ref="scrollContainer"
    :vertical="false"
    class="scroll-container"
    @wheel.native.prevent="handleScroll"
  >
    <h1>nihao</h1>
  </el-scrollbar>
</template>

<script>
export default {

}
</script>

<style>
</style>