"use strict"

const fs = require("fs")
const async = require("async")
const caFile = "/var/run/secrets/kubernetes.io/serviceaccount/ca.crt"
const tokenFile = "/var/run/secrets/kubernetes.io/serviceaccount/token"


function get_ca_file(next) {
	fs.readFile(caFile, next)
}

function get_token_file(next) {
	fs.readFile(tokenFile, next)
}

function get_credentials(done) {
	async.parallel({
		ca: get_ca_file,
		token: get_token_file
	}, function (err, results) {
		if (err) {
			return done(err)
		}

		done(null, results.ca, results.token)
	})
}

module.exports = get_credentials