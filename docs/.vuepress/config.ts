import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { getDirname, path } from "@vuepress/utils";
import { sidebar_date } from "./configs";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

const __dirname=getDirname( import.meta.url );

export default {
    base: process.env.DEPLOY_ENV==='GITHUB'? '/treasure_test/':'/',
    port: 23355,
    title: "神秘的宝贝",
    head: [ [ { rel: "stylesheet", href: "/styles/index.scss" } ] ],
    theme: defaultTheme( {
        editLink: false,
        // colorMode: 'dark',
        colorModeSwitch: true,
        navbar: [
            {
                text: "首页",
                link: "/",
            },
        ],
        logo: "/img/logo.png",
        repo: "SuperTreasure/treasure",
        sidebar: sidebar_date,
    } ),
    plugins: [
        registerComponentsPlugin( {
            // 配置项
            componentsDir: path.resolve( __dirname, "./components" ),
        } ),
    ],
    // bundler: viteBundler({
    //   viteOptions: {},
    //   vuePluginOptions: {},
    // }),
    // bundler: webpackBundler({
    //   postcss: {},
    //   vue: {},
    // }),
    bundler:
        process.env.DOCS_BUNDLER==="webpack"
            ? webpackBundler()
            :viteBundler(),
};
