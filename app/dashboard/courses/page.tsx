import {
  Search,
  Bell,
  Calendar,
  BookOpen,
  Award,
  User,
  Settings,
  MoreHorizontal,
  Play,
  Clock,
  Users,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function MyCoursesPage() {
  const enrolledCourses = [
    {
      id: 1,
      title: "Artificial Intelligence with Machine Learning",
      instructor: "Dr. Rajesh Kumar",
      progress: 65,
      totalLessons: 45,
      completedLessons: 29,
      duration: "12 weeks",
      students: 1250,
      rating: 4.8,
      image: "/ai-artificial-intelligence-machine-learning-purple.jpg",
      status: "In Progress",
      nextLesson: "Neural Networks Fundamentals",
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      instructor: "Sarah Johnson",
      progress: 30,
      totalLessons: 60,
      completedLessons: 18,
      duration: "16 weeks",
      students: 2100,
      rating: 4.9,
      image: "/full-stack-web-development-coding-javascript-react.jpg",
      status: "In Progress",
      nextLesson: "React State Management",
    },
    {
      id: 3,
      title: "Business Analytics",
      instructor: "Michael Chen",
      progress: 100,
      totalLessons: 35,
      completedLessons: 35,
      duration: "10 weeks",
      students: 890,
      rating: 4.7,
      image: "/business-analytics-data-charts-blue-gradient.jpg",
      status: "Completed",
      nextLesson: null,
    },
    {
      id: 4,
      title: "Cyber Security Fundamentals",
      instructor: "Alex Rodriguez",
      progress: 15,
      totalLessons: 40,
      completedLessons: 6,
      duration: "14 weeks",
      students: 1500,
      rating: 4.6,
      image: "/cyber-security-digital-shield-green-gradient-tech.jpg",
      status: "In Progress",
      nextLesson: "Network Security Basics",
    },
  ]

  const sidebarItems = [
    { icon: BookOpen, label: "Dashboard", href: "/dashboard", active: false },
    { icon: Bell, label: "Announcements", href: "/dashboard/announcements", active: false },
    { icon: BookOpen, label: "My Courses", href: "/dashboard/courses", active: true },
    { icon: Calendar, label: "Calendar", href: "/dashboard/calendar", active: false },
    { icon: Award, label: "Exams", href: "/dashboard/exams", active: false },
    { icon: Award, label: "Certificates", href: "/dashboard/certificates", active: false },
    { icon: BookOpen, label: "My Purchases", href: "/dashboard/purchases", active: false },
    { icon: User, label: "Profile", href: "/dashboard/profile", active: false },
    { icon: Settings, label: "Settings", href: "/dashboard/settings", active: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-800">Pregrad</span>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    item.active
                      ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for Courses, Subjects, Sections or Lessons"
                  className="pl-10 bg-gray-50 border-gray-200 rounded-lg h-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4 ml-6">
              <Button variant="outline" className="text-gray-600 bg-transparent">
                Explore Courses
              </Button>
              <Button variant="outline" size="icon" className="text-gray-600 bg-transparent">
                <Bell className="w-4 h-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  E
                </div>
                <span className="font-medium text-gray-900">Eshu Sharma</span>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* My Courses Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
              <p className="text-gray-600">Track your learning progress and continue your journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div
                      className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                        course.status === "Completed" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
                      }`}
                    >
                      {course.status}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">by {course.instructor}</p>

                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-semibold text-gray-900">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        {course.completedLessons} of {course.totalLessons} lessons completed
                      </p>
                    </div>

                    {course.nextLesson && (
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800 font-medium">Next Lesson:</p>
                        <p className="text-sm text-blue-600">{course.nextLesson}</p>
                      </div>
                    )}

                    <Button className="w-full" disabled={course.status === "Completed"}>
                      <Play className="w-4 h-4 mr-2" />
                      {course.status === "Completed" ? "Course Completed" : "Continue Learning"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
