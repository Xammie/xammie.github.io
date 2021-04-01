import React from 'react';
import classNames from 'classnames';
import {graphql} from 'gatsby';

export default function Profile({image, className}) {
    return (
        <div className={classNames(className, 'rounded-full shadow-md overflow-hidden')}>
            {image}
        </div>
    );
}

export const query = graphql`
    fragment SmallProfileImage on File {
        childImageSharp {
            fluid(maxWidth: 150, maxHeight: 150, quality: 70, toFormat: JPG) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }

    fragment LargeProfileImage on File {
        childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300, quality: 70, toFormat: JPG) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`;