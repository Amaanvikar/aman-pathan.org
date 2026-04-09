#!/usr/bin/env node
// Run this once: node scripts/create-placeholder.js
// Creates a minimal 1x1 PNG for the manifest icon placeholder
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// 1×1 navy PNG (base64)
const png = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64',
);
fs.writeFileSync(path.join(dir, 'profile.png'), png);
