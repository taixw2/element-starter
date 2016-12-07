<template>

    <div>
      开始
    </div>

</template>

<script type="text/javascript">
  export default {
    data () {
      return {
      }
    },
    methods : {
    },
    beforeCreate () {
        //开始创建组件之前
    },
    created () {
      //组件创建后
    },
    beforeMount () {
      //挂载组件前
    },
    mounted () {
      //挂载组件后,此时已经能够调用到文档内的元素
    },
    beforeUpdate () {
      //数据更新前
    },
    updated () {
      //数据更新后
    },
    activated () {
      //组件被激活
    },
    deactivated () {
      //组件停用
    },
    beforeDestroy () {
      //组件被销毁前
    },
    destroyed () {
      //组件被销毁后调用
    }
  }
</script>

<style scoped style="scss">
</style>
