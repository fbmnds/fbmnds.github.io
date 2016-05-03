// --------------------------------------------------------------------------------------
// Builds the documentation from `.fsx` and `.md` files in the 'docs/content' directory
// (the generated documentation is stored in the 'docs/output' directory)
// --------------------------------------------------------------------------------------

// Web site location for the generated documentation
let website = @"https://fbmnds.github.io"


let githubLink = "http://github.com/tpetricek/FSharp.Formatting"

// Specify more information about your project
let info =
  [ "doc-title", "OpenGL 3.1 2D with F#"
    "doc-author", "fbmnds"
    "doc-description", "Scripting OpenGL 3.1 2D with F# using WPF and SharpGL" ]


// --------------------------------------------------------------------------------------
// For typical project, no changes are needed below
// --------------------------------------------------------------------------------------


#I "../bin/"
#r "NuGet.Core.dll"
#r "FakeLib.dll"
open Fake
open System.IO
open Fake
open Fake.FileHelper

#load "FSharp.Formatting.fsx"

open FSharp.Literate

let root = "/"

System.IO.Directory.SetCurrentDirectory (__SOURCE_DIRECTORY__)

// Paths with template/source/output locations
let content        = @".\content"
let outputdir      = @".\www"
let templates      = @"templates"

let input         = content   @@ "SharpGLTemplate.fsx" // ../content\SharpGLTemplate.fsx
let templateFile  = "docpage.cshtml" // Some "../../misc/templates/docpage.cshtml"
let output        = outputdir @@ "SharpGLTemplate.html"  // Some "../output\.\SharpGLTemplate.html"
//let fsiEvaluator = None//lazy (Some (FsiEvaluator() :> IFsiEvaluator)) // Some FSharp.Literate.FsiEvaluator
let replacements = //("root", website)::info
  [("doc-title",       "Scripting OpenGL with F#");
   ("doc-author",      "fbmnds");
   ("doc-description", "Scripting OpenGL 3.1 2D with F# using WPF and SharpGL")]
let includeSource = true
let layoutRoots = [ templates; templates @@ "reference" ]
let generateAnchors = true
//assemblyReferences <null>
//customizeDocument <null>

// let fsiEvaluator = lazy (Some (FsiEvaluator() :> IFsiEvaluator))

// Build documentation from `fsx` and `md` files in `docs`
Literate.ProcessScriptFile( input = content @@ "SharpGLTemplate.fsx",
                            templateFile = templateFile,
                            output = outputdir @@ "SharpGLTemplate.html",
                            //format = format
                            //fsiEvaluator = fsiEvaluator,
                            replacements = replacements,
                            includeSource = includeSource,
                            layoutRoots = layoutRoots,
                            generateAnchors = generateAnchors )

Literate.ProcessScriptFile( input = content @@ "codeformat.fsx",
                            templateFile = templateFile,
                            output = outputdir @@ "codeformat.html",
                            //format = format
                            //fsiEvaluator = fsiEvaluator,
                            replacements = replacements,
                            includeSource = includeSource,
                            layoutRoots = layoutRoots,
                            generateAnchors = generateAnchors )