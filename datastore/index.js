export let dataStore = ["soumava Banerjee"];

export const getStore = () => {
  return dataStore;
};

export const addName = (name) => {
  dataStore.push(name);
  return dataStore;
};

export const deleteName = (id) => {
  if (id > dataStore.length - 1 || id < 0) return "Index out of bound";
  dataStore.splice(id, 1);
  return dataStore;
};

export const updateName = (id, name) => {
  if (id > dataStore.length - 1 || id < 0) return "Index out of bound";

  dataStore[id] = name;
  return dataStore;
};
