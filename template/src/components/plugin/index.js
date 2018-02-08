import { h, Component } from 'preact';
import style from './style';

const Plugin = ({ package: { name , version } }) => (
	<div class={style.card}>
		<h2>{name}</h2>
		<p>{version}</p>
		<small>{`npm i ${name} --save-dev`}</small>
	</div>
);


export default Plugin;
