
    $(function(){
        $(".color_wrap ul li").each(function(item) {
            var color = $(this).attr("data-color");
            $(this).css("backgroundColor", color);
            
        }) 
    
        $(".color_wrap ul li").each(function(item) {
            $(this).click(function(){
                $(this).parents(".product_item")
                .find(".color_wrap ul li").removeClass("active");
                $(this).addClass("active");
                
                var imgsrc = $(this).attr("data-src");
                $(this).parents(".product__content").find("img").attr("src", imgsrc);
            })
        })
    })

    