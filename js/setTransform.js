    function setTransform(el, attr, val) {
      if (arguments.length < 2) {
        console.error('缺少必要参数')
      } else {
        if (!el.transform) {
          el.transform = {}
        }
        if (val == undefined) {
          // 获取
          var val = el.transform[attr]
          if (!val) {
            // 没有通过此方法设置transform,返回默认值;
            if (!el.transform[attr]) {
              switch (attr) {
                case 'scale':
                case 'scaleX':
                case 'scaleY':
                case 'scaleZ':
                  // 倍数放大100倍
                  el.transform[attr] = 1
                  break;
                default:
                  el.transform[attr] = 0
              }
            }
          }
          return el.transform[attr]
        } else {
          // 设置;
          el.transform[attr] = val
          var transformVal = ''
          for (var k in el.transform) {
            switch (k) {
              case 'scale':
              case 'scaleX':
              case 'scaleY':
              case 'scaleZ':
                transformVal += ' ' + k + '(' + el.transform[k] + ')'
                break;
              case 'rotate':
              case 'rotateY':
              case 'rotateX':
              case 'rotateZ':
              case 'skew':
              case 'skewX':
              case 'skewZ':
              case 'skewY':
                transformVal += ' ' + k + '(' + el.transform[k] + 'deg)'
                break;
              case 'translate':
              case 'translateX':
              case 'translateY':
              case 'translateZ':
                transformVal += ' ' + k + '(' + el.transform[k] + 'px)'
                break;
            }
          }
          el.style.transform = transformVal
        }
      }
    }