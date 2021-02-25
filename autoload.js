try {
    $("<link>").attr({href: "waifu.min.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    
    $.ajax({url: "waifu-tips.min.js", dataType:"script", cache: true, success: function() {
        $.ajax({url: "live2d.min.js", dataType:"script", cache: true, success: function() {
            /* 可直接修改部分参数 
            
            live2d_settings['modelAPI']             = '//live2d.fghrsh.net/api/';   // 自建 API 修改这里
            live2d_settings['modelId']              = 6;                 // 默认模型 ID
            live2d_settings['modelTexturesId']      = 2;                 // 默认材质 ID
            live2d_settings['modelStorage']         = false;             // 不储存模型 I
            live2d_settings['waifuMinWidth']        = '500px';           // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
            live2d_settings['waifuEdgeSide']        = 'left:50';        // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
            live2d_settings['waifuDraggable']       = 'axis-x';       // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
            
               在 initModel 前添加 */
            initModel("waifu-tips.json");
        }});
    }});
} catch(err) { console.log("[Error] JQuery is not defined.") }
