const items = [1,2,3,2,3];

const objectItems =items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    }
    else {
        obj[item] += 1
    }
    return obj;
},{})

console.log(objectItems);


const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const response = data.reduce((obj, item) => {
    if(!obj[item.level]){
        obj[item.level] = 1;
    }else{
        obj[item.level] += 1;
    }
    return obj;
}, {})

console.log(response);

//alternativa usando map

const result = data.map(item => item.level)
.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] += 1;
  }
  return obj;
}, {});

console.log(result);
