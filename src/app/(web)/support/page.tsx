import {
  Wrench,
  Factory,
  LifeBuoy,
  Settings,
  ShieldCheck,
  Package,
  SatelliteDish,
  Users,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  const supportFeatures = [
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "Factory-Direct Support",
      description:
        "As a manufacturer, we ensure original components, custom solutions, and fast issue resolution.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Highly Experienced Engineers",
      description:
        "Our skilled team provides professional support, troubleshooting, and maintenance.",
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Full Installation & Setup Assistance",
      description:
        "From delivery to deployment, we guide you through every step for a seamless experience.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Preventive Maintenance & Repairs",
      description:
        "We offer routine servicing, on-site inspections, and fast repair services to minimize downtime.",
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "Genuine Spare Parts Availability",
      description:
        "Direct from our factory, ensuring longevity and optimal performance.",
    },
    {
      icon: <SatelliteDish className="w-8 h-8 text-primary" />,
      title: "Remote & On-Site Technical Support",
      description:
        "Quick diagnostics and expert guidance whenever and wherever you need it.",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      title: "Software Updates & System Training",
      description:
        "Keep your systems running smoothly with the latest features and operational training.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Warranty & Extended Service Plans",
      description:
        "Flexible service packages to ensure long-term protection for your investment.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-16 mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Dedicated After-Sales Support
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          At LumeView, we go beyond just delivering high-quality products—we
          ensure long-term reliability with our expert support team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
        {supportFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            {feature.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-900">
          We're Here to Help!
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Reach out for technical assistance, spare parts, or system upgrades.
        </p>
        <Link href="/contact_us">
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all">
            Contact Support
          </button>
        </Link>
      </div>
    </div>
  );
}
