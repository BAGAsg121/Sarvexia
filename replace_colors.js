import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // --- CSS root variables rewrite ---
  if (filePath.endsWith('index.css')) {
    // backgrounds
    content = content.replace(
      '--ink:#000000;--deep:#050505;--surface:#111111;',
      '--ink:#000000;--deep:#060606;--surface:#0D0D0D;'
    );
    content = content.replace(
      '--panel:#161616;--panel2:#1A1A1A;',
      '--panel:#111111;--panel2:#171717;'
    );
    // accent: orange → white
    content = content.replace(
      '--gold:#FF4B00;--gold2:#FF6A00;--gold3:#A33000;--gold4:#FF8C40;',
      '--gold:#FFFFFF;--gold2:#E2E2E2;--gold3:#999999;--gold4:#F5F5F5;'
    );
    // purple → subtle gray
    content = content.replace(
      '--accent:#FF4B00;--green:#00CC66;--red:#FF3D00;--purple:#555555;',
      '--accent:#FFFFFF;--green:#5FD68A;--red:#FF4D4D;--purple:#888888;'
    );
    // text: keep plat/frost near white
    content = content.replace(
      '--plat:#8A9BB0;--frost:#C8D4E8;--white:#EEF2FA;',
      '--plat:#B0B0B0;--frost:#E0E0E0;--white:#FFFFFF;'
    );
    // scrollbar
    content = content.replace('::-webkit-scrollbar-thumb{background:var(--gold3)}', '::-webkit-scrollbar-thumb{background:#444}');
    // body font: switch to Inter
    content = content.replace("font-family:'Cormorant Garamond',serif;", "font-family:'Inter','DM Sans',sans-serif;");
    // headline font overrides: keep Bebas Neue for large statement headings, just tweak colors
    // selection highlight
    content = content.replace('background:rgba(255,75,0,.22);color:var(--gold2)', 'background:rgba(255,255,255,.12);color:var(--white)');
  }

  // --- Global hex/rgb swaps: orange → white/light ---
  // hardcoded orange rgb
  content = content.replaceAll('255,75,0', '255,255,255');
  content = content.replaceAll('255, 75, 0', '255, 255, 255');
  // hex oranges
  content = content.replaceAll('#FF4B00', '#FFFFFF');
  content = content.replaceAll('#FF6A00', '#E2E2E2');
  content = content.replaceAll('#A33000', '#666666');
  content = content.replaceAll('#FF8C40', '#F5F5F5');
  content = content.replaceAll('#FF4B00'.toLowerCase(), '#ffffff');
  // dashboard accent (any remaining cyan or orange)
  content = content.replaceAll('FF4B00', 'FFFFFF');
  // dim orange rgba opacities → white equivalents
  content = content.replaceAll('rgba(255,75,0,', 'rgba(255,255,255,');
  content = content.replaceAll('rgba(255, 75, 0,', 'rgba(255, 255, 255,');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed:', filePath);
}

function scanDir(dir) {
  const stat = fs.statSync(dir);
  if (!stat.isDirectory()) {
    if (dir.endsWith('.tsx') || dir.endsWith('.ts') || dir.endsWith('.css') || dir.endsWith('.js')) {
      if (!dir.includes('replace_colors')) replaceInFile(dir);
    }
    return;
  }
  const files = fs.readdirSync(dir);
  for (const file of files) {
    scanDir(path.join(dir, file));
  }
}

scanDir('c:\\Users\\Shlok\\Downloads\\Nythex\\project\\src');
console.log('\nOrbitX theme colors applied successfully!');
