window.onload = function () {
    var point = 0;
    var valor = 1;
    var moneyCost = 50;
    var nivel = 0;

document.getElementById("pizza").addEventListener("click",function () {
    point = point + valor;
    document.getElementById("point").innerText=point
  });
  document.getElementById("upgrade").addEventListener("click",function () {
    if(point>=moneyCost){point = point - moneyCost;valor++;
    moneyCost=moneyCost+10;
    document.getElementById("money").innerText=moneyCost
    nivel++;
    document.getElementById("point").innerText=point;
    document.getElementById("nivel").innerText=nivel
}
  });
}