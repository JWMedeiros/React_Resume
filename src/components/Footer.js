import React from 'react';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon} from 'cdbreact';

//Footer courtesy of Devwares
export default function Footer() {
    return (
        <CDBFooter className="shadow fixed-bottom bg-warning">
          <CDBBox
            display="flex"
            justifyContent="between"
            alignItems="center"
            className="mx-auto py-4 flex-wrap"
            style={{ width: '90%' }}
          >
            <CDBBox display="flex" alignItems="center">
              <img
                alt="logo"
                src="https://www.publicdomainpictures.net/pictures/350000/t2/heart-rainbow-stripes.jpg"
                width="40px"
              />
              <span className="ml-4 h5 mb-0 font-weight-bold" >&nbsp;John Medeiros</span>
            </CDBBox>
            <CDBBox>
              <small className="ml-2">Made with love, React, Bootstrap and lot of coffee.</small>
            </CDBBox>
            <CDBBox display="flex">
              <CDBBtn flat color="dark" className="p-2" href='https://github.com/JWMedeiros' >
                <CDBIcon fab icon="github" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2" href='https://www.linkedin.com/in/john-medeiros-84a0608b/'>
                <CDBIcon fab icon="fa-brands fa-linkedin" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2" href='https://www.google.com/'>
                <CDBIcon fab icon="google" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBFooter>
      );
}