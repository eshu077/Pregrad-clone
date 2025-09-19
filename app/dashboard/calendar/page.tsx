import {
  Search,
  Bell,
  Calendar,
  BookOpen,
  Award,
  User,
  Settings,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CalendarPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI/ML Live Session",
      course: "Artificial Intelligence with Machine Learning",
      date: "2025-01-18",
      time: "2:00 PM - 3:30 PM",
      instructor: "Dr. Rajesh Kumar",
      type: "Live Class",
      location: "Virtual Classroom",
    },
    {
      id: 2,
      title: "React Components Workshop",
      course: "Full Stack Web Development",
      date: "2025-01-19",
      time: "10:00 AM - 12:00 PM",
      instructor: "Sarah Johnson",
      type: "Workshop",
      location: "Virtual Classroom",
    },
    {
      id: 3,
      title: "Cybersecurity Assessment",
      course: "Cyber Security Fundamentals",
      date: "2025-01-20",
      time: "3:00 PM - 4:00 PM",
      instructor: "Alex Rodriguez",
      type: "Assessment",
      location: "Online Portal",
    },
    {
      id: 4,
      title: "Project Review Session",
      course: "Business Analytics",
      date: "2025-01-22",
      time: "11:00 AM - 12:30 PM",
      instructor: "Michael Chen",
      type: "Review",
      location: "Virtual Classroom",
    },
  ]

  const sidebarItems = [
    { icon: BookOpen, label: "Dashboard", href: "/dashboard", active: false },
    { icon: Bell, label: "Announcements", href: "/dashboard/announcements", active: false },
    { icon: BookOpen, label: "My Courses", href: "/dashboard/courses", active: false },
    { icon: Calendar, label: "Calendar", href: "/dashboard/calendar", active: true },
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

        {/* Calendar Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Calendar</h1>
              <p className="text-gray-600">Keep track of your classes, assignments, and important dates</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Calendar Widget */}
              <div className="lg:col-span-2">
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">January 2025</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="icon" className="bg-transparent">
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="bg-transparent">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 35 }, (_, i) => {
                        const day = i - 2 // Adjust for month start
                        const isCurrentMonth = day > 0 && day <= 31
                        const hasEvent = [18, 19, 20, 22].includes(day)
                        const isToday = day === 16

                        return (
                          <div
                            key={i}
                            className={`aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors ${
                              isCurrentMonth
                                ? isToday
                                  ? "bg-blue-600 text-white font-semibold"
                                  : hasEvent
                                    ? "bg-green-100 text-green-800 font-medium hover:bg-green-200"
                                    : "text-gray-900 hover:bg-gray-100"
                                : "text-gray-300"
                            }`}
                          >
                            {isCurrentMonth ? day : ""}
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Events */}
              <div>
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2">
                        <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                        <p className="text-xs text-gray-600 mb-2">{event.course}</p>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <MapPin className="w-3 h-3" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div
                          className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                            event.type === "Live Class"
                              ? "bg-blue-100 text-blue-700"
                              : event.type === "Workshop"
                                ? "bg-purple-100 text-purple-700"
                                : event.type === "Assessment"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-green-100 text-green-700"
                          }`}
                        >
                          {event.type}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
