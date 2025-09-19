import {
  Search,
  Bell,
  Calendar,
  BookOpen,
  Award,
  User,
  Settings,
  MoreHorizontal,
  Clock,
  Globe,
  Timer,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ExamsPage() {
  const sidebarItems = [
    { icon: BookOpen, label: "Dashboard", href: "/dashboard", active: false },
    { icon: Bell, label: "Announcements", href: "/dashboard/announcements", active: false },
    { icon: BookOpen, label: "My Courses", href: "/dashboard/courses", active: false },
    { icon: Calendar, label: "Calendar", href: "/dashboard/calendar", active: false },
    { icon: Award, label: "Exams", href: "/dashboard/exams", active: true },
    { icon: Award, label: "Certificates", href: "/dashboard/certificates", active: false },
    { icon: BookOpen, label: "My Purchases", href: "/dashboard/purchases", active: false },
    { icon: User, label: "Profile", href: "/dashboard/profile", active: false },
    { icon: Settings, label: "Settings", href: "/dashboard/settings", active: false },
  ]

  const upcomingExams = [
    {
      id: 1,
      title: "Test",
      batch: "example batch",
      timing: "Anytime",
      mode: "Online",
      duration: "01:00:00",
      status: "Available",
    },
    {
      id: 2,
      title: "PSAT Scholarship Test",
      batch: "AimI",
      timing: "Anytime",
      mode: "Online",
      duration: "No Time Limit",
      status: "Available",
    },
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

        {/* Exams Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              My <span className="text-green-600">Exams</span>
            </h1>

            {/* Tabs */}
            <div className="flex space-x-8 mb-8 border-b border-gray-200">
              <button className="pb-4 px-1 border-b-2 border-blue-600 text-blue-600 font-semibold">
                Upcoming Exams
              </button>
              <button className="pb-4 px-1 text-gray-500 hover:text-gray-700">Past Exams</button>
            </div>

            {/* Exams List */}
            <div className="space-y-6">
              {upcomingExams.map((exam, index) => (
                <Card key={exam.id} className="border border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {index + 1}. {exam.title}
                            </h3>
                            <p className="text-gray-500">{exam.batch}</p>
                          </div>
                          <Button
                            variant="outline"
                            className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                          >
                            {exam.status}
                          </Button>
                        </div>

                        <div className="flex items-center space-x-8 text-sm">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Clock className="w-4 h-4 text-green-500" />
                            <span>{exam.timing}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Globe className="w-4 h-4 text-green-500" />
                            <span>{exam.mode}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Timer className="w-4 h-4 text-green-500" />
                            <span>{exam.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 ml-8">
                        <Button className="bg-green-600 hover:bg-green-700 text-white">ATTEMPT →</Button>
                        <Button
                          variant="outline"
                          className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                        >
                          PAST ATTEMPTS →
                        </Button>
                      </div>
                    </div>
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
