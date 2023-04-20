import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Select from 'react-select';

import Cta from '../../cta/Cta';

import './projects.scss'

const colourStyles = {
    control: (styles) => ({}),
    valueContainer: (styles) => ({}),
    placeholder: (styles) => ({}),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    indicatorsContainer: (styles) => ({}),
    menu: (styles) => ({}),
    menuList: (styles) => ({}),
    option: (styles, state) => ({
        color: state.isSelected ? '#FF4D01' : 'inherit'
    }),
};

const classes = {
    control: (state) => state.menuIsOpen ? 'select active' : 'select',
    valueContainer: () => 'select__value',
    indicatorsContainer: () => 'select__icon',
    menu: () => 'select__dropdown',
    option: () => 'select__item',
    input: () => 'select__search'
}

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [optionsTheme, setOptionsTheme] = useState([]);
    const [optionsType, setOptionsType] = useState([]);

    const [selectedTheme, setSelectedTheme] = useState(null);
    const [selectedType, setSelectedType] = useState(null);


    useEffect(() => {
        axios.get(`http://localhost:5000/api/projects/`)
            .then((response) => {
                setProjects(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/themes/`)
            .then((response) => {
                console.log(response.data);
                let projectOptionsTheme = [];
                response.data.forEach((item, i) => {
                    const { id, name } = item;
                    projectOptionsTheme[i] = { value: id, label: name }
                })
                setOptionsTheme(projectOptionsTheme)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/types/`)
            .then((response) => {
                console.log(response.data);
                let projectOptionsType = [];
                response.data.forEach((item, i) => {
                    const { id, name } = item;
                    projectOptionsType[i] = { value: id, label: name }
                })
                setOptionsType(projectOptionsType)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleThemeChange = (selectedOption) => {
        setSelectedTheme(selectedOption);
    };

    const handleTypeChange = (selectedOption) => {
        setSelectedType(selectedOption);
    };

    const filteredProjects = projects.filter(project => {
        return (selectedTheme ? project.projectTheme === selectedTheme.value : true) &&
            (selectedType ? project.projectType === selectedType.value : true);
    });

    return (
        <main className="projects">
            <section className="projects-content">
                <div className="container">
                    <div className="projects__head">
                        <h1 className="heading-primary">Наши проекты</h1>
                        {optionsTheme && optionsType ?
                            <div className="projects__filters">
                                {console.log(optionsTheme, optionsType)}
                                <Select classNames={classes} options={optionsType} styles={colourStyles} onChange={handleTypeChange}  placeholder="Тип проекта" />
                                <Select classNames={classes} options={optionsTheme} styles={colourStyles} onChange={handleThemeChange}  placeholder="Тематика проекта" />
                            </div>
                            : null}
                    </div>
                    <div className="projects__wrap">
                        {filteredProjects ? filteredProjects.map(project => {
                            return (
                                <Link to={`/projects/${project.id}`} className="projects__item" key={project.id} style={{ background: project.color }}>
                                    <div className="projects__item-img-wrap">
                                        <img src={project.image ? `http://localhost:5000/uploads/${project.image.filename}` : null} alt={project.name} className="main-projects__img" />
                                    </div>
                                    <div className="projects__item-name">{project.name}</div>
                                </Link>
                            )
                        })
                            : null}
                    </div>
                </div>
            </section>

            <Cta />
        </main>
    )

}

export default Projects;