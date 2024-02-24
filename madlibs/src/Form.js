import React, { useEffect, useState, useRef }  from "react"
import useFields from "./useFields";
import './Form.css'

const Form = () => {
const [story, setStory] = useState(null);
const [formData, handleChange, resetForm] = useFields({
    noun: "",
    noun2: "",
    adjective: "",
    color: ""
})

const someRandomStories = {
    0 : `${formData.noun} went to ${formData.noun2} and it was ${formData.adjective} with color ${formData.color}`,
    1 : `${formData.noun} is way better than ${formData.noun2} because they are ${formData.adjective} and like the color ${formData.color}`,
    2 : `The ${formData.noun2} went to see the ${formData.adjective} ${formData.color} ${formData.noun}`,
    3 : `We found ${formData.noun2} finally! ${formData.noun} reported them a long time ago! They said ${formData.noun2} wore ${formData.adjective} ${formData.color} shirts!`
}

const generate_story = () => {
    let number = Math.floor(Math.random() * 3)
    let story = someRandomStories[number]
    
    setStory(story)
};

const handleSubmit = e => {
    e.preventDefault();
    generate_story();
    resetForm()
}

return (
    !story ? 
    <div>
    <h1>Madlibs!</h1>
    <form onSubmit={handleSubmit}>
        <input placeholder="Noun" type="text" name="noun" value={formData.noun} onChange={handleChange}/>
        <br></br>
        <input placeholder="Noun 2" type="text" name="noun2" value={formData.noun2} onChange={handleChange}/>
        <br></br>
        <input placeholder="Adjective" type="text" name="adjective" value={formData.adjective} onChange={handleChange}/>
        <br></br>
        <input placeholder="Color" type="text" name="color" value={formData.color} onChange={handleChange}/>
        <br></br>
        <button type="submit"> Get Story </button>
    </form>
    </div>
    :
    <div>
    <h1>{story}</h1>
    </div>
)

};

export default Form;