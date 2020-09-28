import React from "react"
import { graphql } from "gatsby"
import { getChildren, isLevel, getMenu } from "silverstripe-gatsby-helpers"
import Layout from "../Page"
import SEOTags from "../../components/SEOTags"
import Breadcrumbs from "../../components/Breadcrumbs"
import { Link } from "gatsby"
import classnames from 'classnames';
import Jokes from '../../components/Jokes'

import Article from '../../components/Article'

// import TransitionLink from "gatsby-plugin-transition-link"

import AniLink from "gatsby-plugin-transition-link/AniLink"
 
const HomePage = ({ data: { silverStripeDataObject: {
    SilverStripeSiteTree,
    StageverslagHomePage
}} }) => {
    
    const { title, content } = SilverStripeSiteTree;
    const {Articles: articles } = StageverslagHomePage

    const Articles = articles.map(({StageverslagArticle}) => {
        return {
            ...StageverslagArticle
        }
    })
    console.log(Articles)
    
    const children = getChildren();
	const isLevel2 = isLevel(2);
	const hasSubnav = isLevel(2) || !!children.length;
	const navItems = isLevel2 ? getMenu(2) : children;
	
	return (
	  <Layout>
	    <SEOTags pageTitle={title} />

		<div className={`content ${hasSubnav ? 'hasSidebar' : ''}`}>
			<div className="main">
				{isLevel2 && 
					<Breadcrumbs />
				}
	    		<h1>{title}</h1>
	    		<div dangerouslySetInnerHTML={{__html: content}} />

                {/* {Articles.map(({title, content}) => {
                    return <Article title={title} content={content} />
                })}	 */}

				<Jokes />
				
{/* /stageverslag-violet88/backend/about-us/ */}

				{/* <AniLink paintDrip to="/stageverslag-violet88/backend/about-us/">
				Go to Page 4
				</AniLink> */}
<AniLink cover to="/stageverslag-violet88/backend/about-us/" bg="#663399">
  Go to Page 3
</AniLink>

				<div>

				<Link to="./about-us">Link</Link>
				</div>

			</div>
			{hasSubnav &&
				<div className="sidebar">
					<h2>In this section</h2>
					<ul>
					{navItems.map(child => (
						<li key={child.id} className={classnames({
							current: child.isCurrent,
						})}>
							<Link to={child.link}>{child.SilverStripeSiteTree.title}</Link>


						
						</li>
					))}
					</ul>
				</div>
			}
		</div>
	  </Layout>
    );
};

export default HomePage

export const pageQuery = graphql`
	query ($link: String!) {
		silverStripeDataObject(link: { eq: $link }) {
			SilverStripeSiteTree {
                ...SilverStripeSiteTreeFields
			}
			
			StageverslagHomePage {
				Articles {
				  StageverslagArticle {
					title
					content
					homePageID
				  }
				}
			  }
		}

	}
`;

// export const pageQuery = graphql`
// 	query ($link: String!) {
// 		silverStripeDataObject(link: { eq: $link }) {
// 			SilverStripeSiteTree {
// 				title
// 				content
// 			}
//         }
        
        
// 	}
// `;