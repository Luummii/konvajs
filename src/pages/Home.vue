<template>
  <div id="container"></div>
</template>

<script>
import Konva from 'konva'

export default {
  mounted() {    
    var stage = new Konva.Stage({
      container: 'container', 
      width: 500,
      height: 500
    })

    var layer = new Konva.Layer();

    var circle = new Konva.Circle({
      x: stage.getWidth() / 2,
      y: stage.getHeight() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    })

    layer.add(circle)

    stage.add(layer)
  }
}
</script>

<style lang="stylus">

</style>
