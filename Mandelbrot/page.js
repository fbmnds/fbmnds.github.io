var Program__width, Program__showSet$, Program__minY, Program__minX, Program__maxY, Program__maxX, Program__maxIter, Program__main$, Program__iteratePoint$, Program__iterCountToColor$, Program__height, Program__get_width$, Program__get_minY$, Program__get_minX$, Program__get_maxY$, Program__get_maxX$, Program__get_maxIter$, Program__get_height$, Program__getIterationCount$, Program__getCoordColor$, Complex___ctor$, Color___ctor$;
Color___ctor$ = (function(r,g,b,a)
{
    var __this = this;
    __this.r = r;
    __this.g = g;
    __this.b = b;
    __this.a = a;
});
Complex___ctor$ = (function(r,i)
{
    var __this = this;
    __this.r = r;
    __this.i = i;
});
Program__getCoordColor$ = (function(x,y)
{
    var p = (new Complex___ctor$((((x * (Program__maxX - Program__minX)) / Program__width) + Program__minX), (((y * (Program__maxY - Program__minY)) / Program__height) + Program__minY)));
    var i = Program__getIterationCount$(p);
    return Program__iterCountToColor$(i);
});
Program__getIterationCount$ = (function(p)
{
    var z = p;
    var i = 0;
    while (((i < Program__maxIter) && (((z.r * z.r) + (z.i * z.i)) < 4.000000)))
    {
      z = Program__iteratePoint$(p, z);
      null;
      i = (i + 1);
      null;
    };
    return i;
});
Program__get_height$ = (function()
{
    return 800;
});
Program__get_maxIter$ = (function()
{
    return 512;
});
Program__get_maxX$ = (function()
{
    return 0.500000;
});
Program__get_maxY$ = (function()
{
    return 1.400000;
});
Program__get_minX$ = (function()
{
    return -2.100000;
});
Program__get_minY$ = (function()
{
    return -1.400000;
});
Program__get_width$ = (function()
{
    return 1000;
});
Program__iterCountToColor$ = (function(i)
{
    var _i = (Program__maxIter - i);
    return (new Color___ctor$(0, (_i % 256), (100 * (_i / 256)), 255));
});
Program__iteratePoint$ = (function(s,p)
{
    return (new Complex___ctor$(((s.r + (p.r * p.r)) - (p.i * p.i)), (s.i + ((2.000000 * p.i) * p.r))));
});
Program__main$ = (function(unitVar0)
{
    return Program__showSet$();
});
Program__showSet$ = (function(unitVar0)
{
    var ctx = ((((window.document).getElementsByTagName("canvas"))[0]).getContext("2d"));
    var img = (ctx.createImageData(Program__width, Program__height));
    for (var _164 = 0; _164 <= (Program__height - 1); _164++)
    {
      (function(y)
      {
        for (var x = 0; x <= (Program__width - 1); x++)
        {
          var index = ((x + (y * Program__width)) * 4);
          var color = Program__getCoordColor$(x, y);
          (img.data)[(index + 0)] = color.r;
          null;
          (img.data)[(index + 1)] = color.g;
          null;
          (img.data)[(index + 2)] = color.b;
          null;
          (img.data)[(index + 3)] = color.a;
          null;
        };
      })(_164);
    };
    return (ctx.putImageData(img, 20.000000, 20.000000));
});
Program__width = Program__get_width$();
Program__height = Program__get_height$();
Program__maxX = Program__get_maxX$();
Program__minX = Program__get_minX$();
Program__maxY = Program__get_maxY$();
Program__minY = Program__get_minY$();
Program__maxIter = Program__get_maxIter$();
Program__main$()