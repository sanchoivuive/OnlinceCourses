import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="container-fluid">
          <div className="row row-eq-height">
            <div className="col-lg-6 nopadding">
              {/* Register */}
              <div className="register_section d-flex flex-column align-items-center justify-content-center">
                <div className="register_content text-center">
                  <h1 className="register_title">Register now and get a discount <span>50%</span> discount until 1 January</h1>
                  <p className="register_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                  <div className="button button_1 register_button mx-auto trans_200"><a href="#">register now</a></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 nopadding">
              {/* Search */}
              <div className="search_section d-flex flex-column align-items-center justify-content-center">
                <div className="search_background" style={{ backgroundImage: 'url(images/search_background.jpg)' }} />
                <div className="search_content text-center">
                  <h1 className="search_title">Search for your course</h1>
                  <form id="search_form" className="search_form" action="post">
                    <input id="search_form_name" className="input_field search_form_name" type="text" placeholder="Course Name" required="required" data-error="Course name is required." />
                    <input id="search_form_category" className="input_field search_form_category" type="text" placeholder="Category" />
                    <input id="search_form_degree" className="input_field search_form_degree" type="text" placeholder="Degree" />
                    <button id="search_submit_button" type="submit" className="search_submit_button trans_200" value="Submit">search course</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
