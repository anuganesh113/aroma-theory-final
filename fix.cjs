const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove "import React from 'react';"
  content = content.replace(/import React from 'react';\n/g, '');
  
  // Change "import React, { ... } from 'react';" to "import { ... } from 'react';"
  content = content.replace(/import React, {/g, 'import {');
  
  // Fix MenuHighlights.tsx
  if (filePath.endsWith('MenuHighlights.tsx')) {
    content = content.replace(/import { menuItems, MenuItem }/g, "import { menuItems }");
  }
  
  // Fix Footer.tsx
  if (filePath.endsWith('Footer.tsx')) {
    content = content.replace(/import { Instagram, Facebook, Twitter } from 'lucide-react';\n/, '');
    
    // Replace the icon elements with SVG paths
    content = content.replace(/<Instagram size=\{20\} \/>/g, `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`);
    
    content = content.replace(/<Facebook size=\{20\} \/>/g, `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`);
    
    content = content.replace(/<Twitter size=\{20\} \/>/g, `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`);
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      fixFile(fullPath);
    }
  }
}

traverse(srcDir);
console.log('Fixed files');
