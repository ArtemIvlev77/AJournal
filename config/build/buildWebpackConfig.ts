import {BuildOptions} from './types/config';
import path from 'path'
import webpack from 'webpack';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildDevServer} from './buildDevServer';



export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {mode, paths, isDev} = options;

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: path.resolve(__dirname, '../../build'),
			clean: true,
		},
		devtool: isDev ? 'inline-source-map' : false,
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(options),
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}
