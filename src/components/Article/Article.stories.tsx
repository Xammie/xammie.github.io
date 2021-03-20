import React from 'react';
import ArticleComponent from "./Article";
import Container from "../Container";
import image from '/content/assets/storybook-darkmode.png';

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
        }
    },
};

export const Article = (args) => <ArticleComponent {...args} content={content}/>

const content = `
<p>
    This is a paragraph. 
    This should be <strong>bold</strong>, <i>italic</i> and <s>strikethrough</s>.
    Here is a <a>link</a>.
    Also some inline <code class="language-txt">code</code>
</p>
<h1>This is a H1</h1>
<h2>This is a H2</h2>
<h3>This is a H3</h3>
<h4>This is a H4</h4>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
<ol>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
</li>
</ol>
<h4>We've got nice images</h4>
<img alt="Test image" src="${image}"/>
<pre>Some cool basic code</pre>
<h4>We got colorful code too!</h4>
<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">// tailwind.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    darkMode<span class="token operator">:</span> <span class="token string">'class'</span>
<span class="token punctuation">}</span></code></pre></div>
<blockquote>
    This is a nice block quote
</blockquote>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod pharetra augue et hendrerit. Aenean laoreet mi ut sem facilisis, a aliquet nisl cursus. Maecenas sollicitudin feugiat augue a efficitur. Curabitur auctor a velit vitae convallis. Aliquam id leo eu sapien pharetra condimentum vitae nec erat. In eget quam nec velit placerat volutpat pharetra at neque. Morbi viverra, eros non luctus imperdiet, sapien felis dictum ex, non pretium enim tellus ac lorem. Integer interdum lectus et dolor fringilla porta non non arcu. Cras eu laoreet risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec feugiat hendrerit neque vel posuere. Fusce eu nisl non ligula porta cursus nec sit amet diam. Proin et vehicula lacus. Quisque fringilla bibendum dolor, at gravida purus mollis a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
`;