function bclick(val)
{  console.log(val)
   document.getElementById("screen").value=document.getElementById("screen").value+val/*value+=val is used to input new no in screen without removing the previous no   */
}
function clearc(val)
{
    document.getElementById("screen").value="";
}
function mulclick()
{
  var text=Document.getElementById("screen").value
  var result=eval(text)
  document.getElementById("screen").value=result
}

