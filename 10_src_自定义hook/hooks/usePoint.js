import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function () {
    let point = reactive({
        x:0,
        y:0
    })


    function getPoint(e) {
            console.log(e.pageX,e.pageY)
            point.x = e.pageX
            point.y = e.pageY
    }
    onMounted(() => {
        window.addEventListener('click',getPoint)
        console.log('挂载完毕');
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click',getPoint)
        console.log('卸载之前');
    })

    // 封装后记得 导出 以及 return
    return point
}