try {
    $("<link>").attr({href: "https://cdn.jsdelivr.net/gh/dbconf/cdn-cloud@1.0.31/waifu.min.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    
    $.ajax({url: "https://cdn.jsdelivr.net/gh/dbconf/cdn-cloud@1.0.31/waifu-tips.min.js", dataType:"script", cache: true, success: function() {
        $.ajax({url: "https://cdn.jsdelivr.net/gh/dbconf/cdn-cloud@latest/live2d.min.js", dataType:"script", cache: true, success: function() {
            /* 可直接修改部分参数 */
            
            live2d_settings['modelId'] = 6;                  // 默认模型 ID
            live2d_settings['modelTexturesId'] = 2;          // 默认材质 ID
            live2d_settings['modelStorage'] = false;         // 不储存模型 I
            
             /*  在 initModel 前添加 */
            initModel("https://cdn.jsdelivr.net/gh/dbconf/cdn-cloud@latest/waifu-tips.json");
        }});
    }});
} catch(err) { console.log("[Error] JQuery is not defined.") }
