import { Link } from 'react-router-dom';
import { FaArrowRight, FaProjectDiagram } from 'react-icons/fa';
import './ProjectsPreview.css';

const ProjectsPreview = () => {
    const projects = [
        {
            slug: 'medikal-web-tasarim',
            title: 'Medikal Şirket Web Tasarım',
            client: 'Airlife Medikal',
            category: 'Web Tasarım'
        },
        {
            slug: 'enerji-web-tasarim',
            title: 'Enerji Şirketi Web Tasarım',
            client: 'Solares Enerji',
            category: 'Web Tasarım'
        },
        {
            slug: 'biyoteknoloji-web-tasarim',
            title: 'Biyoteknoloji Web Tasarım',
            client: 'Letgenbio',
            category: 'Web Tasarım'
        },
        {
            slug: 'ruzgar-enerjisi-web-tasarim',
            title: 'Rüzgar Enerjisi Web Tasarım',
            client: 'Northel Enerji',
            category: 'Web Tasarım'
        },
        {
            slug: 'sanayi-web-tasarim',
            title: 'Sanayi Firması Web Tasarım',
            client: 'Zormak',
            category: 'Web Tasarım'
        },
        {
            slug: 'egitim-danismanligi-web',
            title: 'Yurtdışı Eğitim Danışmanlığı',
            client: 'Tampa Eğitim',
            category: 'Web Tasarım'
        }
    ];

    return (
        <section className="projects-preview section">
            <div className="container">
                <div className="section-title">
                    <h2>Projelerimiz</h2>
                    <p>
                        Gerçekleştirdiğimiz başarılı projeler ve case study'lerimiz
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            to={`/projeler/${project.slug}`}
                            className="project-card"
                        >
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <FaProjectDiagram />
                                </div>
                                <div className="project-overlay">
                                    <span className="project-category">{project.category}</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <span className="project-client">{project.client}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="projects-cta">
                    <Link to="/projeler" className="btn btn-primary">
                        Tüm Projelerimizi Görüntüle
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
