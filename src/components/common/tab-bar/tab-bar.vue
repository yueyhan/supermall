<template>
<div id='tag-bar'>
    <slot></slot>
</div>
</template>
<script>
export default {
  name :'tabbar'
}
</script>
<style>
  body{
    margin: 0px;
    padding: 0px;
}
#tag-bar{
    display:flex;
    position: fixed;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background-color: #eee;
}

 

</style>
