#nowarn "211"

// Force load
#r "../bin/System.Web.Razor.dll"
if (typeof<System.Web.Razor.ParserResults>.Assembly.GetName().Version.Major <= 2) then
  failwith "Wrong System.Web.Razor Version loaded!"

#I "../bin/"
// Reference VS PowerTools, Razor and F# Formatting components
#r "RazorEngine.dll"
#r "FSharpVSPowerTools.Core.dll"
#r "FSharp.Formatting.Common.dll"
#r "FSharp.Markdown.dll"
#r "FSharp.Literate.dll"

// Ensure that FSharpVSPowerTools.Core.dll is loaded before trying to load FSharp.CodeFormat.dll
;;

#r "FSharp.CodeFormat.dll"
#r "FSharp.MetadataFormat.dll"

// Setup Logging for FSharp.Formatting and Yaaf.FSharp.Scripting
module Logging = FSharp.Formatting.Common.Log
type TraceOptions = System.Diagnostics.TraceOptions

// By default, we log to console only. Other modes are enabled by setting
// the `FSHARP_FORMATTING_LOG` environment variable.
let logToFile, logToConsole =
  match System.Environment.GetEnvironmentVariable("FSHARP_FORMATTING_LOG") with
  | "ALL" -> true, true
  | "NONE" -> false, false
  | "FILE_ONLY" -> true, false
  | _ -> false, true

try
  let allTraceOptions =
    TraceOptions.Callstack ||| TraceOptions.DateTime ||| TraceOptions.LogicalOperationStack |||
    TraceOptions.ProcessId ||| TraceOptions.ThreadId ||| TraceOptions.Timestamp
  let noTraceOptions = TraceOptions.None
  let svclogFile = "log\FSharp.Formatting.svclog"
  System.Diagnostics.Trace.AutoFlush <- true

  let setupListener listener =
    [ FSharp.Formatting.Common.Log.source
      Yaaf.FSharp.Scripting.Log.source ]
    |> Seq.iter (fun source ->
        source.Switch.Level <- System.Diagnostics.SourceLevels.All
        Logging.AddListener listener source)

  if logToConsole then
    Logging.ConsoleListener()
    |> Logging.SetupListener noTraceOptions System.Diagnostics.SourceLevels.Information
    |> setupListener

  if logToFile then
    if System.IO.File.Exists svclogFile then System.IO.File.Delete svclogFile
    Logging.SvclogListener svclogFile
    |> Logging.SetupListener allTraceOptions System.Diagnostics.SourceLevels.All
    |> setupListener

  // Test that everything works
  Logging.infof "FSharp.Formatting Logging setup done."
  Yaaf.FSharp.Scripting.Log.infof "Yaaf.FSharp.Scripting Logging setup done."
with e ->
  printfn "FSharp.Formatting Logging setup failed: %A" e