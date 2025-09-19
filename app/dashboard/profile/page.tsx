import {
  Search,
  Bell,
  Calendar,
  BookOpen,
  Award,
  User,
  Settings,
  MoreHorizontal,
  Camera,
  Mail,
  Phone,
  MapPin,
  Hash,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function ProfilePage() {
  const sidebarItems = [
    { icon: BookOpen, label: "Dashboard", href: "/dashboard", active: false },
    { icon: Bell, label: "Announcements", href: "/dashboard/announcements", active: false },
    { icon: BookOpen, label: "My Courses", href: "/dashboard/courses", active: false },
    { icon: Calendar, label: "Calendar", href: "/dashboard/calendar", active: false },
    { icon: Award, label: "Exams", href: "/dashboard/exams", active: false },
    { icon: Award, label: "Certificates", href: "/dashboard/certificates", active: false },
    { icon: BookOpen, label: "My Purchases", href: "/dashboard/purchases", active: false },
    { icon: User, label: "Profile", href: "/dashboard/profile", active: true },
    { icon: Settings, label: "Settings", href: "/dashboard/settings", active: false },
  ]

  const profileTabs = [
    { id: "personal", label: "Personal", active: true },
    { id: "parent", label: "Parent", active: false },
    { id: "educational", label: "Educational", active: false },
    { id: "contact", label: "Contact", active: false },
    { id: "other", label: "Other", active: false },
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

        {/* Profile Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                My <span className="text-green-600">Profile</span>
              </h1>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Settings className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Profile Info */}
              <div className="lg:col-span-1">
                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="relative inline-block mb-4">
                      <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                        <User className="w-12 h-12 text-gray-600" />
                      </div>
                      <Button
                        size="icon"
                        className="absolute bottom-0 right-0 w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Eshu Sharma</h2>

                    <div className="space-y-4 text-left">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Hash className="w-5 h-5" />
                        <span>323</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Mail className="w-5 h-5" />
                        <span className="text-sm">eshu639992101@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Calendar className="w-5 h-5" />
                        <span>25/10/2006</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Phone className="w-5 h-5" />
                        <span>+91 6399921101</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span>No address has been set</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Profile Form */}
              <div className="lg:col-span-2">
                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    {/* Tabs */}
                    <div className="flex space-x-8 mb-8 border-b border-gray-200">
                      {profileTabs.map((tab) => (
                        <button
                          key={tab.id}
                          className={`pb-4 px-1 border-b-2 font-medium ${
                            tab.active
                              ? "border-green-600 text-green-600"
                              : "border-transparent text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Personal Tab Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="student-name" className="text-sm font-medium text-gray-700">
                          Student Name <span className="text-red-500">*</span>
                        </Label>
                        <Input id="student-name" defaultValue="Eshu Sharma" className="bg-gray-50 border-gray-200" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                          Username <span className="text-red-500">*</span>
                        </Label>
                        <Input id="username" defaultValue="Eshu3136703" className="bg-gray-50 border-gray-200" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dob" className="text-sm font-medium text-gray-700">
                          Date of Birth
                        </Label>
                        <Input id="dob" defaultValue="25-10-2006" className="bg-gray-50 border-gray-200" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gender" className="text-sm font-medium text-gray-700">
                          Gender
                        </Label>
                        <Select defaultValue="male">
                          <SelectTrigger className="bg-gray-50 border-gray-200">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="religion" className="text-sm font-medium text-gray-700">
                          Religion
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-gray-50 border-gray-200">
                            <SelectValue placeholder="Select Religion" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hinduism">Hinduism</SelectItem>
                            <SelectItem value="islam">Islam</SelectItem>
                            <SelectItem value="christianity">Christianity</SelectItem>
                            <SelectItem value="sikhism">Sikhism</SelectItem>
                            <SelectItem value="buddhism">Buddhism</SelectItem>
                            <SelectItem value="jainism">Jainism</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
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
