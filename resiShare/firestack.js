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

        const productImagePaths = childSnapshotValue.productImagePaths;

        console.log("productImagePaths: ", productImagePaths);

        childSnapshotValue.productImagePaths =
          Object.keys(productImagePaths).map(
            (imgKey) => productImagePaths[imgKey]
          );

        console.log("After transforming childSnapshotValue: ",
          childSnapshotValue);

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

  static updateImages(locality, productName, images, callback) {
    if (images.length == 0)
    {
      return;
    }

    console.log("images to upload: ", images);
    console.log("callback: ", callback);

    const imagesPath = `${locality}/products/${productName}/images`;

    uploadedImagesResult = [];
    images.forEach((image) => {
      const imageUploadPath = `${imagesPath}/${image.name}`
      cloudRef.uploadFile(imageUploadPath, image.path, {
        contentType: 'image/jpeg',
        contentEncoding: 'base64'
      })
      .then((result) => {
        console.log("Result of uploading a file: ", result);
        uploadedImagesResult = uploadedImagesResult.concat([{
          name : result.name,
          fullPath : result.fullPath
        }]);
        console.log("Uploaded Images Result: ", uploadedImagesResult);
        callback(uploadedImagesResult);
      })
      .catch((err) => console.log("error with upload of image: ", err));
    });

  }

  static updateImagesInStorage(images)
  {
    images.forEach((image) => {
      cloudRef.uploadFile(imageUploadPath, image.path, {
        contentType: 'image/jpeg',
        contentEncoding: 'base64'
      })
    });
  }

  static uploadImage(image, imagePath)
  {
    console.log("image: ", image, " imagePath:", imagePath);
    cloudRef.uploadFile(imagePath, image.path, {
      contentType: 'image/jpeg',
      contentEncoding: 'base64'
    })
    .catch((error) => console.log("Error uploading image: ", error));
  }

  static deleteImageNode(path)
  {

  }

  static updateProducts(locality, product) {
    const productsPath = `localities/${locality}/products/${product.name}`;
    const ref = DBAccess.getDBRef(productsPath);
    ref.set(product);
  }

  static getImageFromPath(imgPath) {
    console.log("imgPath: ", imgPath);
    const refFromPath = DBAccess.getCloudRef(imgPath);
    console.log("refFromPath: ", refFromPath);
    console.log("full path: ", refFromPath.fullPath);
    return refFromPath.downloadUrl();
  }

};
