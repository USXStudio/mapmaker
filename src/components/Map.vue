<template>
  <div class="wrapper">
    <div class="header"></div>
    <div class="main">
      <div class="side">
        <Menu style="width:256px; text-align: left; border-radius: 6px">
            <Submenu name="location">
                <template slot="title">
                  <Icon type="ios-pin" />
                    定位
                </template>
            </Submenu>
            <Submenu name="edit">
                <template slot="title">
                    <Icon type="ios-map" />
                    编辑
                </template>
                <Card style="margin:4px;">
                  <div class='map-overlay'>
                    <div class='map-overlay-inner'>
                      <fieldset>
                        <label>选择道路</label>
                        <Select
                          id="layer"
                          name="layer"
                          @on-change="onPickChangeLayerSelect"
                          :filterable="true"
                          :clearable="true"
                          :value="currentLayer"
                          >
                          <Option v-for="item in layers"
                            :key="item.id"
                            :value="item.id"
                          >
                            {{String(item.id)}}
                          </Option>
                        </Select>
                        </fieldset>
                        <Divider></Divider>
                        <fieldset>
                        <label>选择色彩</label>
                        <div id='swatches'>
                          <Card>
                            <ButtonGroup size="small">
                              <Button
                                :key="color"
                                v-for="color in colors"
                                :name="color"
                                :style="{'background-color': color}"
                                @click="onClickChangeColorBtn"
                              />
                            </ButtonGroup>
                          </Card>
                          <!-- <Divider></Divider> -->
                          <Card>
                            <Button
                              type="primary"
                              @click="onClickResetColor"
                            >
                              重置
                            </Button>
                          </Card>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </Card>
            </Submenu>
            <Submenu name="poster">
                <template slot="title">
                    <Icon type="ios-image" />
                    相框
                </template>
                <Card>
                  <ButtonGroup>
                    <Button @click="onClickNarrowPosterBtn">窄幅</Button>
                    <Button @click="onClickWidePosterBtn">宽幅</Button>
                  </ButtonGroup>
                </Card>
            </Submenu>
            <Submenu name="theme">
                <template slot="title">
                  <Icon type="ios-color-palette" />
                      风格
                </template>
                <Card>
                  <RadioGroup
                      @on-change="onClickTabChange"
                      v-model="themeStyle"
                  >
                      <Radio
                        v-for="theme in themes"
                        border
                        :key="theme"
                        :name="theme"
                        :label="theme"
                      >
                      </Radio>
                  </RadioGroup>
                </Card>
            </Submenu>
            <Submenu name="text">
                <template slot="title">
                    <Icon type="md-text" />
                      文字
                </template>
                <Card>
                  layout
                    <Card>
                      <RadioGroup
                        @on-change="onClickRadioChangeLayout"
                        v-model="layout"
                      >
                        <Radio
                          v-for="layoutItem in layouts"
                          :key="layoutItem"
                          border
                          :label="layoutItem"
                        >
                        </Radio>
                      </RadioGroup>
                    </Card>
                </Card>
                <Card>
                  title
                  <Card>
                      <Input type="textarea" v-model="postTitle" placeholder="Enter something..."/>
                  </Card>
                </Card>
                <Card>
                  message
                   <Card>
                      <Input type="textarea" v-model="postMessage" placeholder="Enter something..."/>
                  </Card>
                </Card>
            </Submenu>
              <Submenu name="mark">
                <template slot="title">
                    <Icon type="ios-heart" />
                    标记
                </template>
                <Card>
                  <Button
                    @click="onClickDisplayMapControls"
                  >
                    添加
                  </Button>
                </Card>
            </Submenu>
        </Menu>
      </div>

      <div class="content">
        <div class="poster" :style="computePosterBackground">
          <div class="mask"></div>
          <div class="poster-wrapper">
            <div class="poster-height"></div>
            <div class="poster-width"></div>
            <div class="poster-container">
              <div class="posrer-main">
                <div class="map" v-contextmenu:contextmenu>
                    <div
                      id="mapcontainer"
                      ref="mapcontainer"
                      v-contextmenu:contextmenuleft
                      :style="`width:${photoWidthAndHeight.width}px; height:${photoWidthAndHeight.height}px`"
                    >
                    </div>
                    <v-contextmenu ref="contextmenu">
                      <v-contextmenu-item @click="handleClick">旋转</v-contextmenu-item>
                      <v-contextmenu-item @click="handleClick">移动</v-contextmenu-item>
                    </v-contextmenu>
                    <v-contextmenu ref="contextmenuleft" event-type="click">
                      <v-contextmenu-item
                        @click="onClickPickedLayersId"
                        v-for="item in queryFeatures"
                        :key="item"
                      >{{ item }}</v-contextmenu-item>
                    </v-contextmenu>
                </div>
                <div class="diver"></div>
                <div id="poster-text" :style="computePostTextStyle">
                  <p id="poster-title" :style="computePostTitleStyle">{{ postTitle }}</p>
                  <p id="poster-message" :style="computePostMessageStyle">{{ postMessage }}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import RotateMode from 'mapbox-gl-draw-rotate-mode'
import _ from 'lodash'

import styles from '../mapstyles/mapstyle'

export default {
  name: 'Map',
  components: {
  },

  data () {
    return {
      Draw: {},
      menuData: [
        {
          title: '旋转',
          name: 'rotate'
        },
        {
          title: '移动',
          name: 'move'
        }
      ],
      layers: [],
      colors: [
        '#ffffcc',
        '#a1dab4',
        '#41b6c4',
        '#2c7fb8',
        '#253494',
        '#fed976',
        '#feb24c',
        '#fd8d3c',
        '#f03b20',
        '#bd0026'
      ],
      currentLayer: null,
      currentColor: null,
      queryFeatures: [],
      currentStyle: {},
      constWidthAndHeight: {
        narraw: {height: 624, width: 432},
        wide: {height: 624, width: 972}
      },
      photoWidthAndHeight: {height: 648, width: 972},
      themes: [],
      themeStyle: 'Minimo',
      layouts: ['CLASSIC', 'MODERN', 'NOTEXT'],
      layout: 'CLASSIC',
      postTitle: '成都',
      postMessage: '104.027138, 30.644811',
      displayControls: false
    }
  },

  created () {
  },

  computed: {
    computePostTextStyle: function () {
      let style = ''
      const e = this.layout
      switch (e) {
        case 'CLASSIC':
          break

        case 'MODERN':
          style = 'padding: 10px 10px; align-items: flex-end; text-align: right;'
          break

        case 'NOTEXT':
          style = 'display: none;'
          break

        default:
          break
      }
      return style
    },
    computePostTitleStyle: function () {
      let style = ''
      const e = this.layout
      switch (e) {
        case 'CLASSIC':
          style = 'font-size: 40.32px;'
          break

        case 'MODERN':
          style = 'font-family: CervoNeueRegular; color: rgb(0, 0, 0); font-size: 40.32px; line-height: 1.3em; margin-bottom: 0px;'
          break

        case 'NOTEXT':
          style = ''
          break

        default:
          break
      }
      return style
    },
    computePostMessageStyle: function () {
      let style = ''
      const e = this.layout
      switch (e) {
        case 'CLASSIC':
          style = 'display: none;'
          break

        case 'MODERN':
          style = 'font-family: Dosis; color: rgb(0, 0, 0); font-size: 16.8px; line-height: 1.2em; margin: 0px; padding: 0px; white-space: pre-wrap;'
          break

        case 'NOTEXT':
          style = ''
          break

        default:
          break
      }
      return style
    },
    computePosterBackground: function () {
      let style = ''
      const themeStyle = this.themeStyle
      style = 'background: rgb(0, 0, 0); padding:0.5%;'

      if (styles && themeStyle) {
        const theme = styles[themeStyle]
        const backgroundLayers = theme.layers.reduce((prev, cur) => {
          if (cur.type === 'background') {
            prev = cur
          }
          return prev
        }, '')
        const backgroundColor = backgroundLayers && backgroundLayers.paint && backgroundLayers.paint['background-color']
        if (this.layout === 'NOTEXT') {
          style = `background: ${backgroundColor};`
        } else {
          style = `background: ${backgroundColor}; padding:0.5%;  outline: black solid 0.4em;`
        }
        return style
      }
    }
  },

  mounted () {
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2FuZ3poZW5kYW5pZWwiLCJhIjoiY2o2ZDE4ZHk0MXpyczMzcDk1NzR4am4xbSJ9.eopRtHpg0kCWn4MAYkNWtA'
    const { Minimo } = styles
    this.layers = Minimo.layers
    this.currentStyle = Minimo
    this.themes = Object.keys(styles)

    const map = new mapboxgl.Map({
      container: 'mapcontainer',
      style: Minimo,
      pitchWithRotate: false,
      dragRotate: false
    })

    this.map = map

    this.Draw = new MapboxDraw({
      defaultMode: 'simple_select',
      modes: Object.assign({
        RotateMode: RotateMode
      }, MapboxDraw.modes),
      controls: {
        point: this.displayControls,
        line_string: false,
        polygon: false,
        trash: this.displayControls,
        combine_features: false,
        uncombine_features: false
      }
    })

    map.addControl(this.Draw, 'top-right')

    map.on('load', () => {
    })

    map.on('contextmenu', (e) => {
    })

    map.on('click', (e) => {
      console.log(this.map.queryRenderedFeatures(e.point))
      const features = this.map.queryRenderedFeatures(e.point)

      if (Array.isArray(features) && features.length > 0) {
        this.queryFeatures = features.reduce((prev, cur) => {
          if (cur.layer && cur.layer.id && _.isString(cur.layer.id)) {
            prev.push(cur.layer.id)
          }
          return [...new Set(prev)]
        }, [])
      }
      console.log(this.map.getZoom())
      console.log(this.map.getCenter())
    })
  },

  destroyed () {
  },

  methods: {
    handleSelect (name) {
      if (name === 'rotate') {
        this.Draw.changeMode('RotateMode')
      } else if (name === 'move') {
        this.Draw.changeMode('simple_select')
      }
    },
    handleCancel () {
      console.log('cancel contextmenu')
    },
    preventContextmenu () {
      return false
    },
    rootRender (h, data) {
      return h('span', [ data.title ])
    },

    handleClick () {
    },

    /**
     * 点击更改layer的颜色
     */
    onClickChangeColorBtn (e) {
      if (e && e.target) {
        this.currentColor = e.target.name
      } else {
        throw new Error('获取btn的颜色失败')
      }

      if (this.currentLayer && this.currentColor) {
        console.log(this.currentLayer)
        this.map.setPaintProperty(this.currentLayer, 'line-color', this.currentColor)
      } else {
        this.$Message.warning('请在左侧先选择道路')
      }
    },

    /**
     * 点击更改当前选中的layer
     */
    onPickChangeLayerSelect (e) {
      console.log(e)
      if (e) {
        this.currentLayer = e
      }
    },

    /**
     * 点击初始化色彩
     */
    onClickResetColor () {
      this.map.setStyle(this.currentStyle)
    },

    resetMapWidthAndHeight (hw = this.photoWidthAndHeight.narraw) {
      const { width, height } = hw
      this.photoWidthAndHeight = {width, height}

      this.$nextTick(() => {
        const currentZoom = this.map.getZoom()
        const currentCenter = this.map.getCenter()

        this.map.setCenter(currentCenter)
        this.map.setZoom(currentZoom)
      })
    },

    /**
     * 点击窄幅风格
     */
    onClickNarrowPosterBtn () {
      this.resetMapWidthAndHeight({height: 628, width: 432})
    },

    /**
     * 点击宽幅风格
     */
    onClickWidePosterBtn () {
      this.resetMapWidthAndHeight({height: 628, width: 972})
    },

    /**
     * 点击拾取的图层id
     */
    onClickPickedLayersId (vm, event) {
      const pickedLayer = event && event.target && event.target.textContent
      if (_.isString(pickedLayer)) {
        this.currentLayer = event.target.textContent
      }
    },

    onClickTabChange (e) {
      this.map.setStyle(styles[e])
    },

    /**
     * 点击修改文字的layout
    */
    onClickRadioChangeLayout (e) {
      console.log(e)
      switch (e) {
        case 'CLASSIC':
          break

        case 'MODERN':

          break

        case 'NOTEXT':
          break

        default:
          break
      }
    },
    /**
     * 点击是否显示添加的控制界面
     */
    onClickDisplayMapControls () {
      this.displayControls = !this.displayControls
      this.Draw.controls.trash = true
      this.Draw.controls.point = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.0/mapbox-gl.css');
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  left: 0;
  right: 0;
  top: 0;
  height: 56px;
  background-color: #eaeaea;
  padding-left: 20px;
  padding-right: 20px;
}

.main {
  display: flex;
  align-items: flex-start;
  height: 100%;
  background-color: #eaeaea;
}

.side {
  /* width: 30%; */
  min-width: 250px;
  min-height: calc(100vh - 58px);
  border-right: 1px solid #ddd;
  background-color: #eaeaea;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  order: 1;
}

.content {
  z-index: 0;
  order: 2;
  width: calc(100% - 252px);
  position: fixed;
  right: 0;
  height: calc(100vh - 4.14em);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
}
/* #mapcontainer {
    height: 400px;
    width: 1000px;
} */
.map {
  position: relative;
}

.button-container {
    text-align: center;
    margin-top: 15px;
}

.button-container .btn {
    color: black;
    border: thin black solid;
}

.map-overlay {
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  top: 0;
  left: 0;
}

.map-overlay .map-overlay-inner {
  background-color: #fff;
  /* box-shadow:0 1px 2px rgba(0, 0, 0, 0.10);
  border-radius: 3px;
  padding: 10px; */
  /* margin-bottom: 10px; */
}

.map-overlay-inner fieldset {
  border: none;
  padding: 0;
  margin: 0 0 10px;
}

.map-overlay-inner fieldset:last-child {
margin: 0;
}

.map-overlay-inner select {
  width: 100%;
}

.map-overlay-inner label {
  display: block;
  font-weight: bold;
  margin: 0 0 5px;
}

.map-overlay-inner button {
  display: inline-block;
  width: 36px;
  height: 20px;
  border: none;
  cursor: pointer;
}

.map-overlay-inner button:focus {
  outline: none;
}

.map-overlay-inner button:hover {
  box-shadow:inset 0 0 0 3px rgba(0, 0, 0, 0.10);
}

.poster {
  position: relative;
}
.mapboxgl-control-container .mapboxgl-ctrl-bottom-left {
  display: none;
}
.mapboxgl-ctrl-bottom-right {
  display: none;
}
</style>
