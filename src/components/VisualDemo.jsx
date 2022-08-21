import './css/visualdemo.css'
import {skills} from '../data/skills'

export const VisualDemo = () => {
    

    return (
    <div className="visual-container">
        <div className="visual-buttons">
            <div style={{backgroundColor:'red'}}></div>
            <div style={{backgroundColor:'yellow'}}></div>
            <div style={{backgroundColor:'green'}}></div>
        </div>
        <textarea disabled={true} value={JSON.stringify(skills)}>
        </textarea>
    </div>
  )
}
