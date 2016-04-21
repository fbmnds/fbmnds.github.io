var UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32, TupleInt32_Int32, Seq__Unfold$Int32__Int32_Int32_Int32, Seq__FromFactory$Int32_Int32, Range__oneStep$Int32_Int32, Range__customStep$Int32__Int32_Int32_Int32, Program__width, Program__showSet$, Program__op_Dynamic$HTMLButtonElement_HTMLButtonElement_, Program__minY, Program__minX, Program__maxY, Program__maxX, Program__maxIter, Program__main$, Program__iteratePoint$, Program__iterCountToColor$, Program__height, Program__get_width$, Program__get_minY$, Program__get_minX$, Program__get_maxY$, Program__get_maxX$, Program__get_maxIter$, Program__get_height$, Program__getIterationCount$, Program__getCoordColor$, Option__IsSome$Int32_Int32, Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_, Option__GetValue$Int32_Int32, Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_, Option__GetValue$CancellationToken_CancellationToken_, CreateEnumerable_1_Int32___ctor$Int32, Complex___ctor$, Color___ctor$, CancellationToken___ctor$, CancellationToken__ThrowIfCancellationRequested$, Async__protectedCont$Unit_Unit_, Async__invokeCont$Unit_Unit_, Async__get_async$, Async_1_Unit__ContUnit_, Async_1_StartImmediate$, AsyncParams_1_Unit___ctor$Unit_, AsyncParamsAux___ctor$, AsyncBuilder___ctor$, AsyncBuilder__Zero$, AsyncBuilder__While$, AsyncBuilder__Return$Unit_Unit_, AsyncBuilder__For$Int32_Int32, AsyncBuilder__Delay$Unit_Unit_, AsyncBuilder__Combine$Unit_Unit_, AsyncBuilder__Bind$Unit__Unit_Unit__Unit_;
AsyncBuilder__Bind$Unit__Unit_Unit__Unit_ = (function(x,_arg1,f)
{
    var v = _arg1.Item;
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      var cont = (function(a)
      {
        var patternInput = f(a);
        var r = patternInput.Item;
        return r(k);
      });
      return v((new AsyncParams_1_Unit___ctor$Unit_(cont, k.Aux)));
    }));
});
AsyncBuilder__Combine$Unit_Unit_ = (function(x,work1,work2)
{
    return AsyncBuilder__Bind$Unit__Unit_Unit__Unit_(x, work1, (function(unitVar0)
    {
      return work2;
    }));
});
AsyncBuilder__Delay$Unit_Unit_ = (function(x,f)
{
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      var _437;
      var patternInput = f(_437);
      var r = patternInput.Item;
      return r(k);
    }));
});
AsyncBuilder__For$Int32_Int32 = (function(x,seq,body)
{
    var enumerator = seq.GetEnumerator();
    return AsyncBuilder__While$(x, (function(unitVar0)
    {
      return enumerator.MoveNext();
    }), AsyncBuilder__Delay$Unit_Unit_(x, (function(unitVar0)
    {
      return body(enumerator.get_Current());
    })));
});
AsyncBuilder__Return$Unit_Unit_ = (function(x,v)
{
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      return Async__invokeCont$Unit_Unit_(k, v);
    }));
});
AsyncBuilder__While$ = (function(x,cond,body)
{
    var _445;
    if (cond(_445)) 
    {
      return AsyncBuilder__Bind$Unit__Unit_Unit__Unit_(x, body, (function(unitVar0)
      {
        return AsyncBuilder__While$(x, cond, body);
      }));
    }
    else
    {
      var _472;
      return AsyncBuilder__Return$Unit_Unit_(x, _472);
    };
});
AsyncBuilder__Zero$ = (function(x,unitVar1)
{
    return Async__protectedCont$Unit_Unit_((function(k)
    {
      var _292;
      return Async__invokeCont$Unit_Unit_(k, _292);
    }));
});
AsyncBuilder___ctor$ = (function(unitVar0)
{
    {};
});
AsyncParamsAux___ctor$ = (function(StackCounter,ExceptionCont,CancelledCont,CancellationToken)
{
    var __this = this;
    __this.StackCounter = StackCounter;
    __this.ExceptionCont = ExceptionCont;
    __this.CancelledCont = CancelledCont;
    __this.CancellationToken = CancellationToken;
});
AsyncParams_1_Unit___ctor$Unit_ = (function(Cont,Aux)
{
    var __this = this;
    __this.Cont = Cont;
    __this.Aux = Aux;
});
Async_1_StartImmediate$ = (function(workflow,cancellationToken)
{
    var _493;
    if ((cancellationToken.Tag == 1.000000)) 
    {
      var v = Option__GetValue$CancellationToken_CancellationToken_(cancellationToken);
      _493 = v;
    }
    else
    {
      _493 = (new CancellationToken___ctor$({Tag: 0.000000}));
    };
    var token = _493;
    var f = workflow.Item;
    var aux = (new AsyncParamsAux___ctor$({contents: 0}, (function(value)
    {
      var ignored0 = value;
    }), (function(value)
    {
      var ignored0 = value;
    }), token));
    return f((new AsyncParams_1_Unit___ctor$Unit_((function(value)
    {
      var ignored0 = value;
    }), aux)));
});
Async_1_Unit__ContUnit_ = (function(Item)
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Cont";
    __this.Item = Item;
});
Async__get_async$ = (function()
{
    return (new AsyncBuilder___ctor$());
});
Async__invokeCont$Unit_Unit_ = (function(k,value)
{
    return k.Cont(value);
});
Async__protectedCont$Unit_Unit_ = (function(f)
{
    return (new Async_1_Unit__ContUnit_((function(args)
    {
      CancellationToken__ThrowIfCancellationRequested$(args.Aux.CancellationToken);
      args.Aux.StackCounter.contents = (args.Aux.StackCounter.contents + 1);
      null;
      if ((args.Aux.StackCounter.contents > 1000)) 
      {
        args.Aux.StackCounter.contents = 0;
        null;
        return window.setTimeout((function(unitVar0)
        {
          try
          {
            return f(args);
          }
          catch(ex){
            return args.Aux.ExceptionCont(ex);
          };
        }), 1.000000);
      }
      else
      {
        try
        {
          return f(args);
        }
        catch(ex){
          return args.Aux.ExceptionCont(ex);
        };
      };
    })));
});
CancellationToken__ThrowIfCancellationRequested$ = (function(x,unitVar1)
{
    var matchValue = x.Cell;
    if ((matchValue.Tag == 1.000000)) 
    {
      var cell = Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_(matchValue);
      if (cell.contents) 
      {
        var _cell = Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_(matchValue);
        throw ("OperationCancelledException");
        return null;
      }
      else
      {
        ;
      };
    }
    else
    {
      ;
    };
});
CancellationToken___ctor$ = (function(Cell)
{
    var __this = this;
    __this.Cell = Cell;
});
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
CreateEnumerable_1_Int32___ctor$Int32 = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
Option__GetValue$CancellationToken_CancellationToken_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpRef_1_Boolean_FSharpRef_1_Boolean_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_ = (function(option)
{
    return option.Value;;
});
Option__IsSome$Int32_Int32 = (function(option)
{
    return ((option.Tag == 1.000000) && true);
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
    return 300;
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
    return 400;
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
    var go = Program__op_Dynamic$HTMLButtonElement_HTMLButtonElement_((window.document), "go");
    return (go.addEventListener("click", (function(_arg1)
    {
      Async_1_StartImmediate$(Program__showSet$(), {Tag: 0.000000});
      return null;
    })));
});
Program__op_Dynamic$HTMLButtonElement_HTMLButtonElement_ = (function(doc,name)
{
    return (doc.getElementById(name));
});
Program__showSet$ = (function(unitVar0)
{
    return AsyncBuilder__Delay$Unit_Unit_(Async__get_async$(), (function(unitVar)
    {
      var ctx = ((((window.document).getElementsByTagName("canvas"))[0]).getContext("2d"));
      var img = (ctx.createImageData(Program__width, Program__height));
      return AsyncBuilder__Combine$Unit_Unit_(Async__get_async$(), AsyncBuilder__For$Int32_Int32(Async__get_async$(), Range__oneStep$Int32_Int32(0, (Program__height - 1)), (function(_arg1)
      {
        var y = _arg1;
        return AsyncBuilder__For$Int32_Int32(Async__get_async$(), Range__oneStep$Int32_Int32(0, (Program__width - 1)), (function(_arg2)
        {
          var x = _arg2;
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
          return AsyncBuilder__Zero$(Async__get_async$());
        }));
      })), AsyncBuilder__Delay$Unit_Unit_(Async__get_async$(), (function(_unitVar)
      {
        (ctx.putImageData(img, 20.000000, 20.000000));
        return AsyncBuilder__Zero$(Async__get_async$());
      })));
    }));
});
Range__customStep$Int32__Int32_Int32_Int32 = (function(first,stepping,last)
{
    var zero = 0;
    return Seq__Unfold$Int32__Int32_Int32_Int32((function(x)
    {
      if ((((stepping > zero) && (x <= last)) || ((stepping < zero) && (x >= last)))) 
      {
        return {Tag: 1.000000, Value: (new TupleInt32_Int32(x, (x + stepping)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), first);
});
Range__oneStep$Int32_Int32 = (function(first,last)
{
    return Range__customStep$Int32__Int32_Int32_Int32(first, 1, last);
});
Seq__FromFactory$Int32_Int32 = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Int32___ctor$Int32(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _123;
        return __.factory(_123);
      })(impl, unitVar1);
    })};
});
Seq__Unfold$Int32__Int32_Int32_Int32 = (function(f,seed)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _101;
            return next(_101);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
TupleInt32_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32 = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
Program__width = Program__get_width$();
Program__height = Program__get_height$();
Program__maxX = Program__get_maxX$();
Program__minX = Program__get_minX$();
Program__maxY = Program__get_maxY$();
Program__minY = Program__get_minY$();
Program__maxIter = Program__get_maxIter$();
Program__main$()