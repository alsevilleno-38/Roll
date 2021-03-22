const babel = require("@babel/core");
const { transform } = require("@babel/core");

babel.transform("let x = 10", null, function(err, result) {
    console.log(result.code);
    console.log(result.map);
    console.log(result.ast);        
});
