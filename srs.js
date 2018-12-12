import ReactDOMServer from 'react-dom/server';

const context = {};
const html = ReactDOMServer.renderToString(
	<StaticRouter location={req.url} context={context}>
		<App />
	</StaticRouter>
);

if(context.url) {
	res.writeHead(302, {
		Location: context.url
	});
	res.end();
}
else {
	res.write(html);
	res.end();
}
