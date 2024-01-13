import { useState } from 'react';
import './NewSkillForm.css'
export default function NewSkillForm({ addNewSkill}) {
    const [formData, setFormData] = useState({
        name: '',
        level: '1',
    })
    function handleChange(evt) {
        const newFormData = { ...formData, [evt.target.name]: evt.target.value }
        setFormData(newFormData)
    }
    function handleAddSkill(evt) {
        evt.preventDefault()
        addNewSkill(formData)
    }
    return (
        <form onSubmit={handleAddSkill}>
            <label>Skill</label>
            <input name='name' type='text' onChange={handleChange} />
            <label>Level</label>
            <select name='level' onChange={handleChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <button>ADD SKILL</button>
        </form>
    );
}