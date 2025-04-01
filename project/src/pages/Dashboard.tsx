import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { TrendingUp, Users, ShoppingBag, CreditCard } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$54,234',
      change: '+14.5%',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Total Customers',
      value: '2,543',
      change: '+7.2%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Products Sold',
      value: '1,234',
      change: '+12.8%',
      icon: ShoppingBag,
      color: 'bg-purple-500'
    },
    {
      title: 'Avg. Order Value',
      value: '$123',
      change: '+3.4%',
      icon: CreditCard,
      color: 'bg-yellow-500'
    }
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [3000, 4500, 3500, 5000, 4800, 6000],
        borderColor: 'rgb(99, 102, 241)',
        tension: 0.4
      },
      {
        label: 'Orders',
        data: [2000, 2800, 2600, 3200, 3100, 3800],
        borderColor: 'rgb(168, 85, 247)',
        tension: 0.4
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-600 text-sm font-medium">{stat.change}</span>
              <span className="text-gray-600 text-sm ml-2">from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Revenue Overview</h2>
        <div className="h-80">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => '$' + value
                  }
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;