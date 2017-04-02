var map = document.querySelector("#map");
var paths= document.querySelectorAll(".map__image a");
var links=document.querySelectorAll(".map__list a");

if(NodeList.prototype.forEach=== undefined){
    NodeList.prototype.forEach=function (callback) {
        [].forEach.call(this,callback)
    }
}

paths.forEach(function (path) {
    path.addEventListener('mouseenter',function (e) {
        var id = this.id.replace('region-','')

        map.querySelectorAll('.is-active').forEach(function (item) {
            item.classList.remove('is-active')
        })

        document.querySelector('#list-'+id).classList.add("is-active")
        document.querySelector('#region-'+id).classList.add("is-active")
    })

})