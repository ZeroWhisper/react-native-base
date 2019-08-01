import { AsyncStorage } from "react-native";

const Storage = {
  getItem: async key => {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  },
  setItem: async (key, raw) => {
    const value = JSON.stringify(raw);
    await AsyncStorage.setItem(key, value);
  },
  addItem: async (key, raw) => {
    let item = (await Storage.getItem(key)) || [];
    item.push(raw);
    await Storage.setItem(key, item);
  }
};

export default Storage;
