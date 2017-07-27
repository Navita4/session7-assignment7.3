function counter()
{
   var num = 1;
    function get()
    {
        return num++;
    }
    return get;
}
var g=counter();
console.log(g);
console.log(g());
console.log(g());
console.log(g());
console.log(g());
console.log(g());
console.log(g());
console.log(g());
console.log(g());
console.log(g());

