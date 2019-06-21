const webpack = require('webpack');
const config = require('./webpack.prod.conf');
const rm = require('rimraf');
const path = require("path");
const ora = require('ora');
const chalk = require('chalk')
const spinner = ora('building for production...');
spinner.start();
rm(path.join(path.resolve(__dirname, "../dist"), 'static'), err => {
  if (err) throw err
  webpack(config, (err, stats) => {
    spinner.stop()
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n')
  
      if (stats.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'))
        process.exit(1)
      }
      console.log(chalk.cyan('  Build complete.\n'))
  });

});