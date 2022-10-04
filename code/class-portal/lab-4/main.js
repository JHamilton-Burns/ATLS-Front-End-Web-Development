class UrlBuilder {
    constructor(base) {
      this.base = base;
  
      this.params = {};
    }
  
    addParam(key, value) {
      this.params[key] = value;
    }
  
    build() {
      let url = this.base;
      let counter = 0;
  
      for (const key in this.params) {
        if (counter === 0) {
          url += '?';
        } else {
          url += '&';
        }
        url += key;
        url += '=';
        url += this.params[key];
  
        counter++;
      }
  
      return url;
    }
  }
  
  const buzzUrlBuilder = new UrlBuilder('https://corporatebs-generator.sameerkumar.website');
  buzzUrlBuilder.addParam('count', '1');
  const buzzUrl = buzzUrlBuilder.build();
  
  fetch(buzzUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(json => {
      for (const buzzUrl of json.phrase) {
        const text = document.createElement('t');
        text.innerText = buzzUrl;
        text.setAttribute('style','color:black;padding-top:1rem;padding-bottom:1rem;font-size:x-large;font-weight:bold;background-color:white')
        document.body.appendChild(text);

      }
    })
    .catch(error => {
      console.error(error);
    });