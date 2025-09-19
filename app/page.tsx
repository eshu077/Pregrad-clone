"use client"

import { Search, ChevronDown, Star, Clock, Users, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [openFilters, setOpenFilters] = useState<string[]>([])
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [] as string[],
    courseLevel: [] as string[],
    duration: [] as string[],
    rating: [] as string[],
  })

  const toggleFilter = (filterName: string) => {
    setOpenFilters((prev) => (prev.includes(filterName) ? prev.filter((f) => f !== filterName) : [...prev, filterName]))
  }

  const handleFilterChange = (filterType: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((v) => v !== value)
        : [...prev[filterType], value],
    }))
  }

  const courses = [
    // Professional Pro courses
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
    },
    // Pre-Graduation Program courses
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
    },
    // Self Paced Program courses
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
    },
  ]

  const categories = [
    "All",
    "Professional Pro",
    "Pre-Graduation Program",
    "Mentorship Program",
    "Bootcamp",
    "Workshop",
    "Self Paced Program",
  ]

  const getFilteredCourses = () => {
    if (activeCategory === "All") {
      return courses
    }
    return courses.filter((course) => course.category === activeCategory)
  }

  const filteredCourses = getFilteredCourses()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-slate-800 text-white px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Pregrad</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors cursor-pointer bg-slate-700/50"
          >
            <span className="text-white">My Account</span>
            <ChevronDown className="w-4 h-4 text-white" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-800 text-white px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-green-500 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-balance text-white">Explore Courses</h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Authentic and high quality courses, specially curated by experienced instructors for deep study. Transform
              your career with industry-relevant skills.
            </p>

            {/* Search Bar */}
            <div className="flex max-w-2xl mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search for courses, skills, or technologies..."
                  className="pl-12 bg-white/10 backdrop-blur-sm text-white placeholder:text-slate-400 border-white/20 rounded-r-none h-14 text-lg focus:bg-white/20 transition-all"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-l-none h-14 text-lg font-semibold shadow-lg border-0">
                Search
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm bg-slate-700/30 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-white font-medium">15,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-white font-medium">50+ Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-white font-medium">95% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Navigation */}
        <nav className="mb-12">
          <div className="flex space-x-8 border-b border-slate-200 bg-white rounded-t-lg px-6 py-2 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-4 px-2 text-sm font-medium border-b-2 transition-all hover:text-blue-600 ${
                  activeCategory === category ? "border-blue-600 text-blue-600" : "border-transparent text-slate-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-72 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-xl mb-6 text-slate-800">FILTERS</h3>

              <div className="space-y-6">
                <div>
                  <button
                    onClick={() => toggleFilter("priceRange")}
                    className="flex items-center justify-between w-full text-left font-semibold py-3 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    Price Range
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openFilters.includes("priceRange") ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFilters.includes("priceRange") && (
                    <div className="mt-3 space-y-3">
                      {["Free", "Under ₹10,000", "₹10,000 - ₹50,000", "₹50,000 - ₹1,00,000", "Above ₹1,00,000"].map(
                        (range) => (
                          <label key={range} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedFilters.priceRange.includes(range)}
                              onChange={() => handleFilterChange("priceRange", range)}
                              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-slate-600">{range}</span>
                          </label>
                        ),
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => toggleFilter("courseLevel")}
                    className="flex items-center justify-between w-full text-left font-semibold py-3 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    Course Level
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openFilters.includes("courseLevel") ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFilters.includes("courseLevel") && (
                    <div className="mt-3 space-y-3">
                      {["Beginner", "Intermediate", "Advanced", "Expert"].map((level) => (
                        <label key={level} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.courseLevel.includes(level)}
                            onChange={() => handleFilterChange("courseLevel", level)}
                            className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-slate-600">{level}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => toggleFilter("duration")}
                    className="flex items-center justify-between w-full text-left font-semibold py-3 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    Duration
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openFilters.includes("duration") ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFilters.includes("duration") && (
                    <div className="mt-3 space-y-3">
                      {["Self-paced", "1-4 weeks", "1-3 months", "3-6 months", "6+ months"].map((duration) => (
                        <label key={duration} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.duration.includes(duration)}
                            onChange={() => handleFilterChange("duration", duration)}
                            className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-slate-600">{duration}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => toggleFilter("rating")}
                    className="flex items-center justify-between w-full text-left font-semibold py-3 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    Rating
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openFilters.includes("rating") ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFilters.includes("rating") && (
                    <div className="mt-3 space-y-3">
                      {["4.5+ stars", "4.0+ stars", "3.5+ stars", "3.0+ stars"].map((rating) => (
                        <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.rating.includes(rating)}
                            onChange={() => handleFilterChange("rating", rating)}
                            className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-slate-600 flex items-center">
                            {rating}
                            <Star className="w-3 h-3 ml-1 text-yellow-400 fill-current" />
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Course Grid */}
          <div className="flex-1">
            {filteredCourses.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-700 mb-2">No Results Found</h3>
                <p className="text-slate-500 max-w-md">
                  We couldn't find any courses in the {activeCategory} category. Try exploring other categories or check
                  back later for new courses.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                  >
                    <div className="relative group">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div
                        className={`absolute top-3 left-3 ${course.badgeColor} text-white text-xs px-3 py-1 font-semibold shadow-lg rounded-full`}
                      >
                        {course.badge}
                      </div>
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {course.level}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-3 leading-tight text-slate-800 hover:text-blue-600 transition-colors">
                        {course.title}
                      </h3>

                      <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-slate-800">{course.price}</span>
                          {course.originalPrice && (
                            <>
                              <span className="text-slate-500 line-through text-sm">{course.originalPrice}</span>
                              <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded-full">
                                {course.discount}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {course.rating && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-slate-800">{course.rating}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(course.rating!)
                                      ? "text-yellow-400 fill-current"
                                      : i < course.rating!
                                        ? "text-yellow-400 fill-current opacity-50"
                                        : "text-slate-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-slate-500 text-sm">({course.reviews})</span>
                          </div>
                          <Link href={`/course/${course.id}`}>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                              Enroll Now
                            </Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
