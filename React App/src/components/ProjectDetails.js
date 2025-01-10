import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

function ProjectDetails() {
  const { id } = useParams();
  
  // Find the project data based on the ID
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen text-white pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-block mb-8 text-gray-400 hover:text-white transition"
          >
            ← Back to Projects
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-400 mb-8">{project.description}</p>
          
          <div className="relative aspect-video mb-12">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
              <p className="text-gray-400">
                {project.description}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
              <div className="space-y-4 text-gray-400">
                <p><strong className="text-white">Client:</strong> {project.client || 'Confidential'}</p>
                <p><strong className="text-white">Role:</strong> UI/UX Design</p>
                <p><strong className="text-white">Year:</strong> 2024</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition"
                >
                  View on Dribbble
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetails; 