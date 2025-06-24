import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Emular __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const lastUpdate = {
  lastModified: new Date().toISOString()
};

fs.writeFileSync(
  path.join(__dirname, "public", "last-update.json"),
  JSON.stringify(lastUpdate, null, 2)
);

console.log("✅ Archivo last-update.json generado correctamente.");
