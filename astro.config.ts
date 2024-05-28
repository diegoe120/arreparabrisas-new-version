import { defineConfig } from 'astro/config';
import formDebug from "@astro-utils/forms/dist/integration.js";

export default defineConfig({
    output: 'server',
    integrations: [formDebug]
});