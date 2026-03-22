import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import simpleHtmlPlugin from "vite-plugin-simple-html";
import cssnano from "cssnano";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
    base: "./",
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
            template: {
                compilerOptions: {
                    isCustomElement: tag => tag === "permission" || tag.includes('-')
                }
            }
        }),
        simpleHtmlPlugin({
            minify: {
                minifyJs: true,
                sortSpaceSeparatedAttributeValues: true,
                sortAttributes: true,
                tagOmission: false
            }
        })
    ],
    css: {
        postcss: {
            plugins: [
                cssnano({
                    preset: [
                        "advanced",
                        { zindex: false }
                    ]
                }),
                postcssPresetEnv({
                    stage: 0,
                    browsers: ["IE >= 1", "Firefox >= 1", "Chrome >= 1", "Safari >= 1", "Opera >= 1"]
                })
            ]
        },
        devSourcemap: true
    },
    build: {
        outDir: "dist",
        cssMinify: false,
        sourcemap: true,
        minify: "terser"
    }
});