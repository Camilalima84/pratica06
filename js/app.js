const search = document.querySelector("#search")
const search = document.querySelector("#pesquisar")

search.onclick = function(e){
    e.preventDefault()
    let searchString = document.querySelector("#searchString").Value;
    let filterType = document.querySelector("input[name='searchfilter']:checked").Value;

    if(filterType === "all")alert("Busca geral por" + searchString)
    else if (filterType === "cod") alert("Busca pelo código por " + searchString)
    else if (filterType === "mat") alert("Busca pela matrícula por " + searchString)
    else alert("Busca pelo nome por " + searchStri
}

