const jimp = require('jimp')


function floodFill(image, x, y, color, fill){

    
    jimp.read(image)
    .then((image)=>{
        function isValid(x,y,color){
            return x >= 0 && x <= image.bitmap.width && y >= 0 && y <= image.bitmap.height && image.getPixelColor(x,y) == color
        }
        let stack = [{x,y,color}]
        while(stack.length > 0){
            let current = stack.pop()

            if(isValid(current.x+1, current.y, color)){
                image.setPixelColor(fill, current.x+1, current.y)
                stack.push({x:current.x+1, y:current.y, color})
            }
            if(isValid(current.x-1, current.y, color)){
                image.setPixelColor(fill, current.x+1, current.y)
                stack.push({x:current.x-1, y:current.y, color})
            }
            if(isValid(current.x, current.y+1, color)){
                image.setPixelColor(fill, current.x, current.y+1)
                stack.push({x:current.x, y:current.y+1, color})
            }
            if(isValid(current.x, current.y-1, color)){
                image.setPixelColor(fill, current.x, current.y-1)
                stack.push({x:current.x, y:current.y-1, color})
            }
        }
        return image
        .write("new.png")
    })
    .catch((err) => {
        console.error(err);
    });
}

floodFill("image.png", 0, 0, 0xFFFFFFFF, 0x0000FFFF)




