import App from './SecondApp.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'second'
	}
});

export default app;
