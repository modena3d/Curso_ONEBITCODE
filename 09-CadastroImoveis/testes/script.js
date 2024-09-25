let arrayShapes = [];
 let shapes = {};
console.log('S1: ', shapes);

 function itensConst(shape, x , y){
    this.shape = shape;
    this.x = x;
    this.y = y;
 };

 let quadrado = new itensConst('Quadrado', 100,100);
 let circulo = new itensConst('Circulo', 100,100);
 let retangulo = new itensConst('Retangulo', 200,100);

shapes = {};
arrayShapes = [quadrado,circulo,retangulo];

console.log('S2: ', arrayShapes);

shapes.shape = 'Cilindrico';
shapes.x = 200;
shapes.y = 400;
console.log('S3: ', shapes);
arrayShapes.push(shapes);
console.log('S3: ', arrayShapes);

shapes = {
    shape: 'ok',
    x: 80,
    y: 60    
};
arrayShapes.push(shapes);
console.log('S4---: ', shapes);
console.log('S4---: ', arrayShapes);


shapes.shape = 'oval';
shapes.x = 800;
shapes.y = 400;
console.log('S4: ', shapes);
arrayShapes.push(shapes);
console.log('S4: ', arrayShapes);
