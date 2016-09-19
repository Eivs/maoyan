import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "F-maoyan": {
        "fontFamily": "iconfont-maoyan",
        "fontStyle": "normal",
        "fontWeight": "400",
        "speak": "none",
        "textDecoration": "none",
        "WebkitFontSmoothing": "antialiased"
    },
    "F-maoyan-gift:before": {
        "content": "\\793c"
    },
    "F-maoyan-audience:before": {
        "content": "\\4f17"
    },
    "F-maoyan-comment:before": {
        "content": "\\8bc4"
    },
    "F-maoyan-topic:before": {
        "content": "\\8bdd"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "minWidth": 310,
        "background": "#f8f8f8",
        "color": "#555",
        "font": "14px/1.5 Arial, Helvetica, sans-serif",
        "WebkitTapHighlightColor": "rgba(255, 255, 255, 0)",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "OUserSelect": "none",
        "userSelect": "none",
        "WebkitTouchCallout": "none",
        "cursor": "default",
        "MsContentZooming": "none",
        "WebkitTextSizeAdjust": "100%",
        "MsTouchAction": "manipulation",
        "WebkitTouchAction": "manipulation",
        "touchAction": "manipulation"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "100%",
        "fontWeight": "400"
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "100%",
        "fontWeight": "400"
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "100%",
        "fontWeight": "400"
    },
    "h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "100%",
        "fontWeight": "400"
    },
    "h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "100%",
        "fontWeight": "400"
    },
    "h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "100%",
        "fontWeight": "400"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingLeft": 0,
        "listStyleType": "none"
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingLeft": 0,
        "listStyleType": "none"
    },
    "figure": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "block"
    },
    "textarea": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "input": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "verticalAlign": "middle",
        "userSelect": "auto",
        "wordBreak": "normal",
        "background": "transparent"
    },
    "button": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "select": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "verticalAlign": "middle",
        "userSelect": "auto"
    },
    "address": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "caption": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "cite": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "code": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "dfn": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "em": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "th": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "del": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "ins": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "mark": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "sup": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "sub": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "var": {
        "fontStyle": "normal",
        "fontWeight": "400",
        "textDecoration": "none",
        "background": 0,
        "fontSize": "100%",
        "verticalAlign": "middle"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "a": {
        "outline": 0,
        "textDecoration": "none"
    },
    "strong": {
        "fontWeight": "700"
    },
    "small": {
        "fontSize": "80%"
    },
    "fieldset": {
        "border": 0,
        "verticalAlign": "top"
    },
    "img": {
        "border": 0,
        "verticalAlign": "top"
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0
    },
    "td": {
        "fontWeight": "400",
        "verticalAlign": "middle"
    },
    "q": {
        "quotes": "none"
    },
    "blockquote": {
        "quotes": "none"
    },
    "q:before": {
        "content": "none"
    },
    "q:after": {
        "content": "none"
    },
    "blockquote:before": {
        "content": "none"
    },
    "blockquote:after": {
        "content": "none"
    },
    "cf:after": {
        "clear": "both",
        "content": "",
        "display": "block",
        "height": 0,
        "overflow": "hidden"
    },
    "lazy img": {
        "background": "#c1c1c1 url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAwFBMVEXS0tLCwsKUlJTOzs7V1dXHx8fY2NjQ0NDJycmgoKDg4OCenp6fn5+bm5vAwMCjo6OhoaGlpaWdnZ2ioqKkpKSurq6oqKi8vLympqa0tLS/v7+2traqqqqpqamnp6e+vr6tra2cnJy6urqwsLCvr6+7u7u3t7erq6u5ubmzs7OsrKy1tbWampqxsbG9vb24uLiysrLc3NzBwcGZmZna2tre3t7ExMTW1tbNzc3f39/d3d3FxcXMzMyYmJjb29vBwcG3Qf9VAAAAQHRSTlP///////////////////////////////////////////////////////////////////////////////////8AwnuxRAAABKdJREFUSMeNlol62yoQheUmTgNCLAK07/tiWV7iJE2a6v3f6iK77U1tJ+18XiSsH4bhcLA2XQTONl3EhHCspC0vf5608wbPDan+KxAPqr8iVYR0BH4H0kGQfYrgAujgz0Ambz9B4sA0DETfE1RXLRJ/hHihaUoXme8YmnI3SHX5AYI7M43u4BL8z9CUPcMbYOrDdWSjI6OBED6aemoY80tP+Q2E2yBFoLqGlFwH6atCoL8K+zWOR0lWO3X7bTCA6XhXkM5UJf0+I3f3D/MXPGjL7bELAwB9c4lkFKkC38Ar0cwIiy+QwlTt9OtHCND7c8Rz1Boi9Kye2D58+/Xw6bJaKcSsz5E5LzWKBrUxEPL1MAO3fhQWjweIj6P8zuwX4s7CMlx4Q970BO2rFwhvOAmM1ap/eYhU0og2Z0g+52U+b6OVaT0N+/0OPlhfFs86QOpyPQ+D+jMkUYgZHZYrMCOpYR2WxkohCKTRi4bmrNszpFOI0cJxRm4HQ+dP8crYfdfnyt8erLmcwzXEnotziWgweb+Yv5G9iYwYPs7I3WAYIVyuVosbhRjRFhZ7JbnzxOw8JPsM3s3Tvx1W+923h/CLGkVNH8NDQfLRW5whC6XD6hHCZ/Jm1sTItPrxK2GBYaz6LXx59bzS986QNWVtfK9WUC0l1zHcAhs+dUYoF6rt4d5zrQifa+zRK7PF3VElGlnCO72CUDYn7Wi2jZfLC1k2stzZ/pGBsWUXQzEOyWkT3DaenfBLJccLO0Fvmx/Hh+69e/gU707Ej+KN9bvHa7vyTRXfKG7Ppf+UG0Dfo2u7EofmrEy2+PEe2L5Gs8DM4qpd2GS2vTStsbb9+by2U64zE5F33ccqerTKNOVdtd5h2+94ms6bwhT2R27pnxhwNKWjKx1vTZF97MmjMBG4MOWo/Mz57foP458BIOO/nC++BdS5csQQ0nUaNH89kiZcJQ5XLqhG41HR/MMpdnSo0m83G7cq8TT9I/J5aHGJyzheK8HgCdtZZnvqI8t+DmCfFgSvs2OoQpS2ZkeWcLsoq0QeexEArHcApYCcChuEJ81aThAGyhOnhrvaFJjS0RFVx3CORTCQlgS+L2k2ZV1Qc16rqDxm5UWRiw47jqeVnNtNGFUuk7Yn3Ji1wpEy5PaaAMfh1HEcU2JmyUJK0eWgnLQaCH9MOt8N8tJjxCGusPI84OsejdNkWSotJnFY54nMrbwfJ6xJ35KCCkSFrjpjoULqyk+A3YPcdRlz3ZZLnAc1IF3tTjjwNS/jiRjWXK5Fgo+JMYQ4t7wecUIoJYSoSdbMYcwRyZRQW/NUqqLFpJhYgp15FJaQUFW9pY3nWZHnqb4myUIVrPXVyaRJKgqHCsAZKrAzz4W4BR8S7ILKtiPHtkcgpzDsfd+Pulz9A9DqwSpUCbmVU4nFxmYtcdcA5VOPKOdUvYEoJxkFVhQ4G+wllVaOoiX+RDaT83MupJ1qGk/rSvXLnGYclRCayK9ZUeNJqrlMORl5uAHWBiWYRB11ueP6IDgJJqQqIbeZBtpYYQ/KBrVKlkmytghhgpB+Cgix7I1gjStOqq8c5jhkmLqiJ0McuoXq6j92ZWbxiZAstgAAAABJRU5ErkJggg==\") no-repeat center center"
    },
    "clearfix:after": {
        "clear": "both",
        "content": " ",
        "display": "table"
    },
    "clearfix:before": {
        "content": " ",
        "display": "table"
    },
    "a:active": {
        "background": "#ddd"
    },
    "mp-dn": {
        "display": "none"
    },
    "hidden": {
        "display": "none"
    },
    "w-box": {
        "paddingTop": 14,
        "paddingRight": 14,
        "paddingBottom": 14,
        "paddingLeft": 14,
        "border": "0 solid #e3e3e3",
        "borderWidth": "1px 0",
        "background": "#fff",
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "w-box dl": {
        "marginTop": -10,
        "marginRight": 0,
        "marginBottom": -10,
        "marginLeft": 0
    },
    "w-box dt": {
        "float": "left",
        "width": 60
    },
    "w-box dt:after": {
        "content": "'：'"
    },
    "w-box dd": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "height": 30,
        "borderBottom": "1px solid #e6e5e3"
    },
    "w-box dd:last-child": {
        "borderBottom": 0
    },
    "w-box-list": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "w-box-list li": {
        "borderTop": "1px solid #CCC"
    },
    "w-box-list li:first-child": {
        "borderTop": 0
    },
    "w-box-list li:before": {
        "content": "''",
        "right": 10,
        "top": 17,
        "position": "relative",
        "float": "right",
        "width": 11,
        "height": 11,
        "borderTop": "2px solid #CCC",
        "borderRight": "2px solid #CCC",
        "WebkitTransform": "rotate(45deg)",
        "MozTransform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "transform": "rotate(45deg)"
    },
    "w-box-list li a": {
        "paddingTop": 14,
        "paddingRight": 14,
        "paddingBottom": 14,
        "paddingLeft": 14,
        "display": "block",
        "color": "#666"
    },
    "input-normal": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "border": "1px solid #c3c3c3",
        "background": "#fff"
    },
    "input-normal input": {
        "border": 0,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "lineHeight": 25,
        "fontSize": 16
    },
    "input-diyradio": {
        "border": "1px solid #ccc",
        "display": "inline-block",
        "width": 1.2,
        "height": 1.2,
        "borderRadius": "100%",
        "position": "relative",
        "verticalAlign": "top",
        "marginTop": 1,
        "background": "#fff"
    },
    "input-diycheckbox": {
        "border": "1px solid #ccc",
        "display": "inline-block",
        "width": 1.2,
        "height": 1.2,
        "borderRadius": "100%",
        "position": "relative",
        "verticalAlign": "top",
        "marginTop": 1,
        "background": "#fff"
    },
    "input-diyradio input": {
        "width": 1,
        "visibility": "hidden"
    },
    "input-diycheckbox input": {
        "width": 1,
        "visibility": "hidden"
    },
    "input-diycheckboxchecked": {
        "background": "#76c60d",
        "borderColor": "#76c60d"
    },
    "input-diycheckboxchecked:after": {
        "content": "",
        "display": "inline-block",
        "width": 10,
        "height": 5,
        "border": "0 solid #fff",
        "borderWidth": "0 0 1px 1px",
        "position": "absolute",
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "top": 4,
        "left": 3
    },
    "input-diyradiochecked": {
        "borderColor": "#76c60d"
    },
    "input-diyradiochecked:after": {
        "content": "",
        "display": "inline-block",
        "width": 12,
        "height": 12,
        "borderRadius": "100%",
        "background": "#76c60d",
        "top": 3,
        "left": 3,
        "position": "absolute"
    },
    "tabs-hd": {
        "paddingTop": 7,
        "paddingRight": 0,
        "paddingBottom": 7,
        "paddingLeft": 0
    },
    "tabs-hd li": {
        "float": "left",
        "width": "49%",
        "textAlign": "center",
        "fontSize": 18,
        "borderRight": "1px solid #d5d5d5"
    },
    "tabs-hd li a": {
        "display": "block",
        "lineHeight": 30,
        "color": "#717171",
        "width": "80%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "tabs-hd li aselected": {
        "color": "#de3435",
        "position": "relative"
    },
    "tabs-hd li aselected:after": {
        "content": "''",
        "position": "absolute",
        "bottom": -7,
        "left": 0,
        "width": "100%",
        "height": 3,
        "background": "#df2d2d"
    },
    "tabs-hd li:last-child": {
        "borderRight": 0
    },
    "mp-more-ajax": {
        "border": "0 solid #ccc",
        "borderBottomWidth": 1
    },
    "mp-more-ajax a": {
        "color": "#d54544",
        "display": "block",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "textAlign": "center",
        "fontSize": 16
    },
    "mp-more-ajax a:after": {
        "content": "",
        "display": "inline-block",
        "border": "0 solid #e12e38",
        "borderWidth": "0 0 2px 2px",
        "width": 8,
        "height": 8,
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)",
        "marginLeft": 8,
        "position": "relative",
        "top": -4
    },
    "loadingmp-more-ajax a": {
        "display": "none"
    },
    "loadingmp-more-ajax:before": {
        "content": "",
        "display": "inline-block",
        "position": "relative",
        "left": "50%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "background": 0,
        "width": 3,
        "height": 3,
        "borderRadius": "100%",
        "boxShadow": "0 -10px 0 .9px #666, 10px 0 #999, 0 10px #999, -10px 0 #999, -7px -7px 0 .4px #999, 7px -7px 0 1.1px #666, 7px 7px #999, -7px 7px #999",
        "transform": "rotate(360deg)",
        "animation": "spin 1.5s linear infinite",
        "WebkitTransform": "rotate(360deg)",
        "WebkitAnimation": "spin 1.5s linear infinite"
    },
    "loadingmp-more-ajax:after": {
        "content": "正在努力加载...",
        "color": "#999",
        "display": "block",
        "textAlign": "center",
        "fontSize": 16,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "nonetmp-more-ajax:after": {
        "content": "数据加载失败，请检查网络连接！",
        "color": "#999",
        "display": "block",
        "textAlign": "center",
        "fontSize": 16
    },
    "initmp-more-ajax": {
        "height": 20,
        "paddingTop": 130,
        "paddingRight": 0,
        "paddingBottom": 130,
        "paddingLeft": 0
    },
    "mp-loading": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0,
        "textAlign": "center",
        "display": "none",
        "color": "#999"
    },
    "mp-nodata": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0,
        "textAlign": "center",
        "display": "none",
        "color": "#999"
    },
    "loading mp-loading": {
        "display": "block"
    },
    "loading movie-info": {
        "display": "none"
    },
    "loading movie-comments": {
        "display": "none"
    },
    "loading order-tips": {
        "display": "none"
    },
    "loading order-cont": {
        "display": "none"
    },
    "loading comment-detail": {
        "display": "none"
    },
    "loading re-list": {
        "display": "none"
    },
    "loading buy-doc": {
        "display": "none"
    },
    "loading time-line": {
        "display": "none"
    },
    "loading cinemas-list": {
        "display": "none"
    },
    "loading showtime-cinema-info": {
        "display": "none"
    },
    "loading showtime-movies": {
        "display": "none"
    },
    "loading showtime-mname": {
        "display": "none"
    },
    "loading showtime-list": {
        "display": "none"
    },
    "loading buy-time": {
        "display": "none"
    },
    "spin": {
        "content": "",
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 15,
        "marginBottom": 4,
        "marginLeft": 15,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "background": 0,
        "width": 3,
        "height": 3,
        "borderRadius": "100%",
        "boxShadow": "0 -10px 0 .9px #666, 10px 0 #999, 0 10px #999, -10px 0 #999, -7px -7px 0 .4px #999, 7px -7px 0 1.1px #666, 7px 7px #999, -7px 7px #999",
        "WebkitTransform": "rotate(360deg)",
        "WebkitAnimation": "spin 1.5s linear infinite",
        "transform": "rotate(360deg)",
        "animation": "spin 1.5s linear infinite"
    },
    "score": {
        "position": "relative",
        "marginLeft": 5
    },
    "score:before": {
        "content": "",
        "position": "absolute",
        "width": 85,
        "height": 17,
        "left": 0,
        "top": -2,
        "backgroundImage": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAA3NCSVQICAjb4U/gAAAAwFBMVEX////////39/fm5ubMzMz////MzMz////39/fW1tbMzMz////u7u7MzMz////W1tbMzMz////39/fu7u7W1tbMzMz////39/fm5ube3t7W1tb////39/fm5ubW1tbMzMz////39/fW1tb////39/fu7u7m5ubW1tbMzMz////39/fm5ubW1tbMzMz////39/fm5ubW1tb39/fu7u7m5ube3t7W1tbMzMzu7u7m5ube3t7MzMzm5ube3t7W1tbMzMwIhLnMAAAAQHRSTlMAERERESIiMzMzM0RERFVVVWZmZmZmd3d3d3eIiIiIiJmZmaqqqqqqqru7u7u7zMzMzN3d3d3d3e7u7u7/////fI2EKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxMy41LjMw+xWdhAAAAQ9JREFUKJF90n1fgyAQB3CvYpaUjWr2QLW1tcoyXVabGuD7f1cBWuO26P5Sv5/fASdB4NZeFPxT49U+eHHQqpfQq09KynPij0q5oJ7eJip84UhHhfCFbVR4wkc2qvUDhQfDs9vHbNl2Uc1NNr06Pti1OGqVLdmj0A/2Q0Z0j503A7/Wu6772Kxw2DiwrnJm14dT+QdXKev2DhfbXKXJz8HgZovzZP07yMMG5zx0Dk0+kZYTPM4lChcMz/oL6XuMNFJYcXak0Lp1gv7TuNOyqLseHOmr0SrljM0Nywm6fCslq3zGQoDwZKH9mbraNmXKqW0H9LqWBdJLzmPS7xNIPL9D0wDqTg5Ciu/Wxj3sX78BTyNQugMo+Y4AAAAASUVORK5CYII=\")",
        "backgroundSize": "17px 17px"
    },
    "score:after": {
        "content": "",
        "position": "absolute",
        "width": 0,
        "height": 17,
        "background": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAA3NCSVQICAjb4U/gAAABC1BMVEX/////////5cb/2Kv/vGr/tVr/slX/////tVr/slX/////9Of/wXr/tVr/slX/////5cb/slX/////wHP/tVr/////9+7/3bP/tVr/////9+7/9Of/16b/x4T/vGr/rlL/////6Mz/tVr/////79z/0Zv/t2T/tVr/rlL/////7df/4Lr/3bP/z5T/tVr/rlL/////9Of/6Mz/t2T/tVr/rlL/////+vT/9+7/7df/4Lr/0Zv/z5T/7df/6Mz/1J//yYn/vGr/tVr/slX/rlL/4Lr/3bP/0Zv/z5T/zIv/yYn/x4T/xHz/vGr/t2T/slX/xHz/w3b/wHP/vGr/t2T/tVr/slX/rlL/q0zqDZdaAAAAWXRSTlMAERERERERIiIiMzMzMzNERERVVVVmZmZmd3d3d3d3d4iIiJmZmZmZmaqqqqqqqqq7u7u7u7vMzMzMzMzM3d3d3d3d3d3u7u7u7u7u7u7u7v///////////3vjtXcAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAAAF3RFWHRDcmVhdGlvbiBUaW1lADIwMTMuNS4zMPsVnYQAAAExSURBVCiRfdJnW8MgEADg4EKjLRpFG2c0rqrVaOuoNY66Vx3Ngf//lxggeeT6NPKNvLnjOM5x7DVScv5Z23fjpBDHpKy5hXogJczTAixLKUSLFYYKgKQguKwQoMX6FnZsNFnoFzxlEOAaBY/OVNb2G7dpRUahU99cnp4Y1LjyI/XSmCSKhf5Qp2mOgbaSLDDJWO13PHXCZCdPqdBwui5DfT6Zsy3nhyo3tZNF28wPjxHPL0Y3ehSeT/y/56A1zF+ngWtdmt7YCnGI29m2g6HJca8FqvncQ1rCeoVjKxLpi4/eaUu36zNuvupWfAdIG6l276OA872uyhKi4fsQ8HRW5S4h7uxFmvrQ1mH5Hkc+0+kIW32DI3v2hpaCwKNZnYR6u+uoG5TZnSMuw7PVM4fZ9heSvG6qHGIXWgAAAABJRU5ErkJggg==\")",
        "backgroundSize": "17px 17px",
        "left": 0,
        "top": -2
    },
    "score-0": {
        "display": "none"
    },
    "score-1:after": {
        "width": 8
    },
    "score-2:after": {
        "width": 17
    },
    "score-3:after": {
        "width": 25
    },
    "score-4:after": {
        "width": 34
    },
    "score-5:after": {
        "width": 42
    },
    "score-6:after": {
        "width": 51
    },
    "score-7:after": {
        "width": 59
    },
    "score-8:after": {
        "width": 68
    },
    "score-9:after": {
        "width": 76
    },
    "score-10:after": {
        "width": 85
    },
    "time-line": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "height": 26,
        "width": "100%",
        "border": "0 solid #ccc",
        "borderWidth": "1px 0",
        "background": "#efefef",
        "position": "relative",
        "overflow": "auto",
        "WebkitOverflowScrolling": "touch"
    },
    "time-line>p": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "time-line a": {
        "float": "left",
        "width": 100,
        "textAlign": "center",
        "lineHeight": 26,
        "fontSize": 16,
        "color": "#666",
        "textDecoration": "none",
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "whiteSpace": "nowrap",
        "borderRadius": 13
    },
    "time-line aselected": {
        "backgroundImage": "linear-gradient(to bottom, #ef504d 0, #ea3e3a 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid: DXImageTransform.Microsoft.gradient(startColorstr='#ffef504d', endColorstr='#ffea3e3a', GradientType=0)",
        "color": "#fff"
    },
    "btn": {
        "backgroundColor": "#75c60d",
        "height": 37,
        "lineHeight": 37,
        "border": 0,
        "color": "#fff",
        "paddingTop": 0,
        "paddingRight": 23,
        "paddingBottom": 0,
        "paddingLeft": 23,
        "cursor": "pointer",
        "borderRadius": 4,
        "fontSize": 14,
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "btn-block": {
        "backgroundColor": "#75c60d",
        "height": 45,
        "lineHeight": 45,
        "border": 0,
        "color": "#fff",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "cursor": "pointer",
        "borderRadius": 4,
        "fontSize": 16,
        "display": "block",
        "verticalAlign": "middle",
        "textAlign": "center"
    },
    "btn:active": {
        "backgroundColor": "#619101"
    },
    "btn-block:active": {
        "backgroundColor": "#619101"
    },
    "buttonbtn-block": {
        "width": "100%"
    },
    "inputbtn-block": {
        "width": "100%"
    },
    "btn-weak": {
        "height": 37,
        "background": "#fff",
        "border": "1px solid #e0dbd7",
        "color": "#666"
    },
    "btn-weak:active": {
        "backgroundColor": "#ebebeb"
    },
    "btn-pay": {
        "backgroundColor": "#e54847"
    },
    "btn-pay:active": {
        "backgroundColor": "#e48a00"
    },
    "btn-disabled": {
        "background": "#999",
        "color": "#fff"
    },
    "btn-disabled:active": {
        "backgroundColor": "#999"
    },
    "btn-city": {
        "height": 37,
        "border": "1px solid #e0dbd7",
        "color": "#666",
        "background": "transparent",
        "position": "relative",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 13,
        "float": "right"
    },
    "btn-city:active": {
        "backgroundColor": "#FFF"
    },
    "btn-city:after": {
        "content": "",
        "height": 0,
        "width": 0,
        "border": "6px solid transparent",
        "borderTopWidth": 1,
        "borderTopColor": "#666",
        "top": 15,
        "right": 5,
        "position": "absolute"
    },
    "btn-top": {
        "height": 37,
        "background": "#fff",
        "border": "1px solid #e0dbd7",
        "color": "#666",
        "position": "relative",
        "paddingLeft": 34,
        "paddingRight": 13
    },
    "btn-top:before": {
        "content": "",
        "height": 0,
        "width": 0,
        "border": "8px solid #fff",
        "borderTopWidth": 0,
        "borderBottomColor": "#707070",
        "top": 10,
        "left": 12,
        "position": "absolute"
    },
    "btn-top:after": {
        "content": "",
        "width": 6,
        "height": 8,
        "background": "#707070",
        "position": "absolute",
        "left": 17,
        "top": 17
    },
    "btn-top:active": {
        "backgroundColor": "#FFF"
    },
    "btn-close": {
        "borderRadius": "50%",
        "display": "inline-block",
        "width": 16,
        "height": 16,
        "overflow": "hidden",
        "background": "#CCC",
        "textAlign": "center",
        "lineHeight": 16,
        "color": "#fff",
        "verticalAlign": "middle",
        "fontSize": 18,
        "fontFamily": "Arial",
        "cursor": "pointer"
    },
    "btn-trans": {
        "fontSize": 13,
        "paddingTop": 4,
        "paddingRight": 17,
        "paddingBottom": 4,
        "paddingLeft": 17,
        "backgroundColor": "transparent",
        "borderRadius": 4,
        "border": "1px solid #e54847",
        "color": "#e54847",
        "display": "inline-block",
        "verticalAlign": "top",
        "whiteSpace": "nowrap"
    },
    "btn-trans:active": {
        "backgroundColor": "#e54847",
        "color": "#FFF"
    },
    "btn-presales": {
        "border": "1px solid #159df1",
        "color": "#159df1"
    },
    "btn-presales:active": {
        "backgroundColor": "#159df1",
        "color": "#FFF"
    },
    "movie-img": {
        "display": "inline-block",
        "width": 106,
        "height": 145,
        "backgroundImage": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAACRCAMAAAAcqt1/AAAAElBMVEXa2trq6urk5OTh4eHd3d3X19c4xzArAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RDE5NEI3RDA3MjMxMUUzQUM1OTlDRTk1MEU4Q0M2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RDE5NEI3RTA3MjMxMUUzQUM1OTlDRTk1MEU4Q0M2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjREMTk0QjdCMDcyMzExRTNBQzU5OUNFOTUwRThDQzY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjREMTk0QjdDMDcyMzExRTNBQzU5OUNFOTUwRThDQzY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mND/BgAAAtRJREFUaN7t2dty6yAMBdCty/7/Xz4PQhh7Eptg1zNnRrykSVqWuQlBIfpWQVFFFVVUUUUVVVRRRRVVVFFFFVVUUUVFsSx/S5kDAEgCgLv9EWWOIHoh8IM2TRn2TNemsUnqCxTFn6T8BAIIe4o6bVJg/gxluC7EE5QROE69PUNOWZeUAQDtayeSbjGUd6kmiYh9nuxUEZnqwysqKhT5YoUUX13NjQsKUYeIiMiHKR+SKKPxNyhj7z8RETDDX06G9k1rPG5QrdaklHRTFRFVMwch+RATy+uUyh7TrNH6T4e3OT9tkeprdw98KvlQvkj1aTBPnTXrjMLvrTobrRNqW0c/tApLlP/Qqi1s2Qp1WKfmgI9TUOOTPXXSg98p2zYjEVEwivWZ3j6A9XBx3oMnFIdGGQnAHX3ZOukeYcPmBus71ScVRDS2JFFmRDSCPUjY2CxboLBVlFFX2VqpBKCyPcw2WjcoaAbupDx2DSYF2rbFcIHC9si2pxBDM1D+DOU55kllz+2p/vs3KJuj5Ablx3E478CcFzepmWlxi4q9fatmN9nHDoxVHeEEvrY1esaC3RI2URXjsK4s0otIBhZzC1E1k7RyXIy0Fqp6YJJQzJfCbYS9oDLcAiZBibUA3LYY9Xi/1IEYKRFz97afgG3ncPeeTWlkUUv7VfS89cpExJJSEZFMRSPS97RtLTkDud8NibZ/bGB+FTN2NY2hq6gBY7PopGm8DBBcRZ1cpDT+GmNHqcO1vwy5BekmuppyqrUMfTcoX7MYXpyJL6jt/HkCKThzTJ05iWzr9GMxTiSBk+er04aNv3LnfDUkgzEUR8eGA/nNU+P+JoEtojbGdif/22fhw60FScDdHSAPNwwP3VscvQ8n8EduY/jWbcybd0xv3py9eh/45i3nq3e3uaEPN9L4sxvpd+/Z638iRRVVVFFFFVVUUUUVVVRRRRVVVFH/EyWvFNV/K69wfv3bo9MAAAAASUVORK5CYII=')"
    },
    "movie-tag": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "fontSize": 11,
        "background": "#2895db",
        "borderRadius": 3,
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 4,
        "color": "#fff",
        "textAlign": "center",
        "verticalAlign": "top",
        "lineHeight": 17,
        "height": 14
    },
    "movie-tag-3d": {
        "background": "#49d95d"
    },
    "movie-tag-new": {
        "background": "#ff9400"
    },
    "msg-bg": {
        "background": "rgba(0, 0, 0, .5)",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "zIndex": 998
    },
    "msg-doc": {
        "position": "fixed",
        "width": 210,
        "top": -9999,
        "left": "50%",
        "marginLeft": -135,
        "background": "#fff",
        "paddingTop": 14,
        "paddingRight": 30,
        "paddingBottom": 14,
        "paddingLeft": 30,
        "zIndex": 999
    },
    "msg-doc btn": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": 45
    },
    "msg-user": {
        "position": "absolute",
        "zIndex": 999
    },
    "msg-hd": {
        "background": "#df2d2d",
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "fontSize": "120%",
        "color": "#fff",
        "position": "relative",
        "display": "none"
    },
    "msg-bd": {
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 0,
        "fontSize": 18,
        "marginBottom": 0.5,
        "lineHeight": 1.3
    },
    "msg-ft": {
        "textAlign": "center"
    },
    "msg-close": {
        "background": "#000",
        "width": 29,
        "height": 29,
        "overflow": "hidden",
        "color": "#fff",
        "fontSize": 30,
        "textAlign": "center",
        "lineHeight": 29,
        "position": "absolute",
        "right": -15,
        "top": -15,
        "border": "3px solid #fff",
        "borderRadius": "50%"
    },
    "msg-btn-ok": {
        "float": "right",
        "width": 130,
        "height": 45,
        "lineHeight": 45
    },
    "msg-btn-cancel": {
        "float": "left",
        "width": 70,
        "height": 43,
        "lineHeight": 45
    },
    "msg-alert msg-btn-ok": {
        "width": 210
    },
    "pop": {
        "position": "absolute",
        "top": "45%",
        "width": "100%",
        "textAlign": "center",
        "zIndex": 997,
        "display": "none!important"
    },
    "pop-bd": {
        "background": "rgba(0, 0, 0, .6)",
        "color": "#fff",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "display": "inline-block"
    },
    "crumbs": {
        "width": "100%",
        "height": 20,
        "lineHeight": 20,
        "overflow": "hidden",
        "textAlign": "center",
        "fontSize": 10,
        "color": "#999",
        "borderBottom": "1px solid #ccc"
    },
    "crumbs li": {
        "position": "relative",
        "float": "left",
        "width": "25%",
        "background": "#DDD"
    },
    "crumbs li:after": {
        "content": "''",
        "position": "absolute",
        "top": -2,
        "right": -5,
        "zIndex": 1,
        "width": 0,
        "height": 0,
        "lineHeight": 0,
        "fontSize": 0,
        "overflow": "hidden",
        "border": "4px dashed transparent",
        "borderWidth": "12px 3px",
        "borderLeft": "3px solid #F2F2F2",
        "borderLeftColor": "#DDD"
    },
    "crumbs li:before": {
        "content": "''",
        "position": "absolute",
        "top": -2,
        "right": -6,
        "zIndex": 1,
        "width": 0,
        "height": 0,
        "lineHeight": 0,
        "fontSize": 0,
        "overflow": "hidden",
        "border": "4px dashed transparent",
        "borderWidth": "12px 3px",
        "borderLeft": "3px solid #F2F2F2"
    },
    "crumbs li:last-child:after": {
        "display": "none"
    },
    "crumbs li:last-child:before": {
        "display": "none"
    },
    "crumbs selected": {
        "background": "#F79400!important",
        "color": "#FFF"
    },
    "crumbs selected:after": {
        "borderLeftColor": "#F79400"
    },
    "break-word": {
        "wordWrap": "break-word",
        "overflow": "hidden"
    },
    "thr-line": {
        "position": "relative",
        "width": 35,
        "height": 35,
        "background": "transparent",
        "float": "right",
        "textIndent": -999
    },
    "thr-line:active": {
        "background": "#cb2020"
    },
    "thr-line:before": {
        "borderTop": "2px solid #efefef",
        "content": "",
        "position": "absolute",
        "width": 19,
        "height": 10,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "borderBottom": "2px solid #efefef",
        "top": 10,
        "left": 7
    },
    "thr-line:after": {
        "display": "block",
        "content": "",
        "position": "absolute",
        "top": 16,
        "width": 19,
        "height": 2,
        "background": "#efefef",
        "left": 7
    },
    "home": {
        "height": 6,
        "width": 2,
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": -2,
        "marginLeft": 0,
        "borderBottom": 0,
        "borderRight": "7px solid #fff",
        "borderLeft": "7px solid #fff",
        "borderTop": "3px solid #fff",
        "position": "relative",
        "display": "inline-block"
    },
    "home::before": {
        "borderLeft": "12px solid transparent",
        "position": "absolute",
        "content": "",
        "top": -9,
        "right": -11,
        "width": 0,
        "height": 0,
        "borderRight": "12px solid transparent",
        "borderBottom": "7px solid #fff"
    },
    "avatar": {
        "borderRadius": "8px 8px 0 0",
        "background": "#FFF",
        "width": 20,
        "height": 8,
        "position": "relative",
        "display": "inline-block",
        "marginBottom": -3
    },
    "avatar:after": {
        "content": "",
        "position": "absolute",
        "borderRadius": "50%",
        "background": "#FFF",
        "top": -11,
        "left": 5,
        "width": 10,
        "height": 11
    },
    "meituan_check": {
        "height": 0,
        "overflow": "hidden"
    },
    "samsung hd top": {
        "background": "#4d68a6",
        "paddingTop": 9,
        "paddingRight": 10,
        "paddingBottom": 9,
        "paddingLeft": 7
    },
    "samsung hd navbar": {
        "background": "#4d68a6",
        "paddingTop": 9,
        "paddingRight": 10,
        "paddingBottom": 9,
        "paddingLeft": 7
    },
    "samsung hd navbar back:active": {
        "background": "#4d68a6"
    },
    "samsung hd top change-city:after": {
        "borderWidth": 7,
        "verticalAlign": -5
    },
    "samsung tabs-hd li aselected": {
        "color": "#4d68a6"
    },
    "samsung tabs-hd li aselected:after": {
        "background": "#4d68a6"
    },
    "samsung btn-trans": {
        "color": "#d04725",
        "border": "1px solid #d04725"
    },
    "samsung btn-presales": {
        "color": "#1061a2",
        "border": "1px solid #1061a2"
    },
    "samsung hd nav-dropdown li a": {
        "background": "#4d68a6"
    },
    "samsung mp-more-ajax a": {
        "color": "#4d68a6"
    },
    "samsung mp-more-ajax a:after": {
        "borderColor": "#4d68a6"
    },
    "samsung btn-pay": {
        "background": "#d04725"
    },
    "samsung time-line aselected": {
        "background": "#4d68a6"
    },
    "samsung stl-btn": {
        "background": "#4d68a6"
    },
    "samsung crumbs selected": {
        "background": "#d04725!important"
    },
    "samsung crumbs selected:after": {
        "borderLeftColor": "#d04725"
    },
    "samsung copyright a": {
        "color": "#4d68a6"
    },
    "samsung movie-comments h4": {
        "background": "#d04725"
    },
    "samsung home": {
        "display": "none"
    },
    "samsung hd top avatar": {
        "display": "none!important"
    },
    "samsung hd top my": {
        "float": "right",
        "lineHeight": 38,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 16
    },
    "samsung promo": {
        "color": "#ffe57f",
        "float": "right",
        "lineHeight": 38,
        "fontSize": 16
    },
    "samsung hd navbar back": {
        "position": "relative",
        "background": "#4d68a6"
    },
    "samsung hp movie-list info em": {
        "color": "#e36301"
    },
    "samsung headerhd back:after": {
        "content": "''",
        "position": "absolute",
        "top": 13,
        "left": 10,
        "width": 10,
        "height": 10,
        "border": "2px solid #FFF",
        "borderWidth": "0 0 2px 2px",
        "WebkitTransform": "rotate(45deg)",
        "MozTransform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "transform": "rotate(45deg)"
    },
    "samsung hd back:before": {
        "content": "''",
        "display": "block",
        "position": "absolute",
        "top": 18,
        "left": 10,
        "borderTop": "2px solid #fff",
        "height": 0,
        "width": 15
    },
    "samsung hd top h1": {
        "width": 32,
        "marginLeft": -1
    },
    "samsung hd top h1 a": {
        "position": "relative",
        "background": 0
    },
    "samsung hd navbar page-title": {
        "textAlign": "left"
    },
    "samsung hd top change-city:active": {
        "background": "#4d68a6"
    },
    "samsung hd top h1 a:active": {
        "backgroundColor": "#4d68a6"
    },
    "samsung hd top my:active": {
        "backgroundColor": "#4d68a6"
    },
    "samsung thr-line:active": {
        "background": "#4d68a6"
    },
    "hd top": {
        "display": "none",
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 7,
        "height": 38,
        "background": "#df2d2d",
        "overflow": "hidden"
    },
    "hd top h1": {
        "display": "none",
        "float": "left",
        "width": 104,
        "height": "100%",
        "textIndent": -999
    },
    "hd top h1 a": {
        "display": "block",
        "width": "100%",
        "height": "100%",
        "background": "url(\"data:image/png;base64,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\") no-repeat center center",
        "backgroundSize": "96px 27px",
        "borderRadius": 2
    },
    "hd top h1 a:active": {
        "backgroundColor": "#b11e1e"
    },
    "hd top change-city": {
        "float": "left",
        "marginTop": 8,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "color": "#FFF",
        "fontSize": 16,
        "lineHeight": 18,
        "borderRadius": 2
    },
    "hd top change-city:active": {
        "background": "#b11e1e"
    },
    "hd top change-city:after": {
        "content": "''",
        "display": "inline-block",
        "width": 0,
        "height": 0,
        "marginLeft": 4,
        "borderWidth": 5,
        "borderColor": "#fff transparent transparent",
        "borderStyle": "solid",
        "fontSize": 0,
        "verticalAlign": -2
    },
    "hd top my": {
        "float": "right",
        "paddingTop": 20,
        "paddingRight": 4,
        "paddingBottom": 0,
        "paddingLeft": 4,
        "fontSize": 12,
        "lineHeight": 14,
        "borderRadius": 2,
        "color": "#fff",
        "marginTop": 2
    },
    "hd top my:active": {
        "backgroundColor": "#b11e1e"
    },
    "hd top avatar": {
        "float": "right",
        "fontSize": 11,
        "top": 14,
        "left": 26,
        "borderRadius": ".7em .7em 0 0",
        "background": "#FFF",
        "width": 20,
        "height": 8,
        "position": "relative"
    },
    "hd top avatar:after": {
        "content": "",
        "position": "absolute",
        "borderRadius": "50%",
        "background": "#FFF",
        "top": -1,
        "left": 5,
        "width": 0.95,
        "height": 1
    },
    "hd sub": {
        "position": "relative",
        "height": 40,
        "overflow": "hidden",
        "borderBottom": "1px solid #ccc",
        "backgroundImage": "linear-gradient(to bottom, #f4f4f4 0, #e8e8e8 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid: DXImageTransform.Microsoft.gradient(startColorstr='#fff4f4f4', endColorstr='#ffe8e8e8', GradientType=0)"
    },
    "hd sub h2": {
        "fontSize": 18,
        "lineHeight": 40,
        "textAlign": "left",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
        "paddingLeft": 57
    },
    "hd sub h2 exceed": {
        "fontSize": 16,
        "marginLeft": 40
    },
    "hd sub border": {
        "height": 40,
        "width": 1,
        "backgroundColor": "#b8b8b8",
        "position": "absolute",
        "left": 40,
        "top": 0,
        "display": "inline-block"
    },
    "hd hd-360": {
        "position": "relative",
        "lineHeight": 40,
        "paddingLeft": 10,
        "overflow": "hidden",
        "borderBottom": "1px solid #ccc",
        "backgroundImage": "linear-gradient(to bottom, #f4f4f4 0, #e8e8e8 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid: DXImageTransform.Microsoft.gradient(startColorstr='#fff4f4f4', endColorstr='#ffe8e8e8', GradientType=0)"
    },
    "hd hd-360 change-city": {
        "paddingTop": 12,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 12,
        "lineHeight": 18
    },
    "hd hd-360 change-city:after": {
        "content": "''",
        "display": "inline-block",
        "width": 0,
        "height": 0,
        "marginLeft": 4,
        "borderWidth": 5,
        "borderColor": "#666 transparent transparent",
        "borderStyle": "solid",
        "fontSize": 0,
        "verticalAlign": -2
    },
    "hd nav-dropdown": {
        "position": "absolute",
        "top": 52,
        "right": 2,
        "width": 100,
        "opacity": 0.9,
        "zIndex": 99,
        "display": "none"
    },
    "hd nav-dropdown li a": {
        "position": "relative",
        "width": "100%",
        "textAlign": "center",
        "display": "inline-block",
        "color": "#FFF",
        "lineHeight": 44,
        "background": "#df2d2d",
        "borderBottom": "1px solid rgba(0, 0, 0, .2)"
    },
    "hd nav-dropdown li last": {
        "borderBottom": 0
    },
    "hd active": {
        "display": "block"
    },
    "hd navload": {
        "display": "block",
        "paddingTop": 9,
        "paddingRight": 12,
        "paddingBottom": 9,
        "paddingLeft": 12,
        "background": "#f7f7f7",
        "borderBottom": "1px solid #e5e5e5"
    },
    "hd navload img": {
        "float": "left",
        "width": 42,
        "height": 42
    },
    "hd navload load-title": {
        "float": "left",
        "marginLeft": 10
    },
    "hd navload load-title h3": {
        "fontSize": 17,
        "fontWeight": "700",
        "color": "#333"
    },
    "hd navload load-title div": {
        "fontSize": 12,
        "color": "#999"
    },
    "hd navload button": {
        "float": "right",
        "marginTop": 6,
        "paddingLeft": 0,
        "paddingRight": 0,
        "width": 64,
        "height": 28,
        "textAlign": "center",
        "fontSize": 12,
        "color": "#fff",
        "background": "#f34d41",
        "border": "1px solid #f34d41",
        "WebkitBorderRadius": 3,
        "borderRadius": 3
    },
    "hd navbar": {
        "position": "relative",
        "display": "-webkit-box",
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "height": 38,
        "background": "#df2d2d"
    },
    "hd navbar my": {
        "float": "right",
        "paddingTop": 20,
        "paddingRight": 4,
        "paddingBottom": 0,
        "paddingLeft": 4,
        "fontSize": 12,
        "lineHeight": 14,
        "borderRadius": 2,
        "color": "#fff"
    },
    "hd navbar my:active": {
        "backgroundColor": "#b11e1e"
    },
    "hd navbar page-title": {
        "WebkitBoxFlex": 1,
        "color": "#FFF",
        "fontSize": 18,
        "textAlign": "center",
        "lineHeight": 2,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "hd navbar back": {
        "width": 45,
        "display": "inline-block",
        "height": 35,
        "textIndent": -999
    },
    "hd navbar back:after": {
        "content": "''",
        "position": "absolute",
        "top": 16,
        "left": 12,
        "width": 13,
        "height": 13,
        "border": "2px solid #FFF",
        "borderWidth": "0 0 2px 2px",
        "WebkitTransform": "rotate(45deg)",
        "MozTransform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "transform": "rotate(45deg)"
    },
    "hd navbar backext": {
        "width": 72,
        "lineHeight": 40,
        "textIndent": 30,
        "fontSize": 16,
        "color": "#555"
    },
    "hd navbar back:active": {
        "backgroundColor": "#cb2020"
    },
    "touchembed-guide": {
        "height": 41,
        "paddingTop": 10.5,
        "paddingRight": 12,
        "paddingBottom": 10.5,
        "paddingLeft": 12,
        "backgroundColor": "#fff",
        "borderBottom": "1px solid #e5e5e5"
    },
    "touchembed-guide img": {
        "float": "left",
        "width": 41,
        "height": 41
    },
    "touchembed-guide guide-title": {
        "float": "left",
        "marginLeft": 6
    },
    "touchembed-guide guide-title h1": {
        "marginTop": 2,
        "color": "#333",
        "fontSize": 14,
        "fontWeight": "700"
    },
    "touchembed-guide guide-title h1 span": {
        "fontWeight": "400"
    },
    "touchembed-guide guide-title p": {
        "color": "#666",
        "marginTop": 2,
        "fontSize": 11
    },
    "touchembed-guide fake-btn": {
        "float": "right",
        "height": 28,
        "width": 64,
        "lineHeight": 28,
        "textAlign": "center",
        "marginTop": 6,
        "display": "block",
        "fontSize": 12,
        "color": "#f34d41",
        "border": "1px solid #f34d41",
        "borderRadius": 3
    },
    "copyright": {
        "color": "#9e9e9e",
        "position": "relative",
        "paddingTop": 9
    },
    "copyright span": {
        "background": "#ececec",
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "position": "relative",
        "top": -8
    },
    "copyright a": {
        "color": "#df3434",
        "textDecoration": "underline"
    },
    "ft": {
        "textAlign": "center",
        "background": "#ececec",
        "paddingBottom": 10
    },
    "ft foot-load": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15
    },
    "ft foot-load a": {
        "display": "block",
        "background": "#e54847",
        "height": 38,
        "lineHeight": 38,
        "color": "#fff",
        "fontSize": 16,
        "textAlign": "center",
        "WebkitBorderRadius": 3,
        "borderRadius": 3
    },
    "ft ft-nav": {
        "fontSize": "90%",
        "paddingTop": 0.8,
        "paddingRight": 0,
        "paddingBottom": 0.8,
        "paddingLeft": 0,
        "whiteSpace": "nowrap",
        "display": "-moz-box"
    },
    "ft ft-nav li": {
        "WebkitBoxFlex": 1,
        "MsFlex": 1,
        "MozBoxFlex": 1,
        "borderRight": "1px solid #ccc"
    },
    "ft ft-nav li a": {
        "color": "#666",
        "display": "block",
        "textDecoration": "none"
    },
    "ft ft-nav li:last-child": {
        "borderRight": 0
    },
    "ft short": {
        "color": "#d54544"
    },
    "ft short a": {
        "marginTop": 0,
        "marginRight": 9,
        "marginBottom": 0,
        "marginLeft": 9,
        "color": "#d54544"
    },
    "ft icp a": {
        "fontSize": 12,
        "color": "#9e9e9e"
    },
    "ft sankuai a": {
        "fontSize": 12,
        "color": "#9e9e9e"
    },
    "ft my-status": {
        "marginTop": -1,
        "paddingTop": 25,
        "paddingRight": 10,
        "paddingBottom": 25,
        "paddingLeft": 10,
        "textAlign": "left"
    },
    "ft my-status logout": {
        "color": "#d54544",
        "marginLeft": 20
    },
    "ft my-status btn-top": {
        "float": "right"
    },
    "ft my-status btn-weak": {
        "marginLeft": 10
    },
    "ft my-status strong": {
        "fontWeight": "400",
        "marginLeft": 17
    },
    "ft my-status btn": {
        "marginTop": -9
    },
    "ft footer-link": {
        "color": "#9e9e9e",
        "fontSize": 14
    },
    "ft footer-link a": {
        "color": "#d54544"
    },
    "top-btn": {
        "display": "none",
        "position": "fixed",
        "bottom": 130,
        "right": 15,
        "width": 48,
        "height": 48,
        "background": "rgba(0, 0, 0, .7)",
        "borderRadius": "100%",
        "zIndex": 1000
    },
    "top-btn react": {
        "background": "#FFF",
        "width": 20,
        "height": 3,
        "position": "absolute",
        "display": "inline-block",
        "left": 14,
        "top": 11
    },
    "top-btn icon-top": {
        "borderTop": "4px solid #fff"
    },
    "top-btn icon-top:before": {
        "content": "''",
        "width": 0,
        "height": 0,
        "border": "8px solid transparent",
        "borderTopWidth": 0,
        "borderBottomColor": "#fff",
        "position": "absolute",
        "left": 16,
        "top": 16,
        "marginLeft": 0
    },
    "top-btn icon-top:after": {
        "content": "''",
        "width": 6,
        "height": 12,
        "background": "#FFF",
        "position": "absolute",
        "left": 21,
        "top": 23
    },
    "pop ma-download-pop-content": {
        "height": 60,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0.44
    },
    "pop ma-download-pop-content pop-close": {
        "zoom": 0.65
    },
    "pop ma-download-pop-content ma-download-title": {
        "fontSize": 17,
        "color": "#fff",
        "lineHeight": 1.5,
        "position": "absolute",
        "top": 9,
        "left": 58
    },
    "pop ma-download-pop-content ma-download-subtitle": {
        "position": "absolute",
        "left": 58,
        "top": 32,
        "fontSize": 12,
        "color": "#898989"
    },
    "pop ma-download-pop-content ma-download-img": {
        "position": "absolute",
        "top": 11,
        "left": 17,
        "width": 37,
        "height": 37
    },
    "pop ma-download-pop-content ma-download-btn": {
        "position": "absolute",
        "right": 10,
        "top": 15,
        "width": 66,
        "height": 31,
        "lineHeight": 31,
        "backgroundColor": "#f4573c",
        "fontSize": 13,
        "color": "#fff",
        "borderRadius": 4
    },
    "pop ma-download-pop-content ma-download-btn:active": {
        "backgroundColor": "#FF8820"
    },
    "hp movie-list item": {
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 12,
        "paddingLeft": 10,
        "borderBottom": "1px solid #d6d6d6"
    },
    "hp movie-list img": {
        "float": "left"
    },
    "hp movie-list btn-trans": {
        "marginTop": 20
    },
    "hp movie-list btn-presales": {
        "marginTop": 20
    },
    "hp movie-list info": {
        "float": "right",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "right"
    },
    "hp movie-list info em": {
        "display": "block",
        "color": "#ff9a00",
        "fontSize": 20,
        "lineHeight": 24,
        "whiteSpace": "nowrap"
    },
    "hp movie-list info em:after": {
        "content": "'分'",
        "fontSize": 12,
        "paddingLeft": 2
    },
    "hp movie-list cont": {
        "marginTop": 0,
        "marginRight": 65,
        "marginBottom": 4,
        "marginLeft": 68
    },
    "hp movie-list cont p": {
        "color": "#666",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "hp movie-list h4": {
        "fontSize": 16,
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 7,
        "paddingLeft": 0,
        "color": "#000",
        "maxHeight": 45,
        "overflow": "hidden",
        "lineHeight": 1.2
    },
    "hp movie-list status": {
        "fontSize": 12,
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 3,
        "paddingLeft": 0
    },
    "hp title": {
        "height": 34,
        "lineHeight": 34,
        "background": "#eee",
        "textAlign": "center",
        "borderBottom": "1px solid #ccc"
    },
    "hp coming info": {
        "width": "auto"
    },
    "hp coming info em:after": {
        "content": "人想看"
    },
    "cinemas-list h3": {
        "lineHeight": 44,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "fontSize": 14,
        "borderBottom": "1px solid #d5d3d0",
        "background": "#fff",
        "color": "#7a7a7a",
        "fontWeight": "700",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
        "position": "relative",
        "cursor": "pointer"
    },
    "cinemas-list h3 em": {
        "fontStyle": "normal"
    },
    "cinemas-list h3:after": {
        "content": "''",
        "display": "inline-block",
        "width": 8,
        "height": 8,
        "border": "0 solid #ccc",
        "borderWidth": "0 0 3px 3px",
        "position": "absolute",
        "right": 15,
        "top": 13,
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)"
    },
    "cinemas-list ul": {
        "display": "none",
        "borderBottom": "1px solid #ccc"
    },
    "cinemas-list li": {
        "borderBottom": "1px solid #d9d9d9"
    },
    "cinemas-list li:last-child": {
        "border": 0
    },
    "cinemas-list li a": {
        "position": "relative",
        "display": "block",
        "paddingTop": 12,
        "paddingRight": 10,
        "paddingBottom": 12,
        "paddingLeft": 10
    },
    "cinemas-list li h4": {
        "fontSize": 16,
        "color": "#333",
        "marginBottom": 10
    },
    "cinemas-list li name": {
        "display": "inline-block",
        "maxWidth": 15,
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis"
    },
    "cinemas-list li p": {
        "color": "#999",
        "fontSize": 12,
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
        "paddingRight": 50
    },
    "cinemas-list li addr": {
        "paddingRight": 40
    },
    "cinemas-list li em": {
        "fontSize": 11,
        "background": "#d92d2d",
        "display": "inline-block",
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 6,
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "width": 1,
        "height": 1,
        "overflow": "hidden",
        "color": "#fff",
        "borderRadius": 2,
        "lineHeight": 11,
        "fontStyle": "normal",
        "textAlign": "center",
        "verticalAlign": "top"
    },
    "cinemas-list li sale": {
        "width": 2,
        "whiteSpace": "nowrap",
        "background": "#ff9a00",
        "borderColor": "#ff9a00"
    },
    "cinemas-list li distance": {
        "position": "absolute",
        "color": "#999",
        "bottom": 12,
        "right": 10,
        "fontSize": 12
    },
    "cinemas-list li imax": {
        "fontSize": 11,
        "background": "#04b1e8",
        "display": "inline-block",
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 6,
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "color": "#fff",
        "borderRadius": 2,
        "lineHeight": 13,
        "height": 13,
        "width": "auto",
        "fontStyle": "normal",
        "textAlign": "center",
        "verticalAlign": "top",
        "border": 0
    },
    "cinemas-list selected h3:after": {
        "borderColor": "#df2d2d",
        "WebkitTransform": "rotate(135deg)",
        "MozTransform": "rotate(135deg)",
        "MsTransform": "rotate(135deg)",
        "transform": "rotate(135deg)",
        "top": 18
    },
    "cinemas-list selected ul": {
        "display": "block"
    },
    "no-cinema": {
        "textAlign": "center",
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0
    },
    "banner": {
        "position": "relative",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "maxWidth": 540,
        "height": 75,
        "overflow": "hidden",
        "textAlign": "center"
    },
    "banner>ul": {
        "position": "relative",
        "width": "100%",
        "height": "100%",
        "whiteSpace": "nowrap",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)",
        "zIndex": 1
    },
    "banner>ul li": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%"
    },
    "banner>ol": {
        "position": "absolute",
        "bottom": 6,
        "left": "50%",
        "zIndex": 2,
        "marginLeft": -12,
        "lineHeight": 0,
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "banner>ol>li": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 3,
        "marginBottom": 0,
        "marginLeft": 3,
        "width": 6,
        "height": 6,
        "borderRadius": 6,
        "overflow": "hidden",
        "background": "#bcbcbc"
    },
    "banner>ol>liselected": {
        "background": "#5e5e5e"
    },
    "banner>close": {
        "position": "absolute",
        "zIndex": 99,
        "top": 20,
        "right": 4,
        "width": 22,
        "height": 22,
        "lineHeight": 24,
        "background": "#000",
        "borderRadius": 11,
        "color": "#fff",
        "opacity": 0.4,
        "fontSize": 18,
        "WebkitTransform": "translate3d(0, 0, 1px)",
        "transform": "translate3d(0, 0, 1px)"
    },
    "geopos": {
        "lineHeight": 36,
        "paddingLeft": 10,
        "fontSize": 14,
        "borderBottom": "1px solid #ccc"
    },
    "geopos i": {
        "float": "right",
        "width": 16,
        "height": 21,
        "position": "relative",
        "fontSize": 15,
        "marginTop": 8,
        "marginRight": 6,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "geopos i:before": {
        "content": "",
        "width": 0.8,
        "height": 0.8,
        "border": ".14em solid #b7b7b7",
        "borderTop": ".14em solid transparent",
        "borderRadius": "100%",
        "position": "absolute",
        "top": 0.2,
        "WebkitTransform": "rotate(45deg)"
    },
    "geopos i:after": {
        "content": "",
        "position": "absolute",
        "border": ".3em solid transparent",
        "borderLeft": ".4em solid #b7b7b7",
        "right": -0.12,
        "top": 0
    },
    "geopos crycle": {
        "WebkitAnimation": "crycle 2s linear infinite",
        "MozAnimation": "crycle 2s linear infinite",
        "animation": "crycle 2s linear infinite"
    },
    "guide-pic layer": {
        "width": "100%",
        "position": "fixed",
        "bottom": 0,
        "zIndex": 10,
        "display": "none"
    },
    "guide-pic layer close": {
        "width": 35,
        "height": 35,
        "position": "absolute",
        "top": 1,
        "right": 0
    },
    "guide-pic layer img": {
        "float": "right",
        "width": 434,
        "height": 125,
        "animation": "disappear 2s linear 5s forwards",
        "WebkitAnimation": "disappear 2s linear 5s forwards"
    },
    "guide-pic shot": {
        "position": "fixed",
        "width": 32,
        "height": 32,
        "bottom": 0,
        "right": 0,
        "zIndex": 2,
        "background": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABd0RVh0Q3JlYXRpb24gVGltZQAyMDEzLjExLjiSugqwAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAA4VJREFUaIHtmT9PI0cYh993ZgFh7ihSxGtjRRRBonEuzCJdn+QS3clfIA1FWGbt9XGUfAD6KwLG2bGRUJRQREph+Y+U5BsccA62lMoSSpOIa32ABDc7Kc6XAiVR7N01u2ifyi7mt++j2XdnZhcBwIA7DLntAoImFow6sWDUiQWjTiwYdWLBqBMLRp07L6h5GXx+fv7D1NTU+0qpKw8xBBEnTk9PawsLC8+91PNPeBKcnp7OIOKkH4Wk0+mHfuTcxJOglPK1pmnvvfvf6/W+b7VaPy0uLmYQEf9PBiLi9fX1m4ODgxMvtfwbngRvkk6nHx4eHn63sbHxm5+5XvDlIdPr9b69vLz8PZFIfLi/v//j7u7uR37k+oEvgrVa7efNzc1113UvKaWJfD5fEUI88CPbK74IZrPZD7a3t/+oVCpFpZRERGqa5jdhmElfBAkhBAAgn893qtUqd133ChEnOOdfl0qlrB/XGLk2P0KUUurdb875ieM4eSlln1J6z7KsnduUDGQnY9t2x3GcZ67rXlBKZwqFgritngxsq1YsFruO4zwd9OSEaZrObfRkoHtR27Y71WqVK6WuEFHjnG+P+3YNfLPNOT8pl8uWlPI1pXTGsqyxSo7lNFEsFrtCiGdSygtK6b1CoSAqlcrH47j22I5Ltm13hBBPlVIuIk6srq6KcfTkWM+Dtm139vb2uFLqGhEJ53wnaMmxH3jX1tZ+LZfLfNCTiaA3A14FCQAAIg6VM1hC1qWU54OedIJaJz0Japo2CwBAKR06Z/DgWVdKvUHESdM0A+lJCgDpUQevrKzcJ4Sora2t/W63ezHs+GazeTY3N3fIGHuCiJphGI+SyeRRq9V6NWpNN0EIwSfsUqmUtSxrh1I6I6XsCyE2bNvu+JHtaQb9otVqvUomk8eMsc8opfcNw3icyWSO6vX6mdfsUAgCvJXUdf3l8vLyE0LIJGMsl0qlXjQaDU+SoREE+LsnjxhjOUSkjLHPvfZkqAQBAOr1+lkqlXqxtLT0iFKaYIx9qut6u9lsjjSToRMEAGg0Gme6rh8zxj4Z9OQXmUzmeJSeDKUgwNvbVdf1tmEYjwkhU4yx3Pz8/MtarfbnMDmhWCb+CyHEA9M0HUTU+v1+Z3Z29qthxvv64jcIOOcnhJBCLpf7st1u/zLs+NDPoFfu/OezWDDqxIJRJxaMOrFg1IkFo85fGpVIXalKwvMAAAAASUVORK5CYII=\") no-repeat",
        "backgroundSize": "32px 32px"
    },
    "movie-intro": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "minHeight": 145,
        "overflow": "hidden",
        "position": "relative",
        "borderBottom": "1px solid #CCC"
    },
    "movie-intro mp-loading": {
        "marginLeft": -125,
        "paddingTop": 60
    },
    "movie-intro mj-cont": {
        "overflow": "hidden",
        "marginBottom": 15
    },
    "movie-intro movie-img": {
        "float": "left"
    },
    "movie-intro movie-img>img": {
        "width": 106,
        "height": 145
    },
    "movie-intro h3": {
        "fontSize": 16,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "movie-intro movie-hot": {
        "fontSize": 12,
        "color": "#666"
    },
    "movie-intro movie-hot strong": {
        "fontSize": 18,
        "color": "#333",
        "marginBottom": 5,
        "display": "inline-block",
        "fontWeight": "400"
    },
    "movie-intro movie-hot strong:after": {
        "fontSize": 12,
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 4
    },
    "movie-intro movie-hot strongrate:after": {
        "content": "人想看"
    },
    "movie-intro movie-hot movie-tag": {
        "marginTop": 1
    },
    "movie-intro movie-text": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "float": "left",
        "marginLeft": 15
    },
    "movie-intro movie-text p": {
        "marginTop": 10,
        "fontSize": 14,
        "color": "#666"
    },
    "movie-intro dl": {
        "marginTop": -3,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "fontSize": 14,
        "lineHeight": 1.3
    },
    "movie-intro dt": {
        "float": "left"
    },
    "movie-intro dt:after": {
        "content": "："
    },
    "movie-intro score": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingLeft": 95,
        "fontSize": 18,
        "color": "#f7920e",
        "lineHeight": 1
    },
    "movie-intro score:after": {
        "top": 2
    },
    "movie-intro score:before": {
        "top": 2
    },
    "movie-intro cat": {
        "marginBottom": 10,
        "height": 21,
        "lineHeight": 21,
        "fontSize": 14
    },
    "movie-intro cat span": {
        "display": "inline-block",
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "lineHeight": 21,
        "border": "1px solid #c3c3c3",
        "borderRadius": 2,
        "marginRight": 8
    },
    "movie-tab": {
        "position": "relative",
        "background": "#fff"
    },
    "movie-tab h3": {
        "lineHeight": 36,
        "textAlign": "left",
        "paddingLeft": 15,
        "fontWeight": "700",
        "fontSize": 16
    },
    "movie-tab h3selected": {
        "background": "#fff",
        "borderWidth": 0,
        "borderTop": "2px solid #df3434",
        "top": -38,
        "color": "#df3434",
        "zIndex": 2,
        "height": 38
    },
    "movie-comments-area h3": {
        "right": 0
    },
    "movie-comments-area no-comments": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "movie-info": {
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 1,
        "paddingLeft": 0,
        "fontSize": 14,
        "color": "#666",
        "lineHeight": 1.5
    },
    "movie-info dl": {
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "marginBottom": 0,
        "borderBottom": "1px solid #CCC"
    },
    "movie-info dl actor-name": {
        "height": 40,
        "overflow": "hidden"
    },
    "movie-info dl arrow": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": 20,
        "position": "relative"
    },
    "movie-info dl arrow:after": {
        "content": "''",
        "position": "absolute",
        "right": 15,
        "top": 4,
        "width": 6,
        "height": 6,
        "border": "1px solid #676767",
        "borderWidth": "0 0 1px 1px",
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)"
    },
    "movie-info dl fold": {
        "height": "auto"
    },
    "movie-info dl shuffle:after": {
        "top": 4,
        "WebkitTransform": "rotate(135deg)",
        "MozTransform": "rotate(135deg)",
        "MsTransform": "rotate(135deg)",
        "transform": "rotate(135deg)"
    },
    "movie-info>movie-dra": {
        "borderBottom": "1px solid #CCC",
        "borderWidth": "1px 0",
        "backgroundColor": "#FFF",
        "position": "relative"
    },
    "movie-info>movie-dra dra-content": {
        "marginTop": 13,
        "marginRight": 15,
        "marginBottom": 16,
        "marginLeft": 15,
        "height": 85,
        "overflow": "hidden"
    },
    "movie-info>movie-dra dra-content:after": {
        "content": "''",
        "position": "absolute",
        "bottom": 10,
        "right": 24,
        "width": 6,
        "height": 6,
        "border": "1px solid #676767",
        "borderWidth": "0 0 1px 1px",
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)"
    },
    "movie-info>movie-dra dra-content p": {
        "marginBottom": 4
    },
    "movie-info>movie-dra shuffle": {
        "height": "auto"
    },
    "movie-info>movie-dra shuffle:after": {
        "bottom": 8,
        "WebkitTransform": "rotate(135deg)",
        "MozTransform": "rotate(135deg)",
        "MsTransform": "rotate(135deg)",
        "transform": "rotate(135deg)"
    },
    "movie-info>movie-dra arrow-hide": {
        "marginTop": 13,
        "marginRight": 10,
        "marginBottom": 13,
        "marginLeft": 10
    },
    "movie-info>movie-dra arrow-hide:after": {
        "display": "none"
    },
    "movie-info dt": {
        "float": "left"
    },
    "movie-info dt:after": {
        "content": "："
    },
    "movie-info h4": {
        "fontSize": 18,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderTop": "1px solid #ccc"
    },
    "movie-comments": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 14
    },
    "movie-comments h4": {
        "fontSize": 12,
        "lineHeight": 25,
        "paddingLeft": 14,
        "background": "#ec4340",
        "color": "#fff",
        "position": "relative",
        "marginLeft": 15,
        "paddingTop": 2,
        "paddingRight": 14,
        "paddingBottom": 2,
        "borderRadius": 2,
        "display": "inline-block"
    },
    "movie-comments n-comment": {
        "backgroundColor": "#75c60d"
    },
    "movie-comments li:last-child": {
        "borderBottom": 0
    },
    "movie-comments mp-more-ajax": {
        "borderTopWidth": 1
    },
    "showtime-cinema-info": {
        "background": "#FFF",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "showtime-cinema-info a": {
        "color": "#df3434",
        "textDecoration": "underline"
    },
    "showtime-cinema-info opt": {
        "float": "right"
    },
    "showtime-cinema-info opt-item": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 50,
        "marginRight": -10
    },
    "showtime-cinema-info i[class^=flg-]": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "backgroundColor": "#f0f0f0",
        "textAlign": "center",
        "fontStyle": "normal",
        "width": 18,
        "height": 18,
        "lineHeight": 18,
        "borderRadius": "50%",
        "color": "#fff"
    },
    "showtime-cinema-info iflg-info": {
        "background": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAA3NCSVQICAjb4U/gAAAAMFBMVEX/////qyr/qyr/qyr/qyr/qyr/qyr/qyr/qyr/qyr/qyr/qyr/////683/3qv/qyq6NafsAAAAEHRSTlMAESJVZneImbvM3e7/////P1MZwQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAEOSURBVDiNfZQ7EgFBEIbbK5BJSIkkEpFEwA2sMziAKheQS7jBpjJVHGAusMoF3EHVUlijtDWz1ux2tz/Z2v+rmp7pF0CiQm+h9HpSg5zqPhpF46zfUJhIz1y/kvox8X5+0UdHUSsFfcxo9/XLmNMwAaM8uFi/lPcRuwZ0KNga4FMQmTdQH9HjT7JnzTlwi7OqOKBrNsQrCIITHgOjvQ1S/Xye8f8hA1bQ/AFXIQx4cIYpD66w5MEdNnzwByj+uhq4530kA8X72ganetjr0uB394EuuMopafIgdNPuamULRYFnS0uCx6U1zUCue/vXPmLDiS0qN7U4BuLgyKMmDqc8zuICAGinJLsy5CVD19IbCm5h7EOp8SEAAAAASUVORK5CYII=') no-repeat",
        "backgroundSize": "100%"
    },
    "stci-score": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "height": 15
    },
    "showtime-callboard p": {
        "fontSize": 13,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "background": "#fff3cb",
        "color": "#60543c",
        "borderBottom": "1px solid #efd9a7",
        "maxHeight": 50,
        "overflow": "hidden",
        "wordWrap": "break-word"
    },
    "showtime-movies": {
        "height": 124,
        "position": "relative",
        "overflow": "auto",
        "WebkitOverflowScrolling": "touch",
        "background": "#5b5b5b"
    },
    "showtime-movies li": {
        "position": "relative",
        "zIndex": 1,
        "float": "left"
    },
    "showtime-movies a": {
        "display": "inline-block",
        "width": 75,
        "height": 104,
        "border": "2px solid #5b5b5b",
        "marginTop": 8,
        "marginRight": 2,
        "marginBottom": 8,
        "marginLeft": 2,
        "opacity": 0.5
    },
    "showtime-movies aselected": {
        "position": "relative",
        "opacity": 1,
        "borderColor": "#fff"
    },
    "showtime-movies aselected:after": {
        "content": "''",
        "position": "absolute",
        "width": 0,
        "height": 0,
        "lineHeight": 0,
        "fontSize": 0,
        "border": "6px dashed transparent",
        "borderBottom": "6px solid #fff",
        "bottom": -10,
        "left": "50%",
        "marginLeft": -6
    },
    "showtime-movies sale:before": {
        "content": "''",
        "position": "absolute",
        "zIndex": 2,
        "top": 0,
        "right": 0,
        "width": 38,
        "height": 32,
        "background": "url('data:image/png;base64,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') no-repeat",
        "backgroundSize": "100% 100%"
    },
    "showtime-mname a": {
        "display": "block",
        "lineHeight": 45,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "fontSize": 16,
        "color": "#333",
        "position": "relative"
    },
    "showtime-mname sc": {
        "marginLeft": 7,
        "color": "#F07C0A",
        "fontSize": 12
    },
    "showtime-mname sc strong": {
        "fontSize": 16
    },
    "showtime-mname movie-tag": {
        "verticalAlign": 2
    },
    "showtime time-line a": {
        "fontSize": 14
    },
    "showtime time-line p": {
        "paddingTop": 10
    },
    "stl-no": {
        "lineHeight": 150,
        "textAlign": "center"
    },
    "showtime-list table": {
        "width": "100%",
        "background": "#fff"
    },
    "showtime-list td": {
        "height": 63,
        "textAlign": "center",
        "verticalAlign": "middle",
        "borderBottom": "1px solid #dbdbdb"
    },
    "tdstl-time": {
        "color": "#df2d2d",
        "fontSize": 20,
        "lineHeight": 22,
        "background": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAABiCAMAAABEd1I2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyRkNCQkE4NzEzN0MxMUUzODM4MENCMTU3MkZFNzhCNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyRkNCQkE4ODEzN0MxMUUzODM4MENCMTU3MkZFNzhCNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJGQ0JCQTg1MTM3QzExRTM4MzgwQ0IxNTcyRkU3OEI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJGQ0JCQTg2MTM3QzExRTM4MzgwQ0IxNTcyRkU3OEI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cXb+2QAAAHhQTFRF////2dnZ/v7+2tra3Nzc5ubm29vb2NjY6enp9vb24+Pj39/f+/v7+Pj4+fn57e3t6+vr7u7u9fX14ODg4eHh+vr6/f398PDw8vLy3t7e3d3d8/Pz6Ojo5eXl7Ozs6urq/Pz89PT08fHx5+fn9/f34uLi5OTk7+/vDsJW4wAAAPtJREFUeNqk0tl2gyAQBmBm0IBxiXHXxCVr3/8N6/xwemh7elUv/A4IwixK/Xq4A9sGsgy0LSgKkOcgeYIqAZcLGAbQ9+B8BqcTWEqwruB6BXEM3jM4HkHzAnUD0hRMI4gicDiEaA2IfsLfkEm/0iBYGX0tkRHLJL4pIxu4ogeuYhYJi8Y9PV1Ee5RsSS5baJ3vmxqyuA4hxidFmfwqNlZotUYCLUmwvEWEnC303t+dnI5jcUHW5o9Q/o/Pks+ZT+Q0gTENc13XYR18VeY5rNjDYV0ZV4SvyjIsuC9//wHud9cog0SrbjfXPZXrpSTsLNdn7JuP2bfmpwADAM4ZCi4XnwEpAAAAAElFTkSuQmCC') right center no-repeat",
        "backgroundSize": "3px 49px"
    },
    "tdstl-time stl-time-wrap": {
        "position": "relative"
    },
    "tdstl-time em": {
        "display": "block",
        "fontSize": 12,
        "color": "#9a9a9a",
        "fontStyle": "normal"
    },
    "downloadBanner": {
        "position": "relative",
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "height": 36,
        "lineHeight": 36,
        "color": "#EFA44C",
        "backgroundColor": "#fdf4d9",
        "fontSize": 13,
        "borderTop": "1px solid #ccc"
    },
    "downloadBanner:after": {
        "content": "''",
        "display": "inline-block",
        "width": 8,
        "height": 8,
        "border": "0 solid #f2b76e",
        "borderWidth": "0 0 3px 3px",
        "position": "absolute",
        "right": 15,
        "top": 13,
        "WebkitTransform": "rotate(-135deg)",
        "MozTransform": "rotate(-135deg)",
        "MsTransform": "rotate(-135deg)",
        "transform": "rotate(-135deg)"
    },
    "stl-imr": {
        "width": 24,
        "height": 24,
        "position": "absolute",
        "left": -5,
        "top": -8,
        "color": "#f0f0f0",
        "fontSize": 10,
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)"
    },
    "stl-imr:before": {
        "content": "",
        "position": "absolute",
        "left": 2,
        "top": 2,
        "zIndex": -1,
        "fontSize": 0,
        "borderWidth": 14,
        "borderColor": "#666 transparent transparent #666",
        "borderStyle": "solid dashed dashed solid",
        "width": 0,
        "height": 0,
        "WebkitTransform": "rotate(45deg)",
        "MozTransform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "transform": "rotate(45deg)"
    },
    "stl-price": {
        "lineHeight": 22,
        "color": "#df2d2d",
        "fontSize": 20,
        "width": "18%"
    },
    "stl-price del": {
        "display": "block",
        "fontSize": 12,
        "color": "#9a9a9a",
        "fontStyle": "normal",
        "textDecoration": "line-through"
    },
    "stl-price del i": {
        "textDecoration": "line-through"
    },
    "stl-type": {
        "width": "18%",
        "fontSize": 16,
        "color": "#999"
    },
    "stl-room": {
        "width": "18%",
        "fontSize": 16,
        "color": "#999"
    },
    "stl-info": {
        "width": "36%",
        "fontSize": 16,
        "color": "#999"
    },
    "stl-info div": {
        "maxWidth": 180,
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
        "fontSize": 14
    },
    "stl-btn": {
        "fontSize": 13,
        "background": "#e64847",
        "paddingTop": 8,
        "paddingRight": 10,
        "paddingBottom": 8,
        "paddingLeft": 10,
        "borderRadius": 4,
        "color": "#fff",
        "whiteSpace": "nowrap"
    },
    "stl-btn:active": {
        "backgroundColor": "#b61f1b"
    },
    "stl-btnsale": {
        "background": "#ff9a00"
    },
    "stl-btnsale:active": {
        "backgroundColor": "#e48a00"
    },
    "emstl-btn": {
        "background": "#999",
        "fontStyle": "normal",
        "cursor": "pointer"
    },
    "loading-part mp-loading": {
        "display": "block"
    },
    "loading-part showtime-mname": {
        "display": "none"
    },
    "loading-part time-line": {
        "display": "none"
    },
    "loading-part showtime-list": {
        "display": "none"
    },
    "no-data mp-nodata": {
        "display": "block"
    },
    "no-data showtime-movies": {
        "display": "none"
    },
    "no-data showtime-mname": {
        "display": "none"
    },
    "no-data time-line": {
        "display": "none"
    },
    "no-data showtime-list": {
        "display": "none"
    },
    "stl-tr td": {
        "width": "25%"
    },
    "box-tip-about": {
        "display": "none",
        "width": 280,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "backgroundColor": "#fff",
        "borderRadius": 3,
        "wordWrap": "break-word",
        "position": "relative"
    },
    "box-tip-about h3": {
        "color": "#d54544",
        "fontSize": 16,
        "lineHeight": 45,
        "textAlign": "center",
        "borderBottom": "1px solid #d43e37"
    },
    "box-tip-about li": {
        "borderTop": "1px solid #dbdbdb",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "display": "box",
        "WebkitBoxAlign": "center",
        "MozBoxAlign": "center",
        "MsBoxAlign": "center",
        "OBoxAlign": "center",
        "boxAlign": "center"
    },
    "box-tip-about li:first-child": {
        "borderTop": "0 none"
    },
    "box-tip-about i": {
        "display": "block",
        "marginRight": 15
    },
    "box-tip-about span": {
        "display": "block",
        "WebkitBoxFlex": 1,
        "MozBoxFlex": 1,
        "MsBoxFlex": 1,
        "OBoxFlex": 1,
        "boxFlex": 1
    },
    "box-tip-about btn-close": {
        "border": "1px solid #fff",
        "float": "right",
        "width": 23,
        "height": 23,
        "lineHeight": 23,
        "backgroundColor": "#77acbc",
        "fontSize": 14,
        "marginTop": -11,
        "marginRight": -11,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "[class^=indi-]": {
        "display": "inline-block",
        "width": 30,
        "height": 30,
        "background": "url('data:image/png;base64,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') no-repeat 0 30px",
        "backgroundSize": "30px auto"
    },
    "[class*=\" indi-\"]": {
        "display": "inline-block",
        "width": 30,
        "height": 30,
        "background": "url('data:image/png;base64,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') no-repeat 0 30px",
        "backgroundSize": "30px auto"
    },
    "indi-restarea": {
        "backgroundPosition": "0 0"
    },
    "indi-10": {
        "backgroundPosition": "0 0"
    },
    "indi-buy": {
        "backgroundPosition": "0 -30px"
    },
    "indi-1": {
        "backgroundPosition": "0 -30px"
    },
    "indi-glasses": {
        "backgroundPosition": "0 -60px"
    },
    "indi-4": {
        "backgroundPosition": "0 -60px"
    },
    "indi-parkinglot": {
        "backgroundPosition": "0 -90px"
    },
    "indi-5": {
        "backgroundPosition": "0 -90px"
    },
    "indi-children": {
        "backgroundPosition": "0 -120px"
    },
    "indi-7": {
        "backgroundPosition": "0 -120px"
    },
    "indi-wifi": {
        "backgroundPosition": "0 -150px"
    },
    "indi-9": {
        "backgroundPosition": "0 -150px"
    },
    "indi-lover": {
        "backgroundPosition": "0 -180px"
    },
    "indi-6": {
        "backgroundPosition": "0 -180px"
    },
    "indi-imax": {
        "backgroundPosition": "0 -210px"
    },
    "indi-3": {
        "backgroundPosition": "0 -210px"
    },
    "indi-card": {
        "backgroundPosition": "0 -240px"
    },
    "indi-8": {
        "backgroundPosition": "0 -240px"
    },
    "indi-refund": {
        "backgroundPosition": "0 -270px"
    },
    "indi-2": {
        "backgroundPosition": "0 -270px"
    },
    "showmovie btn": {
        "float": "right",
        "width": 45,
        "height": 24,
        "lineHeight": 24,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "fontSize": 12,
        "textAlign": "center"
    },
    "comment": {
        "fontSize": 14
    },
    "comment a": {
        "display": "block",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "movie-comments a": {
        "display": "block",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "comment li": {
        "borderBottom": "1px solid #ccc"
    },
    "movie-comments li": {
        "borderBottom": "1px solid #ccc"
    },
    "comment p": {
        "lineHeight": 1.4,
        "color": "#666",
        "marginBottom": 5,
        "wordWrap": "break-word"
    },
    "movie-comments p": {
        "lineHeight": 1.4,
        "color": "#666",
        "marginBottom": 5,
        "wordWrap": "break-word"
    },
    "comment h5": {
        "marginBottom": 5,
        "color": "#333",
        "fontSize": 16
    },
    "movie-comments h5": {
        "marginBottom": 5,
        "color": "#333",
        "fontSize": 16
    },
    "comment vip-tag": {
        "display": "inline-block",
        "color": "#fff",
        "fontSize": 10,
        "paddingTop": 0,
        "paddingRight": 3,
        "paddingBottom": 0,
        "paddingLeft": 3,
        "marginLeft": 10,
        "verticalAlign": "middle",
        "top": -2,
        "position": "relative",
        "backgroundColor": "#e54847"
    },
    "movie-comments vip-tag": {
        "display": "inline-block",
        "color": "#fff",
        "fontSize": 10,
        "paddingTop": 0,
        "paddingRight": 3,
        "paddingBottom": 0,
        "paddingLeft": 3,
        "marginLeft": 10,
        "verticalAlign": "middle",
        "top": -2,
        "position": "relative",
        "backgroundColor": "#e54847"
    },
    "comment vip-tag i": {
        "width": 10,
        "height": 10,
        "display": "inline-block",
        "verticalAlign": "middle",
        "background": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5YjJkMTk2Zi0zYTUwLTQ4ZGQtOTQ3ZC00ODZmNTMxNGZjODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjRDMUQzRkVENzAwMTFFNEJFNTdERERERjM2Q0M0MUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjRDMUQzRkRENzAwMTFFNEJFNTdERERERjM2Q0M0MUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MTdjMGViYS0wMTk2LTQ3MDEtYmY3YS01ZDNjOWQxZGU1NjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OWIyZDE5NmYtM2E1MC00OGRkLTk0N2QtNDg2ZjUzMTRmYzgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FEh2MAAAAP5JREFUeNpi/P//PwMlgAWI5YF4LZp4AhBfQRNjA+IdQMyHJJbNAHQBMxB/+Y8KwkEuQ8PpaGqOATEjE9CUv0B8Hs02JSwuLUMTKwXi/0xQzlk0SWU0fiSaoRuA+CiYBXVeHJrzDiA5nQmIryPJ/QZiDZg8TJEmmgGPkAwIRZObjhw2yLZ8RlL0F4jZQYEExBeQxEFqJJANgIXBP7SAZIL62RuI9ZHEe4H4BUroIJnWj+ZUbyA+gcR/AcQ86NGLzIlGM2AjGj8DS9pAMUDjP25wA4hZCBkACshPOAwIxKYZ3QAGaPyjgyO4NIMwC1qK2wrEPFiSLE7ASGl2BggwALMYBYz3MLhQAAAAAElFTkSuQmCC\")",
        "backgroundSize": "contain"
    },
    "movie-comments vip-tag i": {
        "width": 10,
        "height": 10,
        "display": "inline-block",
        "verticalAlign": "middle",
        "background": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5YjJkMTk2Zi0zYTUwLTQ4ZGQtOTQ3ZC00ODZmNTMxNGZjODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjRDMUQzRkVENzAwMTFFNEJFNTdERERERjM2Q0M0MUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjRDMUQzRkRENzAwMTFFNEJFNTdERERERjM2Q0M0MUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MTdjMGViYS0wMTk2LTQ3MDEtYmY3YS01ZDNjOWQxZGU1NjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OWIyZDE5NmYtM2E1MC00OGRkLTk0N2QtNDg2ZjUzMTRmYzgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FEh2MAAAAP5JREFUeNpi/P//PwMlgAWI5YF4LZp4AhBfQRNjA+IdQMyHJJbNAHQBMxB/+Y8KwkEuQ8PpaGqOATEjE9CUv0B8Hs02JSwuLUMTKwXi/0xQzlk0SWU0fiSaoRuA+CiYBXVeHJrzDiA5nQmIryPJ/QZiDZg8TJEmmgGPkAwIRZObjhw2yLZ8RlL0F4jZQYEExBeQxEFqJJANgIXBP7SAZIL62RuI9ZHEe4H4BUroIJnWj+ZUbyA+gcR/AcQ86NGLzIlGM2AjGj8DS9pAMUDjP25wA4hZCBkACshPOAwIxKYZ3QAGaPyjgyO4NIMwC1qK2wrEPFiSLE7ASGl2BggwALMYBYz3MLhQAAAAAElFTkSuQmCC\")",
        "backgroundSize": "contain"
    },
    "comment-detail": {
        "paddingTop": 15,
        "paddingRight": 10,
        "paddingBottom": 15,
        "paddingLeft": 10,
        "background": "#fff"
    },
    "comment-time": {
        "fontStyle": "normal",
        "color": "#999",
        "fontSize": 13
    },
    "comment-reply": {
        "color": "#999",
        "float": "right",
        "marginTop": 3,
        "fontSize": 13,
        "backgroundSize": "15px auto",
        "paddingLeft": 20
    },
    "re-list": {
        "position": "relative",
        "borderTop": "1px solid #ccc"
    },
    "re-list:before": {
        "content": "",
        "position": "absolute",
        "width": 10,
        "height": 10,
        "border": "0 solid #c7c7c7",
        "borderWidth": "1px 1px 0 0",
        "top": -6,
        "right": 30,
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)",
        "background": "#f8f8f8"
    },
    "re-list:after": {
        "content": "",
        "position": "absolute",
        "width": 7,
        "height": 7,
        "top": -5,
        "right": 31,
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)",
        "background": "#f8f8f8"
    },
    "re-list li": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderBottom": "1px solid #e2e2e2"
    },
    "comment movie": {
        "position": "relative",
        "lineHeight": 34
    },
    "comment movie:after": {
        "content": "",
        "display": "inline-block",
        "border": "0 solid #bebebe",
        "borderWidth": "0 0 2px 2px",
        "marginTop": -5,
        "width": 8,
        "height": 8,
        "WebkitTransform": "rotate(-135deg)",
        "MozTransform": "rotate(-135deg)",
        "MsTransform": "rotate(-135deg)",
        "transform": "rotate(-135deg)",
        "position": "absolute",
        "right": 10,
        "top": "50%"
    },
    "comment movie h3": {
        "fontSize": 14,
        "color": "#000"
    },
    "comment movie img": {
        "float": "left",
        "marginRight": 14
    },
    "comment movie score": {
        "marginLeft": 0
    },
    "comment movie strong": {
        "marginLeft": 99,
        "fontSize": 20,
        "fontWeight": "400",
        "color": "#ff9a00"
    },
    "comment movie strong:after": {
        "content": "'分'",
        "fontSize": 12,
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 4
    },
    "orders-nav": {
        "height": 45
    },
    "orders-nav li": {
        "width": "24%"
    },
    "orders-list ul": {
        "background": "#fff",
        "minHeight": 280,
        "borderBottom": "1px solid #ccc"
    },
    "orders-list li": {
        "position": "relative",
        "borderBottom": "1px solid #e6e5e3",
        "cursor": "pointer"
    },
    "orders-list li:last-child": {
        "marginBottom": -1
    },
    "orders-list li od-list": {
        "display": "block",
        "paddingTop": 15,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10
    },
    "orders-list li p": {
        "color": "#666",
        "fontSize": 16
    },
    "orders-list li p i": {
        "fontSize": 17,
        "color": "#e2232f",
        "fontStyle": "normal",
        "letterSpacing": 2,
        "wordWrap": "break-word"
    },
    "orders-list h4": {
        "fontSize": 16,
        "fontWeight": "700",
        "marginBottom": 7,
        "color": "#333"
    },
    "orders-list span": {
        "display": "block",
        "marginBottom": 7,
        "color": "#999"
    },
    "orders_buy": {
        "position": "absolute",
        "right": 10,
        "top": 20
    },
    "orders_time": {
        "color": "#666",
        "fontSize": 12,
        "position": "absolute",
        "right": 10,
        "bottom": 10,
        "fontStyle": "normal"
    },
    "orders-nodata": {
        "height": 110,
        "color": "#666",
        "background": "#fff",
        "paddingTop": 85,
        "paddingRight": 10,
        "paddingBottom": 85,
        "paddingLeft": 10,
        "textAlign": "center",
        "borderBottom": "1px solid #ccc",
        "fontSize": 16,
        "display": "none"
    },
    "orders-nodata btn-block": {
        "marginTop": 50
    },
    "loading ul": {
        "display": "none"
    },
    "nodata orders-nodata": {
        "display": "block"
    },
    "nodata mp-more-ajax": {
        "display": "none"
    },
    "nodata ul": {
        "display": "none"
    },
    "order-tips": {
        "fontSize": 18,
        "paddingTop": 20,
        "color": "#e2232f",
        "textAlign": "center"
    },
    "order-cont oc-personal": {
        "marginTop": 0
    },
    "order-cont oc-personal dt:first-child": {
        "color": "#d54544"
    },
    "order-cont oc-personal dt:first-child:after": {
        "content": "''"
    },
    "order-cont oc-ticket": {
        "marginBottom": 0
    },
    "order-cont oc-ticket dd:last-child": {
        "marginLeft": 60,
        "height": 40
    },
    "order-qr": {
        "textAlign": "center"
    },
    "orders_coupon add-coupon": {
        "marginTop": 14,
        "marginRight": 0,
        "marginBottom": 14,
        "marginLeft": 0,
        "textAlign": "center"
    },
    "orders_coupon add-coupon input": {
        "width": 13
    },
    "orders_coupon coupon": {
        "position": "relative",
        "marginTop": 14,
        "marginRight": 14,
        "marginBottom": 0,
        "marginLeft": 14,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "background": "#fff"
    },
    "orders_coupon coupon:before": {
        "content": "''",
        "position": "absolute",
        "top": 0,
        "left": -9,
        "width": 9,
        "height": 114,
        "background": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAADkCAMAAAAxf/OGAAAC4lBMVEUAAADi4uLU1NTi4uLz8/P///8AAADi4uL///+qqqrm5ub////////U1NTh4eH////i4uL////////MzMz////z8/Pc3Nz///+fn5/h4eHb29vh4eEAAADg4ODi4uLExMTX19fi4uL////U1NT////19fX////////d3d3g4OD////i4uLg4ODMzMzh4eHi4uL////////////////g4OD////y8vL////////CwsLn5+fr6+vw8PD////c3Nz////W1tbh4eHr6+va2trf39/09PTh4eHf39/d3d3h4eHY2Nje3t7h4eHW1tb////////////8/Pz////////////g4ODw8PD////h4eH4+Pj7+/v////////39/f////////i4uLi4uLZ2dn////d3d3////////////f39/////h4eHh4eH6+vri4uLi4uL////////j4+P7+/v////////////////////////////////////////p6en////r6+ve3t7u7u7////////////g4ODX19f////////i4uLe3t76+vrj4+P////s7Ozy8vL////f39/z8/P////z8/Pq6urz8/Pa2tri4uL////////////h4eHQ0NDh4eHq6urh4eHd3d3h4eHh4eHi4uLi4uLf39/h4eHh4eH////////////y8vL////////////h4eHq6urt7e329vby8vLu7u7z8/Pq6ur29vbg4ODs7Ozt7e3z8/P////5+fn6+vrr6+v29vb////w8PDy8vL////v7+/////k5OTv7+/v7+/v7+/w8PDg4ODZ2dnt7e35+fne3t7////////Z2dnv7+/g4ODd3d3j4+P6+vr////////29vbl5eXh4eH19fXt7e3s7Ozy8vLq6urn5+fu7u7m5ub09PTx8fHw8PDz8/P+/v7p6en6+vr8/Pzo6Oj9/f3r6+v4+Pj5+fnv7+/39/dIxRVMAAAA23RSTlMA7BL39P4B9PQJFav6GMrl+sVtBXX5SVMIyEG/AqjYDSf9GAwUzLXOD2MS/nUUtbBfBjqPfNnJoCAVKyfSR1L3LNH2I4L8uFkenDVO5DLz3N/yvb/ujs5/lEvquJHV6vXO5jCcXFDTvnN6gKX3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') no-repeat",
        "backgroundSize": "42px 114px"
    },
    "orders_coupon coupon:after": {
        "content": "''",
        "position": "absolute",
        "top": 0,
        "left": "auto",
        "width": 9,
        "height": 114,
        "background": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAADkCAMAAAAxf/OGAAAC4lBMVEUAAADi4uLU1NTi4uLz8/P///8AAADi4uL///+qqqrm5ub////////U1NTh4eH////i4uL////////MzMz////z8/Pc3Nz///+fn5/h4eHb29vh4eEAAADg4ODi4uLExMTX19fi4uL////U1NT////19fX////////d3d3g4OD////i4uLg4ODMzMzh4eHi4uL////////////////g4OD////y8vL////////CwsLn5+fr6+vw8PD////c3Nz////W1tbh4eHr6+va2trf39/09PTh4eHf39/d3d3h4eHY2Nje3t7h4eHW1tb////////////8/Pz////////////g4ODw8PD////h4eH4+Pj7+/v////////39/f////////i4uLi4uLZ2dn////d3d3////////////f39/////h4eHh4eH6+vri4uLi4uL////////j4+P7+/v////////////////////////////////////////p6en////r6+ve3t7u7u7////////////g4ODX19f////////i4uLe3t76+vrj4+P////s7Ozy8vL////f39/z8/P////z8/Pq6urz8/Pa2tri4uL////////////h4eHQ0NDh4eHq6urh4eHd3d3h4eHh4eHi4uLi4uLf39/h4eHh4eH////////////y8vL////////////h4eHq6urt7e329vby8vLu7u7z8/Pq6ur29vbg4ODs7Ozt7e3z8/P////5+fn6+vrr6+v29vb////w8PDy8vL////v7+/////k5OTv7+/v7+/v7+/w8PDg4ODZ2dnt7e35+fne3t7////////Z2dnv7+/g4ODd3d3j4+P6+vr////////29vbl5eXh4eH19fXt7e3s7Ozy8vLq6urn5+fu7u7m5ub09PTx8fHw8PDz8/P+/v7p6en6+vr8/Pzo6Oj9/f3r6+v4+Pj5+fnv7+/39/dIxRVMAAAA23RSTlMA7BL39P4B9PQJFav6GMrl+sVtBXX5SVMIyEG/AqjYDSf9GAwUzLXOD2MS/nUUtbBfBjqPfNnJoCAVKyfSR1L3LNH2I4L8uFkenDVO5DLz3N/yvb/ujs5/lEvquJHV6vXO5jCcXFDTvnN6gKX3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') no-repeat",
        "backgroundSize": "42px 114px",
        "right": -9,
        "backgroundPosition": "-32px 0"
    },
    "orders_coupon pic": {
        "float": "left",
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 14,
        "marginLeft": 0,
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "width": 7,
        "background": "#d54544",
        "lineHeight": 20,
        "textAlign": "center",
        "color": "#fff",
        "borderRadius": 3
    },
    "orders_coupon type": {
        "marginBottom": 2,
        "height": 32,
        "lineHeight": 32,
        "overflow": "hidden",
        "background": "#fff",
        "color": "#d54544",
        "fontSize": 24
    },
    "orders_coupon coupon-normal pic": {
        "background": "#ff8600"
    },
    "orders_coupon coupon-normal type": {
        "color": "#ff8600"
    },
    "orders_coupon coupon-normal type:before": {
        "content": "'￥'",
        "fontSize": 18
    },
    "orders_coupon coupon-normal h4": {
        "color": "#ff8600"
    },
    "orders_coupon coupon-expired": {
        "color": "#B4B4B4"
    },
    "orders_coupon coupon-expired pic": {
        "background": "#b4b4b4"
    },
    "orders_coupon coupon-expired type": {
        "color": "#b4b4b4"
    },
    "orders_coupon coupon-expired type:before": {
        "content": "'￥'",
        "fontSize": 18
    },
    "orders_coupon coupon-expired h4": {
        "color": "#b4b4b4"
    },
    "orders_coupon h4": {
        "color": "#d54544",
        "fontSize": 16
    },
    "orders_coupon limit": {
        "clear": "left",
        "marginTop": 0,
        "marginRight": -10,
        "marginBottom": -10,
        "marginLeft": -10,
        "paddingRight": 15,
        "lineHeight": 30,
        "background": "#f6f6f6",
        "textAlign": "right",
        "whiteSpace": "nowrap",
        "borderTop": "1px solid #e1e1e1",
        "borderBottom": "2px solid #e3e3e3"
    },
    "orders_coupon about": {
        "paddingTop": 14,
        "paddingRight": 14,
        "paddingBottom": 14,
        "paddingLeft": 14
    },
    "orders_coupon about a": {
        "color": "#d54544",
        "textDecoration": "underline"
    },
    "orders_coupon loading": {
        "paddingTop": 28,
        "paddingRight": 0,
        "paddingBottom": 28,
        "paddingLeft": 0,
        "textAlign": "center",
        "color": "#666"
    },
    "buy": {
        "paddingBottom": 20
    },
    "buy i": {
        "color": "#d54544",
        "fontStyle": "normal"
    },
    "buy J-check": {
        "textDecoration": "underline",
        "cursor": "pointer"
    },
    "buy-time": {
        "textAlign": "center",
        "background": "#fff3cb",
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 8,
        "paddingLeft": 0,
        "fontSize": 16,
        "borderBottom": "1px solid #efd9a7",
        "fontWeight": "700",
        "marginBottom": 10
    },
    "buy-time i": {
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5
    },
    "buy-content": {
        "color": "#333"
    },
    "buy-content cont-title": {
        "paddingLeft": 14
    },
    "dlbuy-information": {
        "marginTop": -10,
        "marginRight": 0,
        "marginBottom": -10,
        "marginLeft": 0,
        "fontSize": 15
    },
    "dlbuy-information light": {
        "color": "#e22331"
    },
    "dlbuy-information dd:last-child": {
        "marginLeft": 60,
        "height": 40
    },
    "buy-btn": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "overflow": "hidden"
    },
    "buy-btn em": {
        "display": "block",
        "fontStyle": "normal",
        "textAlign": "center",
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "buy-btn em:before": {
        "content": "'!'",
        "display": "inline-block",
        "width": 14,
        "height": 14,
        "lineHeight": 14,
        "borderRadius": "100%",
        "color": "#e54847",
        "border": "1px solid #e54847"
    },
    "buy-btn a": {
        "width": "47.5%",
        "float": "left"
    },
    "buy-btn a:last-child": {
        "float": "right"
    },
    "buy-mob": {
        "position": "relative",
        "paddingTop": 0,
        "paddingRight": 60,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "buy-mob btn-close": {
        "position": "absolute",
        "top": "50%",
        "right": 12,
        "marginTop": -8
    },
    "buy-mob input": {
        "border": 0,
        "fontSize": 24,
        "color": "#666",
        "paddingTop": 8,
        "paddingRight": 13,
        "paddingBottom": 8,
        "paddingLeft": 13,
        "width": "100%"
    },
    "buy-pay": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "buy-pay li": {
        "fontSize": 15,
        "background": "#fff"
    },
    "buy-pay li:last-child label": {
        "borderBottom": 0
    },
    "buy-pay label": {
        "display": "block",
        "paddingTop": 13,
        "paddingRight": 0,
        "paddingBottom": 13,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 13,
        "marginBottom": 0,
        "marginLeft": 13,
        "cursor": "pointer",
        "borderBottom": "1px solid #e6e5e3"
    },
    "buy-pay input-diyradio": {
        "marginTop": 1,
        "marginRight": 15,
        "marginBottom": 0,
        "marginLeft": 5
    },
    "buy-tips": {
        "paddingTop": 16,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "textAlign": "center"
    },
    "buy-tips h3": {
        "fontSize": 18
    },
    "buy-tips strong": {
        "color": "#d54544"
    },
    "buy-tips machine": {
        "textAlign": "left"
    },
    "buy-tips p": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0
    },
    "buy-coupon": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "buy-coupon li": {
        "paddingTop": 14,
        "paddingRight": 14,
        "paddingBottom": 14,
        "paddingLeft": 14,
        "borderTop": "1px solid #e6e5e3",
        "fontSize": 15
    },
    "buy-coupon li:first-child": {
        "borderTop": 0
    },
    "buy-coupon coupon-count:after": {
        "content": "''",
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 5,
        "width": 6,
        "height": 6,
        "overflow": "hidden",
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)",
        "background": "transparent",
        "border": "2px solid #a4a4a4",
        "borderColor": "transparent transparent #bebebe #bebebe"
    },
    "buy-coupon coupon-countchecked:after": {
        "position": "relative",
        "top": 6,
        "WebkitTransform": "rotate(135deg)",
        "MozTransform": "rotate(135deg)",
        "MsTransform": "rotate(135deg)",
        "transform": "rotate(135deg)"
    },
    "buy-coupon add-coupon": {
        "marginBottom": 14,
        "textAlign": "center"
    },
    "buy-coupon add-coupon input-normal": {
        "display": "block",
        "marginRight": 90
    },
    "buy-coupon add-coupon input": {
        "width": "100%",
        "outline": 0
    },
    "buy-coupon add-coupon btn": {
        "float": "right"
    },
    "buy-coupon add-coupon tips": {
        "paddingTop": 10,
        "textAlign": "left"
    },
    "buy-coupon list": {
        "display": "none",
        "paddingTop": 14,
        "paddingRight": 9,
        "paddingBottom": 14,
        "paddingLeft": 9,
        "background": "#f0f0f0"
    },
    "buy-coupon list coupon": {
        "position": "relative",
        "marginTop": 14,
        "marginRight": 9,
        "marginBottom": 0,
        "marginLeft": 3,
        "paddingTop": 10,
        "paddingRight": 4,
        "paddingBottom": 10,
        "paddingLeft": 4,
        "background": "#fff"
    },
    "buy-coupon list coupon:before": {
        "content": "''",
        "position": "absolute",
        "top": 0,
        "left": -9,
        "width": 9,
        "height": 114,
        "background": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAADkCAMAAAAxf/OGAAAC4lBMVEUAAADi4uLU1NTi4uLz8/P///8AAADi4uL///+qqqrm5ub////////U1NTh4eH////i4uL////////MzMz////z8/Pc3Nz///+fn5/h4eHb29vh4eEAAADg4ODi4uLExMTX19fi4uL////U1NT////19fX////////d3d3g4OD////i4uLg4ODMzMzh4eHi4uL////////////////g4OD////y8vL////////CwsLn5+fr6+vw8PD////c3Nz////W1tbh4eHr6+va2trf39/09PTh4eHf39/d3d3h4eHY2Nje3t7h4eHW1tb////////////8/Pz////////////g4ODw8PD////h4eH4+Pj7+/v////////39/f////////i4uLi4uLZ2dn////d3d3////////////f39/////h4eHh4eH6+vri4uLi4uL////////j4+P7+/v////////////////////////////////////////p6en////r6+ve3t7u7u7////////////g4ODX19f////////i4uLe3t76+vrj4+P////s7Ozy8vL////f39/z8/P////z8/Pq6urz8/Pa2tri4uL////////////h4eHQ0NDh4eHq6urh4eHd3d3h4eHh4eHi4uLi4uLf39/h4eHh4eH////////////y8vL////////////h4eHq6urt7e329vby8vLu7u7z8/Pq6ur29vbg4ODs7Ozt7e3z8/P////5+fn6+vrr6+v29vb////w8PDy8vL////v7+/////k5OTv7+/v7+/v7+/w8PDg4ODZ2dnt7e35+fne3t7////////Z2dnv7+/g4ODd3d3j4+P6+vr////////29vbl5eXh4eH19fXt7e3s7Ozy8vLq6urn5+fu7u7m5ub09PTx8fHw8PDz8/P+/v7p6en6+vr8/Pzo6Oj9/f3r6+v4+Pj5+fnv7+/39/dIxRVMAAAA23RSTlMA7BL39P4B9PQJFav6GMrl+sVtBXX5SVMIyEG/AqjYDSf9GAwUzLXOD2MS/nUUtbBfBjqPfNnJoCAVKyfSR1L3LNH2I4L8uFkenDVO5DLz3N/yvb/ujs5/lEvquJHV6vXO5jCcXFDTvnN6gKX34erDG/L9Q8dk4B8kVvYvJeqHQ17b7SdxhhqGLfhn4e49OJ1BaN7J7f3ZRcR9nmm+Ibz7rVvaxd7cerOIXOdbs8ozrdvi49CyyPXgzI3s5cgu3uPtqrHWqdD+lKp2Utl5jz312G4Cujf8mEv1+RpseThCAAAHb0lEQVQYGbXBY5Qk6RYF0FOMyHLbtm3btm332LZte55t2+b9zmSkVcb/19lZL2NNT3fVyuqbe+NSB+wMDR6KVhVLpn6K1hQOlkytL0QrBj4jmRrSH6147KRkavcstKKjZG4LWjZuh2TuyDi0aNtGydy6Q2jJuC9JWwz2oAWfmyNtUXIdrmzqGmmb62/ElQxvJ231hSJc3sAd0nbr++NybmknV+PaL+Kz2k+Sq7PmXlxi7PoCuWobrivE/009NKHdatFw87U7u9xYCODIkEl3i5671ww5A4i+Z2CLPtiizsZ5UTcH1QnRlUj8B/8O+KtFUbU/EIZF1jSJmqYa0kIeyWC9KKkPkszDynMVZCAhKhIBsuLcSvRZvvAUwxFR4Q3z1PFVfXDB0jEMiYoQxyxFs9zFPlHhW5yLtP3zRcX8/XB5JouKQR64ispFxfb+cN0uSm5HWscCUVLQERcVPjlF9BRMeQzAy38rF1XlOw5AsgC2qLNhizobkgUIhIyoMqEALIZ9VaKmyhemBYtkoEqUVAVIWmCST5T4mIRVS3qNYNCIiqYgR5xYsgpAn+7zGBMVMc7r3gcpc+f5RIVv3lykdX5OVDzXGa6hM0XFzFy4Bv5QVDwyEK72oqQ90m5aLUpW34SUe47dLGr2HLsHwL2/OiyqfrGzPSQLYIs6G7aosyFZgJC/QVQ1+EOwWBOrFTW1sRpasEg6taKk1iFpgUmNoqSRSTi4sBsZrBcVDUHyneMHASx9KodRURFlzlNLkdI5xxEVTk5npA1zRIUzDK7cu0TFXaPgGr5LVOwaDlcXUdIFaePXipK145FS1OV6UbO2SxGAWe0Hi6rBr1wDyQLYos6GLepsSBYgbqpFVZWJw2IgLooiAVqwSMYSoiQRI2mBSX5R4mcSPuz1LhmsEhVVQfK9Xh8CWL6pH6Oiws9+f1iFlIcrHFHhVDyMtIk+UeGbCNe0r4qK702Da8C3RcXXhsI1vkRUlIxH2g3tREm7G5DS4cENombDgx0ATJ21c6Mo2jjhybOwRZ0NW9TZsEWdDckCLKqqFVW1VYtghZ0mUdTkhC1YJOOiJk7SApMioiTCJHxQlkPWVIuK6hoyp+wDwDN7NOkXFXFy9IquuOg+OqLC4X1I2+oTFb6tcN3/XVHx4/vh6vp9UTHIA9et60TFuluR1qFYlBR3QLMBU0TNywOQNLX9EFE05JWzwOHyPaJqT/lhFIi6AtiizkaJqCvByfMJUZU4fxL9KqNVoqgqWtkPFhk0osYESQsVJMNNoqQpTLICvU/nkZW1oqK2ksw73Rs9+47szXBEVETC7H20b09cMKoXQ6IixF7T0MwzxicqfGM8SOs7X1TM7wuXZ7KoGOSBq/92UbG9P1wTRMkEpG0pECUFL+GicduKRVHxrL8Cxe12i6rdZ4ohWQBb1NmwRZ2NAlFXgErHmxBFiYhTCYvhugZR01AXpgWLZGWDKGmoJGmhHy/wJURFwscL+qHvimUWw0ZUmCCtf/6rLwDP8m5sFBWN7PZ3D1IWlPlEha9sAdK6vyEq3ugOV5/NomLmULgGPiIqflQEV0dR0hFpY+eIkjljkXLLAyWipuSBHwDYMmWSqJp04CVIFsAWdTZsUWdDsgBOtF5U1UcdWKwJVYua6lCQFiySvmpRUu0jaYFJIVESYhJWjOxBButFRX2QfP3oCgClb+1jTFTEuO9gKVK6r3REhbOyO9KWOKLCWQJX7s9Exe9y4Rq+S1T8eThcH4mSj5B2TbkoKb8GKWfHfixqPh77XwBdjp0RVUc6HsInWYBPsgD5Rl0+TBbAaYwbVfFGBxZrQkZRqIYWLJJ1XqPEW0fSApMco8RhEt5f1psMx42KeJjsvex9AHMXPkTHqHD40MK5SLkzL2BUBPLuRNrIgFERGAnXqG8ZFV+ZBtfQzUbFzFy47lhkVCy6A2kzBhklg2YgxfP4ZKNm8uMeANN/+0Qno6jTE9tmwGQB8o26fOQbdfkwWYCY32tURfwxWAzEjKJYgBYsko5R45C0wKSQURJiEk70OE0GI0ZFJEju63EC6Nm5FxkyKkLkr1/oiYsmjggYFYERE5G2KWBUVH4HrtLbjIrbSuHq+g2jYrMHrun5RsU3pyNtwOeNkq8PQLOinxg1Py/CBV2n//55o+j538zoiaef7WRUdXr2aXQy6joh36jLR75Rl4+I0Qej75f4RzziNXq8kbjfgsVgIOT3Gg1ef2NdkLRgManOb66e38cUsJkvYq5OxGGzMvTY+3YOk2r85mr4K5n06Jf3vogLXpu9qZtFMhw1becPkszrtnX2gkI0Kxz26ggy7Ddt5Q+S7DGsJz7tL2+TwYhpm0iQfPcoPmv/O2Sd17SJj+y2HJczajEZNW0RDfPVUlxe7osMeE3mvAGWleJKXnuPUZM5P08twJW9leeYzIUqhqEFHd6sjJhMeQOju6IlnR/1m0zFz81GizosjppM+Xt0RctGxkymosfRij/+yZuhaM4LaMWoMmZqbylaUTiamXq9EK15k5kag1YtszI0ug8u9T+UNB1xlk9ulwAAAABJRU5ErkJggg==') no-repeat",
        "backgroundSize": "42px 114px"
    },
    "buy-coupon list coupon:after": {
        "content": "''",
        "position": "absolute",
        "top": 0,
        "left": "auto",
        "width": 9,
        "height": 114,
        "background": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAADkCAMAAAAxf/OGAAAC4lBMVEUAAADi4uLU1NTi4uLz8/P///8AAADi4uL///+qqqrm5ub////////U1NTh4eH////i4uL////////MzMz////z8/Pc3Nz///+fn5/h4eHb29vh4eEAAADg4ODi4uLExMTX19fi4uL////U1NT////19fX////////d3d3g4OD////i4uLg4ODMzMzh4eHi4uL////////////////g4OD////y8vL////////CwsLn5+fr6+vw8PD////c3Nz////W1tbh4eHr6+va2trf39/09PTh4eHf39/d3d3h4eHY2Nje3t7h4eHW1tb////////////8/Pz////////////g4ODw8PD////h4eH4+Pj7+/v////////39/f////////i4uLi4uLZ2dn////d3d3////////////f39/////h4eHh4eH6+vri4uLi4uL////////j4+P7+/v////////////////////////////////////////p6en////r6+ve3t7u7u7////////////g4ODX19f////////i4uLe3t76+vrj4+P////s7Ozy8vL////f39/z8/P////z8/Pq6urz8/Pa2tri4uL////////////h4eHQ0NDh4eHq6urh4eHd3d3h4eHh4eHi4uLi4uLf39/h4eHh4eH////////////y8vL////////////h4eHq6urt7e329vby8vLu7u7z8/Pq6ur29vbg4ODs7Ozt7e3z8/P////5+fn6+vrr6+v29vb////w8PDy8vL////v7+/////k5OTv7+/v7+/v7+/w8PDg4ODZ2dnt7e35+fne3t7////////Z2dnv7+/g4ODd3d3j4+P6+vr////////29vbl5eXh4eH19fXt7e3s7Ozy8vLq6urn5+fu7u7m5ub09PTx8fHw8PDz8/P+/v7p6en6+vr8/Pzo6Oj9/f3r6+v4+Pj5+fnv7+/39/dIxRVMAAAA23RSTlMA7BL39P4B9PQJFav6GMrl+sVtBXX5SVMIyEG/AqjYDSf9GAwUzLXOD2MS/nUUtbBfBjqPfNnJoCAVKyfSR1L3LNH2I4L8uFkenDVO5DLz3N/yvb/ujs5/lEvquJHV6vXO5jCcXFDTvnN6gKX3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') no-repeat",
        "backgroundSize": "42px 114px",
        "right": -9,
        "backgroundPosition": "-32px 0"
    },
    "buy-coupon list input-diycheckbox": {
        "float": "left",
        "marginTop": 40
    },
    "buy-coupon list pic": {
        "float": "left",
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 14,
        "marginLeft": 0,
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "width": 7,
        "background": "#d54544",
        "lineHeight": 20,
        "textAlign": "center",
        "color": "#fff",
        "borderRadius": 3
    },
    "buy-coupon list type": {
        "marginBottom": 2,
        "height": 32,
        "lineHeight": 32,
        "overflow": "hidden",
        "background": "#fff",
        "color": "#d54544",
        "fontSize": 24
    },
    "buy-coupon list coupon-normal pic": {
        "background": "#ff9a00"
    },
    "buy-coupon list coupon-normal type": {
        "color": "#ff9a00"
    },
    "buy-coupon list coupon-normal type:before": {
        "content": "'￥'",
        "fontSize": 18
    },
    "buy-coupon list coupon-normal h4": {
        "color": "#ff9a00"
    },
    "buy-coupon list h4": {
        "color": "#d54544",
        "fontSize": 16
    },
    "buy-coupon list limit": {
        "clear": "left",
        "marginTop": 0,
        "marginRight": -4,
        "marginBottom": -10,
        "marginLeft": -4,
        "paddingRight": 15,
        "lineHeight": 32,
        "background": "#f6f6f6",
        "textAlign": "right",
        "whiteSpace": "nowrap",
        "borderTop": "1px solid #e1e1e1",
        "borderBottom": "2px solid #e5e5e5"
    },
    "buy-coupon value": {
        "float": "right"
    },
    "buy-coupon num": {
        "color": "#d54544"
    },
    "buy-coupon preDesc": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 14,
        "color": "#F79400"
    },
    "addtohome": {
        "display": "none",
        "position": "fixed",
        "zIndex": 999,
        "bottom": 9,
        "width": "100%"
    },
    "addtohome wrap": {
        "position": "relative",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 11,
        "paddingRight": 11,
        "paddingBottom": 11,
        "paddingLeft": 11,
        "width": 220,
        "borderRadius": 5,
        "background": "#101010",
        "color": "#fff"
    },
    "addtohome close": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "width": 16,
        "height": 16,
        "textAlign": "center",
        "font": "20px/16px Arial"
    },
    "addtohome icon": {
        "display": "inline-block",
        "width": 18,
        "height": 18,
        "background": "no-repeat center center",
        "overflow": "hidden"
    },
    "addtohome tri": {
        "position": "absolute",
        "left": 110,
        "bottom": -18,
        "width": 0,
        "height": 0,
        "overflow": "hidden",
        "border": "9px dashed transparent",
        "borderTop": "9px solid #101010"
    },
    "addtohomeios icon": {
        "backgroundImage": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAWCAMAAAALimf+AAAA1VBMVEUAAAD///////////////////8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9adcxgAAAARnRSTlMACvi94IABQKDAuWpjHGAYLk3rtxH1rtaXb3ChC+fSCCyHR5CcWxLcGwn0pw/BQ86tDKgGfIHvbgfM8FfxnyIWiFSKyQW/MxOSegAAALlJREFUKM+N0McWgjAQBdBRBCPF3nvvvffu/P8nGQElgOb4Vi+5i2QGwJVKFTghWCvxFItlnqI3I3EUMRZ69YARuUm7RxUS+E40Qm/MvqC1UUBb0h6qRBTF+RpmPXRGpurXX5PGLkzGP7qix66QI4S0DPMq+ru6Tpa4VTrMn1NhsFTFTZudqJ4HRqejPjPvfmd2Uwcas43bEew6tHZ1uN7BoUxOdLzLTwXQHj6OBvFfzfqdOTP6LX/pE9vJOelBFsp8AAAAAElFTkSuQmCC\")",
        "backgroundSize": "15px 11px"
    },
    "addtohomeios7 icon": {
        "backgroundImage": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAlBAMAAACqvTS4AAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMAFdTQ0bs0L1688F3P0AEAAABVSURBVBjTY2AAAYlABjhg1N4sAOcI7d5tiJDQ3gKXEtokvdHbECahyL1BZCuEw7ZIgHsD43SoskQG7g0Io6nH2Q0C3BvAFBoHoWzQcKBupikHCaBwAMswVasIqtrkAAAAAElFTkSuQmCC\")",
        "backgroundSize": "12px 17px"
    },
    "addtohomexiaomi": {
        "bottom": "auto",
        "top": 9
    },
    "addtohomexiaomi icon": {
        "backgroundImage": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAAAkFBMVEUAAAD6+vr7+/v39/fKysra2trl5eXS0tLo6Ojw8PD09PTW1ta/v7/g4ODy8vLCwsLCwsLExMTBwcHGxsbh4eHe3t7FxcX5+fnh4eHJycne3t75+fkAAADGxsbJycnAwMDGxsbCwsLDw8PMzMzf39/b29v6+vri4uL4+Pjm5ub29vb8/PzFxcXHx8fKysrDw8PNgNXLAAAAJHRSTlMAdvT+RJiXIiJEsRkEGTz+y4MZjfn5Ovj89/z1ARuiYvzv8ji1LgPDAAAAaklEQVQYGZ3BRxKCQABFwQcIKlHFnFFJxvvfzirHDVN/RTeO+1Bch1Wl7fAazSO8ayFxOlbSmF6SkZJA0GoB61qbs71pC/xS8yEaKhG97K+DrgN/x7dls8Q4v2w5xuVpm2Kcik9HNpnx8wUnKyxFb8nQVAAAAABJRU5ErkJggg==\")",
        "backgroundSize": "12px 10px",
        "verticalAlign": -2
    },
    "addtohomexiaomi tri": {
        "borderTop": 0,
        "borderBottom": "9px solid #101010",
        "left": "auto",
        "bottom": "auto",
        "top": -8
    },
    "addtohomexiaomi wrap": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "addtohome p": {
        "height": 57,
        "lineHeight": 28,
        "overflow": "hidden",
        "fontSize": 14,
        "WebkitBackgroundSize": "57px 57px"
    },
    "addtohome img": {
        "float": "left",
        "marginRight": 11,
        "borderRadius": 10
    },
    "seats movie": {
        "paddingTop": 4,
        "paddingRight": 11,
        "paddingBottom": 4,
        "paddingLeft": 11,
        "background": "#f8f8f8"
    },
    "seats movie btn": {
        "float": "right",
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": 4,
        "marginLeft": 0
    },
    "seats movie info": {
        "fontSize": 12,
        "marginRight": 110
    },
    "seats movie h3": {
        "fontSize": 16,
        "fontWeight": "700",
        "lineHeight": 28,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "seats movie-info": {
        "lineHeight": 32
    },
    "seats movie-info h3": {
        "float": "left",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 0,
        "height": 30,
        "fontSize": 14
    },
    "seats movie-info p": {
        "float": "left",
        "fontSize": 12
    },
    "seats seat": {
        "display": "inline-block",
        "width": 14,
        "height": 14,
        "lineHeight": 14,
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 0,
        "backgroundSize": "14px 14px"
    },
    "seats active": {
        "backgroundImage": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4yLjE0TpwzHgAAAWtJREFUWIXt2L9Kw0AcwPGvuQ4WkwZuCWmGzl1dSsG1L6DiKL6A4kPoC4hPIfUFBEf9PUKf4A46RiudLjgYtEONgSstwn3X+/e5kCzZE5EEuAeOgZjfS8bj8aJhvHUisg8sG6YsgClw2QHu+v3+eVEUKKXWzp7NZpRlOQKeNwEEjtI0ZTgcrh10zsXGmAtrbRUBp004gCzLAG7rm3tV73FT77k2pRRFUQCcRUDchAPQWpPn+Qh4EZGJiDQvWA9TIjIBXvM8H2mtG+fXprjT9oDBYECSJIfz+fypLMs3EZkB7y2XJ8AwTdNelmX8hVutNRC+nqTWGudcb7lcjpxzrdYppeh2u42v0UaAqwfGcdMHv7mirZziUQD6FoC+BaBvAehbAPoWgL4FoG8B6FsA+haAvgWgbwHoWwD6FoC+/Qvgou1/vm1WmxYRMDXGUFXVjkk/VVWFMQbgoQNcWWsja+0JcLBb2ncfwCNw/Qk+3GWURNQyowAAAABJRU5ErkJggg==\")"
    },
    "seats disabled": {
        "backgroundImage": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4yLjE0TpwzHgAABAFJREFUWIXtmE1sFHUYh5+d2e7sx+xud/thm4Y20AZFjJVIlxbkYMVkESvEGk4m4sGjyM2rB2LsTYmePOnBA9VEipEmSjFcWotCIUSpaWtAaSvbdr9m9nNm1sO2mEa7OzNbCyY+1/n93/fJzH/e+XDMRCN+4AzwCiCzMZ6u0clcheOmmYlGAkCyQkQBPgfedALvAydM1H0G+LZmuzKRKsdlyk6GABw3WfT0TDTirsUKYLXGaZPx446ZaKRkof414G1grGt0UrcoJgL9wBCwx+w6q4JrpICfgbTJvB/YBQSsNnJaXbBKANhnc60lhK1oUgv/C9bKQy9o9yZZh9TeRP3hvXh2tiEGvOipDNlf7pL85hq5ucWaatsdM/cJvRghfLQXHA4MNYcWV3CGZASfG0qwcm6c+FeTtuvXdAaD/d2Ej/WhJVSWPruEOjUHRgkEB74nt9P4aj/hY30Y2QLJi1O2etjeg2LAS3jwALqSY35oGPXqbFkOwCihTs0x/95ZdCVH+OX9iEHv1grKPTsRpDoSF65QjP3zi0lxKUXi6ysIUh3+yKNbK+je0QKAOvVrxZw6NQeAtL3FVh/bgoLHBYCeylTM6eksUN4StvrYWmUDh2iv1ZYJlgx708y2oJEvAiDKld9hRZ8EgJ6uvBU2wrZgbnYBAP/+XRVzcl/5eH41bxXbgsrELQw1R/0LPQQPPYVDWF/KIQgEn+0mdKQHQ82RHr9lq4+tR52rrYHiQhyps5XWkwMIHgk9nSE3u4ieyiAGvLg7WxD9XoxsgcWPzpOdvourrYHC70uWeoknu9resbKgYfAAj7wRRUtmUK/OoExOI7jrkNoakbY1IXU042oJgW6Qnpjmj49HKdyJETj4BK2njiK46sj+dMd0P0vP4tDAPuoP76W4lCJzvTyAteU0sU8uEvt0DGdYRpQ96EoWbUWB0l8XR702S/C5buqjT2MUisRHvjfV0/Qe9DzeTvilXrS4wvzQMFpcWR8oldCW0+Rv30NbTq+TA9CVLAsfnEOLK4QHevHu7tg8QYfLSfPrz0OpxOKH5/8uZxItrrB4ZoSSrtN04hAOV/ULaErQ3/sYzpBM8rsb5G/fsyW3Rv63GMmx6zhDctURZVrQt6cTgNTlmzXJrZG6dKNct3tH1awpQde2JvSkanlEbEQxlkSLK0jtzVWzpgRF2W17322EnlAQ/Z6qOVOCRraAszFY/s7YBASvhLMpiJ6p/jfP1BxMXb5J6EgPHe++RnEpVbNgXWMAwecmceGHzRGMj0zgEAUCB3cjdVTfN9UwMnkSoz+y8uV41WzNn53/Ng/9n4X/hODmzo/NRRGAsw/aogLDTuAU5bt5EPA9WJ/7qMAXwFt/Ary9XoLKZbyAAAAAAElFTkSuQmCC\")"
    },
    "seats love": {
        "backgroundImage": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABd0RVh0Q3JlYXRpb24gVGltZQAyMDE0LjIuMTROnDMeAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAPlJREFUWIXt2C1OA1EUgNHToQJC230gMWBQbAFSjWpSQcCxgRocwUwyS+BnB4QtIFkHUBIMDGIKjjLDTQBxj33v3vfp16urcohz7GPga2u9yfRlyXlrdVWO8LDkyhxXOOzjDAct9u7gJlzX2PrmfKBpeiswbrl0VlflaqQKFjtmLa+Pe3VV1h323+EEt73J9LVj2Ap2cYrNtnNdAz884h5PLe8PsYFR14f6XQcWRtj+4WwnxW88EpGBURkYlYFRGRiVgVEZGJWBURkYlYFRGRiVgVEZGJWBURkYlYFRhebD+r+aF7j464olLvs41vy07mH9b3s+PeMaR++inyr/4traPAAAAABJRU5ErkJggg==\")"
    },
    "seats selected": {
        "backgroundImage": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABd0RVh0Q3JlYXRpb24gVGltZQAyMDE0LjIuMTROnDMeAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAxtJREFUWIXt2HlIFGEYx/HvrOaR7nZ41q6pGZKUSSZEKESlJZUdalaKHWJJhQVZEEFQYUQE3RdBB1hUGoFhEIlCpYGBIRRJom1qdiii6a5Xutsf2lBgOzOOrgT7++9lnveZz8zODu87QlxZmha4BCQCnvw72uKYuyYbx2UnrixtImC2UWICCoBsZ+ACsEVG34VAiXoeANESxz2B7YBVAyTLbHoirizNTRULGOpxQmZ5ihBXlmZV0P8NcAgoLY65O6AQ5gQsBU4B8+XOUwr8nQ6gGuiUWa8FwgCd0hM5K50wFB2Dz+SYR2OPk6iJA6g2DqDaOIBqMy5AAYH06Yncj7hIpmGTzVq7AwUEsgJSSfKLx03jSqyX7XWD3YEZhhTivReL40ffn9qstytwmz6ZBJ9l4riwuZj8b09szrEbMHXaWtb5LhfHRS2l3G56KDnPLsCN/qtJ8V8ljp+1vuTG5wdYkV5IjTlwve8KNk9bI45LWsu52nBHFg7GGJjgG8tWfZI4ftH2msuNebJxIAF00UxgtkcIzoLyZWO892Iy9BvEcXl7Jefqb2KxWhT1sXnm3FkHCPUIptpcy7Ha8/RYemU1jfWKJisgFQEBgIofVZz9dEMxDiTuoN7ND4Awj1kcCcnGVeMi2XDJ1EXsDkgXcZUdbzltvE6/tV8xThJ4uSFPvOo5nqEcnrkHF82Ef9ZHT4kie8ZWNMJg26rO95wyXhsxThL4qr2S8/W3RGSENoxDwbuGfSYXTY5kf2CmiHtn+sDJj1fos/wcMU4SCPC8reKvf16kbi4Hg3f+hYzShZMTlInTEK7aXEtu3SV6LX2qcABOIRnzjkoVGbsbae/vIGpSOAICBjd/At311Jg/skAXTk7wDhFcYzZyvO4C3ZYe1ThQuC9e7bPU5vKorqueI7Vn6BroHhUcKHxRF7WUcqupYNgXrbG7kaN150YVByPYuBc2F/Olt5kNfisJcjfQOWCivK2Se18fj9rP+mdG+unDbnHsSdTGAVSb/wI4Kh/GxygmDSC9cxm/5DsDexm8k0mAx/h6xJgZvHH7fgGbduyUhrM44wAAAABJRU5ErkJggg==\")"
    },
    "seats tips": {
        "minHeight": 34,
        "lineHeight": 34,
        "borderTop": "1px solid #d6d6d6",
        "background": "#f8f8f8"
    },
    "seats tips seat-intro": {
        "paddingRight": 0.5,
        "textAlign": "center"
    },
    "seats tips seat-intro li": {
        "float": "left",
        "width": "25%"
    },
    "seats tips seat-intro seat": {
        "marginTop": 0,
        "marginRight": 3,
        "marginBottom": 0,
        "marginLeft": 3,
        "verticalAlign": -2
    },
    "seats tips seat-list": {
        "marginTop": 2,
        "marginRight": 3,
        "marginBottom": 2,
        "marginLeft": 11,
        "lineHeight": 28,
        "textAlign": "center"
    },
    "seats tips seat-list li": {
        "float": "left",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "width": 60,
        "height": 28,
        "fontSize": 12,
        "background": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA4CAYAAAA2PDy+AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4yLjE0TpwzHgAAAdZJREFUeJzt2jFO41AUheHjJ+w6sSxDS2AG3TVQsY5UNFnVaAQLoYUlXIkZJR2FEzu0yChMwYuGBTz0pOPzreBKR5alX68AAHe/BPAHwuSHmf0t3P0CwH3bttd1Xec+ShIYhgFd1z0CuC3c/aNtW2hcLnFkBAAal9Bx05D5DvlmAfj8nIXLcdMA4KrruieNzCP+f58AXAUzewaw3O/3ue+SROKWSzN7DgBgZptxHPNeJcmM4wgz2wDxH+zul1VV5b1Kkqmq6hivEGLouJvNZpnPklTilvfu/lOhg5RCBzmFjonQwOQCgPftdpv7DkksbvoWAJz2ff+gksVjGAb0ff8A4CyY2QBgpZLFI265MrPXY8laq2TxiCVrDfwvWYuyLPNeJcmUZQl3XwCfJesMwO/5fJ75LEklbvnL3ZsTAC9N0xSKHTzqusbhcLjZ7XZdAFA0TZP7JkksbloodJDTwOT0JouU3mQR05sscnqTRU5vssjpTRY5vcmaAL3JIqc3WROh0EFKoYOYQgc5hQ5yCh3kFDrIKXRMgEIHOYWOidDA5FSySKlkEVPJIqeSRU4li5xKFjmVrAlQySKnkjURCh2kFDqIfQ0dBQC4+zmAdd6zJLGFmW3+Aa5OVoEmfk4HAAAAAElFTkSuQmCC\") no-repeat",
        "backgroundSize": "60px 28px"
    },
    "seats tips em": {
        "float": "right",
        "height": 34,
        "marginRight": 11,
        "whiteSpace": "nowrap",
        "fontSize": 18,
        "color": "#d54544"
    },
    "seats tips em:after": {
        "content": "'元'",
        "fontSize": 14
    },
    "seats main": {
        "position": "relative",
        "zIndex": 1,
        "background": "#f0f0f0",
        "textAlign": "center",
        "overflow": "hidden",
        "borderTop": "1px solid silver"
    },
    "seats main h3": {
        "position": "absolute",
        "top": 0,
        "left": "50%",
        "zIndex": 5,
        "marginLeft": -84,
        "width": 168,
        "height": 20,
        "color": "#ffe4a5",
        "background": "transparent url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU4AAAAmCAYAAACrg3LqAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4yLjE4Ryp/NQAAAylJREFUeJzt3cGKFFcUh/HPziJPkCfwBty4CpmE6APMLgsXLoO7rNznDcaMGoOKiqKBSEJcJAFJ5qobIYh6FQyKIjgYcKEoIgoGYWKmsuiaMDN2dXdVV9u3x+8Hveiqrltn9ecU1XVq0+LszGXgUyRJw7jUAeYmXYUkTZG5DnAWuDfpSiRpCtwCfuuEmJaB+UlXI0lTYM/mhatFp/xyGngyyWokKXN/AT8BdABCTK+Ag5OsSJIytxd4DWVwlo4Cf0+kHEnK22Pg1MqX/4MzxPQUODmJiiQpc9+WV+bA2o4T4ABlKypJAuAFcGT1hjXBGWK6D/z8NiuSpMwdCzE9X71hfccJ/jVJklYs0b0SX+ON4AwxXQcuvoWCJCl334eYHq3f2KvjBLtOSVoG9vfa0TM4i6JYAO6MsyJJytzZEFPPHOwZnB+eu1YAX4+1JEnKW+WVd9WlOsCPwBvX9pL0DrgcYrpUtbMyOENMS8A3YylJkvK2p9/Ofh0nwHHgZXu1SFL27tIdt1mpb3CWf/o82mZFkpS5/eW4zUqDOk7oTk36p516JClrT+mO2exrYHCGmB7QvVEkSRvd4dXDPKoM03FC9yZRMVo9kpS1V8ChYX44VHCGmP4Ezo9SkSRl7nQ5XnOgYTtOgH0Ni5Gk3BX0GOZRZejgDDFdAG40qUiSMne+6vHKXup0nNB954YkbTS1HvapG5xngAc1j5GknN0piqLWPZxawRlieo2PYUraWObLwUZDq9txApwAng/8lSTl7yHwQ92DagdniOkl615cJElTaq4caFRLk44Tuo9hDvx3vSRl7DZwrMmBjYKzfAfH7ibHSlIGloBdTbpNaN5xEmI6AXzV9HhJmpAC+DLEdK3pAo2DEyDENAfswpmdkqbDMrA7xHRqlEVGCk6AENN3wMfAlVHXkqQxegHsCDENNcijn5GDEyDEdLcois+AncDNNtaUpBb9AmwNMf3axmKb2lhkvcXZme3AF8DnwAfjOIckDfAv8DswH2L6o40FF2dn2LxwdTzBueok7wEfAduAT4At5ef9cZ5X0jvrGZCAc8CZENPDNhdfCc7/AAdIwJ2yPD/oAAAAAElFTkSuQmCC\") no-repeat center top",
        "backgroundSize": "167px 19px"
    },
    "seats main h4": {
        "paddingTop": 4
    },
    "seats main item": {
        "background": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAQCAMAAAALdl6GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRUZFQjczNjkwOEQxMUUzOURDOUU2QjMwODYxMzg5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRUZFQjczNzkwOEQxMUUzOURDOUU2QjMwODYxMzg5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJFRkVCNzM0OTA4RDExRTM5REM5RTZCMzA4NjEzODk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJFRkVCNzM1OTA4RDExRTM5REM5RTZCMzA4NjEzODk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hu0OggAAACRQTFRF6Ojo5eXl6enp5ubm3d3d0dHR29vb39/fz8/P3Nzc0NDQ8PDwPbCqXgAAACtJREFUeNpiYGZk4OBgYOFk4OJiYGdn4OaGIgYmkAgnJwMrKwMbG1wcIMAAFuIBBsTiT5gAAAAASUVORK5CYII=\") repeat-y center top"
    },
    "seats main item p": {
        "height": 16,
        "overflow": "hidden",
        "whiteSpace": "nowrap"
    },
    "seats main seat:last-child": {
        "marginRight": 0
    },
    "seats main side": {
        "position": "absolute",
        "left": 4,
        "top": 20,
        "zIndex": 4,
        "pointerEvents": "none",
        "fontSize": 10,
        "color": "#fff",
        "opacity": 0.6,
        "filter": "alpha(opacity=60)"
    },
    "seats main side ol": {
        "width": 16,
        "borderRadius": 8,
        "background": "#7f7f7f"
    },
    "seats main side li": {
        "position": "relative",
        "height": 16,
        "lineHeight": 16,
        "whiteSpace": "nowrap"
    },
    "seats main side tl": {
        "display": "block",
        "height": 25
    },
    "seats main side cs": {
        "display": "block",
        "height": 26
    },
    "seats c-tips": {
        "marginBottom": 10,
        "height": 16,
        "lineHeight": 16,
        "background": "#f0f0f0"
    },
    "seats c-tips span": {
        "paddingTop": 0,
        "paddingRight": 4,
        "paddingBottom": 0,
        "paddingLeft": 4,
        "fontSize": 12,
        "background": "#e0e0e0",
        "borderRadius": 2
    },
    "seats main-big seat": {
        "width": 20,
        "height": 20,
        "lineHeight": 20,
        "marginTop": 0,
        "marginRight": 4,
        "marginBottom": 4,
        "marginLeft": 0,
        "backgroundSize": "20px 20px"
    },
    "seats main-big side li": {
        "height": 24,
        "lineHeight": 20
    },
    "seats main-big item p": {
        "height": 24
    },
    "seats wrapper": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "zIndex": 3,
        "overflow": "auto",
        "WebkitOverflowScrolling": "touch"
    },
    "seats scroller": {
        "position": "relative",
        "marginTop": 20,
        "paddingTop": 0,
        "paddingRight": 23,
        "paddingBottom": 0,
        "paddingLeft": 23
    },
    "seats pay-loading": {
        "display": "none",
        "fontSize": 12,
        "width": 200,
        "height": 90,
        "lineHeight": 115,
        "background": "rgba(0, 0, 0, .8)",
        "position": "absolute",
        "textAlign": "center",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "borderRadius": 4,
        "color": "#FFF",
        "zIndex": 999
    },
    "seats pay-loading spin": {
        "top": 30,
        "left": 85,
        "content": "",
        "position": "absolute",
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "background": 0,
        "width": 3,
        "height": 3,
        "borderRadius": "100%",
        "boxShadow": "0 -10px 0 .9px #fff, 10px 0 #ccc, 0 10px #ccc, -10px 0 #ccc, -7px -7px 0 .4px #ccc, 7px -7px 0 1.1px #fff, 7px 7px #ccc, -7px 7px #ccc",
        "transform": "rotate(360deg)",
        "animation": "spin 1.5s linear infinite",
        "WebkitTransform": "rotate(360deg)",
        "WebkitAnimation": "spin 1.5s linear infinite"
    },
    "seats login": {
        "display": "none",
        "paddingTop": 0,
        "paddingRight": 11,
        "paddingBottom": 40,
        "paddingLeft": 11,
        "background": "url(\"data:image/png;base64,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\") no-repeat center bottom",
        "backgroundSize": "63px 26px"
    },
    "seats login verify btn": {
        "float": "right",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": 116,
        "textAlign": "center"
    },
    "seats login verify input-normal": {
        "display": "block",
        "marginRight": 130
    },
    "seats login code": {
        "display": "block",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "seats login input": {
        "width": "100%"
    },
    "seats hotline": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "seats hotline a": {
        "color": "#d54544",
        "textDecoration": "underline"
    },
    "select-bank": {
        "marginBottom": 30,
        "color": "#676767"
    },
    "select-bank box-style": {
        "marginTop": 0,
        "borderTop": 0,
        "borderRadius": 0
    },
    "box-style": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "background": "#fff",
        "color": "#333",
        "border": "0 solid #ccc",
        "borderWidth": "1px 0",
        "borderRadius": 5
    },
    "box-style h3": {
        "fontSize": 16,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 8,
        "marginLeft": 0,
        "borderBottom": "1px dashed #e5e5e5"
    },
    "box-cpd": {
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8
    },
    "ml-item": {
        "position": "relative",
        "paddingTop": 0.9,
        "paddingRight": 2,
        "paddingBottom": 0.6,
        "paddingLeft": 0.6,
        "borderBottom": "1px solid #e5e5e5",
        "background": "#fff",
        "display": "block",
        "color": "#666",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis"
    },
    "ml-item:after": {
        "right": 12,
        "top": 18,
        "content": "''",
        "position": "absolute",
        "width": 7,
        "height": 7,
        "border": "3px solid #a4a4a4",
        "borderWidth": "0 0 2px 2px",
        "WebkitTransform": "rotate(-135deg)",
        "MozTransform": "rotate(-135deg)",
        "MsTransform": "rotate(-135deg)",
        "transform": "rotate(-135deg)"
    },
    "ml-link li:last-child ml-item": {
        "borderBottom": 0
    },
    "wanda p": {
        "paddingTop": 3,
        "textAlign": "left",
        "color": "#ff9a00",
        "fontSize": 14,
        "textIndent": 8
    },
    "wanda wanda-mobile": {
        "marginTop": 65,
        "marginRight": 10,
        "marginBottom": 65,
        "marginLeft": 10
    },
    "iframe": {
        "width": "100%",
        "height": 500,
        "overflow": "auto",
        "WebkitOverflowScrolling": "touch"
    },
    "city-list h2": {
        "height": 46,
        "background": "#FFF",
        "borderBottom": "1px #CCC solid",
        "color": "#333",
        "lineHeight": 46,
        "fontWeight": "700",
        "position": "relative",
        "width": "100%",
        "textIndent": 1
    },
    "city-list h2:after": {
        "content": "''",
        "display": "inline-block",
        "width": 10,
        "height": 10,
        "border": "3px #FFF solid",
        "borderColor": "#CCC #CCC #FFF #FFF",
        "WebkitTransform": "rotate(135deg)",
        "float": "right",
        "zIndex": 3,
        "position": "absolute",
        "right": 15,
        "top": 10
    },
    "city-list h2:before": {
        "content": "''",
        "display": "inline-block",
        "width": 16,
        "height": 11,
        "border": "3px #FFF solid",
        "float": "right",
        "zIndex": 4,
        "background": "transparent",
        "position": "absolute",
        "right": 12,
        "top": 16
    },
    "city-list h2opened:after": {
        "borderColor": "#FFF #FFF #DF2D2D #DF2D2D",
        "top": 20
    },
    "city-list h2opened:before": {
        "top": 14
    },
    "city-list li": {
        "height": 40,
        "lineHeight": 40,
        "borderBottom": "1px #D9D9D9 solid"
    },
    "city-list li a": {
        "display": "block",
        "color": "#000",
        "height": "100%",
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1
    },
    "city-list ul": {
        "clear": "both"
    },
    "searchcinemas-list": {
        "maxHeight": 500,
        "overflow": "hidden",
        "position": "relative",
        "backgroundColor": "#FFF"
    },
    "searchcinemas-list more-expand": {
        "display": "none",
        "height": 51,
        "position": "absolute",
        "bottom": 0,
        "width": "100%",
        "zIndex": 2,
        "backgroundColor": "#FFF"
    },
    "searchcinemas-list more-expand a": {
        "fontSize": 14,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": 51
    },
    "searchcinemas-list li a": {
        "paddingTop": 8.9,
        "paddingRight": 10,
        "paddingBottom": 8.9,
        "paddingLeft": 10
    },
    "searchcinemas-list li h4": {
        "fontSize": 14,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "showmovie cinemas-list li h4": {
        "fontSize": 14,
        "marginBottom": 0
    },
    "showmovie cinemas-list li a": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "showmovie cinemas-list hide": {
        "display": "none"
    },
    "showtime-mname no-triangle:after": {
        "border": 0
    },
    "buy-cont": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "color": "#676767"
    },
    "buy-cont dd": {
        "marginTop": 6,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "dlbuy-info": {
        "marginTop": -10,
        "marginRight": 0,
        "marginBottom": -10,
        "marginLeft": 0
    },
    "dlbuy-info dt": {
        "float": "left",
        "width": 60
    },
    "dlbuy-info dt:after": {
        "content": "'：'"
    },
    "dlbuy-info light": {
        "color": "#e22331"
    },
    "dlbuy-info dd": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 60
    },
    "buy-machine": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "border": "0 solid #e3e3e3",
        "borderWidth": "1px 0"
    },
    "buy-machine img": {
        "float": "right",
        "paddingTop": 22,
        "paddingRight": 16,
        "paddingBottom": 22,
        "paddingLeft": 16,
        "background": "#FFF"
    },
    "buy-machine img img": {
        "verticalAlign": "top"
    },
    "buy-machine info": {
        "marginRight": 104,
        "paddingTop": 14,
        "paddingRight": 14,
        "paddingBottom": 14,
        "paddingLeft": 14,
        "minHeight": 185,
        "background": "#FFF"
    },
    "buy-machine hideDisplay": {
        "display": "none"
    },
    "buy-machine info2": {
        "marginRight": 0,
        "minHeight": 0,
        "marginBottom": 180
    },
    "buy-machine info2 p": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "buy-machine info2 hr": {
        "opacity": 0.3
    },
    "buy-machine h3": {
        "fontSize": 16
    },
    "buy-machine get-ticket": {
        "marginTop": 14,
        "paddingTop": 14,
        "borderTop": "1px solid #E2E2E2"
    },
    "buy-machine p": {
        "paddingTop": 14,
        "lineHeight": 1.5
    },
    "showtime mcolor": {
        "color": "#2eb6a8"
    },
    "movie mcolor": {
        "color": "#2eb6a8"
    },
    "orders mcolor": {
        "color": "#2eb6a8"
    },
    "showtime mbg": {
        "background": "#2eb6a8"
    },
    "movie mbg": {
        "background": "#2eb6a8"
    },
    "orders mbg": {
        "background": "#2eb6a8"
    },
    "showtime mwbg": {
        "background": "#f6f4f0"
    },
    "movie mwbg": {
        "background": "#f6f4f0"
    },
    "orders mwbg": {
        "background": "#f6f4f0"
    },
    "showtime mbgcolor aselected": {
        "background": "#2eb6a8"
    },
    "movie mbgcolor aselected": {
        "background": "#2eb6a8"
    },
    "orders mbgcolor aselected": {
        "background": "#2eb6a8"
    },
    "showtime mbtn": {
        "color": "#fdb338",
        "background": "transparent",
        "border": "1px solid #fdb338"
    },
    "movie mbtn": {
        "color": "#fdb338",
        "background": "transparent",
        "border": "1px solid #fdb338"
    },
    "orders mbtn": {
        "color": "#fdb338",
        "background": "transparent",
        "border": "1px solid #fdb338"
    },
    "showtime mdbtn": {
        "color": "#666",
        "background": "transparent",
        "border": "1px solid #666"
    },
    "movie mdbtn": {
        "color": "#666",
        "background": "transparent",
        "border": "1px solid #666"
    },
    "orders mdbtn": {
        "color": "#666",
        "background": "transparent",
        "border": "1px solid #666"
    },
    "showtime mbtn-trans": {
        "display": "inline-block",
        "color": "#2bb2a3",
        "border": "1px solid #2bb2a3",
        "paddingTop": 5,
        "paddingRight": 8,
        "paddingBottom": 5,
        "paddingLeft": 8,
        "borderRadius": 4,
        "fontSize": 14
    },
    "movie mbtn-trans": {
        "display": "inline-block",
        "color": "#2bb2a3",
        "border": "1px solid #2bb2a3",
        "paddingTop": 5,
        "paddingRight": 8,
        "paddingBottom": 5,
        "paddingLeft": 8,
        "borderRadius": 4,
        "fontSize": 14
    },
    "orders mbtn-trans": {
        "display": "inline-block",
        "color": "#2bb2a3",
        "border": "1px solid #2bb2a3",
        "paddingTop": 5,
        "paddingRight": 8,
        "paddingBottom": 5,
        "paddingLeft": 8,
        "borderRadius": 4,
        "fontSize": 14
    },
    "showtime mborder": {
        "borderColor": "#FFF"
    },
    "movie mborder": {
        "borderColor": "#FFF"
    },
    "orders mborder": {
        "borderColor": "#FFF"
    },
    "showtime showtime-tuangou": {
        "background": "#FFF",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#333"
    },
    "showtime showtime-tuangou dl": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "hidden"
    },
    "showtime showtime-tuangou dt": {
        "paddingTop": 8,
        "paddingRight": 14,
        "paddingBottom": 8,
        "paddingLeft": 14,
        "border": "1px solid #cac4b8",
        "borderWidth": "1px 0",
        "fontSize": 14
    },
    "showtime showtime-tuangou dd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "showtime showtime-tuangou list": {
        "borderTop": "1px solid #cac4b8",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 0
    },
    "showtime showtime-tuangou list p": {
        "height": 42,
        "overflow": "hidden"
    },
    "showtime showtime-tuangou first": {
        "border": 0
    },
    "showtime showtime-tuangou more": {
        "color": "#2eb6a8",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px solid #cac4b8",
        "borderWidth": "1px 0",
        "position": "relative"
    },
    "showtime showtime-tuangou more:after": {
        "content": "",
        "display": "inline-block",
        "border": "0 solid #2eb6a8",
        "borderWidth": "0 0 1px 1px",
        "marginTop": -5,
        "width": 8,
        "height": 8,
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)",
        "position": "absolute",
        "right": 10,
        "top": "50%"
    },
    "showtime showtime-tuangou price strong": {
        "fontSize": 24,
        "color": "#2eb6a8"
    },
    "showtime showtime-tuangou price del": {
        "textDecoration": "line-through",
        "marginLeft": 6,
        "color": "#666"
    },
    "showtime showtime-tuangou price buy": {
        "float": "right"
    },
    "showtime mwbg opt": {
        "display": "none"
    },
    "movie movie-comments mbg:after": {
        "borderColor": "#2eb6a8",
        "borderRightColor": "#FFF"
    },
    "movie mp-more-ajax mcolor": {
        "color": "#2eb6a8"
    },
    "movie mp-more-ajax mcolor:after": {
        "borderColor": "#2eb6a8"
    },
    "orders mtab": {
        "marginTop": 15,
        "marginRight": 10,
        "marginBottom": 15,
        "marginLeft": 10,
        "border": "1px solid #666",
        "height": 30
    },
    "orders mtab li": {
        "background": "#f8f8f8"
    },
    "orders mtab li a": {
        "color": "#666",
        "lineHeight": 30
    },
    "orders mtab li aselected": {
        "background": "#666",
        "color": "#FFF"
    },
    "orders mtab li aselected:after": {
        "border": 0
    }
});