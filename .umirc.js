
// ref: https://umijs.org/config/
export default {
  targets: {
    chrome: 49,
    firefox: 45,
    safari: 10,
    edge: 13,
    ie: 11,
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'github',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
}
