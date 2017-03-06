class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb) {
    const host = 'http://localhost:9090';
    const url = `${host}${route}`;
    let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
    options.headers = Api.headers();
    return Promise.resolve()
      .then(() => AsyncStorage.getItem('token'))
      .then(token => {
        options.headers['Authorizaion'] = token;
        return fetch(url, options).then(resp => {
          let json = resp.json();
          if (resp.ok) {
            return json;
          }
          return json.then(err => {
            throw err;
          });
        })
      })
  }
}

export default Api;