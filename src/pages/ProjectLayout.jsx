import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

const ProjectLayout = () => {
  let { project } = useParams();
  const routeParams = useLocation();
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [facalities, setFacalities] = useState("");
  const [amations, setAmations] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [map, setMap] = useState();
  const [layoutImg, setLayoutImg] = useState("");
  const [projectImages, setProjectImages] = useState([]);
  const [coverImg, setCoverImg] = useState("");
  const [projectVideos, setProjectVideos] = useState([]);

  useEffect(() => {
    // route to rajvirplots
    if (project === "rajvirplots" || routeParams.pathname === "/rajvirplots") {
      setProjectImages([
        "yxdghzrpwhgrsbygvxfl",
        "lvxmq301htsuk6blwldb",
        "z0g5kixzgybv6hhpook4",
        "rt8p89nosc91rzoovkts",
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

      setMap(
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3782.506624299604!2d73.97994977519242!3d18.55118468254827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMzJzA0LjMiTiA3M8KwNTgnNTcuMSJF!5e0!3m2!1sen!2sin!4v1713478094477!5m2!1sen!2sin"
          width="400"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      );

      setLayoutImg("p1vrdxuevul8x25qwfd6");

      setCustomers([
        "v9zf9qtyomz8erhjbsdz",
        "usmwejvsji3aoan0hl4i",
        "hq896o72fdrfcf9rvurq",
        "wko5zpyk4u2mkj0qacnc",
        "cr8zrdng4igfjplvhxyv",
        "rwn0koevarnk0vwjswfb",
      ]);

      setCoverImg("w214msdlrsqf1isjjmsx");

      setProjectVideos([
        "ktplrsne9s8otv5y8p5x",
        "gpcpmrt7cv7b9nbmjox1",
        "hglitsb6tdhdizsfjulm",
      ]);
    }

    //route to yashparkphase7
    if (
      project === "yashparkphase7" ||
      routeParams.pathname === "/yashparkphase7"
    ) {
      // setSectionOneImg([
      //   "dzjucbikbmodcgbxz0wr",
      //   "p0mzhgplcuybp2zguxvb",
      //   "yjjxdtwvnhcywfpdstru",
      // ]);
      // setSectionTwoImg([
      //   "rhq676e8mkhcmczli8fr",
      //   "tx61nflwzajvhoneo3ij",
      //   "y7c5x5cx8rgnrdxbuzly",
      // ]);

      setProjectImages([
        "dzjucbikbmodcgbxz0wr",
        "p0mzhgplcuybp2zguxvb",
        "yjjxdtwvnhcywfpdstru",
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

      setMap(
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d945.6206014962398!2d73.9681944!3d18.5522778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMzJzA4LjIiTiA3M8KwNTgnMDUuNSJF!5e0!3m2!1sen!2sin!4v1713478516699!5m2!1sen!2sin"
          width="400"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      );

      setCustomers([
        "nxssyh6mzqjorhgaoby2",
        "oq7xu8plkxg9s8xglfqz",
        "qjycqkyxn5zjj3ausq9f",
        "kcwox0mhtykgojab5mvd",
        "bvhmksfdqomyuh8zcsdz",
        "baiea5fwhos494bt1ek6",
      ]);

      setLayoutImg("ds4sd8nen54xexaz5vvj");
    }

    //route to yashparkphase9
    if (
      project === "yashparkphase9" ||
      routeParams.pathname === "/yashparkphase9"
    ) {
      // setSectionOneImg([
      //   "lmhklude0ujyr22hbtb2",
      //   "txfblxduawyxeobadhhz",
      //   "fhybjmnt5vax1ijqvnog",
      // ]);
      // setSectionTwoImg(["z4hebct4cgfeitc3cyvv", "sthwyvcppicnqstw7ud8"]);

      setProjectImages([
        "lmhklude0ujyr22hbtb2",
        "txfblxduawyxeobadhhz",
        "fhybjmnt5vax1ijqvnog",
        "z4hebct4cgfeitc3cyvv",
        "sthwyvcppicnqstw7ud8",
      ]);
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

      setMap(
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d945.6206014962398!2d73.9681944!3d18.5522778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMzJzA4LjIiTiA3M8KwNTgnMDUuNSJF!5e0!3m2!1sen!2sin!4v1713478516699!5m2!1sen!2sin"
          width="400"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      );

      setCustomers([
        "nxssyh6mzqjorhgaoby2",
        "oq7xu8plkxg9s8xglfqz",
        "qjycqkyxn5zjj3ausq9f",
        "kcwox0mhtykgojab5mvd",
        "bvhmksfdqomyuh8zcsdz",
        "baiea5fwhos494bt1ek6",
      ]);

      setLayoutImg("zh8h0wlk53be4jne7kok");
    }
  }, []);

  return (
    <div>
      <ProjectDetail
        projectName={projectName}
        description={description}
        location={location}
        facalities={facalities}
        amations={amations}
        customers={customers}
        projectImages={projectImages}
        layoutImg={layoutImg}
        map={map}
        coverImg={coverImg}
        projectVideos={projectVideos}
      />
    </div>
  );
};

export default ProjectLayout;
