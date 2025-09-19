import { ArrowLeft, Star, Clock, Users, Award, BookOpen, Video, FileText, Download, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { notFound } from "next/navigation"

const courses = [
  {
    id: 1,
    title: "Professional Program in Data Science with IBM",
    price: "₹85000",
    originalPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 156,
    duration: "24 weeks",
    students: "1.2k+",
    image: "/ai-artificial-intelligence-machine-learning-purple.jpg",
    badge: "PROFESSIONAL PROGRAM",
    badgeColor: "bg-green-600",
    category: "Professional Pro",
    level: "Advanced",
    description:
      "Master data science with IBM's industry-leading curriculum. Learn Python, machine learning, deep learning, and big data analytics with hands-on projects and real-world case studies.",
    instructor: "Dr. Rajesh Kumar",
    instructorImage: "/instructor-teaching.png",
    modules: 12,
    projects: 8,
    certificate: true,
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "SQL",
      "Tableau",
      "Apache Spark",
      "TensorFlow",
      "Data Visualization",
    ],
    curriculum: [
      "Introduction to Data Science & Python Programming",
      "Statistics and Probability for Data Science",
      "Data Manipulation with Pandas & NumPy",
      "Data Visualization with Matplotlib & Seaborn",
      "Machine Learning Fundamentals",
      "Supervised Learning Algorithms",
      "Unsupervised Learning & Clustering",
      "Deep Learning with TensorFlow",
      "Big Data Analytics with Apache Spark",
      "SQL for Data Science",
      "Business Intelligence with Tableau",
      "Capstone Project & Industry Case Studies",
    ],
  },
  {
    id: 2,
    title: "PGP in Data Science, AI & Gen AI",
    price: "₹200000",
    originalPrice: null,
    discount: null,
    rating: 4.9,
    reviews: 89,
    duration: "36 weeks",
    students: "856+",
    image: "/cyber-security-digital-shield-green-gradient-tech.jpg",
    badge: "PROFESSIONAL PROGRAM",
    badgeColor: "bg-green-600",
    category: "Professional Pro",
    level: "Expert",
    description:
      "Comprehensive program covering Data Science, Artificial Intelligence, and Generative AI. Build expertise in cutting-edge technologies with industry mentorship and placement support.",
    instructor: "Prof. Anita Sharma",
    instructorImage: "/female-instructor.jpg",
    modules: 18,
    projects: 12,
    certificate: true,
    skills: ["Python", "AI/ML", "Generative AI", "NLP", "Computer Vision", "LLMs", "PyTorch", "Transformers"],
    curriculum: [
      "Python for Data Science & AI",
      "Statistics & Mathematical Foundations",
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Natural Language Processing",
      "Computer Vision & Image Processing",
      "Generative AI & Large Language Models",
      "Transformer Architecture & Fine-tuning",
      "AI Ethics & Responsible AI",
      "MLOps & Model Deployment",
      "Industry Projects & Case Studies",
      "Capstone Project with Mentorship",
    ],
  },
  {
    id: 3,
    title: "Artificial Intelligence with Machine learning",
    price: "₹20000",
    originalPrice: "₹24000",
    discount: "17% OFF",
    rating: 4.5,
    reviews: 234,
    duration: "12 weeks",
    students: "2.5k+",
    image: "/ai-artificial-intelligence-machine-learning-purple.jpg",
    badge: "INDUSTRY RELEVANT",
    badgeColor: "bg-purple-600",
    category: "Pre-Graduation Program",
    level: "Advanced",
    description:
      "Dive deep into AI and ML concepts with practical implementation. Learn algorithms, neural networks, and real-world applications with industry-standard tools and frameworks.",
    instructor: "Mr. Vikram Singh",
    instructorImage: "/male-instructor.jpg",
    modules: 8,
    projects: 5,
    certificate: true,
    skills: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Neural Networks", "Computer Vision", "NLP"],
    curriculum: [
      "Introduction to AI & ML",
      "Python for Machine Learning",
      "Supervised Learning Algorithms",
      "Unsupervised Learning & Clustering",
      "Neural Networks & Deep Learning",
      "Computer Vision Applications",
      "Natural Language Processing",
      "Final Project & Portfolio Building",
    ],
  },
  {
    id: 4,
    title: "Business Analytics",
    price: "₹20000",
    originalPrice: "₹24000",
    discount: "17% OFF",
    rating: 4.7,
    reviews: 189,
    duration: "10 weeks",
    students: "1.8k+",
    image: "/business-analytics-data-charts-blue-gradient.jpg",
    badge: "INDUSTRY RELEVANT",
    badgeColor: "bg-blue-600",
    category: "Pre-Graduation Program",
    level: "Intermediate",
    description:
      "Transform business decisions with data-driven insights. Master analytics tools, statistical methods, and visualization techniques to drive business growth and strategy.",
    instructor: "Ms. Priya Patel",
    instructorImage: "/business-analyst.jpg",
    modules: 6,
    projects: 4,
    certificate: true,
    skills: ["Excel", "SQL", "Tableau", "Power BI", "R", "Statistics", "Data Visualization"],
    curriculum: [
      "Business Analytics Fundamentals",
      "Excel for Business Analysis",
      "SQL for Business Intelligence",
      "Statistical Analysis with R",
      "Data Visualization with Tableau",
      "Business Case Studies & Projects",
    ],
  },
  {
    id: 5,
    title: "Cyber Security",
    price: "₹20000",
    originalPrice: "₹24000",
    discount: "17% OFF",
    rating: 4.6,
    reviews: 156,
    duration: "14 weeks",
    students: "1.2k+",
    image: "/cyber-security-digital-shield-green-gradient-tech.jpg",
    badge: "INDUSTRY RELEVANT",
    badgeColor: "bg-green-600",
    category: "Pre-Graduation Program",
    level: "Advanced",
    description:
      "Protect digital assets with comprehensive cybersecurity training. Learn ethical hacking, network security, incident response, and compliance frameworks.",
    instructor: "Mr. Arjun Mehta",
    instructorImage: "/cybersecurity-expert.jpg",
    modules: 10,
    projects: 6,
    certificate: true,
    skills: ["Network Security", "Ethical Hacking", "Penetration Testing", "SIEM", "Incident Response", "Compliance"],
    curriculum: [
      "Cybersecurity Fundamentals",
      "Network Security & Protocols",
      "Ethical Hacking & Penetration Testing",
      "Web Application Security",
      "Incident Response & Forensics",
      "Compliance & Risk Management",
      "Security Tools & Technologies",
      "Capstone Security Project",
    ],
  },
  {
    id: 6,
    title: "Artificial Intelligence and Machine Learning Self Paced Program",
    price: "₹6000",
    originalPrice: null,
    discount: null,
    rating: 4.4,
    reviews: 312,
    duration: "Self-paced",
    students: "3.1k+",
    image: "/ai-artificial-intelligence-machine-learning-purple.jpg",
    badge: "SELF PACED",
    badgeColor: "bg-purple-600",
    category: "Self Paced Program",
    level: "Beginner",
    description:
      "Learn AI and ML at your own pace with comprehensive video lectures, hands-on exercises, and practical projects. Perfect for beginners starting their AI journey.",
    instructor: "AI Learning Team",
    instructorImage: "/ai-team.jpg",
    modules: 6,
    projects: 3,
    certificate: true,
    skills: ["Python Basics", "ML Fundamentals", "Data Analysis", "Basic Neural Networks"],
    curriculum: [
      "Python Programming Basics",
      "Introduction to Machine Learning",
      "Data Preprocessing & Analysis",
      "Basic ML Algorithms",
      "Introduction to Neural Networks",
      "Hands-on Projects",
    ],
  },
  {
    id: 7,
    title: "Data Science/Analytics Self Paced Program",
    price: "₹6000",
    originalPrice: null,
    discount: null,
    rating: 4.3,
    reviews: 278,
    duration: "Self-paced",
    students: "2.7k+",
    image: "/business-analytics-data-charts-blue-gradient.jpg",
    badge: "SELF PACED",
    badgeColor: "bg-blue-600",
    category: "Self Paced Program",
    level: "Beginner",
    description:
      "Master data science fundamentals with self-paced learning. Covers statistics, data visualization, and basic analytics with practical exercises.",
    instructor: "Data Science Team",
    instructorImage: "/data-team.jpg",
    modules: 5,
    projects: 3,
    certificate: true,
    skills: ["Statistics", "Excel", "Python", "Data Visualization", "Basic Analytics"],
    curriculum: [
      "Statistics for Data Science",
      "Excel for Data Analysis",
      "Python for Data Science",
      "Data Visualization Techniques",
      "Analytics Projects",
    ],
  },
  {
    id: 8,
    title: "Mern Stack Self Paced Program",
    price: "₹6000",
    originalPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 145,
    duration: "Self-paced",
    students: "987+",
    image: "/full-stack-web-development-coding-javascript-react.jpg",
    badge: "SELF PACED",
    badgeColor: "bg-orange-600",
    category: "Self Paced Program",
    level: "Intermediate",
    description:
      "Build full-stack web applications with MongoDB, Express.js, React, and Node.js. Learn modern web development with hands-on projects.",
    instructor: "Web Dev Team",
    instructorImage: "/web-developer.jpg",
    modules: 7,
    projects: 4,
    certificate: true,
    skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "REST APIs"],
    curriculum: [
      "JavaScript Fundamentals",
      "Node.js & Express.js",
      "MongoDB & Database Design",
      "React Frontend Development",
      "REST API Development",
      "Authentication & Security",
      "Full-Stack Project",
    ],
  },
]

export default function CoursePage({ params }: { params: { id: string } }) {
  const courseId = Number.parseInt(params.id)
  const course = courses.find((c) => c.id === courseId)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-slate-800 text-white px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-2xl font-bold">Pregrad</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors"
          >
            <span>My Account</span>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-64 object-cover" />
                <div
                  className={`absolute top-4 left-4 ${course.badgeColor} text-white text-sm px-3 py-1 font-semibold rounded-full`}
                >
                  {course.badge}
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  {course.level}
                </div>
              </div>

              <div className="p-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-4">{course.title}</h1>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">{course.description}</p>

                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <img
                      src={course.instructorImage || "/placeholder.svg"}
                      alt={course.instructor}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-800">{course.instructor}</p>
                      <p className="text-sm text-slate-500">Course Instructor</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-slate-800">{course.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating) ? "text-yellow-400 fill-current" : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-500">({course.reviews} reviews)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-slate-800">{course.duration}</p>
                    <p className="text-sm text-slate-500">Duration</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <BookOpen className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-slate-800">{course.modules}</p>
                    <p className="text-sm text-slate-500">Modules</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <FileText className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold text-slate-800">{course.projects}</p>
                    <p className="text-sm text-slate-500">Projects</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                    <p className="font-semibold text-slate-800">{course.students}</p>
                    <p className="text-sm text-slate-500">Students</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills You'll Learn */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Skills You'll Learn</h2>
                <div className="flex flex-wrap gap-3">
                  {course.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Curriculum */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800">{module}</h3>
                      </div>
                      <Video className="w-5 h-5 text-slate-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card className="sticky top-6">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-slate-800">{course.price}</span>
                    {course.originalPrice && (
                      <>
                        <span className="text-slate-500 line-through text-lg">{course.originalPrice}</span>
                        <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded-full">
                          {course.discount}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-500">One-time payment</p>
                </div>

                <button
                  className="w-full text-white text-lg py-6 mb-4 border-0 rounded-md font-semibold transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#2563eb" }}
                >
                  Enroll Now
                </button>

                <div className="flex space-x-2 mb-6">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Heart className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Certificate</span>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 font-semibold">Included</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Access</span>
                    <span className="font-semibold">Lifetime</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Support</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Downloads</span>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">Available</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-800 mb-4">Course Features</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <Video className="w-5 h-5 text-blue-600" />
                    <span>HD Video Lectures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-green-600" />
                    <span>Downloadable Resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-purple-600" />
                    <span>Industry Certificate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span>Community Access</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
