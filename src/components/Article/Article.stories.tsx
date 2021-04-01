import React from 'react';
import ArticleComponent from './Article';
import Container from '../Container';
import imageSrc from '/content/assets/storybook-darkmode.png';

export default {
    title: 'Article',
    decorators: [Story => <Container><Story/></Container>],
    argTypes: {
        title: {
            name: 'Title',
            control: 'text',
            defaultValue: 'This is the article title',
        },
        date: {
            name: 'Title',
            control: 'text',
            defaultValue: 'January 1, 2021',
        },
    },
};

export const All = args => <ArticleComponent {...args} content={content}/>;

export const Heading = args => <ArticleComponent {...args} content={headings}/>;

export const Paragraph = args => <ArticleComponent {...args} content={paragraph}/>;

export const List = args => <ArticleComponent {...args} content={list}/>;

export const Image = args => <ArticleComponent {...args} content={image}/>;

export const Code = args => <ArticleComponent {...args} content={code}/>;

export const Miscellaneous = args => <ArticleComponent {...args} content={miscellaneous}/>;

const miscellaneous = `
<blockquote>
    This is a nice block quote
</blockquote>
`;

const headings = `
<h1>This is a H1</h1>
<h2>This is a H2</h2>
<h3>This is a H3</h3>
<h4>This is a H4</h4>
`;

const paragraph = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod pharetra augue et hendrerit. Aenean laoreet mi ut sem facilisis, a aliquet nisl cursus. Maecenas sollicitudin feugiat augue a efficitur. Curabitur auctor a velit vitae convallis. Aliquam id leo eu sapien pharetra condimentum vitae nec erat. In eget quam nec velit placerat volutpat pharetra at neque. Morbi viverra, eros non luctus imperdiet, sapien felis dictum ex, non pretium enim tellus ac lorem. Integer interdum lectus et dolor fringilla porta non non arcu. Cras eu laoreet risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec feugiat hendrerit neque vel posuere. Fusce eu nisl non ligula porta cursus nec sit amet diam. Proin et vehicula lacus. Quisque fringilla bibendum dolor, at gravida purus mollis a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
`;

const list = `
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
`;

const image = `
<img alt="Test image" src="${imageSrc}"/>
`;

const code = `
<p>inline <code>code</code></p>
<pre>yarn add infinity --dev</pre>
<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">// tailwind.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    darkMode<span class="token operator">:</span> <span class="token string">'class'</span>
<span class="token punctuation">}</span></code></pre></div>
`;

const content = `
<p>
    This is a paragraph. 
    This should be <strong>bold</strong>, <i>italic</i> and <s>strikethrough</s>.
    Here is a <a>link</a>.
    Also some inline <code class="language-txt">code</code>
</p>
${headings}
${paragraph}
${list}
${image}
${code}
${miscellaneous}
`;