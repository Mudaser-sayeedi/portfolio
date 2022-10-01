import React from "react";
import "./services.components.scss";
import{BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Creative direction</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Strong layout and graphic redesign</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Flash and HTML5 animation</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Content analysis and generation</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Custom graphic</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>identiry or brand development</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Logo design</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Usabality</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Information architecture</p>
            </li>
          </ul>
        </article>
        {/* end 1 */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Content management system</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Shopping Cart</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Online ordering and online payment</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Event booking system</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Document management system</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Blog and news management</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Social media integration</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Mobile optimized website</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Mobile application</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Portfolio showcases</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Website maintenance</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Testimonials</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Learning mangement system</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Web Portals</p>
            </li>
          </ul>
        </article>
        {/* end 2 */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Blog posts</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Long-form Content</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Online guides</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Infographics</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Micrographics</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Content Strategy</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Content development</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Content optimization</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Content promotion</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Content reporting</p>
            </li>
          </ul>
        </article>
        {/* end 3 */}
      </div>
    </section>
  );
}

export default Services;
