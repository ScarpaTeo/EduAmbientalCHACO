import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

const EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our pricing plans
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing className="white-text">
            <div className="aqua-gradient rounded-top">
              <h4
                className="option"
                style={{
                  padding: "2.5rem",
                  marginBottom: 0,
                  fontWeight: 500
                }}
              >
                BASIC
              </h4>
            </div>
            <MDBCardBody className="blue-text striped green-striped card-background px-5">
              <h2 className="my-4 pb-3 h1">20$</h2>
              <ul>
                <li>
                  <p>
                    <strong>1</strong> project
                  </p>
                </li>
                <li>
                  <p>
                    <strong>100</strong> components
                  </p>
                </li>
                <li>
                  <p>
                    <strong>150</strong> features
                  </p>
                </li>
                <li>
                  <p>
                    <strong>200</strong> members
                  </p>
                </li>
              </ul>
              <MDBBtn rounded gradient="aqua" className="mb-3 mt-3">
                Buy now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing className="white-text">
            <div className="peach-gradient rounded-top">
              <h4
                className="option"
                style={{
                  padding: "2.5rem",
                  marginBottom: 0,
                  fontWeight: 500
                }}
              >
                PRO
              </h4>
            </div>
            <MDBCardBody className="orange-text striped orange-striped card-background px-5">
              <h2 className="my-4 pb-3 h1">80$</h2>
              <ul>
                <li>
                  <p>
                    <strong>3</strong> projects
                  </p>
                </li>
                <li>
                  <p>
                    <strong>200</strong> components
                  </p>
                </li>
                <li>
                  <p>
                    <strong>250</strong> features
                  </p>
                </li>
                <li>
                  <p>
                    <strong>300</strong> members
                  </p>
                </li>
              </ul>
              <MDBBtn rounded gradient="peach" className="mb-3 mt-3">
                Buy now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing className="white-text">
            <div className="purple-gradient rounded-top">
              <h4
                className="option"
                style={{
                  padding: "2.5rem",
                  marginBottom: 0,
                  fontWeight: 500
                }}
              >
                ENTERPRISE
              </h4>
            </div>
            <MDBCardBody className="purple-text striped purple-striped card-background px-5">
              <h2 className="my-4 pb-3 h1">100$</h2>
              <ul>
                <li>
                  <p>
                    <strong>5</strong> projects
                  </p>
                </li>
                <li>
                  <p>
                    <strong>300</strong> components
                  </p>
                </li>
                <li>
                  <p>
                    <strong>350</strong> features
                  </p>
                </li>
                <li>
                  <p>
                    <strong>400</strong> members
                  </p>
                </li>
              </ul>
              <MDBBtn rounded gradient="purple" className="mb-3 mt-3">
                Buy now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default EcommercePage;