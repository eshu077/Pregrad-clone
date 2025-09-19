import { Search, Bell, Calendar, BookOpen, Award, User, Settings, MoreHorizontal, Pin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "New Course Launch: Advanced React Development",
      content:
        "We're excited to announce our new Advanced React Development course starting next month. This comprehensive program covers React 18 features, Next.js 14, and modern development practices.",
      date: "2025-01-15",
      time: "10:30 AM",
      priority: "high",
      pinned: true,
      author: "Admin Team",
    },
    {
      id: 2,
      title: "System Maintenance Scheduled",
      content:
        "Our learning platform will undergo scheduled maintenance on January 20th from 2:00 AM to 4:00 AM IST. During this time, access may be limited.",
      date: "2025-01-12",
      time: "2:15 PM",
      priority: "medium",
      pinned: false,
      author: "Technical Team",
    },
    {
      id: 3,
      title: "Certificate Distribution for Q4 2024",
      content:
        "Congratulations to all students who completed their courses in Q4 2024! Your certificates are now available for download in the Certificates section.",
      date: "2025-01-10",
      time: "9:00 AM",
      priority: "low",
      pinned: false,
      author: "Academic Team",
    },
    {
      id: 4,
      title: "Winter Break Schedule Update",
      content:
        "Please note that live classes will be suspended from December 25th to January 2nd. Self-paced learning materials will remain accessible.",
      date: "2024-12-20",
      time: "4:45 PM",
      priority: "medium",
      pinned: true,
      author: "Academic Team",
    },
  ]

  const sidebarItems = [
    { icon: BookOpen, label: "Dashboard", href: "/dashboard", active: false },
    { icon: Bell, label: "Announcements", href: "/dashboard/announcements", active: true },
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

        {/* Announcements Content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Announcements</h1>
              <p className="text-gray-600">Stay updated with the latest news and important information</p>
            </div>

            <div className="space-y-4">
              {announcements.map((announcement) => (
                <Card
                  key={announcement.id}
                  className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {announcement.pinned && <Pin className="w-4 h-4 text-blue-600 flex-shrink-0" />}
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            announcement.priority === "high"
                              ? "bg-red-100 text-red-700"
                              : announcement.priority === "medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                          }`}
                        >
                          {announcement.priority.toUpperCase()}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>
                          {announcement.date} at {announcement.time}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{announcement.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{announcement.content}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {announcement.author}</span>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Read More
                      </Button>
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
