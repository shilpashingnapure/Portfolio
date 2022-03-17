import "../styles/topProject.css";
function Toproject({ projectdata, description, techStack, imges }) {
  return (
    <div className="top-Projects">
      <div>
        <h1>{projectdata}</h1>
        <p>{description} </p>
        <div className="techStack_div">
          {techStack.map((img) => {
            return (
              <div className="tech_stack">
                <img
                  src={require("../img/" + img)}
                  alt=""
                  width="35px"
                  height="35px"
                  class="change-color"
                />
              </div>
            );
          })}
        </div>
        <div>
          <div className="btn--live">
            <a
              href="https://shilpashingnapure.github.io/forestessentialsindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/379221/open-in-new.svg"
                alt=""
              />
              <span>Visit Now</span>
            </a>
          </div>
          <div className="btn--live">
            <a
              href="https://shilpashingnapure.github.io/forestessentialsindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/325236/github.svg"
                alt=""
              />
              <span>Github</span>
            </a>
          </div>
          <div className="btn--live">
            <a
              href="https://shilpashingnapure.github.io/forestessentialsindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://toppng.com/uploads/preview/video-play-comments-play-button-vhs-11562922969vxik7fqhwo.png"
                alt=""
              />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>

      <div className="project-imges">
        <div
          className="card img-1"
          style={{ backgroundImage: `url(${require("../img/" + imges[0])})` }}
        ></div>
        <div
          className="card img-2"
          style={{ backgroundImage: `url(${require("../img/" + imges[1])})` }}
        ></div>
        <div
          className="card img-3"
          style={{ backgroundImage: `url(${require("../img/" + imges[2])})` }}
        ></div>
      </div>
    </div>
  );
}

export default Toproject;
