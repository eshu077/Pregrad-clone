import { Search, Bell, Calendar, BookOpen, Award, User, Settings, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function DashboardPage() {
  const continueLearningCourses = [
    {
      id: 1,
      title: "Artificial Intelligence with Machine learning",
      progress: 6,
      startDate: "06 Jun 25",
      endDate: "30 Aug 25",
      expiryDate: "15 Jun 2026",
      image: "/ai-artificial-intelligence-machine-learning-purple.jpg",
      badge: "INDUSTRY RELEVANT",
    },
    {
      id: 2,
      title: "Full Stack Web development",
      progress: 0,
      startDate: "06 Jun 25",
      endDate: "28 Sep 25",
      expiryDate: null,
      image: "/full-stack-web-development-coding-javascript-react.jpg",
      badge: "BEGINNER FRIENDLY",
    },
  ]

  const classUpdates = [
    {
      id: 1,
      instructor: "Sourav",
      message: "Tap here to join now.",
      time: "15 Sept 2025 18:27",
      avatar: "S",
    },
    {
      id: 2,
      instructor: "Sourav",
      message:
        "Capstone Project 3 - Netflix Movie Recommendation System has been scheduled on 15 Sep 2025 01:00 PM UTC to 02:30 PM UT...",
      time: "15 Sept 2025 18:27",
      avatar: "S",
      hasMore: true,
    },
    {
      id: 3,
      instructor: "Sourav",
      message: "Class update message here...",
      time: "14 Sept 2025 16:26",
      avatar: "S",
    },
  ]

  const sidebarItems = [
    { icon: BookOpen, label: "Dashboard", href: "/dashboard", active: true },
    { icon: Bell, label: "Announcements", href: "/dashboard/announcements", active: false },
    { icon: BookOpen, label: "My Courses", href: "/dashboard/courses", active: false },
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

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Continue Learning Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Continue <span className="text-green-600">Learning</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {continueLearningCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded font-semibold">
                        {course.badge}
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-3 leading-tight">{course.title}</h3>

                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {course.startDate} - {course.endDate}
                        </span>
                      </div>

                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Progress</span>
                          <span className="text-sm font-semibold text-gray-900">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      {course.expiryDate && <p className="text-xs text-gray-500">Expires on {course.expiryDate}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
                  SEE MY COURSES
                </Button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Today's Classes */}
              <Card className="border border-gray-200 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Today's <span className="text-green-600">Classes</span>
                    </CardTitle>
                    <Button variant="outline" size="icon" className="w-8 h-8 bg-transparent">
                      <Calendar className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-gray-500">No Classes.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Class Updates */}
              <Card className="border border-gray-200 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">
                    Class <span className="text-green-600">Updates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {classUpdates.map((update) => (
                    <div key={update.id} className="flex space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {update.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-gray-900 text-sm">{update.instructor}</p>
                          <p className="text-xs text-gray-500">{update.time}</p>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {update.message}
                          {update.hasMore && <button className="text-blue-600 hover:underline ml-1">Read more</button>}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
