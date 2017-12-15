<template lang="html">
  <div id="appMenu"></div>
</template>

<script>
import Konva from 'konva'

export default { 
  data () {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      areaColor: '#2D2E40',
      imgPath: 'img/logo.png' // Путь нужно указать из собранного index.html
    }
  },   
  mounted() {      
    const stage = this.createStage()
    
    const area = this.createArea(stage) 
    const layer = new Konva.Layer()
    layer.add(area)

    const logo = this.createLogo(stage)
    logo.on('click', () => {
      this.width = 10000
    })
    layer.add(logo)

    stage.add(layer)

    const resizeCanvas = () => {
      const width = window.innerWidth
      const height = window.innerHeight      
      const scaleWidth = width / this.width
      const scaleHeight = height / this.height
      stage.width(width)
      stage.height(height)
      stage.scale({ x: scaleWidth, y: scaleHeight })
      stage.draw()
      requestAnimationFrame(resizeCanvas)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
  },
  methods: {
    createStage () {
      return new Konva.Stage({
        container: 'appMenu', 
        width: this.width,
        height: this.height
      })
    },
    createArea (stage) {
      return new Konva.Rect({
        x: 0,
        y: 0,
        width: stage.getWidth(),
        height: stage.getHeight(),
        fill: this.areaColor
      }) 
    },
    createLogo (stage) {
      const image = new Image()
      image.src = this.imgPath
      return new Konva.Image({
        x: stage.getWidth() / 2 - 70,
        y: stage.getHeight() / 2 - 70,
        image: image,
        width: 70,
        height: 70,
        draggable: true
      })
    }
  }
}
</script>

<style lang="stylus">
#appMenu
  position fixed
  z-index 2
</style>