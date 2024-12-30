import {Link} from "react-router-dom";
import { BsArrowUpRight } from 'react-icons/bs';

import "./Comm.css";
export default function CommPage() {
  return (
    <div className="comms">
      <h1 >
        COMMUNITIES POWERED
      </h1>
      <div className="comm" >
        {/* GIDA Community Card */}
        <div className="gida" >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/gida2.png" alt="" style={{ width: "200px", marginBottom:'8px' }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", lineHeight: "1.6" }}>
            <h3 >GIDA - GINAKEV DIGITAL ACADEMY</h3>
            <p>Ginakev Digital Academy (GIDA) is a Crypto Academy that specializes in Crypto Education, providing insightful trading education and awareness on emerging digital currencies for optimum profits.</p>
            <p>Spreading Adoption through proper Education Our slogan.</p>
            <Link href="">
              <button
                style={{
                  marginTop: "15px",
                  alignSelf: "flex-end",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#0145FE",
                  color: "white",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  textDecoration:'none',
                  listStyle:'none'
                }}
              >
                Visit Website
                <BsArrowUpRight />
              </button>
            </Link>
          </div>
        </div>

        {/* BlockchainUNN Community Card */}
        <div className="unn" >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/unn.png" alt="" style={{ width: "100px" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0px", lineHeight: "1.6" }}>
            <h3 >BLOCKCHAINUNN - BLOCKCHAIN UNIVERSITY OF NIGERIA</h3>
            <p>BlockchainUNN is a Tech community established to educate members of the University Community with both basic and advanced practical knowledge of Blockchain technology, cryptocurrency, its development, applications, and its opportunities.</p>
            <p>It is a diverse community made up of people from diverse fields, institutions, and campuses who are blockchain enthusiasts.</p>
            <Link href="">
              <button
                style={{
                  marginTop: "15px",
                  alignSelf: "flex-end",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#0145FE",
                  color: "white",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Visit Website
                <BsArrowUpRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
