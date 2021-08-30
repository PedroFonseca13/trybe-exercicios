let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último dos MacPatinhas', 
  recorrente: 'Sim'

}

console.log(`Bem-vinda, ${info.personagem}`);

console.log('================================================================');

info['recorrente'] = 'Sim'

console.log(info);

console.log('================================================================');

for(let key in info) {
  console.log(key)
}

console.log('================================================================');

for (let key in info) {
  console.log(info[key])
}

console.log('================================================================');

console.log(`${info.personagem} e ${info2.personagem}`);
console.log(`${info.origem} e ${info2.origem}`);
console.log(`${info.nota} e ${info2.nota}`);
console.log(`${info.personagem} e ${info2.personagem}`);
