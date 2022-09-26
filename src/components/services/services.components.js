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
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
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
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
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
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Incididunt voluptate est velit sint commodo aute qui.</p>
            </li>
          </ul>
        </article>
        {/* end 3 */}
      </div>
    </section>
  );
}

export default Services;
