import Firestack from 'react-native-firestack';

const firestack = new Firestack();

const dbRef = firestack.database;

const cloudRef = firestack.storage;

export default class DBAccess {

  static getDBRef(path) {
    return dbRef.ref(path);
  }

  static getCloudRef(path) {
    return cloudRef.ref(path);
  }

  static getAllProductsForLocality(locality) {
    let products = [];

    const productsPath = "localities/" + locality + "/products";
    const ref = DBAccess.getDBRef(productsPath);

    function helper_productsAccumulate(dataSnapshot) {
      console.log("dataSnapshot from db: ", dataSnapshot);
      dataSnapshot.forEach(childSnapshot => {
        console.log("childSnapshot from db: ", childSnapshot);
        console.log("childSnapshot val from db: ", childSnapshot.value);

        let childSnapshotValue = childSnapshot.value;

        const productImageURLs = childSnapshotValue.productImageURLs;

        console.log("productImageURLs: ", productImageURLs);

        childSnapshotValue.productImageURLs =
          Object.keys(productImageURLs).map(
            (imgKey) => productImageURLs[imgKey]
          );

        console.log("After transforming childSnapshotValue: ", childSnapshotValue);

        products.push(childSnapshotValue);
      });

      console.log("Products after population: ", products);
      ref.off();
      console.log("Products after de-referencing: ", products);
      return products;
    }

    return ref.once("value")
       .then(helper_productsAccumulate)
       .catch(err => {
         console.log("Error retrieving from db");
         return [];
       });
  }

  static getImageFromPath(imgPath) {
    console.log("imgPath: ", imgPath);
    const refFromPath = DBAccess.getCloudRef(imgPath);
    console.log("refFromPath: ", refFromPath);
    console.log("full path: ", refFromPath.fullPath);
    return refFromPath.downloadUrl();
  }

};
