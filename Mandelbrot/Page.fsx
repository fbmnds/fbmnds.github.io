#r @"..\..\packages\FunScript\FunScript.dll"
#r @"..\..\packages\FunScript\FunScript.Interop.dll"
#r @"..\..\packages\FSharp.Data\lib\net40\FSharp.Data.dll"
#r @"..\..\packages\FunScript.TypeScript.Binding.lib\lib\net40\FunScript.TypeScript.Binding.lib.dll"
#r @"..\..\packages\FunScript.TypeScript.Binding.jquery\lib\net40\FunScript.TypeScript.Binding.jquery.dll"

// ---
// header: Mandelbrot
// tagline: Using HTML5 canvas
// ---

[<ReflectedDefinition>]
module Program =
    open System.IO
    open FunScript
    open FunScript.TypeScript

    type Complex = { r : double; i : double }
    type Color = { r : int; g : int; b : int; a : int }

    let maxIter = 512

    let height = 300
    let width = 400

    let minX = -2.1
    let maxX = 0.5
    let minY = -1.4
    let maxY = 1.4

    let iteratePoint (s : Complex) (p : Complex) : Complex =
        { r = s.r + p.r*p.r - p.i*p.i; i = s.i + 2.0 * p.i * p.r }

    let getIterationCount (p : Complex) =
        let mutable z = p
        let mutable i = 0
        while i < maxIter && (z.r*z.r + z.i*z.i < 4.0) do
          z <- iteratePoint p z
          i <- i + 1
        i

    let iterCountToColor (i : int) : Color =
        let i = maxIter - i
        { r = 0; g = i % 256; b = 100 * (i / 256); a = 255 }

    let getCoordColor (x : int, y : int) : Color =
        let p = { r = float x * (maxX - minX) / float width + minX
                ; i = float y * (maxY - minY) / float height + minY }
        let i = getIterationCount p
        iterCountToColor i

    let showSet() =
        async{
            let ctx = Globals.document.getElementsByTagName_canvas().[0].getContext_2d()

            let img = ctx.createImageData(float width, float height)
            for y = 0 to height-1 do
                for x = 0 to width-1 do
                    let index = (x + y * width) * 4
                    let color = getCoordColor (x, y)
                    img.data.[index+0] <- float color.r
                    img.data.[index+1] <- float color.g
                    img.data.[index+2] <- float color.b
                    img.data.[index+3] <- float color.a
            ctx.putImageData(img, 20., 20.)
        }

    /// Dynamic operator that returns HTML element by ID
    let (?) (doc:Document) name :'R =
      doc.getElementById(name) :?> 'R

    /// Setup button event handler to start the rendering
    let main() =
      let go : HTMLButtonElement = Globals.document?go
      go.addEventListener_click(fun _ ->
        showSet() |> Async.StartImmediate; null)

    let code =
        Compiler.Compiler.Compile(
            // This argument is the quotation to compile
            <@ main() @>,
            // This argument tells the compiler not to wrap
            // the result in a return statement
            noReturn=true//,
            // This tells the compiler about the additional components
            // that are needed to compile the code. In this case,
            // these are the components that provide mappings for the
            // FSharp.Data type providers (incl. the WorldBank provider).
            //components = FunScript.Data.Components.DataProviders
            )

    let filePath = Path.Combine(__SOURCE_DIRECTORY__, @"page.js")
    File.WriteAllText(filePath, code)
    //do Runtime.Run(directory="Web")