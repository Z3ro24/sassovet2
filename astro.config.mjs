// astro.config.mjs

// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// ... (No necesitamos el tailwindConfig aquí si usamos el archivo de configuración)

// https://astro.build/config
export default defineConfig({
  output: "static", // ✅ así debe estar
  devToolbar: {
    enabled: false,
  },
  vite: {
    // CORRECCIÓN: Llamar a tailwindcss() sin argumentos
    plugins: [tailwindcss()],
  },
});
