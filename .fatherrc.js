export default {
    entry: 'src/index.tsx',
    doc: {
        themeConfig: { mode: 'light' },
        base: '/your-repo',
        src: './src',
        files: '**/*.{md,markdown,mdx}',
        typescript: true
    },
    file: 'autohome',
    esm: {
        type: 'rollup',
        file: 'autohome1',
        mjs: true,
        minify: true,
        importLibToEs: true,
    },
    cjs: {
        type: 'rollup',
        file: 'autohome',
        lazy: false,
    },
    umd: {
        name: 'autohome'
    },
    autoprefixer: {
        browsers: [
            'ie>8',
            'Safari >= 6',
        ],
    },
    cssModules: {
        generateScopedName: 'autohome_[name]__[local]___[hash:base64:5]',
    },
    extractCSS: true,
    extraBabelPresets: [],
    extraBabelPlugins: [
        ['babel-plugin-import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }],
    ],
    extraPostCSSPlugins: [],
    extraRollupPlugins: [],
    disableTypeCheck: false,
    target: "browser",
    runtimeHelpers: true,
    replace: {
        VERSION: JSON.stringify(require('./package').version),
    },
    inject: {
        'window.foo': 'foo',
    },
    lessInRollupMode: {},
    lessInBabelMode: true,
    sassInRollupMode: {},
}