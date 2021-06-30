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
            gatsbyImageData(layout: CONSTRAINED, width: 100)
        }
    }

    fragment LargeProfileImage on File {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 200)
        }
    }
`;