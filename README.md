# kubernetes-pod-auth

[![npm version][npm-badge]][npm-url]

> Get auth token and ca certificates from within a kubernetes pod


In order to use kubernetes apis from withing a pod you'll need to authenticate with a service account.

Kubernetes places a credential (token) in every container filesystem, along with a certificate bundle for https calls ([see more here](http://kubernetes.io/docs/user-guide/accessing-the-cluster/#accessing-the-api-from-a-pod)).

This pluing helps you easly get them. You can then use them with any kubernetes api package or for raw https requests

## Install

```
npm install kubernetes-pod-auth --save
```

## Usage

```js
var getCredentials = require('kubernetes-pod-auth')

getCredentials(function (err, ca, token) {
  console.log(err, ca, token)
})

```

## License

MIT

## Acknowledgements

Maintainer - [Paolo Chiodi](https://github.com/paolochiodi)

This project was kindly sponsored by [nearForm](http://nearform.com).

[npm-badge]: https://badge.fury.io/js/kubernetes-pod-auth.svg
[npm-url]: https://badge.fury.io/js/kubernetes-pod-auth
