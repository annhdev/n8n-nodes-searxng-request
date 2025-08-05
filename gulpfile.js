const path = require('path');
const {task, src, dest} = require('gulp');
const fs = require("fs");
const {rimraf, rimrafSync, native, nativeSync} = require('rimraf')

task('build:icons', copyIcons);
task('deploy:docker', deployDOcker);

function copyIcons() {
	const nodeSource = path.resolve('nodes', '**', '*.{png,svg}');
	const nodeDestination = path.resolve('dist', 'nodes');

	src(nodeSource).pipe(dest(nodeDestination));

	const credSource = path.resolve('credentials', '**', '*.{png,svg}');
	const credDestination = path.resolve('dist', 'credentials');

	return src(credSource).pipe(dest(credDestination));
}

function deployDOcker() {
	const distSource = path.resolve('./dist', '**', '*');
	const packageJson = path.resolve('./', 'package.json');

	const nodePath = path.resolve("../docker/data/n8n_data/nodes/node_modules/n8n-nodes-searxng-request")
	if (!fs.existsSync(nodePath)) {
		fs.mkdirSync(nodePath, {recursive: true});
		console.log(`Created directory: ${nodePath}`);
	} else {
		rimraf.rimrafSync(nodePath)
	}

	const distDestination = path.resolve(nodePath, 'dist');
	if (!fs.existsSync(distDestination)) {
		fs.mkdirSync(distDestination, {recursive: true});
		console.log(`Created directory: ${distDestination}`);
	} else {
		rimraf.rimrafSync(nodePath)
	}

	src(packageJson).pipe(dest(nodePath));

	return src(distSource).pipe(dest(distDestination));
}


