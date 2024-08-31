function FeatureWork({ image, title, year, category, description }) {
    return (
      <div className="featureWorks">
        <img src={image} alt={title} className="workImage" />
        <div className="workDetails">
          <h3>{title}</h3>
          <div className="workMeta">
            <span className="workYear">{year}</span>
            <span className="workCategory">{category}</span>
          </div>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
export default FeatureWork;