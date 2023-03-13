import { Link } from 'react-router-dom';
import Select from 'react-select';

import Cta from '../../cta/Cta';

import './projects.scss'

import projectImg from '../../../img/project-img.png';

const projectOptionsType = [
    { value: 'sites-services', label: 'Сайты и сервисы' },
    { value: 'sites-services', label: 'Сайты и сервисы' },
    { value: 'sites-services', label: 'Сайты и сервисы' },
]

const projectOptionsTheme = [
    { value: 'estate', label: 'Недвижимость' },
    { value: 'finance', label: 'Финансы и банки' },
    { value: 'medicine', label: 'Медицина' },
]

const colourStyles = {
    control: (styles) => ({}),
    valueContainer: (styles) => ({}),
    placeholder: (styles) => ({}),
    input: (styles) => ({ display: 'none' }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    indicatorsContainer: (styles) => ({}),
};

const classes = {
    control: () => 'select',
    valueContainer: () => 'select__value',
    indicatorsContainer: () => 'select__icon'
}

const Projects = () => {

    return (
        <main className="projects">
            <section className="projects-content">
                <div className="container">
                    <div className="projects__head">
                        <h1 className="heading-primary">Наши проекты</h1>
                        <div className="projects__filters">
                            <Select classNames={classes} options={projectOptionsType} styles={colourStyles} placeholder="Тип проекта" />
                            <Select classNames={classes} options={projectOptionsTheme} styles={colourStyles} placeholder="Тематика проекта" />
                        </div>
                    </div>
                    <div className="projects__wrap">
                        <Link to="/projects/detail" className="projects__item" style={{ background: 'linear-gradient(252.85deg, #5740F3 0%, #5A42F5 100%)' }}>
                            <img src={projectImg} alt="Биотехнологический комплекс по глубокой переработке древесины" className="projects__item-img" />
                            <div className="projects__item-name">Биотехнологический комплекс по глубокой переработке древесины</div>
                        </Link>
                        <Link to="/projects/detail" className="projects__item">
                            <img src={projectImg} alt="Биотехнологический комплекс по глубокой переработке древесины" className="projects__item-img" />
                            <div className="projects__item-name">Биотехнологический комплекс по глубокой переработке древесины</div>
                        </Link>
                        <Link to="/projects/detail" className="projects__item">
                            <img src={projectImg} alt="Биотехнологический комплекс по глубокой переработке древесины" className="projects__item-img" />
                            <div className="projects__item-name">Биотехнологический комплекс по глубокой переработке древесины</div>
                        </Link>
                        <Link to="/projects/detail" className="projects__item" style={{ background: 'linear-gradient(252.85deg, #5740F3 0%, #5A42F5 100%)' }}>
                            <img src={projectImg} alt="Биотехнологический комплекс по глубокой переработке древесины" className="projects__item-img" />
                            <div className="projects__item-name">Биотехнологический комплекс по глубокой переработке древесины</div>
                        </Link>
                        <Link to="/projects/detail" className="projects__item">
                            <img src={projectImg} alt="Биотехнологический комплекс по глубокой переработке древесины" className="projects__item-img" />
                            <div className="projects__item-name">Биотехнологический комплекс по глубокой переработке древесины</div>
                        </Link>
                        <Link to="/projects/detail" className="projects__item">
                            <img src={projectImg} alt="Биотехнологический комплекс по глубокой переработке древесины" className="projects__item-img" />
                            <div className="projects__item-name">Биотехнологический комплекс по глубокой переработке древесины</div>
                        </Link>
                        <Link to="/projects/detail" className="projects__item">
                            <img src={projectImg} alt="Биотехнологический комплекс по глубокой переработке древесины" className="projects__item-img" />
                            <div className="projects__item-name">Биотехнологический комплекс по глубокой переработке древесины</div>
                        </Link>
                        <Link to="/projects/detail" className="projects__item" style={{ background: 'linear-gradient(252.85deg, #5740F3 0%, #5A42F5 100%)' }}>
                            <img src={projectImg} alt="Биотехнологический комплекс по глубокой переработке древесины" className="projects__item-img" />
                            <div className="projects__item-name">Биотехнологический комплекс по глубокой переработке древесины</div>
                        </Link>
                        <Link to="/projects/detail" className="projects__item">
                            <img src={projectImg} alt="Биотехнологический комплекс по глубокой переработке древесины" className="projects__item-img" />
                            <div className="projects__item-name">Биотехнологический комплекс по глубокой переработке древесины</div>
                        </Link>
                        <Link to="/projects/detail" className="projects__item">
                            <img src={projectImg} alt="Биотехнологический комплекс по глубокой переработке древесины" className="projects__item-img" />
                            <div className="projects__item-name">Биотехнологический комплекс по глубокой переработке древесины</div>
                        </Link>
                        <Link to="/projects/detail" className="projects__item">
                            <img src={projectImg} alt="Биотехнологический комплекс по глубокой переработке древесины" className="projects__item-img" />
                            <div className="projects__item-name">Биотехнологический комплекс по глубокой переработке древесины</div>
                        </Link>
                    </div>
                </div>
            </section>

            <Cta />
        </main>
    )

}

export default Projects;