import './css/skills.css'

export const Skill = ({name,experience,abouts}) => {

  return (
    <div className='skill-container'>
        <img src={`/src/assets/${name}.png`} alt={name} />
        <div className="info-container">
            <h4>{name}</h4>
            <br/>
            <p>Experience:<br/> <small>{experience}</small></p>
            <br/>
            {
                abouts?<p>Some frameworks or Similars:<br/><small>{abouts}</small></p>:<small>No familiar frameworks</small>
            }
        </div>
    </div>
  )
}
