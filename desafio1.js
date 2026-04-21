function elimDuplic(array){
    // Caso límite: si no es un array, devolver array vacío
    if (!Array.isArray(array)) {
        return [];
    }
    
    // Caso límite: array vacío
    if (array.length === 0) {
        return [];
    }
    
    // Usar Set para eliminar duplicados (funciona con primitivos)
    // Para objetos, solo elimina si son la misma referencia
    return [...new Set(array)];
}

const a = [1, 2, 3, 2, 4, 1];
let aa = elimDuplic(a);
console.log(aa); // [1, 2, 3, 4]
const b = ['a', 'b', 'c', 'a', 'd'];
let bb = elimDuplic(b);
console.log(bb);
const c = [1, 'a', 2, 'b', 1, 'a'];
let cc = elimDuplic(c);
console.log(cc);
const d = [{x: 1}, {x: 1}, {y: 2}]; // Objetos con la misma estructura pero diferentes referencias no se consideran duplicados
let dd = elimDuplic(d);
console.log(dd);
const e = 'not an array';
let ee = elimDuplic(e);
console.log(ee);
const f = [];
let ff = elimDuplic(f);
console.log(ff);