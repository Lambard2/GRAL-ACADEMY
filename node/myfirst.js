const fs = require('node:fs')
const path = require('node:path')


function dfs(folder, search){
  const files = fs.readdirSync(folder);
  for (const file of files){
    const nextPath = path.join(folder, file)
    // console.log(nextPath)
    if(fs.lstatSync(nextPath).isDirectory()){
      let result = dfs(nextPath, search)
      if (result) return result;
    }
    else if(path.basename(file) === search){
      return path.resolve(nextPath)
    }
  }
}

function bfs(folder, search){
    let queue = [folder]
    for(const item of queue){
      const files = fs.readdirSync(item)
      for(const file of files){
        console.log(path.resolve(item, file))
        if(fs.lstatSync(path.resolve(item, file)).isDirectory()){
          queue.push(path.resolve(item, file))
        }else if(file == search){
          return path.resolve(item, file)
        }
      }
    }   
}

console.log(bfs('./', "goal.txt"))

