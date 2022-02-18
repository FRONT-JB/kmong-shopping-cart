import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
  	html {
		font-size: 10px;
	}
	html, body {
		margin: 0;
		padding: 0;
    height: 100%;
	}
	body {
		line-height: 1;
		font-size: 14px;
		font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
		-webkit-font-smoothing: antialiased;
    background: #f2f3f7;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	button {
		outline: none;
		border: none;
    background: transparent;
    appearance: none;
    cursor: pointer;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
  	#__next {
		height: 100%;
	}
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		outline: none;
		word-break: break-word;
		border: none;
	}
`;

export default GlobalStyle;
