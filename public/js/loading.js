(function() {
    if (typeof window === 'undefined') {
        return;
    }

    // console.log(sessionStorage.getItem('indexLoaded'))
    var watchDog = 30
    var timerLoadingCheck = setInterval(() => {
        // console.log(document.readyState)
        watchDog -= 1
        if (document.readyState === 'complete' || watchDog < 0) {
            removeLoading()
        }
    }, 500)

    function removeLoading() {
        // 增加首页加载完成标记
        sessionStorage.setItem('indexLoaded', true)
        var eleLoading = document.getElementById('loading');
        var eleMainCont = document.getElementById('main-cont');
        clearInterval(timerLoadingCheck)
        if (eleMainCont) {
            eleMainCont.style.display = 'block'
        }
        if (eleLoading) {
            eleLoading.style.top = '-100%'
            setTimeout(() => {
                eleLoading.remove()
            }, 1000)
        }
    }
})()
