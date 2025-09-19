import {
  Search,
  Bell,
  Calendar,
  BookOpen,
  Award,
  User,
  Settings,
  MoreHorizontal,
  ShoppingBag,
  CreditCard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PurchasesPage() {
  const sidebarItems = [
    { icon: BookOpen, label: "Dashboard", href: "/dashboard", active: false },
    { icon: Bell, label: "Announcements", href: "/dashboard/announcements", active: false },
    { icon: BookOpen, label: "My Courses", href: "/dashboard/courses", active: false },
    { icon: Calendar, label: "Calendar", href: "/dashboard/calendar", active: false },
    { icon: Award, label: "Exams", href: "/dashboard/exams", active: false },
    { icon: Award, label: "Certificates", href: "/dashboard/certificates", active: false },
    { icon: BookOpen, label: "My Purchases", href: "/dashboard/purchases", active: true },
    { icon: User, label: "Profile", href: "/dashboard/profile", active: false },
    { icon: Settings, label: "Settings", href: "/dashboard/settings", active: false },
  ]

  const purchases = [
    {
      id: 1,
      courseName: "Artificial Intelligence with Machine Learning",
      purchaseDate: "15 Jun 2025",
      amount: "₹20,000",
      status: "Active",
      paymentMethod: "Credit Card",
      transactionId: "TXN123456789",
    },
    {
      id: 2,
      courseName: "Full Stack Web Development",
      purchaseDate: "10 Jun 2025",
      amount: "₹18,000",
      status: "Active",
      paymentMethod: "UPI",
      transactionId: "TXN987654321",
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

        {/* Purchases Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              My <span className="text-green-600">Purchases</span>
            </h1>

            <div className="space-y-6">
              {purchases.map((purchase) => (
                <Card key={purchase.id} className="border border-gray-200 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-gray-900">{purchase.courseName}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          {purchase.status}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">Purchase Date: {purchase.purchaseDate}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <CreditCard className="w-4 h-4" />
                          <span className="text-sm">Payment: {purchase.paymentMethod}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-2xl font-bold text-gray-900">{purchase.amount}</div>
                        <div className="text-sm text-gray-500">Transaction ID: {purchase.transactionId}</div>
                      </div>
                      <div className="flex items-center justify-end space-x-3">
                        <Button variant="outline" className="text-gray-600 bg-transparent">
                          View Receipt
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700 text-white">Access Course</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Summary Card */}
            <Card className="mt-8 border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Purchase Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2</div>
                    <div className="text-sm text-gray-600">Total Courses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">₹38,000</div>
                    <div className="text-sm text-gray-600">Total Spent</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">2</div>
                    <div className="text-sm text-gray-600">Active Courses</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
