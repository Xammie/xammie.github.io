import React from 'react';
import Container from "../components/Container";
import Card from "../components/Card";

export default {
    title: 'Hoogenbosch/Layout/Markdown',
    decorators: [(Story) => (
        <Container>
            <Card>
                <article className="markdown">
                    <Story/>
                </article>
            </Card>
        </Container>
    )],
};

export const Heading = () => (
    <>
        <h1>
            # This is a H1
        </h1>
        <p>
            This is some filler text.
        </p>
        <h2>
            ## This is a H2
        </h2>
        <p>
            This is some filler text.
        </p>
        <h3>
            ### This is a H3
        </h3>
        <p>
            This is some filler text.
        </p>
    </>
);

export const Paragraph = () => (
    <>
        <p>
            This is a small paragraph.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla ligula, placerat ac sodales egestas,
            pretium a justo. Nulla facilisi. Vivamus efficitur fermentum eros vel mattis. Aliquam orci neque, dictum
            quis luctus non, ornare tempor turpis. Ut efficitur varius augue, non volutpat mauris mollis sed.
            Suspendisse tristique lorem ex, <a>this is a link</a> tempor tempus erat aliquam non. Integer eleifend
            placerat quam, vitae
            condimentum felis consequat ac. Proin risus diam, volutpat sed elementum vitae, mollis nec risus. In a
            ultrices dolor, quis dictum nulla. Ut interdum quam mi, nec dapibus leo rutrum et. Maecenas non erat at arcu
            luctus pharetra. Vivamus interdum felis ante, quis sollicitudin nulla ullamcorper a.
        </p>

    </>
);

export const Code = () => (
    <>
        <p>
            This is <code className="language-text">inline</code> code.
        </p>
        <div className="gatsby-highlight" data-language="text">
            <pre className="language-text">
                <code className="language-text">
This is a code block. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla ligula, placerat ac sodales egestas, pretium a justo.{"\n"}
Nulla facilisi. Vivamus efficitur fermentum eros vel mattis. Aliquam orci neque, dictum quis luctus non, ornare tempor{"\n"}
turpis. Ut efficitur varius augue, non volutpat mauris mollis sed. Suspendisse tristique lorem ex, tempor tempus erat{"\n"}
aliquam non. Integer eleifend placerat quam, vitae condimentum felis consequat ac. Proin risus diam, volutpat sed{"\n"}
elementum vitae, mollis nec risus. In a ultrices dolor, quis dictum nulla. Ut interdum quam mi, nec dapibus leo rutrum{"\n"}
et. Maecenas non erat at arcu luctus pharetra. Vivamus interdum felis ante, quis sollicitudin nulla ullamcorper a.
                </code>
            </pre>
        </div>
    </>
);


