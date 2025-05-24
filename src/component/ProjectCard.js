export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <div className="project-card-wrapper">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className="card-btn">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <button>GitHub</button>
        </a>
      </div>
    </div>
  );
};
