import { defineConfig } from 'vite';
import path from 'path';
import packageJson from './package.json';
import typescript from 'rollup-plugin-typescript2'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        {
            ...typescript({
                tsconfig:'tsconfig.json',
                // include:['.']
            }),
            apply:'build'
        }
    ],
    esbuild: {
        jsxInject: `import React from 'react'`
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src')
        }
    },
    build: {
        lib:{
            entry:path.resolve(__dirname,'src/index.ts'),
            name:packageJson.name,
            fileName:format=>`${packageJson.name}.${format}.js`
        },
        rollupOptions:{
            external:['react'],
            output:{
                globals:{
                    airHooks:'airHooks'
                }
            }
        },
        terserOptions: {
            parse: {
                ecma: 2020
            },
            compress: {
                ecma: 5,
                comparisons: false,
                inline: 2
            },
            mangle: {
                safari10: true
            },
            keep_classnames: false,
            keep_fnames: false,
            output: {
                ecma: 5,
                comments: false,
                ascii_only: true
            }
        }
    }
});
