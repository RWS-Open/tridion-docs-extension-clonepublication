# Get script folder (or set manually if running in console)
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition


# Paths
$dllPath       = Join-Path $scriptDir "\bin\Debug\net8.0\RWS.BackendExtension.ClonePublication.dll"
$manifestPath  = Join-Path $scriptDir "manifest.json"
Write-Host "manifestPath: $manifestPath"

# Define package structure
$packageRoot   = Join-Path $scriptDir "package\RWS.BackendExtension.ClonePublication"
$binExtension  = Join-Path $packageRoot "bin\extension"

# Destination zip path (same folder, same name)
$zipPath = "$packageRoot.zip"

# --- Step 1: Cleanup ---
if (Test-Path $packageRoot) {
    Remove-Item -Path $packageRoot -Recurse -Force
    Write-Host "Removed old package folder: $packageRoot"
}
if (Test-Path $zipPath) {
    Remove-Item -Path $zipPath -Force
    Write-Host "Removed old package zip: $zipPath"
}



# Ensure folders exist
$null = New-Item -ItemType Directory -Force -Path $binExtension

# Copy DLL into bin\extension
Copy-Item -Path $dllPath -Destination $binExtension -Force
Write-Host "Copied DLL to: $binExtension"

# Copy manifest.json into package root
Copy-Item -Path $manifestPath -Destination $packageRoot -Force
Write-Host "Copied manifest.json to: $packageRoot"


# Compress only the contents (not the parent folder)
Compress-Archive -Path (Join-Path $packageRoot "*") -DestinationPath $zipPath -Force

Write-Host "Package compressed (contents only) to: $zipPath" 