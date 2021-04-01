import React from 'react';
import {Helmet} from 'react-helmet';
import {useLocation} from '@reach/router';
import {graphql, useStaticQuery} from 'gatsby';

interface Props {
    title?: string
    description?: string
    image?: string
    article?: boolean
    published?: string
    tags?: string[]
}

export default function Seo({title, description, image, article, published, tags}: Props) {
    const {pathname} = useLocation();
    const {site} = useStaticQuery(query);

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        twitterUsername,
        locale,
        lang,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image && `${siteUrl}${image}`,
        url: `${siteUrl}${pathname}`,
    };

    return (
        <Helmet title={title}
            titleTemplate={titleTemplate}
            defaultTitle={defaultTitle}>
            <html lang={lang}/>
            <meta charSet="utf-8"/>
            {/* Primary tags */}
            <meta name="title" content={seo.title}/>
            <meta name="description" content={seo.description}/>
            <link rel="canonical" href={seo.url}/>
            {seo.image && <meta name="image" content={seo.image}/>}
            {/* Open Graph / Facebook */}
            <meta property="og:url" content={seo.url}/>
            <meta property="og:locale" content={locale}/>
            <meta property="og:site_name" content={defaultTitle}/>
            <meta property="og:title" content={seo.title}/>
            {seo.description && <meta property="og:description" content={seo.description}/>}
            {seo.image && <meta property="og:image" content={seo.image}/>}
            {published && <meta property="og:updated_time" content={published}/>}
            {article && <meta property="og:type" content="article"/>}
            {published && <meta property="article:published_time" content={published}/>}
            {tags && tags.map((tag, index) => <meta key={index} property="article:tag" content={tag}/>)}
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={seo.url}/>
            {seo.title && <meta name="twitter:title" content={seo.title}/>}
            {seo.description && <meta name="twitter:description" content={seo.description}/>}
            {seo.image && <meta name="twitter:image" content={seo.image}/>}
            {twitterUsername && <meta name="twitter:creator" content={twitterUsername}/>}
        </Helmet>
    );
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl
                twitterUsername
                locale
                lang
            }
        }
    }
`;