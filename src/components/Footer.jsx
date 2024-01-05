import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const StyledFooter = styled.footer`
  background-color: #262626;
  padding: 4rem 0 3rem 0;
  color: #fff;

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  h3 {
    color: #ffffff;
    margin-bottom: 1.5rem;
  }

  p {
    color: #ffffff;
  }

  .footer-about,
  .footer-subscribe,
  .footer-social,
  .footer-contact {
    text-align: left;
  }

  .footer-subscribe form {
    display: flex;
    gap: 1rem;
  }

  .footer-subscribe input[type="email"] {
    padding: 0.5rem;
    width: 100%;
  }

  .footer-subscribe input[type="submit"] {
    padding: 0.5rem 1rem;
    background-color: rgb(98, 84, 243);
    color: #262626;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
  }

  .footer-social--icons {
    display: flex;
    gap: 1.5rem;
    
    
      a {
      padding:0.5rem;
      color: #ffffff;
      border-radius: 50%;
      border: 2px solid white;
    }

    .icons {
      font-size: 2.4rem;
      cursor: pointer;
      color:white;
    }

   
  }

  .footer-contact h3 {
    margin-bottom: 0.5rem;
  }

  .footer-bottom--section {
    padding-top: 3rem;
    border-top: 1px solid #333;

    hr {
      margin-bottom: 1.5rem;
      color: #ffffff;
      height: 0.1px;
    }

    .grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1rem;
    }

    p {
      font-size: 0.9rem;
    }

    div {
      text-align: right;

      p {
        margin-bottom: 0.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .footer-contact {
      order: 1;
    }

    .footer-subscribe {
      order: 2;
    }

    .footer-about,
    .footer-social {
      order: 3;
    }

    .footer-bottom--section {
      padding-top: 2.4rem;

      .grid {
        grid-template-columns: 1fr;
      }

      div {
        text-align: left;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container grid grid-four-column">
        <div className="footer-about">
          <h3>Arijit Bouri</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="footer-subscribe">
          <h3>Subscribe to get important updates</h3>
          <form action="#">
            <input type="email" name="email" placeholder="YOUR E-MAIL" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="footer-social--icons">
            <a
              href="https://github.com/arijitbouri0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icons" />
            </a>
            <a
              href="https://www.instagram.com/imari_jit?igsh=YWYwM2I1ZDdmOQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/arijit-bouri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icons" />
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Call Us</h3>
          <p>+91 12345678978</p>
        </div>
      </div>

      <div className="footer-bottom--section">
        <hr />
        <div className="container grid grid-two-column">
          <p>@{new Date().getFullYear()} ArijitBouri. All Rights Reserved</p>
          <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
