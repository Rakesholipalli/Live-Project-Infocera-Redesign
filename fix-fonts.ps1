$projectDir = "c:\Users\rakes\Downloads\Infocera Redesign"
cd $projectDir

# Fix all HTML files recursively
Get-ChildItem -Path $projectDir -Filter "*.html" -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Fix ../../fonts.googleapis.com paths to https://fonts.googleapis.com
    $content = $content -replace '../../fonts\.googleapis\.com/index\.html', 'https://fonts.googleapis.com'
    $content = $content -replace '../../fonts\.gstatic\.com/index\.html', 'https://fonts.gstatic.com'
    $content = $content -replace '../../fonts\.googleapis\.com/css2c196\.css\?family=Orbitron:wght@700&amp;display=swap', 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap'
    $content = $content -replace '../../fonts\.googleapis\.com/css255ef\.css\?family=Exo:wght@700&amp;display=swap', 'https://fonts.googleapis.com/css2?family=Exo:wght@700&display=swap'
    $content = $content -replace '../../fonts\.googleapis\.com/css2046d\.css\?family=Inter:wght@400;500;600;700;800;900&amp;display=swap', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
    
    # Fix ../fonts.googleapis.com paths (for root-level files - should already be done but in case)
    $content = $content -replace '\.\./fonts\.googleapis\.com/index\.html', 'https://fonts.googleapis.com'
    $content = $content -replace '\.\./fonts\.gstatic\.com/index\.html', 'https://fonts.gstatic.com'
    
    Set-Content -Path $_.FullName -Value $content
    Write-Host "Fixed: $($_.FullName)"
}

Write-Host "All font links have been fixed!"
