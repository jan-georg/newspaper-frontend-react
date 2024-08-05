import { defineConfig } from "orval"

export default defineConfig({
    newspaper: {
        input: "./openapi/openapi.yaml",
        output: {
            target: "./src/generated/newspaper.ts",
            mode: "tags-split"
        },
        hooks: {
            afterAllFilesWrite: "prettier --write"
        }
    }
})
