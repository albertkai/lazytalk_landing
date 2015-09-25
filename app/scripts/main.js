$(function(){

    $(document).ready(function(){

        $('body').addClass('_ready')

    })

    // Detect mobile with response.js library

    var isMobile = Response.deviceW() < 767

    // Setting nice ios-like scrolling for mobile

    if (isMobile) $('html').niceScroll()

    // Setting locale (only russian and english versions now)

    var lang = window.navigator.userLanguage || window.navigator.language

    lang = (function(){
        if (lang === 'ru') {
            return 'ru'
        } else {
            return 'en'
        }
    })();

    $.i18n({
        locale: lang
    });

    $.i18n().load().then(function(){
        $('body').i18n()
    })


    $('.lang-switch').on('click', function(){
        lang = $(this).text().toLowerCase()
        $.i18n({
            locale: lang
        });
        $.i18n().load().then(function(){
            $('body').i18n()
        })
    })


    // Scrolling Animation

    var controller = new ScrollMagic.Controller()


    // Why and top

    var topTween

    if (!isMobile) {
        topTween = new TimelineMax().add([
            TweenMax.to('#top .iphone', 1, {'y': '300', ease: Power0.easeNone}),
            TweenMax.to('#top article', 1, {'y': '300', scale: '.8', 'opacity': '0', ease: Power0.easeNone})
        ])
    }

    var circlesTween = new TimelineMax().add([
        TweenMax.from('.circles .graph .circle', 1, {'scale': '0.3', 'opacity': '0'}),
        TweenMax.from('.circles .graph p', 1, {'y': '200', 'opacity': '0', ease: Power0.easeNone})
    ])

    var topTextTween1 = TweenMax.from('#why .text1', 1, {'x': '120', 'opacity': '0'})
    var topTextTween2 = TweenMax.from('#why .text2', 1, {'x': '-120', 'opacity': '0'})
    var topHeaderTween = TweenMax.from('#why h2', 1, {scale: '1.5', y: '-70', opacity: 0})

    var tableTween = new TimelineMax()
    tableTween.add(TweenMax.staggerFrom('.table .t-row', 2, {opacity:0, x:100, ease:Power0.easeNone},.7))
    tableTween.add(TweenMax.from('.table .choice', 2, {opacity:0}))


    // How it works

    var howHeaderTween = TweenMax.from('#how h2', 1, {scale: '1.5', y: '-70', opacity: 0})
    var iPhoneTween = TweenMax.from('#how img', 1, {opacity: 0, x: '-100'})

    // Is it safe

    var safeHeaderTween = TweenMax.from('#safe h2', 1, {scale: '1.5', y: '-70', opacity: 0})
    var shieldTween = new TimelineMax().add([
        TweenMax.from('.shield .top', 1, {'y': '-70', 'opacity': '0'}),
        TweenMax.from('.shield .left', 1, {'x': '-70', y: '70', 'opacity': '0'}),
        TweenMax.from('.shield .right', 1, {'x': '70', y: '70', 'opacity': '0'})
    ])

    // Teaser

    var parallaxTween = TweenMax.from('#teaser > .pic', 1, {y: '-40%', ease:Power0.easeNone})

    if (isMobile){

        new ScrollMagic.Scene({duration: 200, triggerElement: '#why', offset: -150}).setTween(topHeaderTween).addTo(controller)
        new ScrollMagic.Scene({duration: 250, triggerElement: '#why', offset: 150}).setTween(circlesTween).addTo(controller)
        new ScrollMagic.Scene({duration: 500, triggerElement: '#why', offset: 650}).setTween(tableTween).addTo(controller)
        new ScrollMagic.Scene({duration: 200, triggerElement: '#how', offset: -150}).setTween(howHeaderTween).addTo(controller)
        new ScrollMagic.Scene({duration: 700, triggerElement: '#how'}).setTween(iPhoneTween).addTo(controller)
        new ScrollMagic.Scene({duration: 200, triggerElement: '#safe', offset: -150}).setTween(safeHeaderTween).addTo(controller)
        new ScrollMagic.Scene({duration: 350, triggerElement: '#safe', offset: 300}).setTween(shieldTween).addTo(controller)
        new ScrollMagic.Scene({duration: $(window).height(), triggerElement: '#teaser', offset: $(window).height() / 2 * -1}).setTween(parallaxTween).addTo(controller)

    } else {

        new ScrollMagic.Scene({duration: $(window).height(), triggerElement: '#top', offset: $(window).height() / 2}).setTween(topTween).addTo(controller)
        new ScrollMagic.Scene({duration: 400, triggerElement: '#why'}).setTween(circlesTween).addTo(controller)
        new ScrollMagic.Scene({duration: 500, triggerElement: '#why', offset: $(window).height() / 3 * -1}).setTween(topHeaderTween).addTo(controller)
        new ScrollMagic.Scene({duration: 500, triggerElement: '#why', offset: 100}).setTween(topTextTween1).addTo(controller)
        new ScrollMagic.Scene({duration: 700, triggerElement: '#why', offset: 400}).setTween(tableTween).addTo(controller)
        new ScrollMagic.Scene({duration: 500, triggerElement: '#why', offset: 500}).setTween(topTextTween2).addTo(controller)
        new ScrollMagic.Scene({duration: 500, triggerElement: '#how', offset: $(window).height() / 3 * -1}).setTween(howHeaderTween).addTo(controller)
        new ScrollMagic.Scene({duration: 700, triggerElement: '#how'}).setTween(iPhoneTween).addTo(controller)
        new ScrollMagic.Scene({duration: 500, triggerElement: '#safe', offset: $(window).height() / 3 * -1}).setTween(safeHeaderTween).addTo(controller)
        new ScrollMagic.Scene({duration: 500, triggerElement: '#safe'}).setTween(shieldTween).addTo(controller)
        new ScrollMagic.Scene({duration: $(window).height(), triggerElement: '#teaser', offset: $(window).height() / 2 * -1}).setTween(parallaxTween).addTo(controller)

    }

})
