import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

const ProjectLayout = () => {
  let { project } = useParams();
  const [sectionOneImg, setSectionOneImg] = useState([]);
  const [sectionTwoImg, setSectionTwoImg] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [facalities, setFacalities] = useState("");
  const [amations, setAmations] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [attractionSectionOne, setAttractionSectionOne] = useState([]);
  const [attractionSectionTwo, setAttractionSectionTwo] = useState([]);
  const [layoutImg, setLayoutImg] = useState("");
  useEffect(() => {
    // route to rajvirplots
    if (project === "rajvirplots") {
      setSectionOneImg([
        "yxdghzrpwhgrsbygvxfl",
        "lvxmq301htsuk6blwldb",
        "z0g5kixzgybv6hhpook4",
      ]);
      setSectionTwoImg([
        "rt8p89nosc91rzoovkts",
        // "m4jdq7mkjczm7rn3mhkb",
        "lwyck6yftmdjfkhtihqi",
      ]);
      setProjectName("Rajvir Plots");
      setDescription(
        "Discover Tranquil Living at Rajvir Plots – Where Serenity Meets Convenience."
      );
      setLocation("Location: Awalwadi Road, near BIOVET PRIVATE LIMITED");
      setFacalities(`Rajvir Plots offers a unique opportunity to own a piece of prime
        real estate in the vibrant locale of Awalwadi Road. Nestled in
        close proximity to BIOVET PRIVATE LIMITED, this meticulously
        planned project boasts of spacious plots surrounded by lush
        greenery and scenic views.
        <span>
          <ul className="list-disc p-4">
          <br/>
            <li>- Health Facilities in 3 Mins</li>
            <li>- IT and Workspaces in 100 meters</li>
            <li>- Education Institutes in 1 Mins</li>
            <li>- Pune Airport 10 Mins</li>
            <li>- Entertainment and malls 10 Mins</li>
          </ul>
        </span>`);

      setLayoutImg("p1vrdxuevul8x25qwfd6");

      setCustomers([
        "v9zf9qtyomz8erhjbsdz",
        "usmwejvsji3aoan0hl4i",
        "hq896o72fdrfcf9rvurq",
        "wko5zpyk4u2mkj0qacnc",
        "cr8zrdng4igfjplvhxyv",
        "rwn0koevarnk0vwjswfb",
      ]);
    }

    //route to yashparkphase8
    if (project === "yashparkphase7") {
      setSectionOneImg([
        "dzjucbikbmodcgbxz0wr",
        "p0mzhgplcuybp2zguxvb",
        "yjjxdtwvnhcywfpdstru",
      ]);
      setSectionTwoImg([
        "rhq676e8mkhcmczli8fr",
        "tx61nflwzajvhoneo3ij",
        "y7c5x5cx8rgnrdxbuzly",
      ]);
      setProjectName("Yash Park Phase 7");
      setDescription(
        "Discover Tranquil Living at Yash Park Phase 7 – Where Serenity Meets Convenience."
      );
      setLocation("Location: Awalwadi Road, near BIOVET PRIVATE LIMITED");
      setFacalities(` Yash Park, strategically positioned in the heart of Kharadi,
        offers an exceptional opportunity to own prime real estate in one
        of Pune's most coveted locations. Nestled in front of YOO Villas
        by Panchshil Towers and alongside Panchshil Towers, this
        meticulously planned project provides spacious plots surrounded by
        lush greenery and modern amenities.
              <span>
                <ul className="list-disc p-4">
                <br/>
                  <li>Health Facilities in 3 Mins</li>
                  <li>IT and Workspaces in 100 meters</li>
                  <li>Education Institutes in 1 Mins</li>
                  <li>Pune Airport 10 Mins</li>
                  <li>Entertainment and malls 10 Mins</li>
                </ul>
              </span>`);

      setAttractionSectionOne([
        "zikeorc7rbrsisu91sph",
        "uaquumrp0xzxwppquotw",
        "kiz4bhlqszilmeohteie",
        "ijjcdgd71j3v21dxvx6w",
      ]);

      setAttractionSectionTwo([
        "b9tcgpvzdpeewbd5njnq",
        "ggfsvd8pdt7h2ypkyy2l",
        "yn5whocnpznkp8blruoh",
        "ecwr0v0eltwitxfkvbcd",
      ]);

      setCustomers([
        "nxssyh6mzqjorhgaoby2",
        "oq7xu8plkxg9s8xglfqz",
        "qjycqkyxn5zjj3ausq9f",
        "kcwox0mhtykgojab5mvd",
        "bvhmksfdqomyuh8zcsdz",
        "baiea5fwhos494bt1ek6",
      ]);

      setLayoutImg("p1vrdxuevul8x25qwfd6");
    }

    //route to yashparkphase9
    if (project === "yashparkphase9") {
      setSectionOneImg([
        "lmhklude0ujyr22hbtb2",
        "txfblxduawyxeobadhhz",
        "fhybjmnt5vax1ijqvnog",
      ]);
      setSectionTwoImg(["z4hebct4cgfeitc3cyvv", "sthwyvcppicnqstw7ud8"]);
      setProjectName("Yash Park Phase 9");
      setDescription(
        "Discover Tranquil Living at Yash Park Phase 9 – Where Serenity Meets Convenience."
      );
      setLocation("Location: Choki Dhani road, Near Panchshil Towers, Kharadi");
      setFacalities(` Yash Park Phase 8 stands as a testament to luxurious 
      living in the heart of Kharadi. Situated adjacent to YOO 
      Villas by Panchshil Towers, this exclusive phase of the 
      Yash Park development offers meticulously crafted plots 
      surrounded by lush greenery and modern amenities. 
      With convenient access to major roads and proximity 
      to essential facilities, 

              <span>
                <ul className="list-disc p-4">
                <br/>
                  <li>Health Facilities in 3 Mins</li>
                  <li>IT and Workspaces in 100 meters</li>
                  <li>Education Institutes in 1 Mins</li>
                  <li>Pune Airport 10 Mins</li>
                  <li>Entertainment and malls 10 Mins</li>
                </ul>
              </span>`);

      setAttractionSectionOne([
        "zikeorc7rbrsisu91sph",
        "uaquumrp0xzxwppquotw",
        "kiz4bhlqszilmeohteie",
        "ijjcdgd71j3v21dxvx6w",
      ]);

      setAttractionSectionTwo([
        "b9tcgpvzdpeewbd5njnq",
        "ggfsvd8pdt7h2ypkyy2l",
        "yn5whocnpznkp8blruoh",
        "ecwr0v0eltwitxfkvbcd",
      ]);

      setCustomers([
        "nxssyh6mzqjorhgaoby2",
        "oq7xu8plkxg9s8xglfqz",
        "qjycqkyxn5zjj3ausq9f",
        "kcwox0mhtykgojab5mvd",
        "bvhmksfdqomyuh8zcsdz",
        "baiea5fwhos494bt1ek6",
      ]);

      setLayoutImg("rai9s9mfskhidulkiqun");
    }
  }, []);

  return (
    <div>
      <ProjectDetail
        sectionOneImg={sectionOneImg}
        sectionTwoImg={sectionTwoImg}
        projectName={projectName}
        description={description}
        location={location}
        facalities={facalities}
        amations={amations}
        customers={customers}
        attractionSectionOne={attractionSectionOne}
        attractionSectionTwo={attractionSectionTwo}
        layoutImg={layoutImg}
      />
    </div>
  );
};

export default ProjectLayout;
