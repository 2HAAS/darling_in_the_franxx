console.log(`%c

:::::::::     :::    ::::::::: :::       :::::::::::::::    ::: ::::::::  
:+:    :+:  :+: :+:  :+:    :+::+:           :+:    :+:+:   :+::+:    :+: 
+:+    +:+ +:+   +:+ +:+    +:++:+           +:+    :+:+:+  +:++:+        
+#+    +:++#++:++#++:+#++:++#: +#+           +#+    +#+ +:+ +#+:#:        
+#+    +#++#+     +#++#+    +#++#+           +#+    +#+  +#+#+#+#+   +#+# 
#+#    #+##+#     #+##+#    #+##+#           #+#    #+#   #+#+##+#    #+# 
######### ###     ######    ###########################    #### ########  

:::::::::::::::    ::: 
    :+:    :+:+:   :+: 
    +:+    :+:+:+  +:+ 
    +#+    +#+ +:+ +#+ 
    +#+    +#+  +#+#+# 
    #+#    #+#   #+#+# 
##############    #### 

::::::::::::::    ::::::::::::: 
    :+:    :+:    :+::+:        
    +:+    +:+    +:++:+        
    +#+    +#++:++#+++#++:++#   
    +#+    +#+    +#++#+        
    #+#    #+#    #+##+#        
    ###    ###    ############# 

:::::::::::::::::::     :::    ::::    ::::::    ::::::    ::: 
:+:       :+:    :+:  :+: :+:  :+:+:   :+::+:    :+::+:    :+: 
+:+       +:+    +:+ +:+   +:+ :+:+:+  +:+ +:+  +:+  +:+  +:+  
:#::+::#  +#++:++#: +#++:++#++:+#+ +:+ +#+  +#++:+    +#++:+   
+#+       +#+    +#++#+     +#++#+  +#+#+# +#+  +#+  +#+  +#+  
#+#       #+#    #+##+#     #+##+#   #+#+##+#    #+##+#    #+# 
###       ###    ######     ######    #######    ######    ### 


`, `color: #fff; padding: 5px 10px;`);


gsap.registerPlugin(ScrollTrigger);

gsap.to(".intro_text", {
    scrollTrigger: {
        trigger: ".intro_text",
        start: "center center",
        end: "+=600px center",
        scrub: true,
        pin: true,
        // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
    },

});

gsap.to('.hero_strelizia', {
    scrollTrigger: {
        trigger: '.hero_strelizia',
        start: '+=500vh center',
        end: 'bottom center',
        // pin: ".intro_text",
        scrub: true,
        // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
    },
    y: 500,
    opacity: 0,
    duration: 1,
});

gsap.to('.hiro_zero_two', {
    scrollTrigger: {
        trigger: '.hiro_zero_two',
        start: '-=300px center',
        end: 'top center',
        scrub: true,
        id: "zero_two",
        // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
    },
    y: "-50%",
    opacity: 0.3,
});

gsap.from('.anime_name', {
    scrollTrigger: {
        trigger: '.title_reveal',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
    },
    y: "500"
});

// first char first scene
gsap.to(".first_scene_first_char_face",{
    scrollTrigger: {
        trigger: ".first_scene_bg",
        start: "+=50% center",
        end: "75% center",
        scrub: true,
        id: "first_char",
        // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
    },
    animation: 'none',
    y: "285%",
    x: "25%",
    // scale: 0.5,
});

// first char second scene
gsap.to(".first_scene_first_char_face",{
    scrollTrigger: {
        trigger: ".first_scene_bg",
        start: "+=75% center",
        end: "bottom center",
        scrub: true,
        pin: true,
        id: "first_char",
        // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
    },
    x: "-100%",
});

// second char first scene
gsap.to(".first_scene_second_char_face",{
    scrollTrigger: {
        trigger: ".first_scene_bg",
        start: "+=50% center",
        end: "75% center",
        scrub: true,
        id: "second_char",
        // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
    },
    animation: 'none',
    y: "171.5%",
    x: "-25%",
    // scale: 0.45,
});

// second char second scene
gsap.to(".first_scene_second_char_face",{
    scrollTrigger: {
        trigger: ".first_scene_bg",
        start: "+=75% center",
        end: "bottom center",
        scrub: true,
        id: "second_char",
        // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
    },
    x: "100%",
});