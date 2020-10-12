import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
    render() {
        return ( <Layout >
            <SEO title="About" keywords={[`gatsby`, `About`, `react`]} /> <
            div className = "site-About" >
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2>About Us</h2>
                    <p>This Started created for Ecommerce site</p>
                    <h2>Author</h2>
                    <div class="row">
                        <div class="col-sm-2">
                            <img src="https://shop.noch.de/media/catalog/product/1/1/11460scr_d9f6dbdd9ea5c17_1_.jpg?w=200&h=200&q=50&fit=fill" alt="Kohle Bild" />
                        </div>
                        <div class="col-sm-8">
                            <h2 class="mb-1">Kohle Ali</h2>
                            <p class="mb-0">
                                <a href="https://kohle-ali.netlify.app/" target="_blank" rel="noopener noreferrer">Website</a>
                            </p>
                            <p class="mb-0">
                                <a href="mailto:jan.niklas.martens@mni.thm.de">Gmail</a>
                            </p>
                            <p class="mb-0">
                                <a href="https://github.com/demactus" target="_blank" rel="noopener noreferrer">Github</a>
                            </p>
                            <p class="mb-0">
                                <a href="https://twitter.com/demactus" target="_blank" rel="noopener noreferrer">Twitter</a>
                            </p>
                        </div>
                    </div>
                    <h2>Features</h2>
                    <ul>
                        <li>Blog post listing with for each blog post.</li>
                        <li>Store page with all Product with few good features like Rating, Price, Checkout, More then one Product images with tabbing.</li>
                        <li>Contact form with Email notification.</li>
                        <li>Index pages design with Latest Post, Latest Blog and Deal of week and Banner.</li>
                        <li>So many other Good features</li>
                    </ul>
                   
                    
                </div>
            </div>
        </div> < /div> 
        </Layout >
        )
    }
}
export default About
