"use client"

import { useEffect, useRef, useState } from "react"

const AnimatedMaintenanceDemo = ({ isActive }: { isActive: boolean }) => {
  const [tasks, setTasks] = useState([
    { name: "MRI Scanner Calibration", status: "pending", progress: 0 },
    { name: "HVAC Filter Replacement", status: "pending", progress: 0 },
    { name: "Generator Inspection", status: "pending", progress: 0 },
  ])

  useEffect(() => {
    if (!isActive) return

    tasks.forEach((_, index) => {
      setTimeout(() => {
        const interval = setInterval(() => {
          setTasks((prev) =>
            prev.map((task, i) => {
              if (i === index && task.progress < 100) {
                const newProgress = Math.min(task.progress + 10, 100)
                return {
                  ...task,
                  progress: newProgress,
                  status: newProgress === 100 ? "complete" : "in-progress",
                }
              }
              return task
            }),
          )
        }, 100)

        setTimeout(() => clearInterval(interval), 1500)
      }, index * 800)
    })
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 overflow-hidden">
      <div className="absolute top-2 right-2 flex items-center gap-1">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-slate-500 font-medium">Live</span>
      </div>
      <div className="space-y-2">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-slate-700 w-32 truncate">{task.name}</span>
            <div className="flex-1 bg-slate-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  task.status === "complete" ? "bg-green-500" : "bg-red-500"
                }`}
                style={{ width: `${task.progress}%` }}
              />
            </div>
            {task.status === "complete" && <span className="text-xs text-green-600">✓</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

const AnimatedAssetDemo = ({ isActive }: { isActive: boolean }) => {
  const [assets, setAssets] = useState([
    { name: "CT Scanner", status: "operational", health: 95 },
    { name: "Ventilator #12", status: "maintenance", health: 65 },
    { name: "Infusion Pump", status: "operational", health: 88 },
  ])

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setAssets((prev) =>
        prev.map((asset) => ({
          ...asset,
          health: Math.min(100, asset.health + Math.random() * 5),
        })),
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32">
      <div className="space-y-2">
        {assets.map((asset, i) => (
          <div key={i} className="flex items-center gap-2 p-2 bg-white rounded">
            <div
              className={`w-2 h-2 rounded-full ${asset.status === "operational" ? "bg-green-500" : "bg-yellow-500"}`}
            />
            <span className="text-xs text-slate-700 flex-1">{asset.name}</span>
            <span className="text-xs font-medium">{Math.round(asset.health)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const AnimatedWorkOrderDemo = ({ isActive }: { isActive: boolean }) => {
  const [orders, setOrders] = useState([
    { id: "WO-2401", priority: "high", status: "new" },
    { id: "WO-2402", priority: "medium", status: "new" },
    { id: "WO-2403", priority: "low", status: "new" },
  ])

  useEffect(() => {
    if (!isActive) return

    orders.forEach((_, index) => {
      setTimeout(
        () => {
          setOrders((prev) => prev.map((order, i) => (i === index ? { ...order, status: "assigned" } : order)))
        },
        500 + index * 600,
      )
    })
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 overflow-hidden">
      <div className="space-y-2">
        {orders.map((order, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-2 rounded transition-all duration-500 ${
              order.status === "assigned" ? "bg-green-100" : "bg-white"
            }`}
          >
            <span className="text-xs font-mono text-slate-600">{order.id}</span>
            <div
              className={`px-2 py-0.5 rounded text-xs ${
                order.priority === "high"
                  ? "bg-red-100 text-red-700"
                  : order.priority === "medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-slate-100 text-slate-600"
              }`}
            >
              {order.priority}
            </div>
            {order.status === "assigned" && (
              <svg className="w-3 h-3 text-green-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const AnimatedComplianceDemo = ({ isActive }: { isActive: boolean }) => {
  const [standards, setStandards] = useState([
    { name: "JCI", compliant: false },
    { name: "ISO 9001", compliant: false },
    { name: "HIPAA", compliant: false },
    { name: "Safety", compliant: false },
  ])

  useEffect(() => {
    if (!isActive) return

    standards.forEach((_, index) => {
      setTimeout(
        () => {
          setStandards((prev) => prev.map((std, i) => (i === index ? { ...std, compliant: true } : std)))
        },
        400 + index * 350,
      )
    })
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32">
      <div className="grid grid-cols-2 gap-2">
        {standards.map((std, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-2 rounded transition-all duration-500 ${
              std.compliant ? "bg-green-100" : "bg-white"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                std.compliant ? "bg-green-500" : "bg-slate-300"
              }`}
            />
            <span className="text-xs text-slate-700">{std.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-center">
        <div className="text-xs text-slate-500">{standards.filter((s) => s.compliant).length}/4 verified</div>
      </div>
    </div>
  )
}

const AnimatedInventoryDemo = ({ isActive }: { isActive: boolean }) => {
  const [items, setItems] = useState([
    { name: "Filters", stock: 45, threshold: 20 },
    { name: "Batteries", stock: 12, threshold: 15 },
    { name: "Lubricants", stock: 30, threshold: 10 },
  ])

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => ({
          ...item,
          stock: Math.max(item.threshold - 5, item.stock - Math.floor(Math.random() * 3)),
        })),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32">
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-slate-700 w-16">{item.name}</span>
            <div className="flex-1 bg-slate-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  item.stock < item.threshold ? "bg-red-500" : "bg-green-500"
                }`}
                style={{ width: `${Math.min(100, (item.stock / 50) * 100)}%` }}
              />
            </div>
            <span className={`text-xs font-medium ${item.stock < item.threshold ? "text-red-600" : "text-slate-600"}`}>
              {item.stock}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const AnimatedAnalyticsDemo = ({ isActive }: { isActive: boolean }) => {
  const [data, setData] = useState([30, 45, 35, 60, 55, 70, 65])

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setData((prev) => prev.map((val) => Math.max(20, Math.min(80, val + (Math.random() - 0.5) * 20))))
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32">
      <div className="flex items-end gap-1 h-16">
        {data.map((val, i) => (
          <div
            key={i}
            className="flex-1 bg-red-500 rounded-t transition-all duration-500"
            style={{ height: `${val}%` }}
          />
        ))}
      </div>
      <div className="mt-2 text-center">
        <div className="text-xs text-slate-500">Equipment Uptime Analytics</div>
      </div>
    </div>
  )
}

const features = [
  {
    title: "Maintenance Management",
    description:
      "Comprehensive CMMS for managing all maintenance processes critical to healthcare operations. Schedule, track, and optimize your maintenance workflows.",
    demo: AnimatedMaintenanceDemo,
    size: "large",
  },
  {
    title: "Enterprise Asset Management",
    description:
      "Track all hospital assets efficiently. Monitor equipment health, lifecycle, and ensure maximum uptime for critical medical devices.",
    demo: AnimatedAssetDemo,
    size: "medium",
  },
  {
    title: "Work Order Management",
    description:
      "Create, assign, and track work orders from request to completion. Prioritize tasks and ensure nothing falls through the cracks.",
    demo: AnimatedWorkOrderDemo,
    size: "medium",
  },
  {
    title: "Compliance & Standards",
    description:
      "Meet healthcare regulations and standards through systematic management. JCI, ISO, and safety compliance tracking built-in.",
    demo: AnimatedComplianceDemo,
    size: "large",
  },
  {
    title: "Inventory Control",
    description:
      "Optimize spare parts and materials inventory. Automated reorder alerts ensure you always have critical supplies on hand.",
    demo: AnimatedInventoryDemo,
    size: "medium",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Make data-driven decisions with comprehensive analytics. Track KPIs, generate reports, and identify optimization opportunities.",
    demo: AnimatedAnalyticsDemo,
    size: "medium",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeDemo, setActiveDemo] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="features" ref={sectionRef} className="relative z-10">
      <div className="bg-white rounded-t-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div
            className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
              </svg>
              Davon CMMS Features
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-balance mb-4 sm:mb-6">
              Simplify Your{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Hospital Management
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Step into operational excellence with our comprehensive CMMS solution designed specifically for healthcare
              institutions.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group transition-all duration-1000 ${feature.size === "large" ? "md:col-span-2" : ""}`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                }}
                onMouseEnter={() => setActiveDemo(index)}
                onMouseLeave={() => setActiveDemo(null)}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-red-200">
                  <div className="mb-6">
                    <feature.demo isActive={activeDemo === index || isVisible} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
