# Fetch Romestead wiki pages via MediaWiki API and save wikitext locally.
$ErrorActionPreference = 'Stop'
$api = 'https://romestead.wiki.gg/api.php'
$outDir = 'C:\Users\Administrator\WorkBuddy\Claw\romestead-astro\wiki-dump'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$pages = @(
  # Bosses
  'Cyclops', 'Talos', 'Talos Prototype', 'Pyzifax', 'Guardian of Minerva', 'Great Phoenix of Arabia', "Medusa's Lair",
  # Gods (+ quests/worship subpages)
  'Ceres', 'Ceres/Quests', 'Ceres/Worship',
  'Diana', 'Diana/Quests', 'Diana/Worship',
  'Mars', 'Mars/Quests', 'Mars/Worship',
  'Mercury', 'Mercury/Quests', 'Mercury/Worship',
  'Minerva', 'Minerva/Quests', 'Minerva/Worship',
  'Venus', 'Venus/Quests', 'Venus/Worship',
  'Vulcan', 'Vulcan/Quests', 'Vulcan/Worship',
  # Creatures / bestiary
  'Creatures', 'Mobs', 'List of NPCs', 'Bark-back',
  # Supporting context
  'Bosses', 'Gods', 'Biomes', 'Quests', 'Skills', 'Citizens', 'Professions'
)

$ok = 0; $fail = 0
foreach ($p in $pages) {
  $safe = ($p -replace '[/\\:*?"<>|]', '_')
  $target = Join-Path $outDir ($safe + '.wiki.txt')
  if (Test-Path $target) { $ok++; continue }
  $q = [uri]::EscapeDataString($p)
  $url = "$api`?action=parse&page=$q&prop=wikitext&format=json&formatversion=2"
  try {
    $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30
    $j = $r.Content | ConvertFrom-Json
    if ($j.parse -and $j.parse.wikitext) {
      [System.IO.File]::WriteAllText($target, $j.parse.wikitext, [System.Text.UTF8Encoding]::new($false))
      $ok++
      Write-Output "OK   $p"
    } else {
      $fail++
      Write-Output "FAIL $p (no wikitext in response)"
    }
  } catch {
    $fail++
    Write-Output "ERR  $p : $($_.Exception.Message)"
  }
  Start-Sleep -Milliseconds 300
}
Write-Output "---- done: $ok ok, $fail failed ----"
