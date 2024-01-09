import './SkillListItem.css'
export default function SkillListItem({skill}) {
    return (
        <li>
            {skill.name} <span>{skill.level}</span>
        </li>
    );
}