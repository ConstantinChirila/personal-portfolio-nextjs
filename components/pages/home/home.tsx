import { ReactElement } from 'react'
import { Layout } from '@portfolio/components'

export function Home(): ReactElement {
  // const projects = data.projects.edges.map(project => project.node.frontmatter);
  // const articles = data.articles.edges.map(project => project.node.frontmatter)
  //   const home = data.homepage

  return (
    <Layout headerType="complex">
      <main>
        <div className="clear"></div>

        {/* <Description description={home.description} skills={home.skills} /> */}

        {/*         
          <ThirdsFeature
            title={home.projects.title}
            linkName={home.projects.button}
            linkHref={home.projects.buttonLink}
          >
            <ListFeaturedProjects projects={projects} />
          </ThirdsFeature> */}

        {/* <Clients /> */}

        {/* <ThirdsFeature title={home.articles.title} linkName={home.articles.button} linkHref={home.articles.buttonLink}>
            {
              articles.map((article, index) => <ArticleThumb className={homeStyles.item} article={article} key={index}/>)
            }
          </ThirdsFeature> */}

        {/* <Testimonials data={home.testimonials} /> */}
      </main>
    </Layout>
  )
}

// const ListFeaturedProjects = ({ projects }) =>
//   projects.map((item, index) => (
//     <div className={`${homeStyles.item} ${homeStyles.workItem}`} key={index}>
//       <Link to={`/work/${item.slug}`}>
//         <img src={item.thumbnail.childImageSharp.fluid.src} alt={item.title} />
//       </Link>
//     </div>
//   ))
