module.exports = config => {
  
  config.setUseGitIgnore(false);
  config.addWatchTarget("./src/_tmp/style.css");
  config.addPassthroughCopy({ "./src/_tmp/style.css": "./style.css" });
  config.addPassthroughCopy('./src/images/');

  return {
    dir: {
      input: 'src',
      output: 'dist' 
    }
  };
};