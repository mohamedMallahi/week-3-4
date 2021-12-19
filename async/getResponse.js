const getResponse = (method, url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      resolve(this.response);
    };

    xhr.onerror = () => {
      reject({
        message: 'An error occurred during the transaction',
      });
    };

    xhr.open(method, url);

    xhr.send();
  });
};

export default getResponse;
