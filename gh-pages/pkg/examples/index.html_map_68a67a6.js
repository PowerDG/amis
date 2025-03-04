require.resourceMap({
  "res": {
    "node_modules/echarts/lib/config": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/env": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/vector": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/matrix": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/BoundingRect": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/core/matrix"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/LRU": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/tool/color": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/LRU"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/helper/image": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/LRU"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/util": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/contain/text": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/zrender/lib/graphic/helper/image",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/helper/roundRect": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/helper/fixShadow": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/helper/text": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/contain/text",
        "node_modules/zrender/lib/graphic/helper/roundRect",
        "node_modules/zrender/lib/graphic/helper/image",
        "node_modules/zrender/lib/graphic/helper/fixShadow"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/mixin/RectText": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/helper/text",
        "node_modules/zrender/lib/core/BoundingRect"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/Style": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/helper/fixShadow"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/guid": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/mixin/Eventful": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/mixin/Transformable": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/matrix",
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/animation/easing": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/animation/Clip": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/animation/easing"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/animation/Animator": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/animation/Clip",
        "node_modules/zrender/lib/tool/color",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/config": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/log": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/config"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/mixin/Animatable": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/animation/Animator",
        "node_modules/zrender/lib/core/log",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/Element": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/guid",
        "node_modules/zrender/lib/mixin/Eventful",
        "node_modules/zrender/lib/mixin/Transformable",
        "node_modules/zrender/lib/mixin/Animatable",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/Displayable": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/graphic/Style",
        "node_modules/zrender/lib/Element",
        "node_modules/zrender/lib/graphic/mixin/RectText"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/Image": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Displayable",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/graphic/helper/image"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/Text": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Displayable",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/contain/text",
        "node_modules/zrender/lib/graphic/helper/text"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/curve": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/bbox": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/core/curve"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/PathProxy": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/curve",
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/core/bbox",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/zrender/lib/config"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/contain/line": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/contain/cubic": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/curve"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/contain/quadratic": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/curve"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/contain/util": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/contain/arc": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/contain/util"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/contain/windingLine": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/contain/path": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/PathProxy",
        "node_modules/zrender/lib/contain/line",
        "node_modules/zrender/lib/contain/cubic",
        "node_modules/zrender/lib/contain/quadratic",
        "node_modules/zrender/lib/contain/arc",
        "node_modules/zrender/lib/contain/util",
        "node_modules/zrender/lib/core/curve",
        "node_modules/zrender/lib/contain/windingLine"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/Pattern": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/Path": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Displayable",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/PathProxy",
        "node_modules/zrender/lib/contain/path",
        "node_modules/zrender/lib/graphic/Pattern"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/Gradient": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/vml/core": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/env"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/vml/graphic": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/env",
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/zrender/lib/tool/color",
        "node_modules/zrender/lib/contain/text",
        "node_modules/zrender/lib/graphic/helper/text",
        "node_modules/zrender/lib/graphic/mixin/RectText",
        "node_modules/zrender/lib/graphic/Displayable",
        "node_modules/zrender/lib/graphic/Image",
        "node_modules/zrender/lib/graphic/Text",
        "node_modules/zrender/lib/graphic/Path",
        "node_modules/zrender/lib/core/PathProxy",
        "node_modules/zrender/lib/graphic/Gradient",
        "node_modules/zrender/lib/vml/core"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/mixin/Draggable": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/Handler": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/mixin/Draggable",
        "node_modules/zrender/lib/mixin/Eventful"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/container/Group": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/Element",
        "node_modules/zrender/lib/core/BoundingRect"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/timsort": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/Storage": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/env",
        "node_modules/zrender/lib/container/Group",
        "node_modules/zrender/lib/core/timsort"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/Layer": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/config",
        "node_modules/zrender/lib/graphic/Style",
        "node_modules/zrender/lib/graphic/Pattern"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/animation/requestAnimationFrame": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/Painter": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/log",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/zrender/lib/core/timsort",
        "node_modules/zrender/lib/Layer",
        "node_modules/zrender/lib/animation/requestAnimationFrame",
        "node_modules/zrender/lib/graphic/Image",
        "node_modules/zrender/lib/core/env"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/event": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/mixin/Eventful",
        "node_modules/zrender/lib/core/env"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/animation/Animation": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/event",
        "node_modules/zrender/lib/animation/requestAnimationFrame",
        "node_modules/zrender/lib/animation/Animator"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/GestureMgr": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/event"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/dom/HandlerProxy": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/event",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/mixin/Eventful",
        "node_modules/zrender/lib/core/env",
        "node_modules/zrender/lib/core/GestureMgr"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/zrender": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/guid",
        "node_modules/zrender/lib/core/env",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/Handler",
        "node_modules/zrender/lib/Storage",
        "node_modules/zrender/lib/Painter",
        "node_modules/zrender/lib/animation/Animation",
        "node_modules/zrender/lib/dom/HandlerProxy"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/vml/Painter": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/log",
        "node_modules/zrender/lib/vml/core",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/vml/vml": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/vml/graphic",
        "node_modules/zrender/lib/zrender",
        "node_modules/zrender/lib/vml/Painter"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/svg/core": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/svg/graphic": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/svg/core",
        "node_modules/zrender/lib/core/PathProxy",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/zrender/lib/core/matrix",
        "node_modules/zrender/lib/contain/text",
        "node_modules/zrender/lib/graphic/helper/text",
        "node_modules/zrender/lib/graphic/Text"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/core/arrayDiff2": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/zrender/lib/svg/helper/Definable": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/svg/core",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/graphic/Path",
        "node_modules/zrender/lib/graphic/Image",
        "node_modules/zrender/lib/graphic/Text",
        "node_modules/zrender/lib/svg/graphic"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/svg/helper/GradientManager": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/svg/helper/Definable",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/log"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/svg/helper/ClippathManager": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/svg/helper/Definable",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/matrix"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/svg/helper/ShadowManager": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/svg/helper/Definable",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/svg/Painter": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/svg/core",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/log",
        "node_modules/zrender/lib/graphic/Path",
        "node_modules/zrender/lib/graphic/Image",
        "node_modules/zrender/lib/graphic/Text",
        "node_modules/zrender/lib/core/arrayDiff2",
        "node_modules/zrender/lib/svg/helper/GradientManager",
        "node_modules/zrender/lib/svg/helper/ClippathManager",
        "node_modules/zrender/lib/svg/helper/ShadowManager",
        "node_modules/zrender/lib/svg/graphic"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/svg/svg": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/svg/graphic",
        "node_modules/zrender/lib/zrender",
        "node_modules/zrender/lib/svg/Painter"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/tool/transformPath": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/PathProxy",
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/tool/path": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path",
        "node_modules/zrender/lib/core/PathProxy",
        "node_modules/zrender/lib/tool/transformPath"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/shape/Circle": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/helper/fixClipWithShadow": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/env"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/shape/Sector": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path",
        "node_modules/zrender/lib/graphic/helper/fixClipWithShadow"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/shape/Ring": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/helper/smoothSpline": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/helper/smoothBezier": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/helper/poly": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/helper/smoothSpline",
        "node_modules/zrender/lib/graphic/helper/smoothBezier"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/shape/Polygon": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path",
        "node_modules/zrender/lib/graphic/helper/poly"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/shape/Polyline": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path",
        "node_modules/zrender/lib/graphic/helper/poly"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/shape/Rect": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path",
        "node_modules/zrender/lib/graphic/helper/roundRect"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/shape/Line": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/shape/BezierCurve": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path",
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/core/curve"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/shape/Arc": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/CompoundPath": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/LinearGradient": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/graphic/Gradient"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/RadialGradient": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/graphic/Gradient"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/graphic/IncrementalDisplayable": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/graphic/Displayable",
        "node_modules/zrender/lib/core/BoundingRect"
      ],
      "pkg": "p2"
    },
    "node_modules/zrender/lib/contain/polygon": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/contain/windingLine"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/util/model": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/util/clazz": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/mixin/makeStyleMapper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/mixin/lineStyle": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/mixin/makeStyleMapper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/mixin/areaStyle": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/mixin/makeStyleMapper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/util/graphic": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/tool/path",
        "node_modules/zrender/lib/tool/color",
        "node_modules/zrender/lib/core/matrix",
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/graphic/Path",
        "node_modules/zrender/lib/mixin/Transformable",
        "node_modules/zrender/lib/graphic/Image",
        "node_modules/zrender/lib/container/Group",
        "node_modules/zrender/lib/graphic/Text",
        "node_modules/zrender/lib/graphic/shape/Circle",
        "node_modules/zrender/lib/graphic/shape/Sector",
        "node_modules/zrender/lib/graphic/shape/Ring",
        "node_modules/zrender/lib/graphic/shape/Polygon",
        "node_modules/zrender/lib/graphic/shape/Polyline",
        "node_modules/zrender/lib/graphic/shape/Rect",
        "node_modules/zrender/lib/graphic/shape/Line",
        "node_modules/zrender/lib/graphic/shape/BezierCurve",
        "node_modules/zrender/lib/graphic/shape/Arc",
        "node_modules/zrender/lib/graphic/CompoundPath",
        "node_modules/zrender/lib/graphic/LinearGradient",
        "node_modules/zrender/lib/graphic/RadialGradient",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/zrender/lib/graphic/IncrementalDisplayable"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/mixin/textStyle": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/contain/text",
        "node_modules/echarts/lib/util/graphic"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/mixin/itemStyle": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/mixin/makeStyleMapper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/Model": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/env",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/util/clazz",
        "node_modules/echarts/lib/model/mixin/lineStyle",
        "node_modules/echarts/lib/model/mixin/areaStyle",
        "node_modules/echarts/lib/model/mixin/textStyle",
        "node_modules/echarts/lib/model/mixin/itemStyle"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/util/component": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/clazz"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/util/number": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/util/format": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/contain/text",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/util/layout": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/util/format"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/mixin/boxLayout": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/Component": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/util/component",
        "node_modules/echarts/lib/util/clazz",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/model/mixin/boxLayout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/globalDefault": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/mixin/colorPalette": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/referHelper": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/helper/sourceType": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/Source": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/clazz",
        "node_modules/echarts/lib/data/helper/sourceType"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/helper/sourceHelper": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/model/referHelper",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/data/Source",
        "node_modules/echarts/lib/data/helper/sourceType"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/Global": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/model/globalDefault",
        "node_modules/echarts/lib/model/mixin/colorPalette",
        "node_modules/echarts/lib/data/helper/sourceHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/ExtensionAPI": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/CoordinateSystem": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/OptionManager": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/model/Component"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/preprocessor/helper/compatStyle": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/preprocessor/backwardCompat": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/preprocessor/helper/compatStyle",
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/processor/dataStack": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/helper/dataProvider": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/data/Source",
        "node_modules/echarts/lib/data/helper/sourceType"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/mixin/dataFormat": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/data/helper/dataProvider",
        "node_modules/echarts/lib/util/format"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/stream/task": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/config"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/model/Series": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/env",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/model/mixin/colorPalette",
        "node_modules/echarts/lib/model/mixin/dataFormat",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/stream/task",
        "node_modules/echarts/lib/data/helper/sourceHelper",
        "node_modules/echarts/lib/data/helper/dataProvider"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/view/Component": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/container/Group",
        "node_modules/echarts/lib/util/component",
        "node_modules/echarts/lib/util/clazz"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/createRenderPlanner": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/view/Chart": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/container/Group",
        "node_modules/echarts/lib/util/component",
        "node_modules/echarts/lib/util/clazz",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/stream/task",
        "node_modules/echarts/lib/chart/helper/createRenderPlanner"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/util/throttle": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/visual/seriesColor": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Gradient"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/lang": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/visual/aria": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/lang",
        "node_modules/echarts/lib/data/helper/dataProvider"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/loading/default": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/stream/Scheduler": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/stream/task",
        "node_modules/echarts/lib/util/component",
        "node_modules/echarts/lib/model/Global",
        "node_modules/echarts/lib/ExtensionAPI",
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/theme/light": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/theme/dark": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataset": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/view/Component",
        "node_modules/echarts/lib/data/helper/sourceHelper",
        "node_modules/echarts/lib/data/helper/sourceType"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/DataDiffer": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/helper/dimensionHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/config"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/List": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/data/DataDiffer",
        "node_modules/echarts/lib/data/Source",
        "node_modules/echarts/lib/data/helper/dataProvider",
        "node_modules/echarts/lib/data/helper/dimensionHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/helper/completeDimensions": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/data/helper/sourceHelper",
        "node_modules/echarts/lib/data/Source",
        "node_modules/echarts/lib/data/helper/dimensionHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/helper/createDimensions": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/data/helper/completeDimensions"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/helper/dataStackHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/createListFromArray": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/data/List",
        "node_modules/echarts/lib/data/helper/createDimensions",
        "node_modules/echarts/lib/data/helper/sourceType",
        "node_modules/echarts/lib/data/helper/dimensionHelper",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/CoordinateSystem",
        "node_modules/echarts/lib/model/referHelper",
        "node_modules/echarts/lib/data/Source",
        "node_modules/echarts/lib/data/helper/dataStackHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/scale/Scale": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/clazz"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/OrdinalMeta": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/scale/Ordinal": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/scale/Scale",
        "node_modules/echarts/lib/data/OrdinalMeta"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/scale/helper": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/scale/Interval": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/scale/Scale",
        "node_modules/echarts/lib/scale/helper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/layout/barGrid": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/data/helper/dataStackHelper",
        "node_modules/echarts/lib/chart/helper/createRenderPlanner"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/scale/Time": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/scale/helper",
        "node_modules/echarts/lib/scale/Interval"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/scale/Log": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/scale/Scale",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/scale/Interval"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/axisHelper": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/scale/Ordinal",
        "node_modules/echarts/lib/scale/Interval",
        "node_modules/echarts/lib/scale/Scale",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/layout/barGrid",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/echarts/lib/scale/Time",
        "node_modules/echarts/lib/scale/Log"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/axisModelCommonMixin": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/axisHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/util/symbol": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/zrender/lib/core/BoundingRect"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/helper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/chart/helper/createListFromArray",
        "node_modules/echarts/lib/coord/axisHelper",
        "node_modules/echarts/lib/coord/axisModelCommonMixin",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/data/helper/dataStackHelper",
        "node_modules/echarts/lib/data/helper/completeDimensions",
        "node_modules/echarts/lib/data/helper/createDimensions",
        "node_modules/echarts/lib/util/symbol"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/geo/Region": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/zrender/lib/core/bbox",
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/contain/polygon"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/geo/parseGeoJson": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/geo/Region"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/axisTickLabelBuilder": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/contain/text",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/coord/axisHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/Axis": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/coord/axisTickLabelBuilder"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/export": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/zrender",
        "node_modules/zrender/lib/core/matrix",
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/tool/color",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/util/throttle",
        "node_modules/echarts/lib/helper",
        "node_modules/echarts/lib/coord/geo/parseGeoJson",
        "node_modules/echarts/lib/data/List",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/coord/Axis",
        "node_modules/zrender/lib/core/env"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/echarts": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/zrender",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/tool/color",
        "node_modules/zrender/lib/core/env",
        "node_modules/zrender/lib/core/timsort",
        "node_modules/zrender/lib/mixin/Eventful",
        "node_modules/echarts/lib/model/Global",
        "node_modules/echarts/lib/ExtensionAPI",
        "node_modules/echarts/lib/CoordinateSystem",
        "node_modules/echarts/lib/model/OptionManager",
        "node_modules/echarts/lib/preprocessor/backwardCompat",
        "node_modules/echarts/lib/processor/dataStack",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/view/Component",
        "node_modules/echarts/lib/view/Chart",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/util/throttle",
        "node_modules/echarts/lib/visual/seriesColor",
        "node_modules/echarts/lib/visual/aria",
        "node_modules/echarts/lib/loading/default",
        "node_modules/echarts/lib/stream/Scheduler",
        "node_modules/echarts/lib/theme/light",
        "node_modules/echarts/lib/theme/dark",
        "node_modules/echarts/lib/component/dataset",
        "node_modules/echarts/lib/export"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/line/LineSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/chart/helper/createListFromArray",
        "node_modules/echarts/lib/model/Series"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/labelHelper": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/data/helper/dataProvider"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/Symbol": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/symbol",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/chart/helper/labelHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/SymbolDraw": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/chart/helper/Symbol",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/line/helper": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/data/helper/dataStackHelper",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/line/lineAnimationDiff": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/line/helper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/line/poly": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path",
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/graphic/helper/fixClipWithShadow"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/line/LineView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/chart/helper/SymbolDraw",
        "node_modules/echarts/lib/chart/helper/Symbol",
        "node_modules/echarts/lib/chart/line/lineAnimationDiff",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/chart/line/poly",
        "node_modules/echarts/lib/view/Chart",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/chart/line/helper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/visual/symbol": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/layout/points": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/chart/helper/createRenderPlanner",
        "node_modules/echarts/lib/data/helper/dataStackHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/processor/dataSample": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/cartesian/Cartesian": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/cartesian/Cartesian2D": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/cartesian/Cartesian"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/cartesian/Axis2D": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/Axis"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/axisDefault": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/axisModelCreator": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/axisDefault",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/data/OrdinalMeta"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/cartesian/AxisModel": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/coord/axisModelCreator",
        "node_modules/echarts/lib/coord/axisModelCommonMixin"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/cartesian/GridModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/cartesian/AxisModel",
        "node_modules/echarts/lib/model/Component"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/cartesian/Grid": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/coord/axisHelper",
        "node_modules/echarts/lib/coord/cartesian/Cartesian2D",
        "node_modules/echarts/lib/coord/cartesian/Axis2D",
        "node_modules/echarts/lib/CoordinateSystem",
        "node_modules/echarts/lib/data/helper/dataStackHelper",
        "node_modules/echarts/lib/coord/cartesian/GridModel"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axis/AxisBuilder": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/util/symbol",
        "node_modules/zrender/lib/core/matrix",
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer/modelHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axis/AxisView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/axisPointer/modelHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axis/CartesianAxisView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/component/axis/AxisBuilder",
        "node_modules/echarts/lib/component/axis/AxisView",
        "node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axis": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/cartesian/AxisModel",
        "node_modules/echarts/lib/component/axis/CartesianAxisView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/gridSimple": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/coord/cartesian/Grid",
        "node_modules/echarts/lib/component/axis"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/line": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/line/LineSeries",
        "node_modules/echarts/lib/chart/line/LineView",
        "node_modules/echarts/lib/visual/symbol",
        "node_modules/echarts/lib/layout/points",
        "node_modules/echarts/lib/processor/dataSample",
        "node_modules/echarts/lib/component/gridSimple"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/bar/BaseBarSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/chart/helper/createListFromArray"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/bar/BarSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/bar/BaseBarSeries"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/bar/helper": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/chart/helper/labelHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/bar/barItemStyle": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/mixin/makeStyleMapper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/bar/BarView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/chart/bar/helper",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/chart/bar/barItemStyle",
        "node_modules/zrender/lib/graphic/Path"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/bar": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/layout/barGrid",
        "node_modules/echarts/lib/coord/cartesian/Grid",
        "node_modules/echarts/lib/chart/bar/BarSeries",
        "node_modules/echarts/lib/chart/bar/BarView",
        "node_modules/echarts/lib/component/gridSimple"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/createListSimply": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/data/helper/createDimensions",
        "node_modules/echarts/lib/data/List",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/helper/selectableMixin": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/pie/PieSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/helper/createListSimply",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/component/helper/selectableMixin",
        "node_modules/echarts/lib/data/helper/dataProvider"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/pie/PieView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/view/Chart"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/action/createDataSelectAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/visual/dataColor": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/pie/labelLayout": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/contain/text"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/pie/pieLayout": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/chart/pie/labelLayout",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/processor/dataFilter": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/pie": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/chart/pie/PieSeries",
        "node_modules/echarts/lib/chart/pie/PieView",
        "node_modules/echarts/lib/action/createDataSelectAction",
        "node_modules/echarts/lib/visual/dataColor",
        "node_modules/echarts/lib/chart/pie/pieLayout",
        "node_modules/echarts/lib/processor/dataFilter"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/scatter/ScatterSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/helper/createListFromArray",
        "node_modules/echarts/lib/model/Series"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/LargeSymbolDraw": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/symbol",
        "node_modules/zrender/lib/graphic/IncrementalDisplayable"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/scatter/ScatterView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/helper/SymbolDraw",
        "node_modules/echarts/lib/chart/helper/LargeSymbolDraw",
        "node_modules/echarts/lib/layout/points"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/scatter": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/scatter/ScatterSeries",
        "node_modules/echarts/lib/chart/scatter/ScatterView",
        "node_modules/echarts/lib/visual/symbol",
        "node_modules/echarts/lib/layout/points",
        "node_modules/echarts/lib/component/gridSimple"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/radar/IndicatorAxis": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/Axis"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/radar/Radar": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/radar/IndicatorAxis",
        "node_modules/echarts/lib/scale/Interval",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/coord/axisHelper",
        "node_modules/echarts/lib/CoordinateSystem"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/radar/RadarModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/axisDefault",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/coord/axisModelCommonMixin"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/radar/RadarView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/axis/AxisBuilder",
        "node_modules/echarts/lib/util/graphic"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/radar": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/radar/Radar",
        "node_modules/echarts/lib/coord/radar/RadarModel",
        "node_modules/echarts/lib/component/radar/RadarView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/radar/RadarSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/chart/helper/createListSimply",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/format"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/radar/RadarView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/symbol"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/radar/radarLayout": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/radar/backwardCompat": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/radar": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/radar",
        "node_modules/echarts/lib/chart/radar/RadarSeries",
        "node_modules/echarts/lib/chart/radar/RadarView",
        "node_modules/echarts/lib/visual/dataColor",
        "node_modules/echarts/lib/visual/symbol",
        "node_modules/echarts/lib/chart/radar/radarLayout",
        "node_modules/echarts/lib/processor/dataFilter",
        "node_modules/echarts/lib/chart/radar/backwardCompat"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/View": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/core/matrix",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/zrender/lib/mixin/Transformable"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/geo/fix/nanhai": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/geo/Region"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/geo/fix/textCoord": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/geo/fix/geoCoord": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/geo/fix/diaoyuIsland": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/geo/Geo": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/echarts/lib/coord/geo/parseGeoJson",
        "node_modules/echarts/lib/coord/View",
        "node_modules/echarts/lib/coord/geo/fix/nanhai",
        "node_modules/echarts/lib/coord/geo/fix/textCoord",
        "node_modules/echarts/lib/coord/geo/fix/geoCoord",
        "node_modules/echarts/lib/coord/geo/fix/diaoyuIsland"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/geo/geoCreator": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/geo/Geo",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/map/MapSeries": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/chart/helper/createListSimply",
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/component/helper/selectableMixin",
        "node_modules/echarts/lib/data/helper/dataProvider",
        "node_modules/echarts/lib/coord/geo/geoCreator"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/helper/interactionMutex": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/helper/RoamController": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/mixin/Eventful",
        "node_modules/zrender/lib/core/event",
        "node_modules/echarts/lib/component/helper/interactionMutex"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/helper/roamHelper": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/helper/cursorHelper": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/helper/MapDraw": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/helper/RoamController",
        "node_modules/echarts/lib/component/helper/roamHelper",
        "node_modules/echarts/lib/component/helper/cursorHelper",
        "node_modules/echarts/lib/util/graphic"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/map/MapView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/component/helper/MapDraw"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/action/roamHelper": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/action/geoRoam": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/action/roamHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/map/mapSymbolLayout": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/map/mapVisual": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/map/mapDataStatistic": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/map/backwardCompat": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/map": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/map/MapSeries",
        "node_modules/echarts/lib/chart/map/MapView",
        "node_modules/echarts/lib/action/geoRoam",
        "node_modules/echarts/lib/coord/geo/geoCreator",
        "node_modules/echarts/lib/chart/map/mapSymbolLayout",
        "node_modules/echarts/lib/chart/map/mapVisual",
        "node_modules/echarts/lib/chart/map/mapDataStatistic",
        "node_modules/echarts/lib/chart/map/backwardCompat",
        "node_modules/echarts/lib/action/createDataSelectAction"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/helper/linkList": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/Tree": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/data/helper/linkList",
        "node_modules/echarts/lib/data/List",
        "node_modules/echarts/lib/data/helper/createDimensions"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/tree/TreeSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/data/Tree",
        "node_modules/echarts/lib/util/format"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/tree/layoutHelper": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/layout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/tree/TreeView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/chart/helper/Symbol",
        "node_modules/echarts/lib/chart/tree/layoutHelper",
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/tree/treeAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/tree/traversalHelper": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/tree/treeLayout": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/tree/traversalHelper",
        "node_modules/echarts/lib/chart/tree/layoutHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/tree": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/tree/TreeSeries",
        "node_modules/echarts/lib/chart/tree/TreeView",
        "node_modules/echarts/lib/chart/tree/treeAction",
        "node_modules/echarts/lib/visual/symbol",
        "node_modules/echarts/lib/chart/tree/treeLayout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/treeHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/treemap/TreemapSeries": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/data/Tree",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/chart/helper/treeHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/treemap/Breadcrumb": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/layout",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/chart/helper/treeHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/util/animation": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/treemap/TreemapView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/data/DataDiffer",
        "node_modules/echarts/lib/chart/helper/treeHelper",
        "node_modules/echarts/lib/chart/treemap/Breadcrumb",
        "node_modules/echarts/lib/component/helper/RoamController",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/zrender/lib/core/matrix",
        "node_modules/echarts/lib/util/animation",
        "node_modules/echarts/lib/model/mixin/makeStyleMapper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/treemap/treemapAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/helper/treeHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/visual/VisualMapping": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/tool/color",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/treemap/treemapVisual": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/visual/VisualMapping",
        "node_modules/zrender/lib/tool/color",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/treemap/treemapLayout": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/chart/helper/treeHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/treemap": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/treemap/TreemapSeries",
        "node_modules/echarts/lib/chart/treemap/TreemapView",
        "node_modules/echarts/lib/chart/treemap/treemapAction",
        "node_modules/echarts/lib/chart/treemap/treemapVisual",
        "node_modules/echarts/lib/chart/treemap/treemapLayout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/data/Graph": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/clazz"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/createGraphFromNodeEdge": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/data/List",
        "node_modules/echarts/lib/data/Graph",
        "node_modules/echarts/lib/data/helper/linkList",
        "node_modules/echarts/lib/data/helper/createDimensions",
        "node_modules/echarts/lib/CoordinateSystem",
        "node_modules/echarts/lib/chart/helper/createListFromArray"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/GraphSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/data/List",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/chart/helper/createGraphFromNodeEdge"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/LinePath": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/Line": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/vector",
        "node_modules/echarts/lib/util/symbol",
        "node_modules/echarts/lib/chart/helper/LinePath",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/LineDraw": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/chart/helper/Line"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/adjustEdge": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/curve",
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/GraphView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/chart/helper/SymbolDraw",
        "node_modules/echarts/lib/chart/helper/LineDraw",
        "node_modules/echarts/lib/component/helper/RoamController",
        "node_modules/echarts/lib/component/helper/roamHelper",
        "node_modules/echarts/lib/component/helper/cursorHelper",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/chart/graph/adjustEdge"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/graphAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/action/roamHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/categoryFilter": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/categoryVisual": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/edgeVisual": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/simpleLayoutHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/simpleLayout": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/chart/graph/simpleLayoutHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/circularLayoutHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/circularLayout": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/graph/circularLayoutHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/forceHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/forceLayout": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/graph/forceHelper",
        "node_modules/echarts/lib/chart/graph/simpleLayoutHelper",
        "node_modules/echarts/lib/chart/graph/circularLayoutHelper",
        "node_modules/echarts/lib/util/number",
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph/createView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/View",
        "node_modules/echarts/lib/util/layout",
        "node_modules/zrender/lib/core/bbox"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/graph": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/graph/GraphSeries",
        "node_modules/echarts/lib/chart/graph/GraphView",
        "node_modules/echarts/lib/chart/graph/graphAction",
        "node_modules/echarts/lib/chart/graph/categoryFilter",
        "node_modules/echarts/lib/visual/symbol",
        "node_modules/echarts/lib/chart/graph/categoryVisual",
        "node_modules/echarts/lib/chart/graph/edgeVisual",
        "node_modules/echarts/lib/chart/graph/simpleLayout",
        "node_modules/echarts/lib/chart/graph/circularLayout",
        "node_modules/echarts/lib/chart/graph/forceLayout",
        "node_modules/echarts/lib/chart/graph/createView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/gauge/GaugeSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/helper/createListSimply",
        "node_modules/echarts/lib/model/Series",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/gauge/PointerPath": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/graphic/Path"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/gauge/GaugeView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/gauge/PointerPath",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/view/Chart",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/gauge": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/gauge/GaugeSeries",
        "node_modules/echarts/lib/chart/gauge/GaugeView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/funnel/FunnelSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/helper/createListSimply",
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/funnel/FunnelView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/view/Chart"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/funnel/funnelLayout": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/funnel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/funnel/FunnelSeries",
        "node_modules/echarts/lib/chart/funnel/FunnelView",
        "node_modules/echarts/lib/visual/dataColor",
        "node_modules/echarts/lib/chart/funnel/funnelLayout",
        "node_modules/echarts/lib/processor/dataFilter"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/parallel/parallelPreprocessor": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/parallel/ParallelAxis": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/Axis"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/helper/sliderMove": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/parallel/Parallel": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/matrix",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/coord/axisHelper",
        "node_modules/echarts/lib/coord/parallel/ParallelAxis",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/component/helper/sliderMove"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/parallel/parallelCreator": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/parallel/Parallel",
        "node_modules/echarts/lib/CoordinateSystem"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/parallel/AxisModel": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/model/mixin/makeStyleMapper",
        "node_modules/echarts/lib/coord/axisModelCreator",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/coord/axisModelCommonMixin"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/parallel/ParallelModel": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/coord/parallel/AxisModel"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axis/parallelAxisAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/helper/BrushController": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/mixin/Eventful",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/component/helper/interactionMutex",
        "node_modules/echarts/lib/data/DataDiffer"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/helper/brushHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/echarts/lib/component/helper/cursorHelper",
        "node_modules/echarts/lib/util/graphic"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axis/ParallelAxisView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/axis/AxisBuilder",
        "node_modules/echarts/lib/component/helper/BrushController",
        "node_modules/echarts/lib/component/helper/brushHelper",
        "node_modules/echarts/lib/util/graphic"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/parallelAxis": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/parallel/parallelCreator",
        "node_modules/echarts/lib/component/axis/parallelAxisAction",
        "node_modules/echarts/lib/component/axis/ParallelAxisView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/parallel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/throttle",
        "node_modules/echarts/lib/coord/parallel/parallelPreprocessor",
        "node_modules/echarts/lib/coord/parallel/parallelCreator",
        "node_modules/echarts/lib/coord/parallel/ParallelModel",
        "node_modules/echarts/lib/component/parallelAxis"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/parallel/ParallelSeries": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/chart/helper/createListFromArray"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/parallel/ParallelView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/view/Chart"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/parallel/parallelVisual": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/parallel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/parallel",
        "node_modules/echarts/lib/chart/parallel/ParallelSeries",
        "node_modules/echarts/lib/chart/parallel/ParallelView",
        "node_modules/echarts/lib/chart/parallel/parallelVisual"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sankey/SankeySeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/chart/helper/createGraphFromNodeEdge",
        "node_modules/echarts/lib/util/format"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sankey/SankeyView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sankey/sankeyAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/util/array/nest": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sankey/sankeyLayout": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/util/array/nest",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/config"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sankey/sankeyVisual": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/visual/VisualMapping",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sankey": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/sankey/SankeySeries",
        "node_modules/echarts/lib/chart/sankey/SankeyView",
        "node_modules/echarts/lib/chart/sankey/sankeyAction",
        "node_modules/echarts/lib/chart/sankey/sankeyLayout",
        "node_modules/echarts/lib/chart/sankey/sankeyVisual"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/whiskerBoxCommon": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/helper/createListSimply",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/data/helper/dimensionHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/boxplot/BoxplotSeries": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/chart/helper/whiskerBoxCommon"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/boxplot/BoxplotView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/view/Chart",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/zrender/lib/graphic/Path"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/boxplot/boxplotVisual": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/boxplot/boxplotLayout": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/boxplot": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/boxplot/BoxplotSeries",
        "node_modules/echarts/lib/chart/boxplot/BoxplotView",
        "node_modules/echarts/lib/chart/boxplot/boxplotVisual",
        "node_modules/echarts/lib/chart/boxplot/boxplotLayout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/candlestick/CandlestickSeries": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/chart/helper/whiskerBoxCommon"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/candlestick/CandlestickView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/view/Chart",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/zrender/lib/graphic/Path"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/candlestick/preprocessor": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/candlestick/candlestickVisual": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/helper/createRenderPlanner"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/candlestick/candlestickLayout": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/chart/helper/createRenderPlanner",
        "node_modules/echarts/lib/util/number",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/candlestick": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/candlestick/CandlestickSeries",
        "node_modules/echarts/lib/chart/candlestick/CandlestickView",
        "node_modules/echarts/lib/chart/candlestick/preprocessor",
        "node_modules/echarts/lib/chart/candlestick/candlestickVisual",
        "node_modules/echarts/lib/chart/candlestick/candlestickLayout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/effectScatter/EffectScatterSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/helper/createListFromArray",
        "node_modules/echarts/lib/model/Series"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/EffectSymbol": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/symbol",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/chart/helper/Symbol"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/effectScatter/EffectScatterView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/helper/SymbolDraw",
        "node_modules/echarts/lib/chart/helper/EffectSymbol",
        "node_modules/zrender/lib/core/matrix",
        "node_modules/echarts/lib/layout/points"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/effectScatter": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/effectScatter/EffectScatterSeries",
        "node_modules/echarts/lib/chart/effectScatter/EffectScatterView",
        "node_modules/echarts/lib/visual/symbol",
        "node_modules/echarts/lib/layout/points"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/lines/LinesSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/data/List",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/CoordinateSystem"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/EffectLine": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/chart/helper/Line",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/symbol",
        "node_modules/zrender/lib/core/vector",
        "node_modules/zrender/lib/core/curve"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/Polyline": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/EffectPolyline": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/helper/Polyline",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/chart/helper/EffectLine",
        "node_modules/zrender/lib/core/vector"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/helper/LargeLineDraw": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/zrender/lib/graphic/IncrementalDisplayable",
        "node_modules/zrender/lib/contain/line",
        "node_modules/zrender/lib/contain/quadratic"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/lines/linesLayout": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/helper/createRenderPlanner"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/lines/LinesView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/helper/LineDraw",
        "node_modules/echarts/lib/chart/helper/EffectLine",
        "node_modules/echarts/lib/chart/helper/Line",
        "node_modules/echarts/lib/chart/helper/Polyline",
        "node_modules/echarts/lib/chart/helper/EffectPolyline",
        "node_modules/echarts/lib/chart/helper/LargeLineDraw",
        "node_modules/echarts/lib/chart/lines/linesLayout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/lines/linesVisual": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/lines": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/lines/LinesSeries",
        "node_modules/echarts/lib/chart/lines/LinesView",
        "node_modules/echarts/lib/chart/lines/linesLayout",
        "node_modules/echarts/lib/chart/lines/linesVisual"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/heatmap/HeatmapSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/chart/helper/createListFromArray",
        "node_modules/echarts/lib/CoordinateSystem"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/heatmap/HeatmapLayer": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/heatmap/HeatmapView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/chart/heatmap/HeatmapLayer",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/heatmap": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/heatmap/HeatmapSeries",
        "node_modules/echarts/lib/chart/heatmap/HeatmapView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/bar/PictorialBarSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/chart/bar/BaseBarSeries"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/bar/PictorialBarView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/symbol",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/chart/bar/helper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/pictorialBar": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/cartesian/Grid",
        "node_modules/echarts/lib/chart/bar/PictorialBarSeries",
        "node_modules/echarts/lib/chart/bar/PictorialBarView",
        "node_modules/echarts/lib/layout/barGrid",
        "node_modules/echarts/lib/visual/symbol",
        "node_modules/echarts/lib/component/gridSimple"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/single/SingleAxis": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/Axis"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/single/Single": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/single/SingleAxis",
        "node_modules/echarts/lib/coord/axisHelper",
        "node_modules/echarts/lib/util/layout",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/single/singleCreator": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/single/Single",
        "node_modules/echarts/lib/CoordinateSystem"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/single/singleAxisHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axis/SingleAxisView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/axis/AxisBuilder",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/coord/single/singleAxisHelper",
        "node_modules/echarts/lib/component/axis/AxisView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/single/AxisModel": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/coord/axisModelCreator",
        "node_modules/echarts/lib/coord/axisModelCommonMixin"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer/findPointFromSeries": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer/axisTrigger": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/component/axisPointer/modelHelper",
        "node_modules/echarts/lib/component/axisPointer/findPointFromSeries"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer/AxisPointerModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer/globalListener": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/env",
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer/AxisPointerView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/axisPointer/globalListener"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer/BaseAxisPointer": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/clazz",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/component/axisPointer/modelHelper",
        "node_modules/zrender/lib/core/event",
        "node_modules/echarts/lib/util/throttle",
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer/viewHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/zrender/lib/contain/text",
        "node_modules/echarts/lib/util/format",
        "node_modules/zrender/lib/core/matrix",
        "node_modules/echarts/lib/coord/axisHelper",
        "node_modules/echarts/lib/component/axis/AxisBuilder"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/component/axisPointer/BaseAxisPointer",
        "node_modules/echarts/lib/component/axisPointer/viewHelper",
        "node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper",
        "node_modules/echarts/lib/component/axis/AxisView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/axisPointer/modelHelper",
        "node_modules/echarts/lib/component/axisPointer/axisTrigger",
        "node_modules/echarts/lib/component/axisPointer/AxisPointerModel",
        "node_modules/echarts/lib/component/axisPointer/AxisPointerView",
        "node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer/SingleAxisPointer": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/component/axisPointer/BaseAxisPointer",
        "node_modules/echarts/lib/component/axisPointer/viewHelper",
        "node_modules/echarts/lib/coord/single/singleAxisHelper",
        "node_modules/echarts/lib/component/axis/AxisView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/singleAxis": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/coord/single/singleCreator",
        "node_modules/echarts/lib/component/axis/SingleAxisView",
        "node_modules/echarts/lib/coord/single/AxisModel",
        "node_modules/echarts/lib/component/axisPointer",
        "node_modules/echarts/lib/component/axisPointer/SingleAxisPointer"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/themeRiver/ThemeRiverSeries": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/data/helper/createDimensions",
        "node_modules/echarts/lib/data/helper/dimensionHelper",
        "node_modules/echarts/lib/data/List",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/util/array/nest"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/themeRiver/ThemeRiverView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/line/poly",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/data/DataDiffer"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/themeRiver/themeRiverLayout": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/themeRiver/themeRiverVisual": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/themeRiver": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/singleAxis",
        "node_modules/echarts/lib/chart/themeRiver/ThemeRiverSeries",
        "node_modules/echarts/lib/chart/themeRiver/ThemeRiverView",
        "node_modules/echarts/lib/chart/themeRiver/themeRiverLayout",
        "node_modules/echarts/lib/chart/themeRiver/themeRiverVisual",
        "node_modules/echarts/lib/processor/dataFilter"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sunburst/SunburstSeries": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Series",
        "node_modules/echarts/lib/data/Tree",
        "node_modules/echarts/lib/chart/helper/treeHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sunburst/SunburstPiece": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sunburst/SunburstView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/view/Chart",
        "node_modules/echarts/lib/chart/sunburst/SunburstPiece",
        "node_modules/echarts/lib/data/DataDiffer"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sunburst/sunburstAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/chart/helper/treeHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sunburst/sunburstLayout": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/number",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/sunburst": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/chart/sunburst/SunburstSeries",
        "node_modules/echarts/lib/chart/sunburst/SunburstView",
        "node_modules/echarts/lib/chart/sunburst/sunburstAction",
        "node_modules/echarts/lib/visual/dataColor",
        "node_modules/echarts/lib/chart/sunburst/sunburstLayout",
        "node_modules/echarts/lib/processor/dataFilter"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/cartesian/prepareCustom": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/geo/prepareCustom": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/single/prepareCustom": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/polar/prepareCustom": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/calendar/prepareCustom": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/chart/custom": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/chart/helper/labelHelper",
        "node_modules/echarts/lib/chart/helper/createListFromArray",
        "node_modules/echarts/lib/layout/barGrid",
        "node_modules/echarts/lib/data/DataDiffer",
        "node_modules/echarts/lib/coord/cartesian/prepareCustom",
        "node_modules/echarts/lib/coord/geo/prepareCustom",
        "node_modules/echarts/lib/coord/single/prepareCustom",
        "node_modules/echarts/lib/coord/polar/prepareCustom",
        "node_modules/echarts/lib/coord/calendar/prepareCustom"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/graphic": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/layout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/grid": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/gridSimple",
        "node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer",
        "node_modules/echarts/lib/component/axisPointer"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/legend/LegendModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/legend/legendAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/helper/listComponent": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/util/graphic"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/legend/LegendView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/symbol",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/component/helper/listComponent",
        "node_modules/echarts/lib/util/layout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/legend/legendFilter": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/legend": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/legend/LegendModel",
        "node_modules/echarts/lib/component/legend/legendAction",
        "node_modules/echarts/lib/component/legend/LegendView",
        "node_modules/echarts/lib/component/legend/legendFilter",
        "node_modules/echarts/lib/model/Component"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/legend/ScrollableLegendModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/legend/LegendModel",
        "node_modules/echarts/lib/util/layout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/legend/ScrollableLegendView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/component/legend/LegendView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/legend/scrollableLegendAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/legendScroll": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/legend",
        "node_modules/echarts/lib/component/legend/ScrollableLegendModel",
        "node_modules/echarts/lib/component/legend/ScrollableLegendView",
        "node_modules/echarts/lib/component/legend/scrollableLegendAction"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/tooltip/TooltipModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/tooltip/TooltipContent": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/tool/color",
        "node_modules/zrender/lib/core/event",
        "node_modules/zrender/lib/core/env",
        "node_modules/echarts/lib/util/format"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/tooltip/TooltipView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/env",
        "node_modules/echarts/lib/component/tooltip/TooltipContent",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/component/axisPointer/findPointFromSeries",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/component/axisPointer/globalListener",
        "node_modules/echarts/lib/coord/axisHelper",
        "node_modules/echarts/lib/component/axisPointer/viewHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/tooltip": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/axisPointer",
        "node_modules/echarts/lib/component/tooltip/TooltipModel",
        "node_modules/echarts/lib/component/tooltip/TooltipView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/layout/barPolar": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/data/helper/dataStackHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/polar/RadiusAxis": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/Axis"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/polar/AngleAxis": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/Axis"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/polar/Polar": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/polar/RadiusAxis",
        "node_modules/echarts/lib/coord/polar/AngleAxis"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/polar/AxisModel": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/coord/axisModelCreator",
        "node_modules/echarts/lib/coord/axisModelCommonMixin"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/polar/PolarModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/coord/polar/AxisModel"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/polar/polarCreator": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/polar/Polar",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/coord/axisHelper",
        "node_modules/echarts/lib/CoordinateSystem",
        "node_modules/echarts/lib/data/helper/dataStackHelper",
        "node_modules/echarts/lib/coord/polar/PolarModel"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axis/AngleAxisView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/component/axis/AxisView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/angleAxis": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/polar/polarCreator",
        "node_modules/echarts/lib/component/axis/AngleAxisView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axis/RadiusAxisView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/component/axis/AxisBuilder",
        "node_modules/echarts/lib/component/axis/AxisView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/radiusAxis": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/polar/polarCreator",
        "node_modules/echarts/lib/component/axis/RadiusAxisView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/axisPointer/PolarAxisPointer": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/component/axisPointer/BaseAxisPointer",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/component/axisPointer/viewHelper",
        "node_modules/zrender/lib/core/matrix",
        "node_modules/echarts/lib/component/axis/AxisBuilder",
        "node_modules/echarts/lib/component/axis/AxisView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/polar": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/layout/barPolar",
        "node_modules/echarts/lib/coord/polar/polarCreator",
        "node_modules/echarts/lib/component/angleAxis",
        "node_modules/echarts/lib/component/radiusAxis",
        "node_modules/echarts/lib/component/axisPointer",
        "node_modules/echarts/lib/component/axisPointer/PolarAxisPointer"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/geo/GeoModel": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/component/helper/selectableMixin",
        "node_modules/echarts/lib/coord/geo/geoCreator"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/geo/GeoView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/helper/MapDraw",
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/geo": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/geo/GeoModel",
        "node_modules/echarts/lib/coord/geo/geoCreator",
        "node_modules/echarts/lib/component/geo/GeoView",
        "node_modules/echarts/lib/action/geoRoam"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/brush/preprocessor": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/visual/visualSolution": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/visual/VisualMapping"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/brush/selector": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/contain/polygon",
        "node_modules/zrender/lib/core/BoundingRect"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/helper/BrushTargetManager": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/component/helper/brushHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/brush/visualEncoding": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/echarts/lib/visual/visualSolution",
        "node_modules/echarts/lib/component/brush/selector",
        "node_modules/echarts/lib/util/throttle",
        "node_modules/echarts/lib/component/helper/BrushTargetManager"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/brush/BrushModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/visual/visualSolution",
        "node_modules/echarts/lib/model/Model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/brush/BrushView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/helper/BrushController"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/brush/brushAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/toolbox/featureManager": {
      "type": "js",
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/toolbox/feature/Brush": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/toolbox/featureManager",
        "node_modules/echarts/lib/lang"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/brush": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/brush/preprocessor",
        "node_modules/echarts/lib/component/brush/visualEncoding",
        "node_modules/echarts/lib/component/brush/BrushModel",
        "node_modules/echarts/lib/component/brush/BrushView",
        "node_modules/echarts/lib/component/brush/brushAction",
        "node_modules/echarts/lib/component/toolbox/feature/Brush"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/calendar/Calendar": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/CoordinateSystem"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/coord/calendar/CalendarModel": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/util/layout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/calendar/CalendarView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/calendar": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/coord/calendar/Calendar",
        "node_modules/echarts/lib/coord/calendar/CalendarModel",
        "node_modules/echarts/lib/component/calendar/CalendarView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/title": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/layout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/typeDefaulter": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/Component"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/helper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/format"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/AxisProxy": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/component/dataZoom/helper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/DataZoomModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/env",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/component/dataZoom/helper",
        "node_modules/echarts/lib/component/dataZoom/AxisProxy"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/DataZoomView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/view/Component"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/SliderZoomModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/dataZoom/DataZoomModel"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/SliderZoomView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/event",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/throttle",
        "node_modules/echarts/lib/component/dataZoom/DataZoomView",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/component/helper/sliderMove"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/InsideZoomModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/dataZoom/DataZoomModel"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/roams": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/helper/RoamController",
        "node_modules/echarts/lib/util/throttle"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/InsideZoomView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/dataZoom/DataZoomView",
        "node_modules/echarts/lib/component/helper/sliderMove",
        "node_modules/echarts/lib/component/dataZoom/roams"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/dataZoomProcessor": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/dataZoomAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/dataZoom/helper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/dataZoom/typeDefaulter",
        "node_modules/echarts/lib/component/dataZoom/DataZoomModel",
        "node_modules/echarts/lib/component/dataZoom/DataZoomView",
        "node_modules/echarts/lib/component/dataZoom/SliderZoomModel",
        "node_modules/echarts/lib/component/dataZoom/SliderZoomView",
        "node_modules/echarts/lib/component/dataZoom/InsideZoomModel",
        "node_modules/echarts/lib/component/dataZoom/InsideZoomView",
        "node_modules/echarts/lib/component/dataZoom/dataZoomProcessor",
        "node_modules/echarts/lib/component/dataZoom/dataZoomAction"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap/preprocessor": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap/typeDefaulter": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/Component"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap/visualEncoding": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/visual/visualSolution",
        "node_modules/echarts/lib/visual/VisualMapping"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/visual/visualDefault": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap/VisualMapModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/env",
        "node_modules/echarts/lib/visual/visualDefault",
        "node_modules/echarts/lib/visual/VisualMapping",
        "node_modules/echarts/lib/visual/visualSolution",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap/ContinuousModel": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/visualMap/VisualMapModel",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap/VisualMapView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/visual/VisualMapping"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap/helper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/layout"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap/ContinuousView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/graphic/LinearGradient",
        "node_modules/zrender/lib/core/event",
        "node_modules/echarts/lib/component/visualMap/VisualMapView",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/component/helper/sliderMove",
        "node_modules/echarts/lib/component/visualMap/helper",
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap/visualMapAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMapContinuous": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/visualMap/preprocessor",
        "node_modules/echarts/lib/component/visualMap/typeDefaulter",
        "node_modules/echarts/lib/component/visualMap/visualEncoding",
        "node_modules/echarts/lib/component/visualMap/ContinuousModel",
        "node_modules/echarts/lib/component/visualMap/ContinuousView",
        "node_modules/echarts/lib/component/visualMap/visualMapAction"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap/PiecewiseModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/visualMap/VisualMapModel",
        "node_modules/echarts/lib/visual/VisualMapping",
        "node_modules/echarts/lib/visual/visualDefault",
        "node_modules/echarts/lib/util/number"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap/PiecewiseView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/visualMap/VisualMapView",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/symbol",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/component/visualMap/helper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMapPiecewise": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/visualMap/preprocessor",
        "node_modules/echarts/lib/component/visualMap/typeDefaulter",
        "node_modules/echarts/lib/component/visualMap/visualEncoding",
        "node_modules/echarts/lib/component/visualMap/PiecewiseModel",
        "node_modules/echarts/lib/component/visualMap/PiecewiseView",
        "node_modules/echarts/lib/component/visualMap/visualMapAction"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/visualMap": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/visualMapContinuous",
        "node_modules/echarts/lib/component/visualMapPiecewise"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/marker/MarkerModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/config",
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/env",
        "node_modules/echarts/lib/util/model",
        "node_modules/echarts/lib/util/format",
        "node_modules/echarts/lib/model/mixin/dataFormat"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/marker/MarkPointModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/marker/MarkerModel"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/marker/markerHelper": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/data/helper/dataStackHelper"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/marker/MarkerView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/marker/MarkPointView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/chart/helper/SymbolDraw",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/data/List",
        "node_modules/echarts/lib/component/marker/markerHelper",
        "node_modules/echarts/lib/component/marker/MarkerView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/markPoint": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/marker/MarkPointModel",
        "node_modules/echarts/lib/component/marker/MarkPointView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/marker/MarkLineModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/marker/MarkerModel"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/marker/MarkLineView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/data/List",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/component/marker/markerHelper",
        "node_modules/echarts/lib/chart/helper/LineDraw",
        "node_modules/echarts/lib/component/marker/MarkerView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/markLine": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/marker/MarkLineModel",
        "node_modules/echarts/lib/component/marker/MarkLineView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/marker/MarkAreaModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/marker/MarkerModel"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/marker/MarkAreaView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/tool/color",
        "node_modules/echarts/lib/data/List",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/component/marker/markerHelper",
        "node_modules/echarts/lib/component/marker/MarkerView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/markArea": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/marker/MarkAreaModel",
        "node_modules/echarts/lib/component/marker/MarkAreaView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/timeline/preprocessor": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/timeline/typeDefaulter": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/model/Component"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/timeline/timelineAction": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/timeline/TimelineModel": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/model/Component",
        "node_modules/echarts/lib/data/List",
        "node_modules/echarts/lib/util/model"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/timeline/SliderTimelineModel": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/timeline/TimelineModel",
        "node_modules/echarts/lib/model/mixin/dataFormat"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/timeline/TimelineView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/view/Component"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/timeline/TimelineAxis": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/coord/Axis"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/timeline/SliderTimelineView": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/BoundingRect",
        "node_modules/zrender/lib/core/matrix",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/util/layout",
        "node_modules/echarts/lib/component/timeline/TimelineView",
        "node_modules/echarts/lib/component/timeline/TimelineAxis",
        "node_modules/echarts/lib/util/symbol",
        "node_modules/echarts/lib/coord/axisHelper",
        "node_modules/echarts/lib/util/number",
        "node_modules/echarts/lib/util/format"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/timeline": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/timeline/preprocessor",
        "node_modules/echarts/lib/component/timeline/typeDefaulter",
        "node_modules/echarts/lib/component/timeline/timelineAction",
        "node_modules/echarts/lib/component/timeline/SliderTimelineModel",
        "node_modules/echarts/lib/component/timeline/SliderTimelineView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/toolbox/ToolboxModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/toolbox/featureManager"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/toolbox/ToolboxView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/contain/text",
        "node_modules/echarts/lib/component/toolbox/featureManager",
        "node_modules/echarts/lib/util/graphic",
        "node_modules/echarts/lib/model/Model",
        "node_modules/echarts/lib/data/DataDiffer",
        "node_modules/echarts/lib/component/helper/listComponent"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/toolbox/feature/SaveAsImage": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/env",
        "node_modules/echarts/lib/lang",
        "node_modules/echarts/lib/component/toolbox/featureManager"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/toolbox/feature/MagicType": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/lang",
        "node_modules/echarts/lib/component/toolbox/featureManager"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/toolbox/feature/DataView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/zrender/lib/core/event",
        "node_modules/echarts/lib/lang",
        "node_modules/echarts/lib/component/toolbox/featureManager"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/history": {
      "type": "js",
      "deps": [
        "node_modules/zrender/lib/core/util"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/SelectZoomModel": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/dataZoom/DataZoomModel"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoom/SelectZoomView": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/dataZoom/DataZoomView"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/dataZoomSelect": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/dataZoom/typeDefaulter",
        "node_modules/echarts/lib/component/dataZoom/DataZoomModel",
        "node_modules/echarts/lib/component/dataZoom/DataZoomView",
        "node_modules/echarts/lib/component/dataZoom/SelectZoomModel",
        "node_modules/echarts/lib/component/dataZoom/SelectZoomView",
        "node_modules/echarts/lib/component/dataZoom/dataZoomProcessor",
        "node_modules/echarts/lib/component/dataZoom/dataZoomAction"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/toolbox/feature/DataZoom": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/zrender/lib/core/util",
        "node_modules/echarts/lib/component/helper/BrushController",
        "node_modules/echarts/lib/component/helper/BrushTargetManager",
        "node_modules/echarts/lib/component/dataZoom/history",
        "node_modules/echarts/lib/component/helper/sliderMove",
        "node_modules/echarts/lib/lang",
        "node_modules/echarts/lib/component/toolbox/featureManager",
        "node_modules/echarts/lib/component/dataZoomSelect"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/toolbox/feature/Restore": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/component/dataZoom/history",
        "node_modules/echarts/lib/lang",
        "node_modules/echarts/lib/component/toolbox/featureManager"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/lib/component/toolbox": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/component/toolbox/ToolboxModel",
        "node_modules/echarts/lib/component/toolbox/ToolboxView",
        "node_modules/echarts/lib/component/toolbox/feature/SaveAsImage",
        "node_modules/echarts/lib/component/toolbox/feature/MagicType",
        "node_modules/echarts/lib/component/toolbox/feature/DataView",
        "node_modules/echarts/lib/component/toolbox/feature/DataZoom",
        "node_modules/echarts/lib/component/toolbox/feature/Restore"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/index": {
      "type": "js",
      "deps": [
        "node_modules/echarts/lib/echarts",
        "node_modules/echarts/lib/export",
        "node_modules/echarts/lib/component/dataset",
        "node_modules/echarts/lib/chart/line",
        "node_modules/echarts/lib/chart/bar",
        "node_modules/echarts/lib/chart/pie",
        "node_modules/echarts/lib/chart/scatter",
        "node_modules/echarts/lib/chart/radar",
        "node_modules/echarts/lib/chart/map",
        "node_modules/echarts/lib/chart/tree",
        "node_modules/echarts/lib/chart/treemap",
        "node_modules/echarts/lib/chart/graph",
        "node_modules/echarts/lib/chart/gauge",
        "node_modules/echarts/lib/chart/funnel",
        "node_modules/echarts/lib/chart/parallel",
        "node_modules/echarts/lib/chart/sankey",
        "node_modules/echarts/lib/chart/boxplot",
        "node_modules/echarts/lib/chart/candlestick",
        "node_modules/echarts/lib/chart/effectScatter",
        "node_modules/echarts/lib/chart/lines",
        "node_modules/echarts/lib/chart/heatmap",
        "node_modules/echarts/lib/chart/pictorialBar",
        "node_modules/echarts/lib/chart/themeRiver",
        "node_modules/echarts/lib/chart/sunburst",
        "node_modules/echarts/lib/chart/custom",
        "node_modules/echarts/lib/component/graphic",
        "node_modules/echarts/lib/component/grid",
        "node_modules/echarts/lib/component/legendScroll",
        "node_modules/echarts/lib/component/tooltip",
        "node_modules/echarts/lib/component/axisPointer",
        "node_modules/echarts/lib/component/polar",
        "node_modules/echarts/lib/component/geo",
        "node_modules/echarts/lib/component/parallel",
        "node_modules/echarts/lib/component/singleAxis",
        "node_modules/echarts/lib/component/brush",
        "node_modules/echarts/lib/component/calendar",
        "node_modules/echarts/lib/component/title",
        "node_modules/echarts/lib/component/dataZoom",
        "node_modules/echarts/lib/component/visualMap",
        "node_modules/echarts/lib/component/markPoint",
        "node_modules/echarts/lib/component/markLine",
        "node_modules/echarts/lib/component/markArea",
        "node_modules/echarts/lib/component/timeline",
        "node_modules/echarts/lib/component/toolbox",
        "node_modules/zrender/lib/vml/vml",
        "node_modules/zrender/lib/svg/svg"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/map/js/china": {
      "type": "js",
      "deps": [
        "node_modules/echarts/index"
      ],
      "pkg": "p2"
    },
    "node_modules/echarts/map/js/world": {
      "type": "js",
      "deps": [
        "node_modules/echarts/index"
      ],
      "pkg": "p2"
    },
    "node_modules/flv.js/dist/flv": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/n/flv.js/dist/flv_d7c9b57.js",
      "type": "js"
    },
    "node_modules/hls.js/dist/hls": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/n/hls.js/dist/hls_9355c57.js",
      "type": "js"
    },
    "docs/getting_started.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/getting_started_def98c2.js",
      "type": "js"
    },
    "docs/basic.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/basic_7d2ade1.js",
      "type": "js"
    },
    "docs/advanced.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/advanced_42bd99a.js",
      "type": "js"
    },
    "docs/renderers.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers_a0f30a3.js",
      "type": "js"
    },
    "docs/renderers/Page.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Page_847cdf5.js",
      "type": "js"
    },
    "docs/renderers/Definitions.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Definitions_824906c.js",
      "type": "js"
    },
    "docs/renderers/Form/Form.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Form_9da7ce0.js",
      "type": "js"
    },
    "docs/renderers/Form/FormItem.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/FormItem_b10abdb.js",
      "type": "js"
    },
    "docs/renderers/Form/List.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/List_6e8edb9.js",
      "type": "js"
    },
    "docs/renderers/Form/Button-Group.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Button-Group_a32acaa.js",
      "type": "js"
    },
    "docs/renderers/Form/Service.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Service_f39843e.js",
      "type": "js"
    },
    "docs/renderers/Form/Tabs.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Tabs_fa24b38.js",
      "type": "js"
    },
    "docs/renderers/Form/Table.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Table_bbac4de.js",
      "type": "js"
    },
    "docs/renderers/Form/HBox.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/HBox_95b1777.js",
      "type": "js"
    },
    "docs/renderers/Form/Grid.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Grid_a0b47b0.js",
      "type": "js"
    },
    "docs/renderers/Form/Panel.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Panel_15f0c35.js",
      "type": "js"
    },
    "docs/renderers/Form/Hidden.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Hidden_12623c5.js",
      "type": "js"
    },
    "docs/renderers/Form/Text.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Text_b9a1159.js",
      "type": "js"
    },
    "docs/renderers/Form/Input-Group.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Input-Group_b9ea070.js",
      "type": "js"
    },
    "docs/renderers/Form/Textarea.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Textarea_7b0369b.js",
      "type": "js"
    },
    "docs/renderers/Form/Url.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Url_390eb8c.js",
      "type": "js"
    },
    "docs/renderers/Form/Email.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Email_6f58cc8.js",
      "type": "js"
    },
    "docs/renderers/Form/Password.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Password_efd9f65.js",
      "type": "js"
    },
    "docs/renderers/Form/Number.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Number_4d16326.js",
      "type": "js"
    },
    "docs/renderers/Form/Select.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Select_6e3b6ee.js",
      "type": "js"
    },
    "docs/renderers/Form/Chained-Select.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Chained-Select_feca72f.js",
      "type": "js"
    },
    "docs/renderers/Form/Checkbox.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Checkbox_aaf76a4.js",
      "type": "js"
    },
    "docs/renderers/Form/Checkboxes.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Checkboxes_4bc46d5.js",
      "type": "js"
    },
    "docs/renderers/Form/City.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/City_c77cedf.js",
      "type": "js"
    },
    "docs/renderers/Form/Radios.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Radios_600fef9.js",
      "type": "js"
    },
    "docs/renderers/Form/Switch.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Switch_433dce7.js",
      "type": "js"
    },
    "docs/renderers/Form/Rating.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Rating_9bc90bc.js",
      "type": "js"
    },
    "docs/renderers/Form/Date.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Date_ec8c837.js",
      "type": "js"
    },
    "docs/renderers/Form/Datetime.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Datetime_27f291f.js",
      "type": "js"
    },
    "docs/renderers/Form/Time.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Time_29d6c47.js",
      "type": "js"
    },
    "docs/renderers/Form/Date-Range.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Date-Range_34864ff.js",
      "type": "js"
    },
    "docs/renderers/Form/Color.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Color_4706421.js",
      "type": "js"
    },
    "docs/renderers/Form/Range.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Range_2162022.js",
      "type": "js"
    },
    "docs/renderers/Form/Image.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Image_a539c30.js",
      "type": "js"
    },
    "docs/renderers/Form/File.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/File_6f4bc97.js",
      "type": "js"
    },
    "docs/renderers/Form/Matrix.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Matrix_f8c0d21.js",
      "type": "js"
    },
    "docs/renderers/Form/Tree.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Tree_ab1679c.js",
      "type": "js"
    },
    "docs/renderers/Form/TreeSelect.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/TreeSelect_70c5389.js",
      "type": "js"
    },
    "docs/renderers/Form/NestedSelect.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/NestedSelect_51ddabf.js",
      "type": "js"
    },
    "docs/renderers/Form/Button.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Button_9e7b3ee.js",
      "type": "js"
    },
    "docs/renderers/Form/Button-Toolbar.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Button-Toolbar_acaf8ce.js",
      "type": "js"
    },
    "docs/renderers/Form/Combo.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Combo_9553922.js",
      "type": "js"
    },
    "docs/renderers/Form/Array.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Array_34782ce.js",
      "type": "js"
    },
    "docs/renderers/Form/SubForm.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/SubForm_d6ed24a.js",
      "type": "js"
    },
    "docs/renderers/Form/Picker.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Picker_9250032.js",
      "type": "js"
    },
    "docs/renderers/Form/Formula.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Formula_3fadf8a.js",
      "type": "js"
    },
    "docs/renderers/Form/Group.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Group_f852e20.js",
      "type": "js"
    },
    "docs/renderers/Form/FieldSet.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/FieldSet_ec47997.js",
      "type": "js"
    },
    "docs/renderers/Form/Repeat.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Repeat_e183ca6.js",
      "type": "js"
    },
    "docs/renderers/Form/Rich-Text.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Rich-Text_2e0002b.js",
      "type": "js"
    },
    "docs/renderers/Form/Editor.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Form/Editor_ca2a718.js",
      "type": "js"
    },
    "docs/renderers/Static.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Static_d2ecd95.js",
      "type": "js"
    },
    "docs/renderers/Divider.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Divider_bd296e3.js",
      "type": "js"
    },
    "docs/renderers/Wizard.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Wizard_1aad5e6.js",
      "type": "js"
    },
    "docs/renderers/Tpl.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Tpl_105513c.js",
      "type": "js"
    },
    "docs/renderers/Plain.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Plain_4b55aa6.js",
      "type": "js"
    },
    "docs/renderers/Html.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Html_066cc57.js",
      "type": "js"
    },
    "docs/renderers/Alert.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Alert_f2f6fc6.js",
      "type": "js"
    },
    "docs/renderers/Action.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Action_843aa7b.js",
      "type": "js"
    },
    "docs/renderers/Dialog.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Dialog_669f15c.js",
      "type": "js"
    },
    "docs/renderers/Drawer.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Drawer_82c556f.js",
      "type": "js"
    },
    "docs/renderers/CRUD.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/CRUD_1a6567e.js",
      "type": "js"
    },
    "docs/renderers/CRUD-Table.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/CRUD-Table_10e8990.js",
      "type": "js"
    },
    "docs/renderers/CRUD-Cards.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/CRUD-Cards_2917109.js",
      "type": "js"
    },
    "docs/renderers/CRUD-List.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/CRUD-List_b57eddd.js",
      "type": "js"
    },
    "docs/renderers/Panel.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Panel_c3302fe.js",
      "type": "js"
    },
    "docs/renderers/Wrapper.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Wrapper_2ff662d.js",
      "type": "js"
    },
    "docs/renderers/Service.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Service_1f623db.js",
      "type": "js"
    },
    "docs/renderers/Chart.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Chart_b5bbfb2.js",
      "type": "js"
    },
    "docs/renderers/Collapse.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Collapse_b0819a6.js",
      "type": "js"
    },
    "docs/renderers/Carousel.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Carousel_ef4fdde.js",
      "type": "js"
    },
    "docs/renderers/Audio.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Audio_67d2e11.js",
      "type": "js"
    },
    "docs/renderers/Video.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Video_d464c53.js",
      "type": "js"
    },
    "docs/renderers/Table.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Table_3e512fa.js",
      "type": "js"
    },
    "docs/renderers/Column.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Column_6bd40c9.js",
      "type": "js"
    },
    "docs/renderers/List.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/List_bce9dc7.js",
      "type": "js"
    },
    "docs/renderers/Card.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Card_749edc3.js",
      "type": "js"
    },
    "docs/renderers/Cards.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Cards_7f01e70.js",
      "type": "js"
    },
    "docs/renderers/Field.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Field_727d3fa.js",
      "type": "js"
    },
    "docs/renderers/Tabs.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Tabs_cb8d10a.js",
      "type": "js"
    },
    "docs/renderers/Grid.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Grid_1e937ec.js",
      "type": "js"
    },
    "docs/renderers/HBox.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/HBox_aa03385.js",
      "type": "js"
    },
    "docs/renderers/ButtonGroup.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/ButtonGroup_3e1bfda.js",
      "type": "js"
    },
    "docs/renderers/iFrame.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/iFrame_e0bdd74.js",
      "type": "js"
    },
    "docs/renderers/Nav.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Nav_964f9b4.js",
      "type": "js"
    },
    "docs/renderers/Tasks.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Tasks_bea117d.js",
      "type": "js"
    },
    "docs/renderers/QRCode.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/QRCode_7870561.js",
      "type": "js"
    },
    "docs/renderers/Types.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/renderers/Types_332ad75.js",
      "type": "js"
    },
    "docs/sdk.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/sdk_f512bf9.js",
      "type": "js"
    },
    "docs/dev.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/dev_09c1d39.js",
      "type": "js"
    },
    "docs/style.md": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/docs/style_a0d04b0.js",
      "type": "js"
    }
  },
  "pkg": {
    "p2": {
      "url": "https://bce.bdstatic.com/fex/amis-gh-pages/pkg/echarts_522d286.js",
      "type": "js"
    }
  }
});